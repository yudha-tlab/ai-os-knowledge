/* Shell, ikon, data contoh, dan helper bersama untuk semua halaman mockup. */
(function () {
  const TODAY = new Date("2026-10-12T10:00:00+07:00");

  /* ---------- Ikon (gaya garis, 24px viewBox) ---------- */
  const P = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    bell: '<path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 21a2 2 0 0 0 4 0"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    right: '<path d="m9 6 6 6-6 6"/>',
    left: '<path d="m15 6-6 6 6 6"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 20a7 7 0 0 0-3-5.7"/>',
    building: '<rect x="4" y="3" width="12" height="18" rx="1"/><path d="M16 9h4v12h-4M8 7h4M8 11h4M8 15h4"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    inbox: '<path d="M3 13h5l1 3h6l1-3h5"/><path d="M5 5h14l2 8v6H3v-6z"/>',
    board: '<rect x="3" y="4" width="5" height="16" rx="1"/><rect x="10" y="4" width="5" height="10" rx="1"/><rect x="17" y="4" width="4" height="13" rx="1"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14.2 3h-4l-.4 2.6a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2l.4 2.6h4l.4-2.6a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2"/>',
    hook: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><circle cx="12" cy="6" r="3"/><path d="m12 9-4 6M9 17h6M12 9l3 5"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
    back: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
    more: '<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',
    flag: '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',
    alert: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17v.01"/>',
    home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/>',
    trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    pulse: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    note: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14-4L4 9"/><path d="M4 4v5h5M4 13a8 8 0 0 0 14 4l2-2"/><path d="M20 20v-5h-5"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
    pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11"/><circle cx="12" cy="10" r="2.5"/>',
  };
  function icon(name, cls) {
    return '<svg class="ic ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (P[name] || "") + "</svg>";
  }

  /* ---------- Data contoh (fiktif; bukan data nyata) ---------- */
  const users = {
    maya: { id: "maya", name: "Maya Kusuma", role: "Sales Manager", av: "a1" },
    raka: { id: "raka", name: "Raka Pratama", role: "Sales Rep", av: "a2" },
    dewi: { id: "dewi", name: "Dewi Anggraini", role: "Sales Rep", av: "a3" },
    bagus: { id: "bagus", name: "Bagus Santoso", role: "Sales Rep", av: "a4" },
  };

  /* Konfigurasi pipeline contoh milik tenant. Semua nilai di bawah adalah SETELAN TENANT, bukan bawaan produk. */
  const stages = [
    { id: "qual", name: "Qualification", stale: 7, gate: "guide",
      criteria: ["Pembeli mengonfirmasi ada kebutuhan nyata", "Anggaran sudah tersedia atau sedang dialokasikan", "Pengambil keputusan sudah teridentifikasi"] },
    { id: "needs", name: "Needs Analysis", stale: 10, gate: "warn",
      criteria: ["Pembeli menyetujui ringkasan kebutuhan yang kita tulis", "Cakupan solusi disepakati kedua pihak"] },
    { id: "demo", name: "Demo", stale: 10, gate: "guide",
      criteria: ["Solusi sudah dicoba pembeli, bukan hanya dipresentasikan", "Pembeli menyatakan cocok untuk kebutuhannya"] },
    { id: "proposal", name: "Proposal", stale: 14, gate: "block",
      criteria: ["Penawaran sudah diterima dan dibahas bersama pembeli", "Ada tanggapan tertulis atau lisan atas penawaran"] },
    { id: "nego", name: "Negotiation", stale: 14, gate: "guide",
      criteria: ["Harga dan syarat dibahas aktif", "Pembeli mengajukan usulan balik"] },
    { id: "decision", name: "Decision Pending", stale: 21, gate: "guide",
      criteria: ["Isi penawaran sudah disetujui pembeli", "Tinggal keputusan formal internal pembeli"] },
  ];
  const gateLabel = { guide: "Guidance", warn: "Warning", block: "Blocking" };

  const lostReasons = ["Harga terlalu tinggi", "Memilih kompetitor", "Tidak ada keputusan / budget dibekukan", "Kebutuhan berubah", "Tidak ada respons"];
  const wonReasons = ["Kecocokan fitur", "Harga kompetitif", "Hubungan dengan pembeli", "Implementasi cepat"];

  const opps = [
    { id: 1, name: "Implementasi HRIS – 120 karyawan", acc: "PT Sinar Logistik Prima", value: 185e6, stage: "qual", owner: "raka", close: "2026-11-20", age: 2, next: { t: "Kirim form kebutuhan", d: "2026-10-14" } },
    { id: 2, name: "Payroll cabang Surabaya", acc: "CV Bahari Sentosa", value: 64e6, stage: "qual", owner: "dewi", close: "2026-11-05", age: 9, next: null },
    { id: 3, name: "Paket HRIS Starter", acc: "Klinik Pratama Medika", value: 38e6, stage: "qual", owner: "bagus", close: "2026-11-30", age: 1, next: { t: "Telepon dokter pemilik", d: "2026-10-13" } },
    { id: 4, name: "HRIS + absensi biometrik", acc: "PT Kharisma Tekstil", value: 420e6, stage: "needs", owner: "raka", close: "2026-11-28", age: 5, next: { t: "Workshop kebutuhan", d: "2026-10-15" } },
    { id: 5, name: "Modul KPI 3 anak usaha", acc: "Grup Cahaya Pangan", value: 760e6, stage: "needs", owner: "dewi", close: "2026-12-15", age: 12, next: { t: "Jadwalkan ulang workshop", d: "2026-10-09" } },
    { id: 6, name: "Demo payroll multi-entitas", acc: "PT Mega Konstruksi", value: 535e6, stage: "demo", owner: "raka", close: "2026-11-18", age: 3, next: { t: "Demo untuk tim finance", d: "2026-10-16" } },
    { id: 7, name: "Self-service karyawan", acc: "Universitas Nusa Bahari", value: 310e6, stage: "demo", owner: "bagus", close: "2026-10-30", age: 4, next: { t: "Kirim akun trial", d: "2026-10-13" } },
    { id: 8, name: "Perpanjangan & upgrade 250 user", acc: "PT Tirta Wangi", value: 290e6, stage: "proposal", owner: "dewi", close: "2026-10-09", age: 15, next: { t: "Tindak lanjut penawaran", d: "2026-10-08" } },
    { id: 9, name: "Payroll & integrasi BPJS", acc: "RS Harapan Sehat", value: 640e6, stage: "proposal", owner: "raka", close: "2026-11-12", age: 6, next: { t: "Bahas penawaran dengan direksi", d: "2026-10-17" } },
    { id: 10, name: "Enterprise HRIS", acc: "PT Bumi Energi Persada", value: 1.35e9, stage: "nego", owner: "dewi", close: "2026-11-10", age: 8, next: { t: "Ronde harga kedua", d: "2026-10-14" } },
    { id: 11, name: "Paket 80 user", acc: "PT Lintas Media Nusantara", value: 215e6, stage: "nego", owner: "bagus", close: "2026-10-25", age: 11, next: { t: "Kirim revisi kontrak", d: "2026-10-13" } },
    { id: 12, name: "HRIS grup retail", acc: "PT Rasa Mart Indonesia", value: 880e6, stage: "decision", owner: "raka", close: "2026-10-31", age: 6, next: { t: "Cek status persetujuan direksi", d: "2026-10-20" } },
    { id: 13, name: "Payroll outsourcing", acc: "Yayasan Cipta Mandiri", value: 120e6, stage: "decision", owner: "bagus", close: "2026-10-20", age: 24, next: null },
  ];


  const leads = [
    { id: 1, name: "Andini Prameswari", org: "PT Surya Kencana Farma", title: "Head of HR", source: "Website form", cat: "In Progress", status: "Connected", owner: "raka", recv: "2026-10-12T08:41", first: 21, rating: "Warm" },
    { id: 2, name: "Budi Rahardjo", org: "Toko Bangunan Jaya Abadi", title: "Pemilik", source: "Website form", cat: "New", status: "New", owner: "raka", recv: "2026-10-12T07:05", first: null, rating: "" },
    { id: 3, name: "Sari Nurhayati", org: "", title: "HR Generalist", source: "Event: HR Expo", cat: "New", status: "Attempted to Contact", owner: "raka", recv: "2026-10-11T14:20", first: null, rating: "Cold" },
    { id: 4, name: "Yohanes Wibowo", org: "CV Mitra Tani Makmur", title: "Direktur", source: "Referral", cat: "In Progress", status: "Qualifying", owner: "raka", recv: "2026-10-09T10:15", first: 35, rating: "Hot" },
    { id: 5, name: "Lestari Ningrum", org: "PT Graha Medika", title: "HR Manager", source: "Website form", cat: "New", status: "New", owner: null, recv: "2026-10-12T09:10", first: null, rating: "" },
    { id: 6, name: "Anton Hidayat", org: "Koperasi Sumber Rejeki", title: "Ketua", source: "Chatbot (webhook)", cat: "New", status: "New", owner: null, recv: "2026-10-12T09:48", first: null, rating: "" },
    { id: 7, name: "Rina Marlina", org: "", title: "", source: "Instagram", cat: "New", status: "New", owner: null, recv: "2026-10-12T08:15", first: null, rating: "" },
    { id: 8, name: "Dedi Kurniawan", org: "PT Armada Karya", title: "Finance Manager", source: "Import CSV", cat: "In Progress", status: "Connected", owner: "dewi", recv: "2026-10-08T13:00", first: 190, rating: "Warm" },
    { id: 9, name: "Farah Aulia", org: "Hotel Puri Indah", title: "GM", source: "Event: HR Expo", cat: "Lost", status: "Lost", owner: "bagus", recv: "2026-10-02T11:30", first: 12, rating: "Cold", lost: "Waktu belum sesuai", nurture: true },
    { id: 10, name: "Hendra Gunawan", org: "PT Samudra Niaga", title: "CEO", source: "Referral", cat: "Converted", status: "Converted", owner: "dewi", recv: "2026-09-28T09:00", first: 8, rating: "Hot" },
  ];
  const quota = [
    { id: "raka", target: 800e6, won: 420e6, wins: 3 },
    { id: "dewi", target: 700e6, won: 640e6, wins: 4 },
    { id: "bagus", target: 500e6, won: 180e6, wins: 2 },
  ];
  const THRESH = 80;

  /* ---------- Helper ---------- */
  const MON = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  function rp(n) {
    if (n >= 1e9) return "Rp " + (n / 1e9).toFixed(2).replace(".", ",").replace(/,?0+$/, "") + " M";
    return "Rp " + Math.round(n / 1e6).toLocaleString("id-ID") + " jt";
  }
  function d(s, full) { const x = new Date(s + "T00:00:00+07:00"); return x.getDate() + " " + MON[x.getMonth()] + (full ? " " + x.getFullYear() : ""); }
  function daysFrom(s) { return Math.round((new Date(s + "T00:00:00+07:00") - TODAY) / 864e5); }
  function initials(n) { return n.split(" ").map((w) => w[0]).slice(0, 2).join(""); }
  function avatar(uid, cls) { const u = users[uid]; return '<span class="avatar ' + (cls || "") + " " + u.av + '" title="' + u.name + '">' + initials(u.name) + "</span>"; }
  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

  function toast(msg) {
    let host = document.querySelector(".toast-host");
    if (!host) { host = document.createElement("div"); host.className = "toast-host"; host.setAttribute("role", "status"); document.body.appendChild(host); }
    const t = document.createElement("div"); t.className = "toast"; t.innerHTML = icon("check") + "<span>" + esc(msg) + "</span>";
    host.appendChild(t); setTimeout(() => t.remove(), 3200);
  }
  function openDlg(id) { const el = document.getElementById(id); if (el && !el.open) el.showModal(); return el; }
  function closeDlg(el) { (el.closest ? el.closest("dialog") : el).close(); }

  /* ---------- Shell ---------- */
  const NAV = [
    { title: null, items: [
      { id: "home", label: "Dashboard", ic: "home", href: "home.html", roles: "rep manager admin" },
      { id: "leads", label: "Leads", ic: "inbox", href: "leads.html", roles: "rep manager admin", count: "3", attn: true },
      { id: "contacts", label: "Contacts", ic: "user", href: "records.html?type=contacts", roles: "rep manager admin" },
      { id: "accounts", label: "Accounts", ic: "building", href: "records.html?type=accounts", roles: "rep manager admin" },
      { id: "pipeline", label: "Opportunities", ic: "board", href: "pipeline.html", roles: "rep manager admin" },
      { id: "activities", label: "Activities", ic: "check", href: "activities.html", roles: "rep manager admin", count: "3", attn: true },
    ] },
    { title: "Performance", items: [
      { id: "performance", label: "Sales Performance", ic: "trend", href: "performance.html", roles: "rep manager admin" },
      { id: "quota", label: "Quota", ic: "target", href: "quota.html", roles: "manager admin" },
      { id: "reports", label: "Reports", ic: "chart", href: "reports.html", roles: "manager admin" },
    ] },
    { title: "Administration", items: [
      { id: "users", label: "Users & Roles", ic: "users", href: "users.html", roles: "admin" },
      { id: "webhooks", label: "Webhooks", ic: "hook", href: "webhooks.html", roles: "admin" },
      { id: "settings", label: "Tenant Settings", ic: "gear", href: "settings.html", roles: "admin" },
    ] },
  ];
  function role() { try { return localStorage.getItem("crm-role") || "manager"; } catch (e) { return "manager"; } }
  function renderShell() {
    const active = document.body.dataset.active;
    const r = role();
    const top = document.createElement("header");
    top.className = "topbar";
    top.innerHTML =
      '<div class="brand"><span class="brand-mark">C</span><span>CRM</span></div>' +
      '<button class="tenant" type="button" title="Workspace aktif">' + icon("building", "sm") + "Arunika Teknologi" + icon("down", "sm") + "</button>" +
      '<label class="search">' + icon("search", "sm") + '<span class="sr">Cari</span><input type="search" placeholder="Cari lead, contact, account, opportunity"></label>' +
      '<div class="top-actions">' +
      '<select class="role-switch" aria-label="Lihat sebagai (demo)" title="Demo: ganti peran untuk melihat menu yang berbeda">' +
      ["rep:Sales Rep", "manager:Sales Manager", "admin:Tenant Admin"].map((o) => { const [v, l] = o.split(":"); return '<option value="' + v + '"' + (v === r ? " selected" : "") + ">" + l + "</option>"; }).join("") +
      "</select>" +
      '<button class="icon-btn" title="Buat baru" aria-label="Buat baru">' + icon("plus") + "</button>" +
      '<button class="icon-btn" aria-label="Notifikasi">' + icon("bell") + "</button>" +
      avatar(r === "rep" ? "raka" : "maya") + "</div>";
    document.body.prepend(top);
    top.querySelector(".role-switch").addEventListener("change", (e) => { try { localStorage.setItem("crm-role", e.target.value); } catch (x) {} location.reload(); });
    top.querySelector(".tenant").addEventListener("click", () => toast("Pemilih workspace belum dibuat"));

    const nav = document.querySelector(".sidenav");
    if (nav) {
      nav.setAttribute("aria-label", "Navigasi utama");
      nav.innerHTML = NAV.map((g) => {
        const items = g.items.filter((i) => i.roles.split(" ").includes(r));
        if (!items.length) return "";
        return '<div class="nav-group">' + (g.title ? '<div class="nav-title">' + g.title + "</div>" : "") +
          items.map((i) => '<a class="nav-item" href="' + i.href + '"' + (i.id === active ? ' aria-current="page"' : "") + (i.href === "#" ? ' data-todo="1"' : "") + ">" + icon(i.ic) + i.label +
            (i.count ? '<span class="count' + (i.attn ? " attn" : "") + '">' + i.count + "</span>" : "") + "</a>").join("") + "</div>";
      }).join("");
      nav.addEventListener("click", (e) => { const a = e.target.closest("[data-todo]"); if (a) { e.preventDefault(); toast("Layar ini dibuat pada tahap berikutnya"); } });
    }
    document.querySelectorAll("[data-ic]").forEach((el) => { el.insertAdjacentHTML("afterbegin", icon(el.dataset.ic)); });
  }

  window.CRM = { TODAY, icon, users, stages, gateLabel, lostReasons, wonReasons, opps, leads, quota, THRESH, rp, d, daysFrom, initials, avatar, esc, toast, openDlg, closeDlg, role };
  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.dataset.shell !== "none") renderShell();
    document.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", () => closeDlg(b)));
    document.querySelectorAll("[data-ic]:not(.topbar *)").forEach((el) => { if (!el.querySelector(".ic")) el.insertAdjacentHTML("afterbegin", icon(el.dataset.ic)); });
    document.dispatchEvent(new Event("crm-ready"));
  });
})();
