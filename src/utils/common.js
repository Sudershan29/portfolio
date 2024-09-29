export function isWorkMode() {
    return localStorage.getItem('theme') === 'work'
}

export function setMode(val) {
    const theme = val ? 'work' : 'friend';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}