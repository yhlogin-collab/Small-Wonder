/* ==========================================================================
   Small Wonder Puppet Theater — shared site JS
   Mobile menu · testimonial carousel · low-effort booking form
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Mobile menu toggle ---------- */
  var ham = document.getElementById('ham');
  var menu = document.getElementById('menu');
  if (ham && menu) {
    ham.addEventListener('click', function () { menu.classList.toggle('open'); });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') menu.classList.remove('open');
    });
  }

  /* ---------- Testimonial carousel ---------- */
  var track = document.getElementById('tTrack');
  if (track) {
    var total = track.children.length;
    var dotsWrap = document.getElementById('tDots');
    var i = 0, timer;
    for (var d = 0; d < total; d++) {
      var b = document.createElement('button');
      b.setAttribute('aria-label', 'Show testimonial ' + (d + 1));
      (function (idx) { b.addEventListener('click', function () { go(idx); reset(); }); })(d);
      dotsWrap.appendChild(b);
    }
    var dots = dotsWrap.children;
    var go = function (n) {
      i = (n + total) % total;
      track.style.transform = 'translateX(' + (-i * 100) + '%)';
      for (var k = 0; k < total; k++) { dots[k].className = (k === i) ? 'active' : ''; }
    };
    var reset = function () { clearInterval(timer); timer = setInterval(function () { go(i + 1); }, 5000); };
    document.getElementById('tNext').addEventListener('click', function () { go(i + 1); reset(); });
    document.getElementById('tPrev').addEventListener('click', function () { go(i - 1); reset(); });
    var car = document.getElementById('tCarousel');
    car.addEventListener('mouseenter', function () { clearInterval(timer); });
    car.addEventListener('mouseleave', reset);
    go(0); reset();
  }

  /* ---------- Booking form (low-effort inquiry) ----------
     Any <form data-book> is enhanced here. It submits to Web3Forms
     (works on any static host, incl. Cloudflare Pages) and, on success,
     shows the instant "we're holding your date" confirmation without a
     page reload. If the submit fails (e.g. the access key isn't set yet)
     it falls back to a call/text prompt so the lead is never lost.
     Pre-selects the "event type" from ?segment=... or the form's
     data-segment attribute so audience pages arrive pre-tagged.        */
  document.querySelectorAll('form[data-book]').forEach(function (form) {
    var params = new URLSearchParams(window.location.search);
    var seg = params.get('segment') || form.getAttribute('data-segment');
    var typeSelect = form.querySelector('select[name="Event type"]');
    if (seg && typeSelect) {
      for (var o = 0; o < typeSelect.options.length; o++) {
        if (typeSelect.options[o].value.toLowerCase().indexOf(seg.toLowerCase()) > -1) {
          typeSelect.selectedIndex = o;
          break;
        }
      }
    }

    var wrap = form.closest('.form-wrap') || form.parentNode;
    var success = wrap.querySelector('.book-success');
    var errorBox = form.querySelector('.form-error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errorBox) errorBox.style.display = 'none';
      var btn = form.querySelector('[type="submit"]');
      var label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      var payload = {};
      new FormData(form).forEach(function (v, k) { payload[k] = v; });

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.success) {
            form.style.display = 'none';
            if (success) {
              success.classList.add('show');
              success.setAttribute('tabindex', '-1');
              success.focus();
              success.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          } else {
            throw new Error((res && res.message) || 'Submission failed');
          }
        })
        .catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = label; }
          if (errorBox) errorBox.style.display = 'block';
        });
    });
  });
})();
