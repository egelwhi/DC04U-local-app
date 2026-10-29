(() => {
  const targetHash = '#/device/DC04U';
  if (!location.hash || location.hash === '#/') location.hash = targetHash;

  const blockedLabels = new Set(['sign in', 'login', 'register', '登录', '注册']);
  const themeKey = 'dc04u-local-theme-v2';
  const imageKey = 'dc04u-local-images';

  const style = document.createElement('style');
  style.textContent = `
    :root[data-local-theme="beige"], body[data-local-theme="beige"] {
      --local-bg: #eadfce;
      --local-surface: #f7f0e5;
      --local-surface-strong: #fffaf2;
      --local-text: #3e3428;
      --local-muted: #756755;
      --local-border: #d7c6ae;
      background: var(--local-bg) !important;
    }
    body[data-local-theme="beige"] #app,
    body[data-local-theme="beige"] .page-scroll,
    body[data-local-theme="beige"] [class*="grid-shell"],
    body[data-local-theme="beige"] [class*="controls-panel"],
    body[data-local-theme="beige"] [class*="panel"] {
      background-color: var(--local-bg) !important;
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] [class*="card"],
    body[data-local-theme="beige"] [class*="section"],
    body[data-local-theme="beige"] [class*="toolbar"],
    body[data-local-theme="beige"] [class*="row"],
    body[data-local-theme="beige"] [class*="control"],
    body[data-local-theme="beige"] [class*="wrap"] {
      background-color: var(--local-surface) !important;
      border-color: var(--local-border) !important;
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] #app * {
      border-color: var(--local-border) !important;
    }
    body[data-local-theme="beige"] #app p,
    body[data-local-theme="beige"] #app span,
    body[data-local-theme="beige"] #app label,
    body[data-local-theme="beige"] #app h1,
    body[data-local-theme="beige"] #app h2,
    body[data-local-theme="beige"] #app h3,
    body[data-local-theme="beige"] #app button {
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .dc04u-page {
      background-color: var(--local-bg) !important;
      background-image: none !important;
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .dc04u-nav {
      background: #e2d3bf !important;
      border-bottom-color: var(--local-border) !important;
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .dc04u-nav * {
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .dc04u-nav .nav-tab--active,
    body[data-local-theme="beige"] .dc04u-nav .nav-tab--active * {
      color: #3158b8 !important;
    }
    body[data-local-theme="beige"] .dc04u-card,
    body[data-local-theme="beige"] .glass-card,
    body[data-local-theme="beige"] .dc04u-eq-card,
    body[data-local-theme="beige"] .dc04u-params-card,
    body[data-local-theme="beige"] .dc04u-option-card,
    body[data-local-theme="beige"] .dc04u-option-tile,
    body[data-local-theme="beige"] .dc04u-eq-preset,
    body[data-local-theme="beige"] .dc04u-eq-preset-tab {
      background: var(--local-surface) !important;
      background-image: none !important;
      color: var(--local-text) !important;
      border-color: var(--local-border) !important;
      box-shadow: 0 5px 18px #8d765b2b !important;
    }
    body[data-local-theme="beige"] .dc04u-segment,
    body[data-local-theme="beige"] .dc04u-segment-btn,
    body[data-local-theme="beige"] .dc04u-eq-mode-menu {
      background: var(--local-surface-strong) !important;
      color: var(--local-text) !important;
      border-color: var(--local-border) !important;
    }
    body[data-local-theme="beige"] .dc04u-option-card--active,
    body[data-local-theme="beige"] .dc04u-option-tile--active,
    body[data-local-theme="beige"] .dc04u-segment-btn--active,
    body[data-local-theme="beige"] .dc04u-eq-preset--active,
    body[data-local-theme="beige"] .dc04u-eq-preset-tab--active {
      background: #7187ed !important;
      color: #fff !important;
    }
    body[data-local-theme="beige"] .dc04u-option-card--active *,
    body[data-local-theme="beige"] .dc04u-option-tile--active *,
    body[data-local-theme="beige"] .dc04u-segment-btn--active *,
    body[data-local-theme="beige"] .dc04u-eq-preset--active *,
    body[data-local-theme="beige"] .dc04u-eq-preset-tab--active * {
      color: #fff !important;
    }
    body[data-local-theme="beige"] .volume-card,
    body[data-local-theme="beige"] .dc04u-eq-main,
    body[data-local-theme="beige"] .dc04u-eq-presets,
    body[data-local-theme="beige"] .dc04u-eq-content,
    body[data-local-theme="beige"] .device-col,
    body[data-local-theme="beige"] .device-toggle-card,
    body[data-local-theme="beige"] .language-dropdown {
      background: var(--local-surface) !important;
      background-image: none !important;
      color: var(--local-text) !important;
      border-color: var(--local-border) !important;
      box-shadow: 0 5px 18px #8d765b2b !important;
    }
    body[data-local-theme="beige"] .language-dropdown * {
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .language-option--active,
    body[data-local-theme="beige"] .language-option:hover {
      background: #e5d7c2 !important;
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .vol-value {
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .vol-icon {
      color: #fff !important;
    }
    body[data-local-theme="beige"] .device-info-card svg image {
      opacity: 0 !important;
    }
    body[data-local-theme="beige"] .device-info-card {
      background: var(--local-surface-strong) !important;
      border: 1px solid var(--local-border) !important;
      border-radius: 24px !important;
      box-shadow: 0 5px 18px #8d765b2b !important;
    }
    body[data-local-theme="beige"] .balance-card,
    body[data-local-theme="beige"] .voltage-card,
    body[data-local-theme="beige"] .balance-track,
    body[data-local-theme="beige"] .range-track {
      background: var(--local-surface) !important;
      background-image: none !important;
      color: var(--local-text) !important;
      border-color: var(--local-border) !important;
      box-shadow: 0 5px 18px #8d765b2b !important;
    }
    body[data-local-theme="beige"] .balance-card .card-title-sm,
    body[data-local-theme="beige"] .balance-card .slider-current-val,
    body[data-local-theme="beige"] .balance-card .slider-side-label,
    body[data-local-theme="beige"] .voltage-card .card-title-sm,
    body[data-local-theme="beige"] .voltage-card .slider-current-val,
    body[data-local-theme="beige"] .voltage-card .slider-side-label,
    body[data-local-theme="beige"] .voltage-card .op-voltage-ticks {
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .balance-track-wrap {
      background: var(--local-surface-strong) !important;
      box-shadow: inset 0 0 0 1px var(--local-border) !important;
    }
    body[data-local-theme="beige"] .dc04u-segment {
      background: var(--local-surface-strong) !important;
      border: 1px solid var(--local-border) !important;
    }
    body[data-local-theme="beige"] .filter-card,
    body[data-local-theme="beige"] .filter-tabs,
    body[data-local-theme="beige"] .filter-tab {
      background: var(--local-surface) !important;
      background-image: none !important;
      color: var(--local-text) !important;
      border-color: var(--local-border) !important;
    }
    body[data-local-theme="beige"] .filter-card .card-title,
    body[data-local-theme="beige"] .filter-card .filter-tab {
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .filter-card .filter-tab--active {
      color: #3158b8 !important;
      border-color: #3158b8 !important;
    }
    body[data-local-theme="beige"] .device-name,
    body[data-local-theme="beige"] .device-fw,
    body[data-local-theme="beige"] .device-uac,
    body[data-local-theme="beige"] .device-meta-row,
    body[data-local-theme="beige"] .device-row-label {
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .dc04u-local-tools,
    body[data-local-theme="beige"] .dc04u-image-panel {
      background: #e2d3bf !important;
      color: var(--local-text) !important;
      border-color: var(--local-border) !important;
      box-shadow: 0 8px 24px #8d765b45 !important;
    }
    body[data-local-theme="beige"] .dc04u-local-tools button,
    body[data-local-theme="beige"] .dc04u-image-panel button {
      background: var(--local-surface-strong) !important;
      color: var(--local-text) !important;
      border-color: var(--local-border) !important;
    }
    body[data-local-theme="beige"] .dc04u-image-panel label,
    body[data-local-theme="beige"] .dc04u-image-panel h2 {
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .dc04u-eq-main,
    body[data-local-theme="beige"] .dc04u-eq-presets,
    body[data-local-theme="beige"] .preset-card {
      background: var(--local-surface) !important;
      background-image: none !important;
      border-color: var(--local-border) !important;
      box-shadow: 0 5px 18px #8d765b2b !important;
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .preset-card .preset-name,
    body[data-local-theme="beige"] .preset-card .preset-author,
    body[data-local-theme="beige"] .preset-card .preset-description,
    body[data-local-theme="beige"] .preset-card .description-text,
    body[data-local-theme="beige"] .preset-card .preset-meta,
    body[data-local-theme="beige"] .preset-card button {
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .dc04u-settings {
      background: var(--local-bg) !important;
      background-image: none !important;
    }
    body[data-local-theme="beige"] .dc04u-settings .dc04u-theme,
    body[data-local-theme="beige"] .dc04u-settings .dc04u-language,
    body[data-local-theme="beige"] .dc04u-settings .dc04u-screen,
    body[data-local-theme="beige"] .dc04u-settings .dc04u-settings__main,
    body[data-local-theme="beige"] .dc04u-settings .dc04u-settings__aside {
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .dc04u-settings .dc04u-option-card,
    body[data-local-theme="beige"] .dc04u-settings .dc04u-option-tile,
    body[data-local-theme="beige"] .dc04u-settings .dc04u-eq-mode-option {
      background: var(--local-surface-strong) !important;
      background-image: none !important;
      border-color: var(--local-border) !important;
      color: var(--local-text) !important;
      box-shadow: 0 3px 12px #8d765b1f !important;
    }
    body[data-local-theme="beige"] .dc04u-settings .dc04u-option-card--active,
    body[data-local-theme="beige"] .dc04u-settings .dc04u-option-tile--active,
    body[data-local-theme="beige"] .dc04u-settings .dc04u-eq-mode-option--active {
      background: #7187ed !important;
      color: #fff !important;
    }
    body[data-local-theme="beige"] .dc04u-settings .dc04u-option-card--active *,
    body[data-local-theme="beige"] .dc04u-settings .dc04u-option-tile--active *,
    body[data-local-theme="beige"] .dc04u-settings .dc04u-eq-mode-option--active * {
      color: #fff !important;
    }
    body[data-local-theme="beige"] button,
    body[data-local-theme="beige"] input,
    body[data-local-theme="beige"] select {
      color: var(--local-text) !important;
      border-color: var(--local-border) !important;
    }
    body[data-local-theme="beige"] button:not([disabled]):hover {
      background: var(--local-surface-strong) !important;
    }
    .dc04u-local-tools {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 10000;
      display: flex;
      gap: 8px;
      padding: 8px;
      border: 1px solid #ffffff2b;
      border-radius: 12px;
      background: #111827e8;
      box-shadow: 0 10px 30px #0005;
    }
    .dc04u-local-tools button,
    .dc04u-image-panel button {
      border: 1px solid #ffffff2b;
      border-radius: 7px;
      padding: 7px 10px;
      background: #ffffff12;
      color: #fff;
      cursor: pointer;
      font: 12px system-ui, sans-serif;
    }
    .dc04u-local-tools button:hover,
    .dc04u-image-panel button:hover { background: #ffffff24; }
    .dc04u-image-panel {
      position: fixed;
      right: 18px;
      bottom: 70px;
      z-index: 10001;
      width: min(360px, calc(100vw - 36px));
      max-height: 70vh;
      overflow: auto;
      padding: 16px;
      border: 1px solid #ffffff2b;
      border-radius: 12px;
      background: #111827f5;
      color: #fff;
      box-shadow: 0 14px 40px #0006;
      font: 12px system-ui, sans-serif;
    }
    .dc04u-image-panel h2 { margin: 0 0 12px; font-size: 15px; }
    .dc04u-image-row { display: grid; gap: 6px; padding: 10px 0; border-top: 1px solid #ffffff1f; }
    .dc04u-image-row label { color: #ffffffb8; word-break: break-word; }
    .dc04u-image-row input { width: 100%; color: #fff; }
    .dc04u-image-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 12px; }
    .dc04u-theme-toggle {
      min-width: 92px;
      padding: 8px 12px;
      border: 1px solid #ffffff3d;
      border-radius: 999px;
      background: #ffffff14;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }
    .dc04u-image-host--relative { position: relative !important; }
    .dc04u-image-edit-button {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 20;
      width: 28px;
      height: 28px;
      padding: 0;
      border: 1px solid #ffffff99;
      border-radius: 50%;
      background: #111827dd;
      color: #fff;
      cursor: pointer;
      opacity: 0;
      transform: scale(.9);
      transition: opacity .16s ease, transform .16s ease;
    }
    .dc04u-image-host:hover .dc04u-image-edit-button,
    .dc04u-image-edit-button:focus-visible { opacity: 1; transform: scale(1); }
    body[data-local-theme="beige"] .dc04u-theme-toggle {
      background: var(--local-surface-strong) !important;
      border-color: var(--local-border) !important;
      color: var(--local-text) !important;
    }
    body[data-local-theme="beige"] .dc04u-image-edit-button {
      background: #e2d3bfee !important;
      border-color: #a88d6c !important;
      color: var(--local-text) !important;
    }
  `;
  document.head.appendChild(style);

  function setTheme(theme) {
    document.documentElement.dataset.localTheme = theme;
    document.body.dataset.localTheme = theme;
    localStorage.setItem(themeKey, theme);
  }

  function readImages() {
    try { return JSON.parse(localStorage.getItem(imageKey) || '{}'); } catch { return {}; }
  }

  function writeImages(images) {
    localStorage.setItem(imageKey, JSON.stringify(images));
  }

  function targetValue(target) {
    if (target.tagName === 'IMG') return target.currentSrc || target.src;
    if (target.tagName === 'image') return target.getAttribute('href') || target.getAttribute('xlink:href') || '';
    return target.style.backgroundImage || '';
  }

  function applyImages() {
    const images = readImages();
    document.querySelectorAll('img, svg image, [style*="background-image"]').forEach((target) => {
      const original = target.dataset.localImageOriginal || targetValue(target);
      if (!original) return;
      target.dataset.localImageOriginal = original;
      target.dataset.localImageKey = original;
      const replacement = images[original];
      if (!replacement) return;
      if (target.tagName === 'IMG') target.src = replacement;
      else if (target.tagName === 'image') {
        target.setAttribute('href', replacement);
        target.setAttribute('xlink:href', replacement);
      } else target.style.backgroundImage = `url("${replacement}")`;
    });
    attachImageEditors();
  }

  function imageLabel(target) {
    return target.alt || target.getAttribute('aria-label') || target.className?.baseVal || target.className || 'Image';
  }

  function chooseImage(target) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', () => {
      const file = input.files?.[0];
      if (!file) return;
      const original = target.dataset.localImageOriginal || targetValue(target);
      const reader = new FileReader();
      reader.onload = () => {
        const images = readImages();
        images[original] = reader.result;
        writeImages(images);
        applyImages();
      };
      reader.readAsDataURL(file);
    });
    input.click();
  }

  function attachImageEditors() {
    document.querySelectorAll('img').forEach((target) => {
      if (target.dataset.localImageEditor || target.closest('.dc04u-image-panel')) return;
      const host = target.parentElement;
      if (!host) return;
      target.dataset.localImageEditor = 'true';
      target.dataset.localImageOriginal = targetValue(target);
      host.classList.add('dc04u-image-host');
      if (getComputedStyle(host).position === 'static') host.classList.add('dc04u-image-host--relative');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'dc04u-image-edit-button';
      button.title = 'Change image';
      button.setAttribute('aria-label', 'Change image');
      button.textContent = '✎';
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        chooseImage(target);
      });
      host.appendChild(button);
    });
  }

  function openImagePanel() {
    document.querySelector('.dc04u-image-panel')?.remove();
    applyImages();
    const panel = document.createElement('section');
    panel.className = 'dc04u-image-panel';
    panel.innerHTML = '<h2>Customize images</h2><div class="dc04u-image-list"></div><div class="dc04u-image-actions"><button type="button" data-reset-images>Reset images</button><button type="button" data-close-images>Close</button></div>';
    const list = panel.querySelector('.dc04u-image-list');
    const seen = new Set();
    document.querySelectorAll('img, svg image, [style*="background-image"]').forEach((target) => {
      const original = target.dataset.localImageOriginal || targetValue(target);
      if (!original || seen.has(original)) return;
      seen.add(original);
      const row = document.createElement('div');
      row.className = 'dc04u-image-row';
      const label = document.createElement('label');
      label.textContent = imageLabel(target);
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.addEventListener('change', () => {
        const file = input.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          const images = readImages();
          images[original] = reader.result;
          writeImages(images);
          applyImages();
        };
        reader.readAsDataURL(file);
      });
      row.append(label, input);
      list.appendChild(row);
    });
    panel.querySelector('[data-close-images]').addEventListener('click', () => panel.remove());
    panel.querySelector('[data-reset-images]').addEventListener('click', () => {
      localStorage.removeItem(imageKey);
      location.reload();
    });
    document.body.appendChild(panel);
  }

  function createTools() {
    if (document.querySelector('.dc04u-theme-toggle')) return;
    const nav = document.querySelector('.dc04u-nav .nav-actions') || document.querySelector('.dc04u-nav');
    if (!nav) return;
    const themeButton = document.createElement('button');
    themeButton.type = 'button';
    themeButton.className = 'dc04u-theme-toggle';
    themeButton.title = 'Change color theme';
    const updateThemeLabel = () => {
      themeButton.textContent = document.documentElement.dataset.localTheme === 'beige' ? 'Dark mode' : 'Light mode';
    };
    updateThemeLabel();
    themeButton.addEventListener('click', () => {
      const next = document.documentElement.dataset.localTheme === 'beige' ? 'dark' : 'beige';
      setTheme(next);
      updateThemeLabel();
    });
    const language = nav.querySelector('.nav-lang-wrap');
    nav.insertBefore(themeButton, language || null);
  }

  function removeLoginControls() {
    document.querySelectorAll('button, a').forEach((element) => {
      const label = (element.innerText || element.getAttribute('aria-label') || '').trim().toLowerCase();
      if (blockedLabels.has(label)) element.remove();
    });
  }

  new MutationObserver(removeLoginControls).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
  setTheme(localStorage.getItem(themeKey) || 'dark');
  new MutationObserver(() => {
    removeLoginControls();
    createTools();
    applyImages();
  }).observe(document.body, { childList: true, subtree: true });
  removeLoginControls();
  createTools();
  applyImages();
})();
