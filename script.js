/* ── DATA ── */
const coreSkills = [
  { e:'🌐', n:'HTML / CSS',       s:'Frontend',        r:4 },
  { e:'⚡', n:'JavaScript',       s:'Scripting',       r:3 },
  { e:'☕', n:'Java',             s:'Automation Core', r:4 },
  { e:'🤖', n:'Selenium',         s:'Web Automation',  r:4 },
  { e:'🧪', n:'TestNG',           s:'Test Framework',  r:4 },
  { e:'🔗', n:'API Testing',      s:'Postman · REST',  r:4 },
  { e:'🗄️', n:'SQL',             s:'Backend QA',      r:4 },
  { e:'🚀', n:'Jenkins',          s:'CI/CD',           r:3 },
];

const skillGroups = [
  { g:'Automation & CI/CD', items:[
    {n:'Selenium WebDriver',p:88},{n:'Java',p:82},{n:'TestNG',p:84},
    {n:'Jenkins',p:70},{n:'Git / GitHub',p:78},{n:'Linux',p:65},
  ]},
  { g:'Testing Disciplines', items:[
    {n:'Automation Testing',p:88},{n:'Manual Testing',p:85},
    {n:'Regression Testing',p:86},{n:'API Testing (Postman)',p:80},
    {n:'Functional Testing',p:84},{n:'Backend / SQL Testing',p:82},
  ]},
  { g:'Web & Tools', items:[
    {n:'HTML / CSS',p:80},{n:'JavaScript',p:68},
    {n:'PostgreSQL / SQL',p:78},{n:'JIRA',p:80},
  ]},
];

const projects = [
  {
    icon:'🏢🤝', title:'Orange HRM End to End Automation Frameword',
    desc:'Backend data quality project using advanced SQL queries to detect and categorize failed, missing, and inconsistent transaction records across a 100k+ row dataset.',
    stack:['Selenium','Java','TestNG','Jenkins','CI/CD','Page Object Model', 'Extent Reports', 'Maven'],
    gh:'https://github.com/VinayakAKattimani',
  },
  {
    icon:'🏦', title:'E-Banking Web App Automation',
    desc:'End-to-end automated test suite for a banking application covering authentication, fund transfers, and account validation — integrated with Jenkins CI/CD pipeline.',
    stack:['Selenium','Java','TestNG','Jenkins','CI/CD','Page Object Model'],
    gh:'https://github.com/VinayakAKattimani',
  },
  {
    icon:'🔌', title:'API Testing Automation Framework',
    desc:'Automated API testing framework for validating REST APIs including authentication, CRUD operations, response validation, and status code verification using Postman and RestAssured with CI/CD integration.',
    stack:['Postman','RestAssured','Java','TestNG','Maven','API Testing','Jenkins','CI/CD'],
    gh:'https://github.com/VinayakAKattimani',
  },
  {
    icon:'🔍', title:'Transaction Failure Analysis — SQL',
    desc:'Backend data quality project using advanced SQL queries to detect and categorize failed, missing, and inconsistent transaction records across a 100k+ row dataset.',
    stack:['SQL','PostgreSQL','Backend Testing','Data Validation'],
    gh:'https://github.com/VinayakAKattimani',
  }
  
];

/* ── RENDER SKILL CARDS ── */
const skCards = document.getElementById('skCards');
coreSkills.forEach(s => {
  const stars = Array.from({length:5},(_,i) =>
    `<svg class="star ${i<s.r?'on':'off'}" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>`).join('');
  const el = document.createElement('div');
  el.className = 'sk-card fi';
  el.innerHTML = `<div class="sk-emoji">${s.e}</div><div class="sk-name">${s.n}</div><div class="sk-sub">${s.s}</div><div class="stars">${stars}</div>`;
  skCards.appendChild(el);
});

/* ── RENDER SKILL BARS ── */
const skGroups = document.getElementById('skGroups');
skillGroups.forEach(g => {
  const wrap = document.createElement('div');
  wrap.innerHTML = `<div class="sk-group-title fi">${g.g}</div><div class="sk-bars"></div>`;
  const bars = wrap.querySelector('.sk-bars');
  g.items.forEach(sk => {
    const row = document.createElement('div');
    row.className = 'sk-row fi';
    row.innerHTML = `<div class="sk-label">${sk.n}</div><div class="sk-track"><div class="sk-fill" data-p="${sk.p}"></div></div><div class="sk-pct">${sk.p}%</div>`;
    bars.appendChild(row);
  });
  skGroups.appendChild(wrap);
});

/* ── RENDER PROJECTS ── */
const pg = document.getElementById('projGrid');
projects.forEach(p => {
  const tags = p.stack.map(t=>`<span class="proj-tag">${t}</span>`).join('');
  const card = document.createElement('div');
  card.className = 'proj-card fi';
  card.innerHTML = `
    <div class="proj-top">
      <div class="proj-icon">${p.icon}</div>
      <div class="proj-links">
        <a href="${p.gh}" target="_blank" rel="noopener" class="proj-btn" title="GitHub">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </a>
      </div>
    </div>
    <div class="proj-title">${p.title}</div>
    <div class="proj-desc">${p.desc}</div>
    <div class="proj-stack">${tags}</div>`;
  pg.appendChild(card);
});

/* ── THEME ── */
const html = document.documentElement;
const MOON = `<path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>`;
const SUN  = `<circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>`;

function applyTheme(t) {
  html.setAttribute('data-theme', t);
  document.getElementById('themeIcon').innerHTML = t==='dark' ? MOON : SUN;
  document.getElementById('themeLabel').textContent = t==='dark' ? 'Light' : 'Dark';
  localStorage.setItem('vk-theme', t);
}
applyTheme(localStorage.getItem('vk-theme') || 'dark');
document.getElementById('themeToggle').addEventListener('click', () =>
  applyTheme(html.getAttribute('data-theme')==='dark' ? 'light' : 'dark')
);

/* ── HAMBURGER ── */
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => { ham.classList.toggle('open'); mob.classList.toggle('open'); });
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  ham.classList.remove('open'); mob.classList.remove('open');
}));

/* ── SCROLL OBSERVER ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('show');
    e.target.querySelectorAll && e.target.querySelectorAll('.sk-fill').forEach(b => b.style.width = b.dataset.p + '%');
    if (e.target.classList.contains('sk-fill')) e.target.style.width = e.target.dataset.p + '%';
  });
}, { threshold:0.1, rootMargin:'0px 0px -20px 0px' });

window.addEventListener('load', () => {
  document.querySelectorAll('#hero .fi').forEach((el,i) =>
    setTimeout(() => el.classList.add('show'), 100 + i*120)
  );
  document.querySelectorAll('.fi').forEach(el => obs.observe(el));
  document.querySelectorAll('.sk-fill').forEach(el => obs.observe(el));
});

/* ── ACTIVE NAV ── */
const secs = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
  navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+cur));
}, { passive:true });

/* ── FORM ── */
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.disabled = true; btn.textContent = 'Sending…';
  setTimeout(() => {
    document.getElementById('formOk').classList.add('show');
    btn.style.display = 'none'; e.target.reset();
  }, 1000);
}