// Language switching functionality
const body = document.body;
const langButtons = document.querySelectorAll('.lang-btn');

// Check for saved language preference
const savedLanguage = localStorage.getItem('language') || 'it';
body.setAttribute('data-language', savedLanguage);
updateActiveLangButton(savedLanguage);
loadLanguage(savedLanguage);

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang');
        body.setAttribute('data-language', selectedLang);
        localStorage.setItem('language', selectedLang);
        updateActiveLangButton(selectedLang);
        loadLanguage(selectedLang);
    });
});

function updateActiveLangButton(lang) {
    langButtons.forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-lang') === lang);
    });
}

// Language content
const translations = {
    it: {
        // Navigation
        'nav.home': 'Home',
        'nav.experience': 'Esperienza',
        'nav.skills': 'Skills',
        'nav.education': 'Formazione',
        'nav.publications': 'Pubblicazioni',
        'nav.conferences': 'Conferenze',
        'nav.contact': 'Contatti',
        
        // Hero Section
        'hero.name': 'Pasquale Vassallo',
        'hero.title': 'Ingegnere Informatico',
        'hero.description': 'Laureato in ingegneria informatica, sono una persona dinamica e orientata alla crescita professionale nel campo tecnologico. Mi appassionano le sfide che richiedono logica, creatività e innovazione.',
        'hero.contact': 'Contattami',
        'hero.download': 'Scarica CV',
        
        // Sections
        'sections.experience': 'Esperienza Lavorativa',
        'sections.skills': 'Competenze Tecniche',
        'sections.education': 'Formazione',
        'sections.publications': 'Pubblicazioni',
        'sections.conferences': 'Conferenze e Presentazioni',
        'sections.contact': 'Contatti',
        
        // Experience
        'experience.current.period': 'Gen 2025 - in corso',
        'experience.current.title': 'Assegnista di Ricerca',
        'experience.current.company': 'Università della Campania Luigi Vanvitelli',
        'experience.current.description': 'Progetto FLUENDO: Ricerca avanzata su tecniche di parallelismo e concorrenza. Sviluppo di metodologie innovative per la trasformazione automatica di algoritmi sequenziali in versioni parallele ottimizzate, utilizzando pattern algoritmici e compilatori source-to-source per ambienti cloud e HPC.',
        
        'experience.intern.period': 'Lug 2024 - Dic 2024',
        'experience.intern.title': 'Studente Tirocinante',
        'experience.intern.company': 'Università della Campania Luigi Vanvitelli',
        'experience.intern.description': 'Progetto RASTA: Realtà Aumentata e Story-Telling Automatizzato per la valorizzazione di Beni Culturali ed Itinerari. Progettazione e implementazione di soluzioni innovative per l\'integrazione di tecnologie AR nel settore dei beni culturali.',
        
        // Skills
        'skills.coding.title': 'Coding',
        'skills.web.title': 'Web Dev & Database',
        'skills.paradigms.title': 'Paradigmi di Programmazione',
        'skills.paradigms.parallel': 'Programmazione Parallela',
        'skills.paradigms.concurrency': 'Concorrenza',
        'skills.paradigms.patterns': 'Pattern Algoritmici',
        'skills.cloud.title': 'Cloud Computing - in studio',
        'skills.cloud.distributed': 'Sistemi Distribuiti',
        'skills.devops.title': 'DevOps & Version Control',
        'skills.ai.title': 'Data Analysis & AI Tools',
        'skills.ai.ml': 'Machine Learning frameworks',
        'skills.ai.ai': 'AI paradigms',
        
        // Education
        'education.masters.period': '2024 - In corso',
        'education.masters.title': 'Laurea Magistrale in Ingegneria Informatica',
        'education.masters.institution': 'Università della Campania Luigi Vanvitelli',
        'education.masters.details': 'Curriculum: Sistemi Distribuiti e Cloud Computing',
        
        'education.bachelors.period': '2021 - 2024',
        'education.bachelors.title': 'Laurea Triennale in Ingegneria Informatica',
        'education.bachelors.institution': 'Università della Campania Luigi Vanvitelli',
        'education.bachelors.details': 'Voto: 110/110 con Lode<br>Tesi: "Realtà virtuale e aumentata collaborativa mediante Intelligenza Artificiale Generativa e deployment su Cloud Continuum"',
        
        // Publications
        'publications.main.title': 'Designing a Cloud Continuum Architecture for a Collaborative Augmented and Virtual Reality Application in the Cultural Heritage Domain',
        'publications.main.authors': 'P. Vassallo, B. Di Martino, G. J. Pezzullo',
        'publications.main.venue': 'Advanced Information Networking and Applications, L. Barolli, Ed., Cham: Springer Nature Switzerland, 2025, pp. 139–147.',
        'publications.main.abstract': 'Questo studio presenta la progettazione di una metodologia supportata da un\'architettura collaborativa operante in un ambiente cloud-edge, in grado di distribuire applicazioni di realtà virtuale (VR) e realtà aumentata (AR) e consentire la condivisione dello spazio operativo e l\'interazione bidirezionale tra di esse.',
        'publications.read': 'Leggi l\'articolo',
        
        // Conferences
        'conferences.swism.date': 'Luglio 2025',
        'conferences.swism.title': 'SWISM@CISIS 2025',
        'conferences.swism.location': 'Fukuoka Institute of Technology (FIT), Fukuoka, Giappone',
        'conferences.swism.description': '15th Semantic Web/Cloud Information and Services Discovery and Management (SWISM) in collaborazione con The 19-th International Conference on Complex, Intelligent, and Software Intensive Systems (CISIS).',
        
        'conferences.ccpi.date': 'Aprile 2025',
        'conferences.ccpi.title': 'CCPI@AINA 2025',
        'conferences.ccpi.location': 'Open University of Catalonia, Barcellona, Spagna',
        'conferences.ccpi.description': '16th International Workshop on Cloud-Edge Continuum Projects and Initiatives (CCPI) in collaborazione con la 39th International Conference on Advanced Information Networking and Applications (AINA).',
        
        // Contact
        'contact.find': 'Puoi trovarmi:',
        'contact.location': 'Caserta, Campania, Italia',
        'contact.collaborations': 'Collaborazioni',
        'contact.collaborationText': 'Sono sempre interessato a nuove collaborazioni di ricerca e progetti innovativi anche in campi mai esplorati.',
        
        // Footer
        'footer.name': 'Pasquale Vassallo',
        'footer.student': 'Studente',
        'footer.researcher': 'Ricercatore',
        'footer.engineer': 'Ingegnere Informatico',
        'footer.links': 'Links Utili',
        'footer.contact': 'Contatti',
        'footer.copyright': '&copy; 2025 Pasquale Vassallo. Tutti i diritti riservati.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.education': 'Education',
        'nav.publications': 'Publications',
        'nav.conferences': 'Conferences',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.name': 'Pasquale Vassallo',
        'hero.title': 'Computer Engineer',
        'hero.description': 'Graduated in computer engineering, I am a dynamic person oriented towards professional growth in the technological field. I am passionate about challenges that require logic, creativity, and innovation.',
        'hero.contact': 'Contact Me',
        'hero.download': 'Download CV',
        
        // Sections
        'sections.experience': 'Work Experience',
        'sections.skills': 'Technical Skills',
        'sections.education': 'Education',
        'sections.publications': 'Publications',
        'sections.conferences': 'Conferences and Presentations',
        'sections.contact': 'Contact',
        
        // Experience
        'experience.current.period': 'Jan 2025 - Present',
        'experience.current.title': 'Research Fellow',
        'experience.current.company': 'University of Campania Luigi Vanvitelli',
        'experience.current.description': 'FLUENDO Project: Advanced research on parallelism and concurrency techniques. Development of innovative methodologies for automatic transformation of sequential algorithms into optimized parallel versions, using algorithmic patterns and source-to-source compilers for cloud and HPC environments.',
        
        'experience.intern.period': 'Jul 2024 - Dec 2024',
        'experience.intern.title': 'Student Intern',
        'experience.intern.company': 'University of Campania Luigi Vanvitelli',
        'experience.intern.description': 'RASTA Project: Augmented Reality and Automated Story-Telling for the enhancement of Cultural Heritage and Itineraries. Design and implementation of innovative solutions for the integration of AR technologies in the cultural heritage sector.',
        
        // Skills
        'skills.coding.title': 'Coding',
        'skills.web.title': 'Web Dev & Database',
        'skills.paradigms.title': 'Programming Paradigms',
        'skills.paradigms.parallel': 'Parallel Programming',
        'skills.paradigms.concurrency': 'Concurrency',
        'skills.paradigms.patterns': 'Algorithmic Patterns',
        'skills.cloud.title': 'Cloud Computing - studying',
        'skills.cloud.distributed': 'Distributed Systems',
        'skills.devops.title': 'DevOps & Version Control',
        'skills.ai.title': 'Data Analysis & AI Tools',
        'skills.ai.ml': 'Machine Learning frameworks',
        'skills.ai.ai': 'AI paradigms',
        
        // Education
        'education.masters.period': '2024 - Present',
        'education.masters.title': 'Master\'s Degree in Computer Engineering',
        'education.masters.institution': 'University of Campania Luigi Vanvitelli',
        'education.masters.details': 'Curriculum: Distributed Systems and Cloud Computing',
        
        'education.bachelors.period': '2021 - 2024',
        'education.bachelors.title': 'Bachelor\'s Degree in Computer Engineering',
        'education.bachelors.institution': 'University of Campania Luigi Vanvitelli',
        'education.bachelors.details': 'Grade: 110/110 cum Laude<br>Thesis: "Collaborative virtual and augmented reality through Generative Artificial Intelligence and deployment on Cloud Continuum"',
        
        // Publications
        'publications.main.title': 'Designing a Cloud Continuum Architecture for a Collaborative Augmented and Virtual Reality Application in the Cultural Heritage Domain',
        'publications.main.authors': 'P. Vassallo, B. Di Martino, G. J. Pezzullo',
        'publications.main.venue': 'Advanced Information Networking and Applications, L. Barolli, Ed., Cham: Springer Nature Switzerland, 2025, pp. 139–147.',
        'publications.main.abstract': 'This study presents the design of a methodology supported by a collaborative architecture operating in a cloud-edge environment, capable of deploying virtual reality (VR) and augmented reality (AR) applications and enabling the sharing of operational space and bidirectional interaction between them.',
        'publications.read': 'Read the article',
        
        // Conferences
        'conferences.swism.date': 'July 2025',
        'conferences.swism.title': 'SWISM@CISIS 2025',
        'conferences.swism.location': 'Fukuoka Institute of Technology (FIT), Fukuoka, Japan',
        'conferences.swism.description': '15th Semantic Web/Cloud Information and Services Discovery and Management (SWISM) colocated with The 19-th International Conference on Complex, Intelligent, and Software Intensive Systems (CISIS).',
        
        'conferences.ccpi.date': 'April 2025',
        'conferences.ccpi.title': 'CCPI@AINA 2025',
        'conferences.ccpi.location': 'Open University of Catalonia, Barcelona, Spain',
        'conferences.ccpi.description': '16th International Workshop on Cloud-Edge Continuum Projects and Initiatives (CCPI) colocated with the 39th International Conference on Advanced Information Networking and Applications (AINA).',
        
        // Contact
        'contact.find': 'You can find me at:',
        'contact.location': 'Caserta, Campania, Italy',
        'contact.collaborations': 'Collaborations',
        'contact.collaborationText': 'I am always interested in new research collaborations and innovative projects, even in unexplored fields.',
        
        // Footer
        'footer.name': 'Pasquale Vassallo',
        'footer.student': 'Student',
        'footer.researcher': 'Researcher',
        'footer.engineer': 'Computer Engineer',
        'footer.links': 'Useful Links',
        'footer.contact': 'Contact',
        'footer.copyright': '&copy; 2025 Pasquale Vassallo. All rights reserved.'
    }
};

function loadLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}