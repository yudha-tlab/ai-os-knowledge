/* Chart kecil tanpa library: bar horizontal dan kolom vertikal, satu seri, dengan tooltip dan tampilan tabel. */
(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let tip;
  function showTip(e, html) {
    if (!tip) { tip = document.createElement("div"); tip.setAttribute("role", "tooltip"); tip.style.cssText = "position:fixed;z-index:200;pointer-events:none;background:#161f38;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px;line-height:16px;box-shadow:0 4px 12px rgba(11,30,84,.25);max-width:240px"; document.body.appendChild(tip); }
    tip.innerHTML = html; tip.style.display = "block";
    const x = Math.min(e.clientX + 12, innerWidth - 250); tip.style.left = x + "px"; tip.style.top = e.clientY + 14 + "px";
  }
  const hideTip = () => { if (tip) tip.style.display = "none"; };
  const bind = (el, html) => { el.addEventListener("mousemove", (e) => showTip(e, html)); el.addEventListener("mouseleave", hideTip); el.addEventListener("focus", () => { const r = el.getBoundingClientRect(); showTip({ clientX: r.left + 20, clientY: r.top }, html); }); el.addEventListener("blur", hideTip); };

  /* items: [{label, value, note?, tone?: "base"|"warn"|"won"|"lost"}] */
  function hbars(host, items, o) {
    o = o || {}; const max = o.max || Math.max(...items.map((i) => i.value), 1), fmt = o.fmt || ((v) => v);
    const col = { base: "var(--navy-700)", warn: "#d97706", won: "var(--won)", lost: "var(--lost)" };
    host.innerHTML = '<div style="display:flex;flex-direction:column;gap:10px;position:relative">' + items.map((i, k) =>
      '<div class="hb" tabindex="0" data-k="' + k + '" style="display:grid;grid-template-columns:' + (o.labelW || 150) + 'px 1fr 84px;gap:12px;align-items:center;border-radius:4px"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="' + esc(i.label) + '">' + (i.html || esc(i.label)) +
      '</span><span style="position:relative;height:14px;background:var(--n100);border-radius:0 4px 4px 0"><span style="position:absolute;left:0;top:0;bottom:0;width:' + Math.min(100, (i.value / max) * 100) + "%;background:" + col[i.tone || "base"] + ';border-radius:0 4px 4px 0"></span>' +
      (o.marker != null ? '<span style="position:absolute;top:-4px;bottom:-4px;left:' + (o.marker / max) * 100 + '%;width:2px;background:var(--n900)"></span>' : "") + '</span><span class="num" style="text-align:right;font-weight:600">' + fmt(i.value) + "</span></div>").join("") +
      (o.marker != null ? '<div class="hint" style="margin-left:' + ((o.labelW || 150) + 12) + 'px">Garis tegak = ' + (o.markerLabel || "ambang") + "</div>" : "") + "</div>";
    host.querySelectorAll(".hb").forEach((el) => { const i = items[+el.dataset.k]; bind(el, "<b>" + esc(i.label) + "</b><br>" + fmt(i.value) + (i.note ? "<br>" + esc(i.note) : "")); });
  }

  const nice = (v) => { const k = Math.pow(10, Math.floor(Math.log10(v))); return [1, 1.2, 1.6, 2, 2.4, 3, 4, 5, 6, 8, 10].map((m) => m * k).find((x) => x >= v); };
  /* items: [{label, value, note?}] kolom vertikal dengan grid tipis */
  function vcols(host, items, o) {
    o = o || {}; const fmt = o.fmt || ((v) => v), top = o.max || nice(Math.max(...items.map((i) => i.value), 1) * 1.05), H = o.h || 200;
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => top * t);
    host.innerHTML = '<div style="position:relative;padding-left:56px;height:' + (H + 28) + 'px"><div style="position:absolute;left:0;right:0;top:0;height:' + H + 'px">' +
      ticks.map((t) => '<div style="position:absolute;left:0;right:0;bottom:' + (t / top) * 100 + '%;border-top:1px solid ' + (t === 0 ? "var(--n300)" : "var(--n100)") + '"><span class="num" style="position:absolute;left:0;top:-9px;font-size:11px;color:var(--muted);background:#fff;padding-right:4px">' + (o.axis ? o.axis(t) : fmt(t)) + "</span></div>").join("") + "</div>" +
      '<div style="position:absolute;left:56px;right:0;top:0;height:' + H + 'px;display:flex;gap:10px;align-items:flex-end">' + items.map((i, k) => '<div class="vc" tabindex="0" data-k="' + k + '" style="flex:1;height:100%;display:flex;align-items:flex-end;justify-content:center;border-radius:4px"><div style="width:min(44px,70%);height:' + (i.value / top) * 100 + "%;background:" + (i.muted ? "var(--n300)" : "var(--navy-700)") + ';border-radius:4px 4px 0 0"></div></div>').join("") + "</div>" +
      '<div style="position:absolute;left:56px;right:0;top:' + (H + 6) + 'px;display:flex;gap:10px">' + items.map((i) => '<span style="flex:1;text-align:center;font-size:12px;color:var(--muted)">' + esc(i.label) + "</span>").join("") + "</div></div>";
    host.querySelectorAll(".vc").forEach((el) => { const i = items[+el.dataset.k]; bind(el, "<b>" + esc(i.label) + "</b><br>" + fmt(i.value) + (i.note ? "<br>" + esc(i.note) : "")); });
  }

  function table(items, head, fmt) {
    return '<table class="table"><thead><tr><th>' + esc(head[0]) + '</th><th class="r">' + esc(head[1]) + "</th>" + (items.some((i) => i.note) ? "<th>Catatan</th>" : "") + "</tr></thead><tbody>" + items.map((i) => "<tr><td>" + esc(i.label) + '</td><td class="r num">' + (fmt || ((v) => v))(i.value) + "</td>" + (items.some((x) => x.note) ? "<td>" + esc(i.note || "") + "</td>" : "") + "</tr>").join("") + "</tbody></table>";
  }
  window.Charts = { hbars, vcols, table };
})();
