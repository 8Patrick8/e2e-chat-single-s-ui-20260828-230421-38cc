(function () {
  "use strict";

  var betragInput = document.getElementById("betrag");
  var prozentInput = document.getElementById("prozent");
  var personenInput = document.getElementById("personen");

  var trinkgeldOutput = document.getElementById("trinkgeld");
  var gesamtOutput = document.getElementById("gesamt");
  var proPersonOutput = document.getElementById("pro-person");
  var personenHint = document.getElementById("personen-hint");

  function toNumber(raw) {
    if (raw === null || raw === undefined) {
      return 0;
    }
    var text = String(raw).trim();
    if (text === "") {
      return 0;
    }
    var num = Number.parseFloat(text);
    return Number.isFinite(num) ? num : 0;
  }

  function formatMoney(value) {
    return value.toFixed(2).replace(".", ",") + " \u20AC";
  }

  function calculate() {
    var betrag = toNumber(betragInput.value);
    var prozent = toNumber(prozentInput.value);
    var personen = toNumber(personenInput.value);

    var trinkgeld = betrag * prozent / 100;
    var gesamt = betrag + trinkgeld;

    trinkgeldOutput.textContent = formatMoney(trinkgeld);
    gesamtOutput.textContent = formatMoney(gesamt);

    if (personen < 1) {
      proPersonOutput.textContent = "\u2013";
      personenInput.classList.add("invalid");
      personenInput.setAttribute("aria-invalid", "true");
      personenHint.hidden = false;
    } else {
      proPersonOutput.textContent = formatMoney(gesamt / personen);
      personenInput.classList.remove("invalid");
      personenInput.setAttribute("aria-invalid", "false");
      personenHint.hidden = true;
    }
  }

  [betragInput, prozentInput, personenInput].forEach(function (input) {
    input.addEventListener("input", calculate);
  });

  calculate();
})();
