const translations = {
    br: {
        nav_about: "Sobre", nav_projects: "Projetos", nav_habilidades: "Habilidades", nav_certs: "Certificados", nav_contact: "CONTATO", nav_partners: "Parceiros",
        export_menu: "Exportar", export_portfolio: "Exportar Portfólio", export_cv: "Exportar CV",
        hero_status: "Disponível para Desafios",
        hero_title: "Analista de TI e <span class='text-white'>Futuro Desenvolvedor Full Stack,</span> especializado em criar soluções com Inteligência Artificial.",
        about_header: "Sobre",
        about_text: "Atualmente no <span class='text-cyan-400 font-semibold'>último período</span> de Análise e Desenvolvimento de Sistemas no Centro Universitário Serra dos Órgãos – <span class='text-white font-semibold'>UNIFESO (Teresópolis)</span>, trilhei um caminho de evolução constante: da base sólida em suporte e redes na Prefeitura de Saquarema ao desenvolvimento de softwares complexos. Meu objetivo é integrar IA e bancos de dados MySQL para entregar soluções Full Stack que resolvam problemas reais de forma inovadora.",
        projects_header: "Projetos em Destaque",
        proj1_desc: "API RESTful completa utilizando Node.js e MySQL.",
        habilidades_header: "Minhas Competências",
        skill1_desc: "Banco de Dados", 
        skill2_desc: "Front-end e Lógica", 
        skill3_desc: "Suporte e Redes", 
        skill4_desc: "Manutenção",
        skill_lang_title: "Idiomas", 
        skill_lang_desc: "Português Nativo",
        skill1_tooltip: "Gerenciamento de dados, consultas e modelagem com MySQL.",
        skill2_tooltip: "Desenvolvimento de interface e lógica de aplicações web.",
        skill3_tooltip: "Suporte técnico e administração de redes.",
        skill4_tooltip: "Montagem, manutenção e otimização de hardware.",
        skill_lang_tooltip: "Português nativo com conhecimentos básicos de inglês.",
        certs_header: "Certificações e Cursos",
        cert_ads: "Análise e Desenvolvimento de Sistemas",
        cert_mysql: "Especialista em MySQL (40h)",
        cert_english_title: "Inglês para Iniciantes (20h)",
        cert_palestra_1: "Palestra: Compliance Tecnológico (Ouvinte)",
        cert_palestra_2: "Palestra: Carreira TI Internacional (Ouvinte)",
        partners_header: "Parceiros",
        contact_header: "Vamos conversar?", 
        contact_btn: "ENVIAR PARA WHATSAPP",
        contact_placeholder_name: "Seu Nome",
        contact_placeholder_msg: "Sua Mensagem"
    },
    en: {
        nav_about: "About", nav_projects: "Projects", nav_habilidades: "Skills", nav_certs: "Certificates", nav_contact: "CONTACT", nav_partners: "Partners",
        export_menu: "Export", export_portfolio: "Export Portfolio", export_cv: "Export CV",
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
        skill1_tooltip: "Database management, queries, and modeling with MySQL.",
        skill2_tooltip: "Building web interfaces and app logic.",
        skill3_tooltip: "Technical support and network administration.",
        skill4_tooltip: "Hardware assembly, maintenance, and optimization.",
        skill_lang_tooltip: "Native Portuguese with basic English skills.",
        certs_header: "Certifications & Courses",
        cert_ads: "Systems Analysis and Development",
        cert_mysql: "MySQL Specialist (40h)",
        cert_english_title: "English for Beginners (20h)",
        cert_palestra_1: "Lecture: Tech Compliance (Attendee)",
        cert_palestra_2: "Lecture: Int. IT Career (Attendee)",
        partners_header: "Partners",
        contact_header: "Let's talk?", 
        contact_btn: "SEND TO WHATSAPP",
        contact_placeholder_name: "Your Name",
        contact_placeholder_msg: "Your Message"
    },
    es: {
        nav_about: "Sobre", nav_projects: "Proyectos", nav_habilidades: "Habilidades", nav_certs: "Certificados", nav_contact: "CONTACTO", nav_partners: "Socios",
        export_menu: "Exportar", export_portfolio: "Exportar Portafolio", export_cv: "Exportar CV",
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
        skill1_tooltip: "Gestión de datos, consultas y modelado con MySQL.",
        skill2_tooltip: "Desarrollo de interfaces y lógica para aplicaciones web.",
        skill3_tooltip: "Soporte técnico y administración de redes.",
        skill4_tooltip: "Montaje, mantenimiento y optimización de hardware.",
        skill_lang_tooltip: "Portugués nativo con conocimientos básicos de inglés.",
        certs_header: "Certificaciones y Cursos",
        cert_ads: "Análisis y Desarrollo de Sistemas",
        cert_mysql: "Especialista en MySQL (40h)",
        cert_english_title: "Inglés para Principiantes (20h)",
        cert_palestra_1: "Conferencia: Compliance Tecnológico",
        cert_palestra_2: "Conferencia: Carrera TI Internacional",
        partners_header: "Socios",
        contact_header: "¿Hablamos?", 
        contact_btn: "ENVIAR A WHATSAPP",
        contact_placeholder_name: "Tu Nombre",
        contact_placeholder_msg: "Tu Mensaje"
    }
};

const partners = [
    {
        name: "MAD",
        logoPath: "logo.mad.jpg",
        description: "Parceria estratégica no desenvolvimento de software e infraestrutura tecnológica para soluções em administração, educação e consultoria empresarial.",
        websiteUrl: "https://lucasmarquesdevl.github.io/Mad/"
    },
    {
        name: "Associação Comunitária Social e Cultural Marcelo Decolores (ACSCMD)",
        logoPath: "logo.assoc.jpg",
        description: "Associação focada em atividades sociais e culturais para o desenvolvimento comunitário.",
        websiteUrl: "https://www.amarcelodecolores.org.br/"
    },
    {
        name: "Projeto de Inclusão Social Amigos da Ponta D'areia (PDA)",
        logoPath: "logo.ponta.jpg",
        description: "Projeto dedicado à inclusão social e apoio às comunidades locais.",
        websiteUrl: "https://www.facebook.com/PISAPDA/"
    }
];

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

    // Garanta que os ícones do Lucide carreguem após a tradução
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function initTheme() {
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    
    themeBtn.addEventListener('click', toggleTheme);
}

function applyTheme(theme) {
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return;
    
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeBtn.innerHTML = '<i data-lucide="moon" class="w-5 h-5"></i>';
    } else {
        document.body.classList.remove('light-mode');
        themeBtn.innerHTML = '<i data-lucide="sun" class="w-5 h-5"></i>';
    }
    
    localStorage.setItem('theme', theme);
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

function setupExportMenu() {
    const exportBtn = document.getElementById('export-btn');
    const exportMenu = document.getElementById('export-menu');
    
    if (!exportBtn || !exportMenu) return;
    
    exportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        exportMenu.classList.toggle('hidden');
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-container')) {
            exportMenu.classList.add('hidden');
        }
    });
}

function exportPortfolioPDF() {
    try {
        console.log('Iniciando export de PDF...');

        if (!window.html2pdf) {
            alert('Biblioteca de PDF não está carregada. Tente recarregar a página.');
            return;
        }

        const opt = {
            margin: [10, 10, 10, 10],
            filename: 'Lucas_Trindade_Portfolio.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true,
                backgroundColor: '#0f172a'
            },
            jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
            pagebreak: { mode: ['css', 'avoid-all', 'legacy'] }
        };

        html2pdf().set(opt).from(document.body).save();
        console.log('PDF exportado com sucesso!');
    } catch (e) {
        console.error('Erro ao exportar PDF:', e);
        alert('Erro ao exportar PDF: ' + e.message);
    }
}

function exportCV() {
    alert('CV será disponibilizado em breve! Entre em contato para mais informações.');
    document.getElementById('export-menu').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const initialLang = localStorage.getItem('preferredLang') || 'br';
    setLanguage(initialLang);
    renderPartners();
    initTheme();
    setupExportMenu();
    
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('name').value;
            const mensagem = document.getElementById('message').value;
            const meuNumero = "5522997864651"; 
            const textoMensagem = `Olá Lucas! Meu nome é ${nome}. ${mensagem}`;
            const linkZap = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${encodeURIComponent(textoMensagem)}`;
            window.open(linkZap, '_blank');
        });
    }
});

function initTheme() {
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    
    themeBtn.addEventListener('click', toggleTheme);
}

function applyTheme(theme) {
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return;
    
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeBtn.innerHTML = '<i data-lucide="moon" class="w-5 h-5"></i>';
    } else {
        document.body.classList.remove('light-mode');
        themeBtn.innerHTML = '<i data-lucide="sun" class="w-5 h-5"></i>';
    }
    
    localStorage.setItem('theme', theme);
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

function setupExportMenu() {
    const exportBtn = document.getElementById('export-btn');
    const exportMenu = document.getElementById('export-menu');
    
    if (!exportBtn || !exportMenu) return;
    
    exportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        exportMenu.classList.toggle('hidden');
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-container')) {
            exportMenu.classList.add('hidden');
        }
    });
}

function renderPartners() {
    const partnersSection = document.createElement('section');
    partnersSection.id = 'partners';
    partnersSection.className = 'py-20 px-6';

    const container = document.createElement('div');
    container.className = 'max-w-6xl mx-auto';

    const header = document.createElement('h3');
    header.className = 'text-3xl font-bold mb-12 text-center text-white';
    header.setAttribute('data-i18n', 'partners_header');
    header.innerHTML = 'Parceiros'; // default

    container.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'grid md:grid-cols-3 gap-8';

    partners.forEach(partner => {
        const card = document.createElement('div');
        card.className = 'glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 text-center';

        const img = document.createElement('img');
        img.src = partner.logoPath;
        img.alt = `Logo da ${partner.name}`;
        img.className = 'partner-logo w-full h-48 object-cover';
        img.setAttribute('aria-label', `Logo do parceiro ${partner.name}`);

        let imgElement = img;
        if (partner.websiteUrl) {
            const link = document.createElement('a');
            link.href = partner.websiteUrl;
            link.target = '_blank';
            link.appendChild(img);
            imgElement = link;
        }

        const content = document.createElement('div');
        content.className = 'p-6';

        const name = document.createElement('h4');
        name.className = 'text-xl font-bold mb-2 text-white';
        if (partner.websiteUrl) {
            const link = document.createElement('a');
            link.href = partner.websiteUrl;
            link.target = '_blank';
            link.textContent = partner.name;
            link.className = 'hover:text-cyan-300 transition';
            name.appendChild(link);
        } else {
            name.textContent = partner.name;
        }

        const desc = document.createElement('p');
        desc.className = 'text-sm text-slate-400 mb-6';
        desc.textContent = partner.description;

        content.appendChild(name);
        content.appendChild(desc);

        card.appendChild(imgElement);
        card.appendChild(content);

        grid.appendChild(card);
    });

    container.appendChild(grid);
    partnersSection.appendChild(container);

    const contactSection = document.getElementById('contact');
    contactSection.parentNode.insertBefore(partnersSection, contactSection);
}