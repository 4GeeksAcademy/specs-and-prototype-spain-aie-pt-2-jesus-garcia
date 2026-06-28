const NAV_ACTIVE_CLASSES = [
    "text-secondary",
    "dark:text-secondary",
    "border-l-4",
    "border-primary",
    "bg-surface-container-highest/50",
    "shadow-[inset_0_0_15px_rgba(6,182,212,0.1)]",
    "translate-x-1",
    "opacity-100"
];

const NAV_INACTIVE_CLASSES = [
    "text-on-surface-variant",
    "dark:text-on-surface-variant",
    "opacity-70"
];

function resolveSectionFromPath(pathname) {
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";

    if (normalizedPath === "/") {
        return "dashboard";
    }

    return normalizedPath.split("/").filter(Boolean)[0] || "dashboard";
}

function initializeActiveNavigation() {
    const activeSection = resolveSectionFromPath(window.location.pathname);

    document.querySelectorAll("[data-nav-item]").forEach((link) => {
        const isActive = link.dataset.navItem === activeSection;

        link.classList.remove(...NAV_ACTIVE_CLASSES, ...NAV_INACTIVE_CLASSES);

        if (isActive) {
            link.classList.add(...NAV_ACTIVE_CLASSES);
        } else {
            link.classList.add(...NAV_INACTIVE_CLASSES);
        }
    });
}

async function injectComponent(slotSelector, componentPath) {
    const slot = document.querySelector(slotSelector);
    if (!slot) {
        return;
    }

    const response = await fetch(componentPath);
    if (!response.ok) {
        throw new Error(`Failed to load component: ${componentPath}`);
    }

    slot.innerHTML = await response.text();
}

function initializeSidebar() {
    const toggleBtn = document.querySelector('[data-sidebar-toggle]');
    const sidebar = document.querySelector('[data-sidebar]');
    if (!toggleBtn || !sidebar) return;

    const backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    document.body.appendChild(backdrop);

    const icon = toggleBtn.querySelector('.material-symbols-outlined');

    function openSidebar() {
        sidebar.classList.add('open');
        backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (icon) icon.textContent = 'close';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
        if (icon) icon.textContent = 'menu';
    }

    toggleBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    backdrop.addEventListener('click', closeSidebar);

    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });
}

async function initializeLayout() {
    try {
        await Promise.all([
            injectComponent("[data-layout-sidebar]", "/components/sidebar.html"),
            injectComponent("[data-layout-topbar]", "/components/topbar.html")
        ]);

        initializeActiveNavigation();
        initializeSidebar();
        window.AgentHubTheme?.initializeThemeToggle();
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", initializeLayout);