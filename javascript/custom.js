document.addEventListener("DOMContentLoaded", () => {
    const componentsCount = document.getElementById('custom-components-count');
    const themesCount = document.getElementById('custom-themes-count');

    let components = 1;
    let themes = 1;

    const maxComponents = 229;
    const maxThemes = 10;

    const updateCounts = () => {
        if (components < maxComponents) {
            components++;
            componentsCount.textContent = components;
        }

        if (themes < maxThemes) {
            themes++;
            themesCount.textContent = themes + "+";
        }
    }

    setInterval(updateCounts, 10);
});
