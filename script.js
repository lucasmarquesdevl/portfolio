const translations = {
    br: {
        nav_about: "Sobre", nav_projects: "Projetos", nav_habilidades: "Habilidades", nav_certs: "Certificados", nav_contact: "CONTATO",
        hero_status: "Disponível para Desafios",
        hero_title: "Analista de TI e <span class='text-white'>Futuro Desenvolvedor Full Stack,</span> especializado em criar soluções com Inteligência Artificial.",
        about_header: "Sobre",
        about_text: "Atualmente no último período de Análise e Desenvolvimento de Sistemas no Centro Universitário Serra dos Órgãos – UNIFESO (Teresópolis), trilhei um caminho de evolução constante: da base sólida em suporte e redes na Prefeitura de Saquarema ao desenvolvimento de softwares complexos. Meu objetivo é integrar IA e bancos de dados MySQL para entregar soluções Full Stack que resolvam problemas reais de forma inovadora.",
        projects_header: "Projetos em Destaque",
        proj1_desc: "API RESTful completa utilizando Node.js e MySQL.",
        habilidades_header: "Minhas Competências",
        skill1_desc: "Banco de Dados", 
        skill2_desc: "Front-end e Lógica", 
        skill3_desc: "Suporte e Redes", 
        skill4_desc: "Manutenção",
        skill_lang_title: "Idiomas", 
        skill_lang_desc: "Português Nativo",
        certs_header: "Certificações e Cursos",
        cert_ads: "Análise e Desenvolvimento de Sistemas",
        cert_mysql: "Especialista em MySQL (40h)",
        cert_english_title: "Inglês para Iniciantes (20h)",
        cert_palestra_1: "Palestra: Compliance Tecnológico (Ouvinte)",
        cert_palestra_2: "Palestra: Carreira TI Internacional (Ouvinte)",
        contact_header: "Vamos conversar?", 
        contact_btn: "ENVIAR PARA WHATSAPP",
        contact_placeholder_name: "Seu Nome",
        contact_placeholder_msg: "Sua Mensagem"
    },
    en: {
        nav_about: "About", nav_projects: "Projects", nav_habilidades: "Skills", nav_certs: "Certificates", nav_contact: "CONTACT",
        hero_status: "Available for Challenges",
        hero_title: "IT Analyst & <span class='text-white'>Aspiring Full Stack Developer</span> focused on AI.",
        about_header: "About",
        about_text: "Currently in my fifth and final semester of Systems Analysis and Development at Unifeso...",
        projects_header: "Featured Projects",
        proj1_desc: "Complete RESTful API using Node.js and MySQL.",
        habilidades_header: "Tech Stack & Competencies",
        skill1_desc: "Databases", 
        skill2_desc: "Front-end & Logic", 
        skill3_desc: "Support & Networks", 
        skill4_desc: "Maintenance",
        skill_lang_title: "Languages", 
        skill_lang_desc: "Native Portuguese",
        certs_header: "Certifications & Courses",
        cert_ads: "Systems Analysis and Development",
        cert_mysql: "MySQL Specialist (40h)",
        cert_english_title: "English for Beginners (20h)",
        cert_palestra_1: "Lecture: Tech Compliance (Attendee)",
        cert_palestra_2: "Lecture: Int. IT Career (Attendee)",
        contact_header: "Let's talk?", 
        contact_btn: "SEND TO WHATSAPP",
        contact_placeholder_name: "Your Name",
        contact_placeholder_msg: "Your Message"
    },
    es: {
        nav_about: "Sobre", nav_projects: "Proyectos", nav_habilidades: "Habilidades", nav_certs: "Certificados", nav_contact: "CONTACTO",
        hero_status: "Disponible para Desafíos",
        hero_title: "IT Analyst & <span class='text-white'>Aspiring Full Stack Developer</span> enfocado en IA.",
        about_header: "Sobre",
        about_text: "Actualmente cursando el quinto y último período de Análisis y Desarrollo de Sistemas en Unifeso...",
        projects_header: "Proyectos Destacados",
        proj1_desc: "API RESTful completa usando Node.js e MySQL.",
        habilidades_header: "Mis Competencias",
        skill1_desc: "Bases de Datos", 
        skill2_desc: "Front-end y Lógica", 
        skill3_desc: "Soporte y Redes", 
        skill4_desc: "Mantenimiento",
        skill_lang_title: "Idiomas", 
        skill_lang_desc: "Português Nativo",
        certs_header: "Certificaciones y Cursos",
        cert_ads: "Análisis y Desarrollo de Sistemas",
        cert_mysql: "Especialista en MySQL (40h)",
        cert_english_title: "Inglés para Principiantes (20h)",
        cert_palestra_1: "Conferencia: Compliance Tecnológico",
        cert_palestra_2: "Conferencia: Carrera TI Internacional",
        contact_header: "¿Hablamos?", 
        contact_btn: "ENVIAR A WHATSAPP",
        contact_placeholder_name: "Tu Nombre",
        contact_placeholder_msg: "Tu Mensaje"
    }
};

function setLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key] !== undefined) el.placeholder = translations[lang][key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    localStorage.setItem('preferredLang', lang);

    // Garante que os ícones do Lucide carreguem após a tradução
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('name').value;
    const mensagem = document.getElementById('message').value;
    const meuNumero = "5522997864651"; 
    const textoMensagem = `Olá Lucas! Meu nome é ${nome}. ${mensagem}`;
    const linkZap = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${encodeURIComponent(textoMensagem)}`;
    window.open(linkZap, '_blank');
});

document.addEventListener('DOMContentLoaded', () => {
    const initialLang = localStorage.getItem('preferredLang') || 'br';
    setLanguage(initialLang);
});