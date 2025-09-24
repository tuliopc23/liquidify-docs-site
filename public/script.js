// Sidebar filter (case-insensitive contains)
const filterInput = document.getElementById('sidebarFilter');
const links = Array.from(document.querySelectorAll('.sidebar__link'));
const groups = Array.from(document.querySelectorAll('.sidebar__group'));

function applyFilter(q) {
  const term = q.trim().toLowerCase();
  links.forEach(a => {
    const visible = !term || a.textContent.toLowerCase().includes(term);
    a.style.display = visible ? 'flex' : 'none';
  });
  // Hide group headers if all children are hidden
  groups.forEach(g => {
    const anyVisible = Array.from(g.querySelectorAll('.sidebar__link'))
      .some(a => a.style.display !== 'none');
    g.style.display = anyVisible ? 'block' : 'none';
  });
}
filterInput?.addEventListener('input', e => applyFilter(e.target.value));

// Focus filter with "/" like Apple does
window.addEventListener('keydown', (e) => {
  const isTyping = ['INPUT','TEXTAREA'].includes(document.activeElement.tagName);
  if (e.key === '/' && !isTyping) {
    e.preventDefault();
    filterInput?.focus();
  }
});

// Measure topbar height and set CSS variable for robustness
function setTopbarVariable() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;
  const h = topbar.offsetHeight;
  document.documentElement.style.setProperty('--topbar-h', h + 'px');
}
window.addEventListener('load', setTopbarVariable);
window.addEventListener('resize', setTopbarVariable);

// Mobile sidebar toggle
const sidebar = document.getElementById('sidebar');
const toggle = document.querySelector('.sidebar-toggle');

let backdrop;
function ensureBackdrop() {
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    backdrop.addEventListener('click', closeSidebar);
    document.body.appendChild(backdrop);
  }
}
function openSidebar() {
  ensureBackdrop();
  sidebar.classList.add('is-open');
  backdrop.classList.add('is-open');
  toggle.setAttribute('aria-expanded', 'true');
}
function closeSidebar() {
  sidebar.classList.remove('is-open');
  backdrop?.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle?.addEventListener('click', () => {
  const open = sidebar.classList.contains('is-open');
  open ? closeSidebar() : openSidebar();
});

// Allow "Esc" to close on mobile
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});

// Theme handling (light/dark) with OS sync and local preference
(function themeSetup(){
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)');

  function applyTheme(mode){
    root.setAttribute('data-theme', mode);
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(mode === 'dark'));
      // Update theme toggle aria-label for better accessibility
      toggle.setAttribute('aria-label', `Switch to ${mode === 'light' ? 'dark' : 'light'} theme`);
    }
  }

  function currentPref(){
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return prefersLight && prefersLight.matches ? 'light' : 'dark';
  }

  applyTheme(currentPref());

  toggle?.addEventListener('click', () => {
    const next = (root.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });

  // Sync with OS if user hasn't set a preference manually
  prefersLight?.addEventListener?.('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'light' : 'dark');
    }
  });
})();
