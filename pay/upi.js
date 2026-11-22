/* BAIO · UPI payments (second option next to the Razorpay links).
   - Every Razorpay Pay button gets a small "Or pay by UPI" button under it (same amount).
   - Any link to a "upi://pay?..." address on a page that loads this file opens a payment sheet with:
   - Narendra Sir's UPI QR code (scan it from another phone, or save it and pick it in your UPI app),
   - a "Pay ₹X with UPI app" button (opens PhonePe / Google Pay / Paytm / BHIM with the amount filled in),
   - the UPI ID with a Copy button,
   - a WhatsApp button to send the payment screenshot and get the unlock code.
   Pages can also call BAIO_UPI.open({amount: 1999, note: 'PU-I Ch 4 Premium'}).
   The QR image is the official Paytm QR for the same UPI ID. */
(function(){
  if(window.BAIO_UPI) return;
  var UPI_ID = 'paytm.s4qa42a@pty';
  var PAYEE = 'Narendra Sir';
  var WA = '919008968389';
  var me = document.currentScript && document.currentScript.src;
  var ROOT = me ? me.replace(/pay\/upi\.js.*$/, '') : '';
  var QR = ROOT + 'prep-books-assets/upi-qr.png';

  function link(amount, note){
    return 'upi://pay?pa=' + UPI_ID + '&pn=' + encodeURIComponent(PAYEE) + (amount ? '&am=' + amount : '') + '&cu=INR' + (note ? '&tn=' + encodeURIComponent(note) : '');
  }
  function parse(href){
    var q = {}; (String(href).split('?')[1] || '').split('&').forEach(function(p){ var i = p.indexOf('='); if(i > 0){ try{ q[p.slice(0, i)] = decodeURIComponent(p.slice(i + 1).replace(/\+/g, ' ')); }catch(e){ q[p.slice(0, i)] = p.slice(i + 1); } } });
    return {amount: q.am ? Math.round(+q.am) : 0, note: q.tn || ''};
  }
  var esc = function(t){ return String(t == null ? '' : t).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };
  var CSS = '.bupi-bg{position:fixed;inset:0;z-index:100000;background:rgba(5,12,9,.62);display:flex;align-items:flex-end;justify-content:center;font-family:Inter,system-ui,sans-serif}'
    + '.bupi{width:100%;max-width:440px;max-height:94vh;overflow:auto;background:#fff;color:#16231C;border-radius:22px 22px 0 0;padding:18px 18px calc(18px + env(safe-area-inset-bottom));box-shadow:0 -10px 40px rgba(0,0,0,.35);text-align:center;box-sizing:border-box}'
    + '@media(min-width:600px){.bupi-bg{align-items:center}.bupi{border-radius:22px}}'
    + '.bupi *{box-sizing:border-box;font-family:Inter,system-ui,sans-serif;letter-spacing:normal;text-transform:none}'
    + '.bupi .x{float:right;width:34px;height:34px;border-radius:50%;border:none;background:#EEF2EF;color:#16231C;font-size:18px;cursor:pointer;line-height:1}'
    + '.bupi .k{font-size:11px;font-weight:800;letter-spacing:.08em!important;text-transform:uppercase!important;color:#0F8F7A;margin-top:4px}'
    + '.bupi h3{margin:4px 0 0;font-weight:800;font-size:22px;line-height:1.2;color:#16231C}.bupi .for{font-size:13px;color:#53635A;margin-top:4px}'
    + '.bupi .qr{display:block;width:210px;height:210px;margin:12px auto 4px;border-radius:14px;border:1px solid #DCE5DF;background:#fff;padding:6px}'
    + '.bupi .hint{font-size:12.5px;color:#53635A;line-height:1.5;margin:4px 0 0}.bupi .hint b{color:#16231C}'
    + '.bupi .pay{display:block;margin-top:12px;padding:14px;border-radius:14px;background:linear-gradient(135deg,#0F8F7A,#0B6F5E);color:#fff!important;font-weight:800;font-size:16px;text-decoration:none}'
    + '.bupi .apps{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:8px}.bupi .apps span{font-size:11px;font-weight:700;border:1px solid #DCE5DF;border-radius:99px;padding:3px 9px;color:#53635A}'
    + '.bupi .id{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:12px;font-size:13.5px;font-weight:700;background:#F2F6F3;border-radius:12px;padding:9px 10px;flex-wrap:wrap}'
    + '.bupi .id button,.bupi .row a{font-weight:800;font-size:12px;border:1px solid #CFDCD4;background:#fff;color:#0F8F7A;border-radius:9px;padding:6px 11px;cursor:pointer;text-decoration:none}'
    + '.bupi .row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}.bupi .row a{display:block;padding:10px 6px;font-size:13px}'
    + '.bupi .row a.wa{background:#1FA855;border-color:#1FA855;color:#fff}'
    + '.bupi ol{text-align:left;font-size:12.5px;line-height:1.55;color:#33433A;margin:14px 0 0;padding-left:20px}';
  var styled = false, bg = null, lastFocus = null;
  function close(){ if(bg){ bg.remove(); bg = null; document.removeEventListener('keydown', onKey); if(lastFocus && lastFocus.focus) try{ lastFocus.focus(); }catch(e){} } }
  function onKey(e){ if(e.key === 'Escape') close(); }
  function open(o){
    o = o || {};
    var amt = o.amount ? Math.round(+o.amount) : 0, note = o.note || 'BAIO Premium';
    if(!styled){ var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st); styled = true; }
    close(); lastFocus = document.activeElement;
    var wa = 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Hi Narendra Sir, I have paid ' + (amt ? '₹' + amt + ' ' : '') + 'by UPI for: ' + note + '.\n\nName:\nRoll Number:\nSection:\n\n(Attaching my payment screenshot below)');
    bg = document.createElement('div'); bg.className = 'bupi-bg';
    bg.innerHTML = '<div class="bupi" role="dialog" aria-modal="true" aria-labelledby="bupiT">'
      + '<button type="button" class="x" aria-label="Close">✕</button>'
      + '<div class="k">Pay by UPI</div><h3 id="bupiT">' + (amt ? 'Pay ₹' + amt : 'Pay Narendra Sir') + '</h3><div class="for">' + esc(note) + '</div>'
      + '<img class="qr" src="' + QR + '" alt="UPI QR code to pay Narendra Sir" width="210" height="210">'
      + '<p class="hint">Scan with any UPI app' + (amt ? ' and enter <b>₹' + amt + '</b>' : '') + '.</p>'
      + '<a class="pay" data-upi-direct href="' + link(amt, note) + '">📲 Pay ' + (amt ? '₹' + amt + ' ' : '') + 'with UPI app</a>'
      + '<div class="apps"><span>PhonePe</span><span>Google Pay</span><span>Paytm</span><span>BHIM</span><span>Any UPI app</span></div>'
      + '<div class="id"><span>UPI ID: <b class="uid">' + UPI_ID + '</b></span><button type="button" class="cp">Copy</button></div>'
      + '<div class="row"><a class="sv" href="' + QR + '" download="BAIO-UPI-QR.png">⬇️ Save QR</a><a class="wa" href="' + wa + '" target="_blank" rel="noopener">💬 Send screenshot</a></div>'
      + '<ol><li>Pay ' + (amt ? '<b>₹' + amt + '</b> ' : '') + 'by scanning the QR, or tap the Pay button on this phone.</li>'
      + '<li>Paying from this phone with the QR? Tap <b>Save QR</b>, then choose it from the gallery in your UPI app.</li>'
      + '<li>Send the payment screenshot to Narendra Sir on WhatsApp with your name, roll number and section. He will send your unlock code.</li></ol>'
      + '</div>';
    document.body.appendChild(bg);
    bg.addEventListener('click', function(e){ if(e.target === bg || e.target.closest('.x')) close(); });
    bg.querySelector('.cp').addEventListener('click', function(){
      var b = this, done = function(){ b.textContent = 'Copied ✓'; setTimeout(function(){ b.textContent = 'Copy'; }, 1800); };
      if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(UPI_ID).then(done, function(){ sel(); });
      else sel();
      function sel(){ var r = document.createRange(); r.selectNodeContents(bg.querySelector('.uid')); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    });
    document.addEventListener('keydown', onKey);
    var x = bg.querySelector('.x'); if(x) x.focus();
  }
  /* every upi:// pay link on the page opens the sheet (the sheet's own Pay button goes straight to the UPI app) */
  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest && e.target.closest('a[href^="upi://pay"]');
    if(!a || a.hasAttribute('data-upi-direct')) return;
    e.preventDefault(); e.stopPropagation();
    var p = parse(a.getAttribute('href'));
    open({amount: p.amount, note: p.note});
  }, true);

  /* Razorpay stays the main Pay button; a UPI option is added under each one */
  var RZ = {"https://razorpay.me/@narendrabiosir?amount=ZFm4ghdmeB6pF5PK8Ki64w%3D%3D":[100,"Handwritten Notes"],"https://rzp.io/rzp/j2zWhMQ7":[1999,"Premium"],"https://rzp.io/rzp/3WXDfYoj":[1999,"Premium"],"https://rzp.io/rzp/ZFZzLN9e":[100,"Handwritten Notes"],"https://rzp.io/rzp/Ewi6A61":[1999,"Premium"],"https://rzp.io/rzp/AEFNemg9":[33150,"All 13 PU-II chapters Premium"],"https://rzp.io/rzp/rV09xlyo":[100,"Colour Notes"],"https://rzp.io/rzp/DRVyP7MF":[1999,"Premium"],"https://rzp.io/rzp/xCJhowtA":[100,"Handwritten Notes"],"https://rzp.io/rzp/xWUwnHU":[100,"Colour Notes"],"https://rzp.io/rzp/kFobyadb":[1999,"Premium"],"https://rzp.io/rzp/uRI9JGg":[1999,"Premium"],"https://rzp.io/rzp/3wLzPds":[1999,"Premium"],"https://rzp.io/rzp/DNgk5a4":[1999,"Premium"],"https://rzp.io/rzp/PzZQP9K":[100,"Colour Notes"],"https://rzp.io/rzp/60EJfbT":[1999,"Premium"],"https://rzp.io/rzp/tUAbuqQ":[1999,"Premium"],"https://rzp.io/rzp/8n4U8JD":[1999,"Premium"],"https://rzp.io/rzp/aG8fm6f":[1999,"Premium"],"https://rzp.io/rzp/Apl2qHpf":[1999,"Premium"],"https://rzp.io/rzp/antheLX":[1999,"Premium"],"https://rzp.io/rzp/DKcZH50":[1999,"Premium"],"https://rzp.io/rzp/gXmNPqF":[1999,"Premium"],"https://rzp.io/rzp/r269lMD":[1999,"Premium"],"https://rzp.io/rzp/UvcH8hcW":[1999,"Premium"],"https://rzp.io/rzp/5fwSJBu9":[1999,"Premium"],"https://rzp.io/rzp/AmIiixI":[1999,"Premium"],"https://rzp.io/rzp/cfFaVLoE":[50,"Flash cards"],"https://rzp.io/rzp/hDpfP67":[50,"Flash cards"]};
  function chap(){
    var p = location.pathname, m = p.match(/(pu[12])-ch(\d+)\.html/);
    if(m) return (m[1] === 'pu1' ? 'PU-I' : 'PU-II') + ' Ch ' + m[2];
    m = p.match(/\/ch(\d+)\/(index\.html)?$/); if(m) return (m[1] === '9' ? 'PU-II' : 'PU-I') + ' Ch ' + m[1];
    return '';
  }
  var ALT_CSS = '.bupi-alt{display:block;width:max-content;max-width:100%;margin:8px auto 0;padding:7px 14px;border-radius:99px;border:1.5px dashed currentColor;color:inherit;font:inherit;font-size:12.5px;font-weight:700;line-height:1.3;text-align:center;text-decoration:none!important;opacity:.92;cursor:pointer;box-sizing:border-box}'
    + '.bupi-alt:hover{opacity:1}.bh-slide .bupi-alt{margin-top:7px;padding:5px 12px;font-size:11.5px}';
  var altStyled = false;
  function decorate(){
    var as = document.querySelectorAll('a[href^="https://rzp.io/"],a[href^="https://razorpay.me/"]');
    if(!as.length) return;
    if(!altStyled){ var st = document.createElement('style'); st.textContent = ALT_CSS; document.head.appendChild(st); altStyled = true; }
    for(var i = 0; i < as.length; i++){
      var a = as[i], href = a.getAttribute('href'), info = RZ[href] || null;
      var m = (a.textContent || '').match(/₹\s*([\d,]+)/);
      var am = m ? +m[1].replace(/,/g, '') : (info ? info[0] : 0);
      var kind = info ? info[1] : 'Premium';
      var note = /^All 13/.test(kind) ? kind : ((chap() ? chap() + ' ' : '') + kind);
      var p = a.parentElement, ds = p ? getComputedStyle(p).display : '';
      var after = /flex|grid/.test(ds) ? p : a;
      var nx = after.nextElementSibling, h = link(am, note);
      if(nx && nx.classList && nx.classList.contains('bupi-alt')){ if(nx.getAttribute('href') !== h) nx.setAttribute('href', h); continue; }
      var b = document.createElement('a'); b.className = 'bupi-alt'; b.href = h;
      b.textContent = '📲 Or pay ' + (am ? '₹' + am + ' ' : '') + 'by UPI · scan QR';
      after.insertAdjacentElement('afterend', b);
    }
  }
  var q = 0;
  function later(){ if(!q) q = (window.requestAnimationFrame || setTimeout)(function(){ q = 0; decorate(); }); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', decorate); else decorate();
  if('MutationObserver' in window) new MutationObserver(later).observe(document.documentElement, {childList: true, subtree: true});
  window.BAIO_UPI = {ID: UPI_ID, QR: QR, link: link, open: open, close: close};
})();
