export {};

declare global {
  interface Window {
    __jmtrsUiBound?: boolean;
  }
}

const localeKey = "jmtrs-locale";
const themeKey = "jmtrs-theme";
const root = document.documentElement;
let menuHideTimer: ReturnType<typeof setTimeout> | undefined;
let modalHideTimer: ReturnType<typeof setTimeout> | undefined;
let lastModalTrigger: HTMLElement | null = null;

const desktopQuery = window.matchMedia("(min-width: 75rem)");
const reducedMotionQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);
const reducedDataQuery = window.matchMedia("(prefers-reduced-data: reduce)");

const getPageLocale = (): string =>
  document.documentElement.lang === "es" ? "es" : "en";

const canUseFullHeroEffect = () =>
  !reducedMotionQuery.matches && !reducedDataQuery.matches;

const getThemeToggles = () => document.querySelectorAll("[data-theme-toggle]");

const getLocaleSwitches = () =>
  document.querySelectorAll("[data-locale-switch]");

const getMenu = () => document.querySelector("[data-mobile-menu]");

const getMenuToggle = () => document.querySelector("[data-menu-toggle]");

const getContactModal = () => document.querySelector("[data-contact-modal]");

const getContactModalPanel = () => document.getElementById("contact-modal");

const getHeroTitle = () =>
  document.querySelector<HTMLElement>("[data-hero-title]");

const getSiteHeader = () =>
  document.querySelector<HTMLElement>("[data-site-header]");

const getSiteFooter = () =>
  document.querySelector<HTMLElement>("[data-site-footer]");

const getFocusableElements = (container: HTMLElement) =>
  Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("hidden"));

const isContactModalOpen = () => {
  const modal = getContactModal();
  return modal instanceof HTMLElement && modal.dataset.open === "true";
};

const setTheme = (theme: string) => {
  root.dataset.theme = theme;
  window.localStorage.setItem(themeKey, theme);
  getThemeToggles().forEach((toggle) => {
    if (toggle instanceof HTMLButtonElement) {
      toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  });
};

const setLocaleUi = (nextLocale: string) => {
  getLocaleSwitches().forEach((switchNode) => {
    if (!(switchNode instanceof HTMLElement)) {
      return;
    }

    switchNode.dataset.currentLocale = nextLocale;
    switchNode.querySelectorAll("[data-locale-option]").forEach((link) => {
      const linkLocale = link.getAttribute("data-locale");
      if (!(link instanceof HTMLElement) || !linkLocale) {
        return;
      }
      if (linkLocale === nextLocale) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  });
};

const syncLocaleUiFromDocument = () => {
  const pageLocale = getPageLocale();
  window.localStorage.setItem(localeKey, pageLocale);
  setLocaleUi(pageLocale);
};

const closeMenu = () => {
  const menu = getMenu();
  const menuToggle = getMenuToggle();
  if (!(menu instanceof HTMLElement)) {
    return;
  }
  menu.dataset.open = "false";
  document.body.dataset.menuOpen = "false";
  if (menuToggle instanceof HTMLButtonElement) {
    menuToggle.setAttribute("aria-expanded", "false");
  }
  clearTimeout(menuHideTimer);
  menuHideTimer = setTimeout(() => {
    menu.hidden = true;
  }, 220);
};

const closeContactModal = () => {
  const modal = getContactModal();
  if (!(modal instanceof HTMLElement)) {
    return;
  }

  modal.dataset.open = "false";
  document.body.dataset.modalOpen = "false";
  clearTimeout(modalHideTimer);

  const finishClose = () => {
    modal.hidden = true;
    lastModalTrigger?.focus();
    lastModalTrigger = null;
  };

  if (reducedMotionQuery.matches) {
    finishClose();
    return;
  }

  modalHideTimer = setTimeout(finishClose, 180);
};

const openContactModal = (trigger?: HTMLElement | null) => {
  const modal = getContactModal();
  const panel = getContactModalPanel();
  if (!(modal instanceof HTMLElement) || !(panel instanceof HTMLElement)) {
    return;
  }

  clearTimeout(modalHideTimer);
  lastModalTrigger =
    trigger ??
    (document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null);
  modal.hidden = false;
  document.body.dataset.modalOpen = "true";

  requestAnimationFrame(() => {
    modal.dataset.open = "true";
    const focusTarget = getFocusableElements(panel).find(
      (element) => element instanceof HTMLButtonElement,
    );
    (focusTarget ?? panel).focus();
  });
};

const openMenu = () => {
  const menu = getMenu();
  const menuToggle = getMenuToggle();
  if (
    !(menu instanceof HTMLElement) ||
    !(menuToggle instanceof HTMLButtonElement)
  ) {
    return;
  }
  menu.hidden = false;
  requestAnimationFrame(() => {
    menu.dataset.open = "true";
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.dataset.menuOpen = "true";
  });
};

const bindInteractiveHandlers = () => {
  if (window.__jmtrsUiBound) {
    return;
  }
  window.__jmtrsUiBound = true;

  document.addEventListener("pointerdown", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    const localeLink = target.closest<HTMLAnchorElement>("[data-locale-link]");
    if (!(localeLink instanceof HTMLAnchorElement)) {
      return;
    }
    const nextLocale = localeLink.getAttribute("data-locale");
    if (!nextLocale || nextLocale === getPageLocale()) {
      return;
    }
    window.localStorage.setItem(localeKey, nextLocale);
    setLocaleUi(nextLocale);
  });

  document.addEventListener(
    "pointerover",
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const localeLink =
        target.closest<HTMLAnchorElement>("[data-locale-link]");
      if (!(localeLink instanceof HTMLAnchorElement)) return;
      const { href } = localeLink;
      if (document.head.querySelector(`link[rel="prefetch"][href="${href}"]`))
        return;
      const hint = document.createElement("link");
      hint.rel = "prefetch";
      hint.href = href;
      document.head.appendChild(hint);
    },
    { passive: true },
  );

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const menu = getMenu();
    const clickedInsideMenu = !!target.closest("[data-mobile-menu]");
    const clickedMenuToggle = !!target.closest("[data-menu-toggle]");
    if (
      menu instanceof HTMLElement &&
      menu.dataset.open === "true" &&
      !clickedInsideMenu &&
      !clickedMenuToggle
    ) {
      closeMenu();
    }

    const themeToggle = target.closest("[data-theme-toggle]");
    if (themeToggle instanceof HTMLButtonElement) {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      return;
    }

    const localeLink = target.closest<HTMLAnchorElement>("[data-locale-link]");
    if (localeLink instanceof HTMLAnchorElement) {
      const nextLocale = localeLink.getAttribute("data-locale");
      if (!nextLocale) {
        return;
      }

      window.localStorage.setItem(localeKey, nextLocale);
      if (nextLocale === getPageLocale()) {
        event.preventDefault();
        closeMenu();
        return;
      }

      setLocaleUi(nextLocale);
      closeMenu();
      return;
    }

    const localeSwitch = target.closest("[data-locale-switch]");
    if (localeSwitch instanceof HTMLElement) {
      const currentLocale = getPageLocale();
      const nextLocale = currentLocale === "en" ? "es" : "en";
      const targetLink = localeSwitch.querySelector<HTMLAnchorElement>(
        `[data-locale-link][data-locale="${nextLocale}"]`,
      );
      targetLink?.click();
      return;
    }

    const menuToggle = target.closest("[data-menu-toggle]");
    if (menuToggle instanceof HTMLButtonElement) {
      const menu = getMenu();
      if (!(menu instanceof HTMLElement)) {
        return;
      }

      const isOpen = menu.dataset.open === "true";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
      return;
    }

    const modalTrigger = target.closest("[data-contact-open]");
    if (modalTrigger instanceof HTMLElement) {
      openContactModal(modalTrigger);
      return;
    }

    const modalClose = target.closest("[data-contact-close]");
    if (modalClose instanceof HTMLElement) {
      closeContactModal();
      return;
    }

    const modal = target.closest("[data-contact-modal]");
    const modalPanel = target.closest(".contact-modal-panel");
    if (modal instanceof HTMLElement && !modalPanel) {
      closeContactModal();
      return;
    }

    if (target.closest("[data-mobile-menu] a")) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    const menu = getMenu();
    const panel = getContactModalPanel();

    if (event.key === "Escape" && isContactModalOpen()) {
      closeContactModal();
      return;
    }

    if (
      event.key === "Tab" &&
      panel instanceof HTMLElement &&
      isContactModalOpen()
    ) {
      const focusable = getFocusableElements(panel);
      if (!focusable.length) {
        event.preventDefault();
        panel.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
        return;
      }
    }

    if (
      event.key === "Escape" &&
      menu instanceof HTMLElement &&
      menu.dataset.open === "true"
    ) {
      closeMenu();
    }
  });

  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) {
      const menu = getMenu();
      if (menu instanceof HTMLElement && menu.dataset.open === "true") {
        closeMenu();
      }
    }
  });
};

const syncUi = () => {
  const storedTheme = window.localStorage.getItem(themeKey);
  const initialTheme =
    storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
  setTheme(initialTheme);
  syncLocaleUiFromDocument();
};

const syncLayoutMetrics = () => {
  const header = getSiteHeader();
  const footer = getSiteFooter();

  if (header instanceof HTMLElement) {
    root.style.setProperty("--site-header-height", `${header.offsetHeight}px`);
  }

  if (footer instanceof HTMLElement) {
    root.style.setProperty("--site-footer-height", `${footer.offsetHeight}px`);
  }
};

const updateHeroEffectMode = () => {
  const heroTitle = getHeroTitle();
  if (!(heroTitle instanceof HTMLElement)) {
    return;
  }

  heroTitle.dataset.heroEffect = canUseFullHeroEffect() ? "full" : "compact";
};

bindInteractiveHandlers();
syncUi();
updateHeroEffectMode();
requestAnimationFrame(() => syncLayoutMetrics());

window.addEventListener("resize", syncLayoutMetrics, { passive: true });
reducedMotionQuery.addEventListener("change", updateHeroEffectMode);
reducedDataQuery.addEventListener("change", updateHeroEffectMode);
document.fonts?.ready
  .then(() => {
    syncLayoutMetrics();
    updateHeroEffectMode();
  })
  .catch(() => undefined);
