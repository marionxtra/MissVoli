document.addEventListener('DOMContentLoaded', function () {
  /* Bandeau de confirmation d'envoi */
  var params = new URLSearchParams(window.location.search);
  var envoi = params.get('envoi');
  var bannerHost = document.getElementById('mv-envoi-banner');
  if (bannerHost && envoi) {
    var ok = envoi === 'ok';
    bannerHost.className = 'mv-banner ' + (ok ? 'mv-banner--ok' : 'mv-banner--error');
    bannerHost.innerHTML = ok
      ? '<strong class="mv-banner__title">C\u2019est dans la bo\u00eete !</strong><p class="mv-banner__text">Votre message est bien arriv\u00e9. Je reviens vers vous tr\u00e8s vite !</p>'
      : '<strong class="mv-banner__title">Oups, quelque chose n\u2019a pas fonctionn\u00e9.</strong><p class="mv-banner__text">Votre message n\u2019a pas pu \u00eatre envoy\u00e9. Pour aller plus vite, contactez-moi directement sur WhatsApp, sur le bouton en bas de votre \u00e9cran.</p>';
    bannerHost.hidden = false;
  }

  /* Menu burger */
  var burger = document.getElementById('mv-burger');
  var nav = document.getElementById('mv-nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('mv-nav--open', !open);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('mv-nav--open');
      });
    });
  }

  /* Accordéon FAQ */
  document.querySelectorAll('.mv-faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      var wasOpen = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.mv-faq-q').forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        var p = document.getElementById(b.getAttribute('aria-controls'));
        if (p) p.style.maxHeight = null;
      });
      if (!wasOpen) {
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* Champs conditionnels du formulaire */
  var form = document.getElementById('mv-contact-form');
  if (form) {
    var step2Inputs = form.querySelectorAll('input[name="pour"]');
    var conditionals = form.querySelectorAll('.mv-conditional');
    step2Inputs.forEach(function (input) {
      input.addEventListener('change', function () {
        conditionals.forEach(function (c) { c.classList.remove('mv-conditional--visible'); });
        var target = document.getElementById('cond-' + input.value);
        if (target) target.classList.add('mv-conditional--visible');
      });
    });

    var step1Inputs = form.querySelectorAll('input[name="intention"]');
    var submitBtn = document.getElementById('mv-submit');
    var labels = { essai: "Réserver ma séance d'essai", question: 'Envoyer ma question' };
    step1Inputs.forEach(function (input) {
      input.addEventListener('change', function () {
        submitBtn.textContent = labels[input.value] || 'Envoyer ma demande';
      });
    });

    /* Validation à la sortie de champ */
    var required = form.querySelectorAll('[required]');
    function validateField(field) {
      var wrap = field.closest('.mv-field');
      if (!wrap) return true;
      var valid = field.checkValidity();
      wrap.classList.toggle('mv-field--invalid', !valid);
      field.setAttribute('aria-invalid', String(!valid));
      return valid;
    }
    required.forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
    });
    form.addEventListener('submit', function (e) {
      var firstInvalid = null;
      required.forEach(function (field) {
        if (!validateField(field) && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        e.preventDefault();
        firstInvalid.focus();
        firstInvalid.scrollIntoView({ block: 'center' });
      } else {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi…';
      }
    });
  }

  /* Bouton WhatsApp flottant */
  var wa = document.getElementById('mv-whatsapp');
  if (wa) {
    var shown = false;
    window.addEventListener('scroll', function () {
      if (!shown && window.scrollY > 400) {
        shown = true;
        wa.style.display = 'block';
        requestAnimationFrame(function () { wa.classList.add('mv-whatsapp--visible'); });
        setTimeout(showBubble, 8000);
      }
    });
    var bubbleShown = false;
    function showBubble() {
      if (bubbleShown) return;
      bubbleShown = true;
      var bubble = document.getElementById('mv-whatsapp-bubble');
      if (!bubble) return;
      bubble.hidden = false;
      var timer = setTimeout(function () { bubble.hidden = true; }, 6000);
      document.getElementById('mv-whatsapp-close').addEventListener('click', function () {
        clearTimeout(timer);
        bubble.hidden = true;
      });
    }
  }
});
