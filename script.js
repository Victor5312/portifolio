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
    const apresentacao = 'Victor Emanuel — Desenvolvedor back-end com PHP, Python e MySQL. Experiência em sistemas hospitalares para prefeituras, sistemas de controle de embarcações, PDV da Sorveteria Gostiki e PersonalFit. Também trabalha com HTML, CSS e JavaScript.';
    try {
        await navigator.clipboard.writeText(apresentacao);
        copyButton.querySelector('[data-copy-label]').textContent = 'Apresentação copiada';
        toast?.classList.add('visible');
        window.setTimeout(() => {
            toast?.classList.remove('visible');
            copyButton.querySelector('[data-copy-label]').textContent = 'Copiar resumo profissional';
        }, 3000);
    } catch {
        window.prompt('Copie sua apresentação:', apresentacao);
    }
});
