/* Katlech — minimal progressive enhancement. No dependencies. */

(function () {
  "use strict";

  /* Mobile navigation ----------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });

    /* Close on Escape, returning focus to the button so keyboard users
       don't lose their place. */
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.getAttribute("data-open") === "true") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });

    /* Close after following an in-page link on mobile. */
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Enquiry form validation ------------------------------------------------
     Inline errors tied to each field with aria-describedby, plus a focusable
     summary at the top of the form. Validation runs on submit, and thereafter
     re-checks a field as it is corrected — never mid-keystroke on a first
     attempt, which punishes people while they are still typing. */
  var form = document.getElementById("enquiry-form");

  if (form) {
    var summary = document.getElementById("error-summary");
    var summaryList = document.getElementById("error-summary-list");
    var submitted = false;

    var RULES = [
      { id: "name", message: "Enter your name" },
      { id: "email", message: "Enter an email address" },
      { id: "email", message: "Enter an email address in the format name@example.com",
        test: function (v) { return v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); } },
      { id: "message", message: "Enter a message" }
    ];

    function problems() {
      var found = [];
      var seen = {};

      RULES.forEach(function (rule) {
        if (seen[rule.id]) { return; }
        var field = document.getElementById(rule.id);
        var value = field.value.trim();
        var ok = rule.test ? rule.test(value) : value !== "";
        if (!ok) {
          seen[rule.id] = true;
          found.push({ id: rule.id, message: rule.message, field: field });
        }
      });

      return found;
    }

    function paint(found) {
      var byId = {};
      found.forEach(function (p) { byId[p.id] = p; });

      ["name", "email", "message"].forEach(function (id) {
        var field = document.getElementById(id);
        var error = document.getElementById(id + "-error");
        var problem = byId[id];

        if (problem) {
          field.setAttribute("aria-invalid", "true");
          error.textContent = problem.message;
          error.hidden = false;
        } else {
          field.removeAttribute("aria-invalid");
          error.textContent = "";
          error.hidden = true;
        }
      });

      summaryList.innerHTML = "";
      found.forEach(function (p) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = "#" + p.id;
        link.textContent = p.message;
        link.addEventListener("click", function (event) {
          event.preventDefault();
          p.field.focus();
        });
        item.appendChild(link);
        summaryList.appendChild(item);
      });

      summary.hidden = found.length === 0;
    }

    form.addEventListener("submit", function (event) {
      var found = problems();
      submitted = true;
      paint(found);

      if (found.length) {
        event.preventDefault();
        summary.focus();
      }
    });

    form.addEventListener("input", function (event) {
      if (submitted && event.target.id) { paint(problems()); }
    });
  }

  /* Footer year ----------------------------------------------------------- */
  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
