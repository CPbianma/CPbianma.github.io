const root = document.documentElement;
const languageButtons = [...document.querySelectorAll('[data-language]')];
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
let language = 'cn';

function readPreference(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Storage can be unavailable in private contexts. */ }
}

function setLanguage(nextLanguage) {
  language = nextLanguage === 'en' ? 'en' : 'cn';
  root.lang = language === 'cn' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-cn][data-en]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  document.querySelectorAll('[data-cn-alt][data-en-alt]').forEach((element) => {
    element.alt = language === 'cn' ? element.dataset.cnAlt : element.dataset.enAlt;
  });
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  document.title = language === 'cn' ? 'Peng Cai · 研究健康数据与软件' : 'Peng Cai · Health data, working software';
  updateThemeControl();
}

function updateThemeControl() {
  const dark = root.dataset.theme === 'dark';
  const action = dark ? 'light' : 'dark';
  themeLabel.textContent = action === 'dark' ? 'Dark' : 'Light';
  themeToggle.setAttribute('aria-pressed', String(dark));
  const label = language === 'cn'
    ? `切换${action === 'dark' ? '深色' : '浅色'}主题`
    : `Switch to ${action} theme`;
  themeToggle.setAttribute('aria-label', label);
  document.querySelector('meta[name="theme-color"]').content = dark ? '#22231f' : '#f3f0e9';
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.language);
    savePreference('pc-language', language);
  });
});

themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  savePreference('pc-theme', root.dataset.theme);
  updateThemeControl();
});

const avatar = document.querySelector('.avatar-frame img');
avatar.addEventListener('error', () => {
  const fallback = document.createElement('span');
  fallback.className = 'avatar-fallback';
  fallback.setAttribute('role', 'img');
  fallback.setAttribute('aria-label', avatar.alt);
  fallback.textContent = 'PC';
  avatar.replaceWith(fallback);
});

setLanguage(readPreference('pc-language') || 'cn');
updateThemeControl();
