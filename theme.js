(function initializeThemeModule() {
    function getStoredTheme() {
        return window.localStorage.getItem("agenthub-theme");
    }

    function getPreferredTheme() {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            return storedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function setTheme(theme) {
        const isDark = theme === "dark";

        document.documentElement.classList.toggle("dark", isDark);

        const themeIcon = document.querySelector("[data-theme-icon]");
        if (themeIcon) {
            themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
        }
    }

    function applyInitialTheme() {
        setTheme(getPreferredTheme());
    }

    function initializeThemeToggle() {
        setTheme(getPreferredTheme());

        const toggleButton = document.querySelector("[data-theme-toggle]");
        if (!toggleButton || toggleButton.dataset.themeBound === "true") {
            return;
        }

        toggleButton.dataset.themeBound = "true";
        toggleButton.addEventListener("click", () => {
            const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
            setTheme(nextTheme);
            window.localStorage.setItem("agenthub-theme", nextTheme);
        });
    }

    window.AgentHubTheme = {
        applyInitialTheme,
        getPreferredTheme,
        initializeThemeToggle,
        setTheme
    };

    applyInitialTheme();
})();