(function () {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  const label = button.querySelector("[data-theme-label]");
  const iconPath = button.querySelector("[data-theme-icon-path]");

  const moonPath =
    "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z";
  const sunPath =
    "M12 3V1m0 22v-2m9-9h2M1 12h2m15.364 6.364 1.414 1.414M3.222 3.222l1.414 1.414m13.728 0 1.414-1.414M3.222 20.778l1.414-1.414M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z";

  const getStoredTheme = () => {
    try {
      return window.localStorage.getItem("theme");
    } catch (error) {
      return null;
    }
  };

  const storeTheme = (theme) => {
    try {
      window.localStorage.setItem("theme", theme);
    } catch (error) {
      /* ignore storage failures */
    }
  };

  const applyTheme = (theme, persist) => {
    root.dataset.theme = theme;
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    button.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
    if (label) label.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    if (iconPath) iconPath.setAttribute("d", theme === "dark" ? sunPath : moonPath);
    if (persist) storeTheme(theme);
  };

  const initialTheme = root.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(initialTheme, false);

  button.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  });

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  if (!getStoredTheme() && typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", (event) => {
      applyTheme(event.matches ? "dark" : "light", false);
    });
  }
})();
