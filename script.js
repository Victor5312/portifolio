const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const copyButton = document.querySelector('[data-copy-intro]');
const toast = document.querySelector('[data-toast]');

const updateHeader = () => {
    header?.classList.toggle('scrolled', window.scrollY > 24);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const closeMenu = () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('open');
    document.body.classList.remove('menu-open');
};

menuButton?.addEventListener('click', () => {
    const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(willOpen));
    menu?.classList.toggle('open', willOpen);
    document.body.classList.toggle('menu-open', willOpen);
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -35px' });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

copyButton?.addEventListener('click', async () => {
    const apresentacao = 'Olá! Meu nome é Victor Emanuel. Sou desenvolvedor web e trabalho com PHP, MySQL, HTML, CSS, JavaScript e Python. Quero conversar sobre um projeto.';
    try {
        await navigator.clipboard.writeText(apresentacao);
        copyButton.querySelector('[data-copy-label]').textContent = 'Apresentação copiada';
        toast?.classList.add('visible');
        window.setTimeout(() => {
            toast?.classList.remove('visible');
            copyButton.querySelector('[data-copy-label]').textContent = 'Copiar apresentação';
        }, 3000);
    } catch {
        window.prompt('Copie sua apresentação:', apresentacao);
    }
});
