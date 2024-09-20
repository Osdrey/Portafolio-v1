const content = {
    es: {
        projects: "Proyectos",
        about: "Sobre mí",
        contact: "Contacto",
        language: "Idioma",
        Spanish: "Español",
        English: "Inglés",
        welcome: "¡Bienvenidos!",
        welcometext: `¡Bienvenidos a mi portafolio de proyectos! 
                    Mi nombre es Oscar, soy un estudiante enamorado de la tecnología, fascinado por las infinitas posibilidades que la programación nos ofrece para crear e innovar. 
                    Estoy en constante evolución, aprendiendo y experimentando en la búsqueda de nuevo conocimiento. 
                    Cada vez que visites este sitio web, podrás encontrar nuevos proyectos o mejoras en los que ya conociste.

                    En este portafolio, podrás explorar los proyectos en los que he trabajado, abarcando diversas áreas como el desarrollo front-end, back-end y Full-Stack. 
                    Cada proyecto es un reflejo de mi compromiso con la mejora continua y mi dedicación a explorar nuevas alternativas en el desarrollo de software. 
                    Estoy siempre listo para embarcarme en nuevos desafíos, ya que considero que el conocimiento es el recurso más valioso que podemos adquirir. 
                    Por eso, siempre estoy en busca de nuevos desafíos y oportunidades para aprender, crecer y aplicar lo aprendido en proyectos que hagan la diferencia.`
    },
    en: {
        projects: "Projects",
        about: "About me",
        contact: "Contact",
        language: "Language",
        Spanish: "Spanish",
        English: "English",
        welcome: "Welcome",
        welcometext: `Welcome to my project portfolio!
                    My name is Oscar, and I am a student in love with technology, fascinated by the endless possibilities that programming offers us to create and innovate. 
                    I am constantly evolving, learning, and experimenting in the pursuit of new knowledge. 
                    Every time you visit this website, you'll find new projects or improvements to the ones you already know.
                    In this portfolio, you'll explore the projects I've worked on, covering various areas such as front-end development, back-end development, and full-stack development. 
                    Each project reflects my commitment to continuous improvement and my dedication to exploring new alternatives in software development.
                    I'm always ready to take on new challenges, as I believe that knowledge is the most valuable resource we can acquire. 
                    That’s why I'm constantly seeking new challenges and opportunities to learn, grow, and apply what I've learned to projects that make a difference.   `
    }
};

function changeLanguage(lang) {
    // Actualizar los textos
    document.getElementById('welcome').textContent = content[lang].welcome;
    document.getElementById('welcome-text').textContent = content[lang].welcometext;
    // Actualizar menu superior
    document.getElementById('projects-link').textContent = content[lang].projects;
    document.getElementById('about-link').textContent = content[lang].about;
    document.getElementById('contact-link').textContent = content[lang].contact;
    document.getElementById('Spanish').textContent = content[lang].Spanish;
    document.getElementById('English').textContent = content[lang].English;
    // Actualiza el texto del enlace de idioma sin afectar al menú desplegable
    const languageLink = document.getElementById('language-link');
    languageLink.childNodes[0].textContent = content[lang].language;
}

// Inicializar en el idioma por defecto, por ejemplo, 'en'
document.addEventListener('DOMContentLoaded', () => changeLanguage('en'));

