/* BAIO · UPI payments (replaces the old Razorpay links).
   Any link to a "upi://pay?..." address on a page that loads this file opens a payment sheet with:
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
  window.BAIO_UPI = {ID: UPI_ID, QR: QR, link: link, open: open, close: close};
})();
