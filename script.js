// Global variables
let currentSlideIndex = 0;
let slides = [];
let responses = [];
let taskStartTime = 0;

document.addEventListener("DOMContentLoaded", () => {
  // Button event listeners for static slides
  document.getElementById("intro-next").addEventListener("click", nextSlide);
  document.getElementById("tutorial-next-2").addEventListener("click", nextSlide);
  document.getElementById("tutorial-next-3").addEventListener("click", nextSlide);
  document.getElementById("tutorial-next-4").addEventListener("click", nextSlide);
  document.getElementById("tutorial-next-5").addEventListener("click", nextSlide);
  document.getElementById("tutorial-next-6").addEventListener("click", nextSlide);
  document.getElementById("tutorial-next-7").addEventListener("click", nextSlide);
  document.getElementById("scenario-next").addEventListener("click", nextSlide);
  document.getElementById("example-next").addEventListener("click", nextSlide);
  document.getElementById("start-tasks").addEventListener("click", nextSlide);

  // Back button event listeners
  document.getElementById("tutorial-back-2").addEventListener("click", prevSlide);
  document.getElementById("tutorial-back-3").addEventListener("click", prevSlide);
  document.getElementById("tutorial-back-4").addEventListener("click", prevSlide);
  document.getElementById("tutorial-back-5").addEventListener("click", prevSlide);
  document.getElementById("tutorial-back-6").addEventListener("click", prevSlide);
  document.getElementById("tutorial-back-7").addEventListener("click", prevSlide);
  document.getElementById("scenario-back").addEventListener("click", prevSlide);
  document.getElementById("example-back").addEventListener("click", prevSlide);
  document.getElementById("instr-back").addEventListener("click", prevSlide);

  // SpeechSynthesis example
  document.getElementById("play-explanation").addEventListener("click", () => {
    const explanationText = "This example shows how each mandate attribute can influence your preference. Consider scope, threshold, coverage, incentives, exemptions, and cost. Decide if you'd keep the same preference or choose no mandate at all.";
    const utterance = new SpeechSynthesisUtterance(explanationText);
    const voices = speechSynthesis.getVoices();
    const auVoice = voices.find(v => v.lang === "en-AU");
    if (auVoice) {
      utterance.voice = auVoice;
    }
    speechSynthesis.speak(utterance);
  });

  // Create dynamic tasks
  generateTaskSlides();

  // Gather all slides
  slides = Array.from(document.querySelectorAll(".slide"));
  showSlide(currentSlideIndex);
});

// Show the given slide index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  // If it's a dynamic task slide, record start time
  if (slides[index].classList.contains("task-slide")) {
    taskStartTime = Date.now();
  }
}

function nextSlide() {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
  }
}

// Generate the 9 scenario-based tasks
function generateTaskSlides() {
  const block1 = {
    block: 1,
    scenarios: [
      {
        scenario: 1,
        mandateA: {
          scope: "High-risk occupations only",
          threshold: "50 cases per 100k, 10% increase",
          coverage: "Low vaccine coverage (50%)",
          incentives: "No incentives",
          exemption: "Medical exemptions only",
          cost: "No opportunity cost (A$0)"
        },
        mandateB: {
          scope: "All occupations and public spaces",
          threshold: "100 cases per 100k, 15% increase",
          coverage: "Moderate vaccine coverage (70%)",
          incentives: "Paid time off for vaccination (1–3 days)",
          exemption: "Medical and religious exemptions",
          cost: "Moderate opportunity cost (A$20)"
        }
      },
      {
        scenario: 2,
        mandateA: {
          scope: "All occupations and public spaces",
          threshold: "50 cases per 100k, 10% increase",
          coverage: "High vaccine coverage (90%)",
          incentives: "Government subsidies/discounts",
          exemption: "Medical, religious, and broad personal belief",
          cost: "High opportunity cost (A$50)"
        },
        mandateB: {
          scope: "High-risk occupations only",
          threshold: "200 cases per 100k, 20% increase",
          coverage: "Low vaccine coverage (50%)",
          incentives: "No incentives",
          exemption: "Medical exemptions only",
          cost: "Low opportunity cost (A$5)"
        }
      },
      {
        scenario: 3,
        mandateA: {
          scope: "All occupations and public spaces",
          threshold: "50 cases per 100k, 10% increase",
          coverage: "Low vaccine coverage (50%)",
          incentives: "Paid time off for vaccination (1–3 days)",
          exemption: "Medical exemptions only",
          cost: "Low opportunity cost (A$5)"
        },
        mandateB: {
          scope: "All occupations and public spaces",
          threshold: "50 cases per 100k, 10% increase",
          coverage: "High vaccine coverage (90%)",
          incentives: "No incentives",
          exemption: "Medical and religious exemptions",
          cost: "High opportunity cost (A$50)"
        }
      },
      {
        scenario: 4,
        mandateA: {
          scope: "High-risk occupations only",
          threshold: "100 cases per 100k, 15% increase",
          coverage: "Moderate vaccine coverage (70%)",
          incentives: "Government subsidies/discounts",
          exemption: "Medical exemptions only",
          cost: "No opportunity cost (A$0)"
        },
        mandateB: {
          scope: "All occupations and public spaces",
          threshold: "200 cases per 100k, 20% increase",
          coverage: "Low vaccine coverage (50%)",
          incentives: "Paid time off for vaccination (1–3 days)",
          exemption: "Medical, religious, and broad personal belief",
          cost: "Moderate opportunity cost (A$20)"
        }
      },
      {
        scenario: 5,
        mandateA: {
          scope: "All occupations and public spaces",
          threshold: "200 cases per 100k, 20% increase",
          coverage: "High vaccine coverage (90%)",
          incentives: "No incentives",
          exemption: "Medical, religious, and broad personal belief",
          cost: "No opportunity cost (A$0)"
        },
        mandateB: {
          scope: "High-risk occupations only",
          threshold: "50 cases per 100k, 10% increase",
          coverage: "Moderate vaccine coverage (70%)",
          incentives: "Government subsidies/discounts",
          exemption: "Medical and religious exemptions",
          cost: "Low opportunity cost (A$5)"
        }
      },
      {
        scenario: 6,
        mandateA: {
          scope: "High-risk occupations only",
          threshold: "200 cases per 100k, 20% increase",
          coverage: "High vaccine coverage (90%)",
          incentives: "Paid time off for vaccination (1–3 days)",
          exemption: "Medical and religious exemptions",
          cost: "Low opportunity cost (A$5)"
        },
        mandateB: {
          scope: "All occupations and public spaces",
          threshold: "100 cases per 100k, 15% increase",
          coverage: "Low vaccine coverage (50%)",
          incentives: "No incentives",
          exemption: "Medical exemptions only",
          cost: "High opportunity cost (A$50)"
        }
      },
      {
        scenario: 7,
        mandateA: {
          scope: "All occupations and public spaces",
          threshold: "100 cases per 100k, 15% increase",
          coverage: "High vaccine coverage (90%)",
          incentives: "Government subsidies/discounts",
          exemption: "Medical exemptions only",
          cost: "Low opportunity cost (A$5)"
        },
        mandateB: {
          scope: "High-risk occupations only",
          threshold: "50 cases per 100k, 10% increase",
          coverage: "Moderate vaccine coverage (70%)",
          incentives: "Paid time off for vaccination (1–3 days)",
          exemption: "Medical, religious, and broad personal belief",
          cost: "Moderate opportunity cost (A$20)"
        }
      },
      {
        scenario: 8,
        mandateA: {
          scope: "High-risk occupations only",
          threshold: "50 cases per 100k, 10% increase",
          coverage: "Low vaccine coverage (50%)",
          incentives: "No incentives",
          exemption: "Medical exemptions only",
          cost: "No opportunity cost (A$0)"
        },
        mandateB: {
          scope: "All occupations and public spaces",
          threshold: "200 cases per 100k, 20% increase",
          coverage: "Moderate vaccine coverage (70%)",
          incentives: "Paid time off for vaccination (1–3 days)",
          exemption: "Medical, religious, and broad personal belief",
          cost: "High opportunity cost (A$50)"
        }
      },
      {
        scenario: 9,
        mandateA: {
          scope: "High-risk occupations only",
          threshold: "50 cases per 100k, 10% increase",
          coverage: "Low vaccine coverage (50%)",
          incentives: "Paid time off for vaccination (1–3 days)",
          exemption: "Medical exemptions only",
          cost: "Low opportunity cost (A$5)"
        },
        mandateB: {
          scope: "High-risk occupations only",
          threshold: "50 cases per 100k, 10% increase",
          coverage: "Moderate vaccine coverage (70%)",
          incentives: "No incentives",
          exemption: "Medical, religious, and broad personal belief",
          cost: "No opportunity cost (A$0)"
        }
      }
    ]
  };

  const scenarios = block1.scenarios;
  const taskContainer = document.getElementById("task-slides");

  scenarios.forEach((scenarioData, idx) => {
    const taskSlide = document.createElement("div");
    taskSlide.className = "slide task-slide";
    taskSlide.id = `task-slide-${scenarioData.scenario}`;

    const title = document.createElement("h2");
    title.textContent = `Scenario ${scenarioData.scenario}`;
    taskSlide.appendChild(title);

    // Create a comparison table
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["Attribute", "Vaccine Mandate A", "Vaccine Mandate B"].forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    const attributes = ["scope", "threshold", "coverage", "incentives", "exemption", "cost"];
    attributes.forEach(attr => {
      const row = document.createElement("tr");
      const tdAttr = document.createElement("td");
      tdAttr.innerHTML = `${capitalize(attr)} <span class="info-icon" data-tooltip="${getAttributeDescription(attr)}">ℹ️</span>`;
      row.appendChild(tdAttr);

      const tdA = document.createElement("td");
      tdA.innerHTML = getIcon(attr, scenarioData.mandateA[attr]) + " " + scenarioData.mandateA[attr];
      row.appendChild(tdA);

      const tdB = document.createElement("td");
      tdB.innerHTML = getIcon(attr, scenarioData.mandateB[attr]) + " " + scenarioData.mandateB[attr];
      row.appendChild(tdB);

      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    taskSlide.appendChild(table);

    // A form for user choices
    const form = document.createElement("form");
    form.id = `form-task-${scenarioData.scenario}`;
    form.innerHTML = `
      <div class="questions">
        <fieldset>
          <legend>Which option do you prefer?</legend>
          <label>
            <input type="radio" name="choice" value="A" required>
            I prefer Vaccine Mandate A.
          </label>
          <label>
            <input type="radio" name="choice" value="B" required>
            I prefer Vaccine Mandate B.
          </label>
        </fieldset>
        <fieldset>
          <legend>If “no mandate” was an option, would you still keep your choice?</legend>
          <label>
            <input type="radio" name="not_choose" value="same" required>
            Yes, I'd keep my chosen mandate.
          </label>
          <label>
            <input type="radio" name="not_choose" value="change" required>
            No, I'd choose no mandate at all.
          </label>
        </fieldset>
      </div>
    `;
    taskSlide.appendChild(form);

    // Navigation for dynamic slides
    const navDiv = document.createElement("div");
    navDiv.className = "navigation-buttons";

    const backBtn = document.createElement("button");
    backBtn.className = "back-button";
    backBtn.textContent = "Back";
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      prevSlide();
    });
    navDiv.appendChild(backBtn);

    const nextBtn = document.createElement("button");
    nextBtn.className = "next-button";
    nextBtn.textContent = (idx === scenarios.length - 1) ? "Submit" : "Next";
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const responseTime = Date.now() - taskStartTime;
      saveResponse(form, responseTime);
      nextSlide();
      if (idx === scenarios.length - 1) {
        setTimeout(submitResponses, 300);
      }
    });
    navDiv.appendChild(nextBtn);

    taskSlide.appendChild(navDiv);
    taskContainer.appendChild(taskSlide);
  });
}

// Save individual task response
function saveResponse(form, responseTime) {
  const formData = new FormData(form);
  const choice = formData.get("choice");
  const notChoose = formData.get("not_choose");
  responses.push({
    scenario: form.id.split("-").pop(),
    choice: choice,
    not_choose: notChoose,
    responseTime: responseTime
  });
}

// Submit responses via EmailJS
function submitResponses() {
  let emailContent = "Survey Responses:\n\n";
  responses.forEach(resp => {
    emailContent += `Scenario: ${resp.scenario}\n`;
    emailContent += `Preferred Mandate: ${resp.choice}\n`;
    emailContent += `Opt-out Choice: ${resp.not_choose}\n`;
    emailContent += `Response Time (ms): ${resp.responseTime}\n\n`;
  });

  const templateParams = {
    to_email: "mesfin.genie@newcastle.edu.au", // Replace if desired
    subject: "Vaccine Mandate Survey Responses",
    message: emailContent,
    timestamp: new Date().toLocaleString()
  };

  // Use your actual Service ID and Template ID from EmailJS
  emailjs.send("service_zp0gsia", "template_2qu14s5", templateParams)
    .then(() => {
      showThankYou();
      alert("Your responses have been sent! Check your inbox for confirmation.");
    }, (error) => {
      console.error("Submission failed:", error);
      alert("Error submitting your responses. Check your EmailJS settings or your internet connection and try again.");
    });
}

// Display the final thank-you message
function showThankYou() {
  const container = document.getElementById("survey-container");
  container.innerHTML = `
    <div class="message">
      <h2>Thank You!</h2>
      <p>Your responses have been submitted and emailed to the research team.</p>
      <p>We truly appreciate your participation.</p>
    </div>
  `;
}

// Utility to capitalize attribute labels in the table
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Short descriptions for tooltips
function getAttributeDescription(attr) {
  const desc = {
    scope: "Defines who must be vaccinated (e.g. only high-risk roles or everyone).",
    threshold: "Specifies the infection rate that triggers the mandate. Earlier triggers intervene sooner.",
    coverage: "Vaccination percentage needed to end the mandate. Higher coverage = stricter requirement.",
    incentives: "Financial or time-off perks to encourage vaccination.",
    exemption: "Acceptable reasons to refuse vaccination (medical, religious, or personal belief).",
    cost: "Any out-of-pocket or time cost for getting vaccinated."
  };
  return desc[attr] || "";
}

// Provide icons based on attribute values
function getIcon(attr, value) {
  if (attr === "scope") {
    return value.includes("High-risk")
      ? `<span class="icon-tooltip" title="High-risk occupations only">⚠️</span>`
      : `<span class="icon-tooltip" title="All occupations and public spaces">🌐</span>`;
  }
  if (attr === "threshold") {
    if (value.includes("50 cases")) return `<span class="icon-tooltip" title="Early trigger">🟢</span>`;
    if (value.includes("100 cases")) return `<span class="icon-tooltip" title="Moderate trigger">🟠</span>`;
    return `<span class="icon-tooltip" title="Late trigger">🔴</span>`;
  }
  if (attr === "coverage") {
    let percentage = 0;
    if (value.includes("50%")) percentage = 50;
    if (value.includes("70%")) percentage = 70;
    if (value.includes("90%")) percentage = 90;
    return `
      <span class="icon-tooltip" title="${value}">
        <svg class="progress-svg" viewBox="0 0 30 6">
          <rect width="30" height="6" fill="#ddd"/>
          <rect width="${(30 * percentage) / 100}" height="6" fill="#4caf50"/>
        </svg>
      </span>`;
  }
  if (attr === "incentives") {
    if (value.includes("No incentives")) {
      return `<span class="icon-tooltip" title="No extra perks">🚫</span>`;
    } else if (value.includes("time off")) {
      return `<span class="icon-tooltip" title="Paid time off">🕒</span>`;
    } else {
      return `<span class="icon-tooltip" title="Financial rewards">💸</span>`;
    }
  }
  if (attr === "exemption") {
    if (value.includes("Medical exemptions only")) {
      return `<span class="icon-tooltip" title="Strictly medical reasons">🩺</span>`;
    }
    if (value.includes("broad personal belief")) {
      return `<span class="icon-tooltip" title="Medical, religious, and personal reasons">🩺🙏💡</span>`;
    }
    if (value.includes("religious")) {
      return `<span class="icon-tooltip" title="Medical and religious">🩺🙏</span>`;
    }
  }
  if (attr === "cost") {
    if (value.includes("A$0")) return `<span class="icon-tooltip" title="No cost">$0</span>`;
    if (value.includes("A$5")) return `<span class="icon-tooltip" title="Low cost">$</span>`;
    if (value.includes("A$20")) return `<span class="icon-tooltip" title="Moderate cost">$$</span>`;
    if (value.includes("A$50")) return `<span class="icon-tooltip" title="High cost">$$$</span>`;
  }
  return "";
}
