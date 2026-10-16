let menuIcon = document.querySelector(".material-symbols-outlined");
let navBar = document.querySelector(".nav");
let darkModeIcon = document.querySelector('#darkMode-icon');

if (menuIcon) {
    menuIcon.onclick = () => {
        navBar.classList.toggle("active");
    };
}

window.onscroll = () => {
    if (navBar) {
        navBar.classList.remove("active");
    }
};

if (darkModeIcon) {
    darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle('fa-sun');
        darkModeIcon.classList.toggle('fa-moon');
        document.body.classList.toggle('dark-mode');
    };
}
(function(){
    emailjs.init({
        publicKey: "sJLnh-EvtPqpqISzx",
    });
})();

let contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_1z2usrq', 'template_r4rswi5', this)
            .then(function() {
                alert(currentLang === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert(currentLang === 'ar' ? 'فشل إرسال الرسالة، حاول مرة أخرى.' : 'Failed to send message, please try again.');
                console.log('FAILED...', error);
            });
    });
}
const langSwitcher = document.getElementById('lang-switcher');
let currentLang = localStorage.getItem('site-lang') || 'en';

const translations = {
    en: {
        langBtn: "AR",
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navTestimonial: "Testimonial",
        navProjects: "Projects",
        navEducation: "Education",
        navContact: "Contact",
        
        homeHello: "Hello, <span>Dear</span>",
        homeName: "Ahmed Hany",
        homeRole: "I'm a <span class=\"multiple-text\">web developer</span>",
        homeDesc: "I am a Computer Engineering student at Helwan University with a passion for building clean, responsive, and user-friendly web interfaces.",
        
        aboutHeading: "About <span>Me</span>",
        aboutRole: "I'm a <span>full stack developer</span>",
        aboutDesc: "I am a Computer Engineering student at Helwan University with a strong foundation in software development and problem solving. I enjoy turning complex problems into simple, beautiful, and intuitive web designs. My core focus is building responsive front-end interfaces and continuously expanding my technical skills in modern web technologies.",
        
        servicesHeading: "My <span>Services</span>",
        serv1Title: "Medical Website",
        serv1Desc: "Designing and developing responsive medical and healthcare websites with clean user interfaces, appointment booking systems, and patient-friendly navigation.",
        serv2Title: "Ecommerce Website",
        serv2Desc: "Building fully functional and dynamic e-commerce platforms featuring product catalogs, smooth shopping carts, secure layouts, and responsive designs.",
        serv3Title: "Work Management App",
        serv3Desc: "Creating efficient task and work management applications to help users organize schedules, track daily progress, and boost productivity seamlessly.",
        
        eduHeading: "My <span>Education & Certificates</span>",
        eduTimelineTitle: "Timeline",
        edu1Date: "2024/9 - present",
        edu1Title: "University Education",
        edu1Desc: "Achieved an exceptional academic record during university studies in Computer Engineering with a strong GPA of 3.37, demonstrating consistent dedication, strong analytical capabilities, and high performance across core computer science and engineering coursework.",
        edu2Title: "English Course",
        edu2Desc: "Successfully completed English Language Level 7 at Berlitz (from June to August 2026), further developing advanced language proficiency, communication skills, and professional fluency.",
        edu3Title: "Mashreq Summer Training",
        edu3Desc: "Completed a comprehensive summer internship program at Mashreq, which included field visits to the bank's headquarters. Gained hands-on practical exposure to day-to-day department workflows, operational environments, and core banking fundamentals directly from the work floor.",
        edu4Title: "CIB Summer Training",
        edu4Desc: "CIB Summer Internship: Completed intensive training on the banking sector's ecosystem, types, and evolution, with a core focus on integrating Generative AI into modern banking operations and financial services.",
        edu5Title: "AI Lecture",
        edu5Desc: "Attended a specialized lecture on AI Literacy delivered in collaboration with the Ministry of Communications and Information Technology (MCIT) and Microsoft. The session covered the fundamentals of Artificial Intelligence, exploring its different types, usage methods, rules and ethics, along with its benefits and associated risks.",
        edu6Title: "ICDL Course",
        edu6Desc: "Completed an intensive two-month training program covering ICDL fundamentals (Windows, Word, Excel, PowerPoint, Access, Internet, and IT), alongside professional CV writing and practical applications, successfully passing the final certification exams.",
        
        projectsHeading: "My <span>Projects</span>",
        proj1Title: "Students Management System",
        proj1Desc: `University Student Management System (SMS): A centralized web-based platform designed to streamline academic operations and data management. The system efficiently handles relational data between students, professors, courses, and academic assessments.\n\nKey Features:\n- Student & Grade Tracking: Monitor individual student academic profiles and performance across various courses.\n- Course & Assessment Management: Centralize course catalogs, syllabi info, exams, and continuous assessment grading.\n- Professor Directory: Manage instructor profiles, department assignments, and course allocations.\n- Database Architecture: Built with robust relational data integrity to handle complex mappings (e.g., Many-to-Many relationships between students and courses).\n\nDeveloped by <span>HTML, CSS, JavaScript, PHP, SQL</span>`,
        proj2Title: "Certificate Website",
        proj2Desc: `Certificate Generation System: A full-stack web application that allows institutions to automatically generate, issue, and verify digital certificates. It features an admin dashboard for management and a secure public verification page using unique IDs to prevent forgery.\n\nDeveloped by <span>CSS, HTML, SQL, PHP</span>`,
        proj3Title: "Booking Webpage",
        proj3Desc: `A dynamic full-stack web application designed for booking flights and browsing curated travel packages, featuring advanced flight search, filtering, interactive booking management, and a user authentication system.\n\nDeveloped by <span>CSS, HTML, SQL, PHP</span>`,
        proj4Title: "Ecommerce Web",
        proj4Desc: `A fully functional e-commerce platform featuring a product catalog, interactive shopping cart, and a comprehensive admin management system enabling administrators to easily add, edit, and delete products from the inventory.\n\nDeveloped by <span>CSS, HTML, SQL, PHP</span>`,
        projBtn: "Go to Github",
        
        testimonialHeading: "Testimonial",
        
        contactHeading: "Contact <span>Me</span>",
        inputName: "Full Name",
        inputEmail: "Email Address",
        inputPhone: "Phone Number",
        inputSubject: "Email Subject",
        inputMessage: "Your Message",
        inputSubmit: "Send a Message",
        alertSuccess: "Message sent successfully!",
        alertFailed: "Failed to send message, please try again."
    },
    ar: {
        langBtn: "EN",
        navHome: "الرئيسية",
        navAbout: "عني",
        navServices: "الخدمات",
        navTestimonial: "الآراء",
        navProjects: "المشاريع",
        navEducation: "التعليم والشهادات",
        navContact: "تواصل معي",
        
        homeHello: "أهلاً بك، <span>عزيزي</span>",
        homeName: "أحمد هاني",
        homeRole: "أنا <span class=\"multiple-text\">مطور ويب</span>",
        homeDesc: "أنا طالب هندسة حاسبات في جامعة حلوان ولدي شغف كبير لبناء واجهات ويب نظيفة، متجاوبة، وسهلة الاستخدام.",
        
        aboutHeading: "نبذة <span>عني</span>",
        aboutRole: "أنا <span>مطور ويب متكامل (Full Stack)</span>",
        aboutDesc: "أنا طالب هندسة حاسبات بجامعة حلوان وأملك أساساً قريباً في تطوير البرمجيات وحل المشكلات. أستمتع بتحويل المشكلات المعقدة إلى تصاميم ويب بسيطة وجذابة وبديهية. تركيزي الأساسي هو بناء واجهات أمامية متجاوبة والتطوير المستمر لمهاراتي في أحدث تقنيات الويب.",
        
        servicesHeading: "خدماتـ <span>ـي</span>",
        serv1Title: "موقع طبي",
        serv1Desc: "تصميم وتطوير مواقع طبية ورعاية صحية متجاوبة بواجهات مستخدم نظيفة، وأنظمة حجز مواعيد، وتصفح سلس للمرضى.",
        serv2Title: "موقع تجارة إلكترونية",
        serv2Desc: "بناء منصات تجارة إلكترونية ديناميكية ومتكاملة تحتوي على كتالوج منتجات، عربة تسوق سلسة، وتصاميم آمنة ومتجاوبة.",
        serv3Title: "تطبيق إدارة الأعمال",
        serv3Desc: "إنشاء تطبيقات كفؤة لإدارة المهام والأعمال لمساعدة المستخدمين على تنظيم الجداول، متابعة التقدم اليومي، ورفع الإنتاجية.",
        
        eduHeading: "التعليم <span>والشهادات</span>",
        eduTimelineTitle: "المسار الزمني",
        edu1Date: "2024/9 - حتى الآن",
        edu1Title: "التعليم الجامعي",
        edu1Desc: "تحقيق سجل أكاديمي ممتاز أثناء الدراسة الجامعية في هندسة الحاسبات بمعدل تراكمي 3.37، مما يعكس الالتزام المستمر، والقدرات التحليلية القوية، والأداء العالي في المقررات الأساسية لعلوم الحاسب والهندسة.",
        edu2Title: "دورة اللغة الإنجليزية",
        edu2Desc: "إتمام المستوى السابع في اللغة الإنجليزية بنجاح في Berlitz (من يونيو إلى أغسطس 2026)، مما ساهم في تطوير الإتقان اللغوي المتقدم والطلاقة المهنية.",
        edu3Title: "تدريب صيفي - بنك المشرق",
        edu3Desc: "إتمام برنامج تدريب صيفي شامل في بنك المشرق تضمن زيارات ميدانية للمقر الرئيسي للبنك، واكتساب خبرة عملية حول سير العمل اليومي والأقسام والأساسيات المصرفية.",
        edu4Title: "تدريب صيفي - CIB",
        edu4Desc: "التدريب الصيفي ببنك CIB: إتمام تدريب مكثف حول بيئة القطاع المصرفي وأنواعه وتطوره، مع التركيز الأساسي على دمج الذكاء الاصطناعي التوليدي في العمليات المصرفية الحديثة.",
        edu5Title: "محاضرة الذكاء الاصطناعي",
        edu5Desc: "حضور محاضرة متخصصة في التوعية بالذكاء الاصطناعي بالتعاون مع وزارة الاتصالات وتكنولوجيا المعلومات (MCIT) وشركة Microsoft، تناولت أساسيات الذكاء الاصطناعي وأنواعه وأخلاقيات استخدامه ومخاطره.",
        edu6Title: "دورة ICDL",
        edu6Desc: "إتمام برنامج تدريبي مكثف لمدة شهرين يغطي أساسيات قيادة الحاسب الآلي (Windows, Word, Excel, PowerPoint, Access, Internet, IT) بالإضافة إلى كتابة السيرة الذاتية واجتياز الامتحانات النهائية بنجاح.",
        
        projectsHeading: "مشاريعـ <span>ـي</span>",
        proj1Title: "نظام إدارة الطلاب",
        proj1Desc: `نظام إدارة الطلاب الجامعي (SMS): منصة ويب مركزية مخصصة لتسهيل العمليات الأكاديمية وإدارة البيانات. يتعامل النظام بكفاءة مع البيانات العلاقاتية بين الطلاب، الأساتذة، المقررات، والتقييمات الأكاديمية.\n\nالمميزات الرئيسية:\n- متابعة الطلاب والدرجات: مراقبة الملقات الأكاديمية للأفراد والأداء عبر المواد.\n- إدارة المقررات والتقييمات: تجميع المناهج والامتحانات ورصد الدرجات المستمرة.\n- دليل أعضاء هيئة التدريس: إدارة ملفات المحاضرين وتوزيع المقررات.\n- هيكلية قواعد البيانات: بناء علاقات قوية ومعقدة (مثل علاقة متعدد إلى متعدد بين الطلاب والمواد).\n\nتم التطوير باستخدام: <span>HTML, CSS, JavaScript, PHP, SQL</span>`,
        proj2Title: "موقع الشهادات الرقمية",
        proj2Desc: `نظام إنشاء الشهادات: تطبيق ويب متكامل يسمح للمؤسسات بإنشاء وإصدار والتحقق من الشهادات الرقمية أوتوماتيكياً. يتضمن لوحة تحكم أدمن وصفحة تحقق عامة وآمنة باستخدام معرفات فريدة لمنع التزوير.\n\nتم التطوير باستخدام: <span>CSS, HTML, SQL, PHP</span>`,
        proj3Title: "موقع حجز الرحلات",
        proj3Desc: `تطبيق ويب ديناميكي متكامل لحجز الطيران وتصفح باقات السفر المميزة، يتميز ببحث متقدم، تصفية، إدارة حجز تفاعلية، ونظام تسجيل دخول للمستخدمين.\n\nتم التطوير باستخدام: <span>CSS, HTML, SQL, PHP</span>`,
        proj4Title: "موقع تجارة إلكترونية",
        proj4Desc: `منصة تجارة إلكترونية متكاملة تحتوي على معرض منتجات، عربة تسوق تفاعلية، ونظام إدارة شامل لوحة التحكم يتيح للمشرفين إضافة وتعديل وحذف المنتجات بسهولة.\n\nتم التطوير باستخدام: <span>CSS, HTML, SQL, PHP</span>`,
        projBtn: "الانتقال إلى جيت هاب",
        
        testimonialHeading: "آراء <span>العملاء</span>",
        
        contactHeading: "تواصل <span>معي</span>",
        inputName: "الاسم بالكامل",
        inputEmail: "البريد الإلكتروني",
        inputPhone: "رقم الهاتف",
        inputSubject: "عنوان الرسالة",
        inputMessage: "رسالتك",
        inputSubmit: "إرسال الرسالة",
        alertSuccess: "تم إرسال الرسالة بنجاح!",
        alertFailed: "فشل إرسال الرسالة، حاول مرة أخرى."
    }
};

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site-lang', lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    if (langSwitcher) langSwitcher.textContent = translations[lang].langBtn;


    document.querySelectorAll('.nav a').forEach(link => {
        let key = link.getAttribute('data-key');
        if (translations[lang][key]) {
            link.textContent = translations[lang][key];
        }
    });

    document.getElementById('home-hello').innerHTML = translations[lang].homeHello;
    document.getElementById('home-name').textContent = translations[lang].homeName;
    document.getElementById('home-role').innerHTML = translations[lang].homeRole;
    document.getElementById('home-desc').textContent = translations[lang].homeDesc;

    document.getElementById('about-heading').innerHTML = translations[lang].aboutHeading;
    document.getElementById('about-role').innerHTML = translations[lang].aboutRole;
    document.getElementById('about-desc').textContent = translations[lang].aboutDesc;

    document.getElementById('services-heading').innerHTML = translations[lang].servicesHeading;
    document.getElementById('serv-1-title').textContent = translations[lang].serv1Title;
    document.getElementById('serv-1-desc').textContent = translations[lang].serv1Desc;
    document.getElementById('serv-2-title').textContent = translations[lang].serv2Title;
    document.getElementById('serv-2-desc').textContent = translations[lang].serv2Desc;
    document.getElementById('serv-3-title').textContent = translations[lang].serv3Title;
    document.getElementById('serv-3-desc').textContent = translations[lang].serv3Desc;

    document.getElementById('edu-heading').innerHTML = translations[lang].eduHeading;
    document.getElementById('edu-timeline-title').textContent = translations[lang].eduTimelineTitle;
    document.getElementById('edu-1-date').textContent = translations[lang].edu1Date;
    document.getElementById('edu-1-title').textContent = translations[lang].edu1Title;
    document.getElementById('edu-1-desc').textContent = translations[lang].edu1Desc;
    document.getElementById('edu-2-title').textContent = translations[lang].edu2Title;
    document.getElementById('edu-2-desc').textContent = translations[lang].edu2Desc;
    document.getElementById('edu-3-title').textContent = translations[lang].edu3Title;
    document.getElementById('edu-3-desc').textContent = translations[lang].edu3Desc;
    document.getElementById('edu-4-title').textContent = translations[lang].edu4Title;
    document.getElementById('edu-4-desc').textContent = translations[lang].edu4Desc;
    document.getElementById('edu-5-title').textContent = translations[lang].edu5Title;
    document.getElementById('edu-5-desc').textContent = translations[lang].edu5Desc;
    document.getElementById('edu-6-title').textContent = translations[lang].edu6Title;
    document.getElementById('edu-6-desc').textContent = translations[lang].edu6Desc;

    document.getElementById('projects-heading').innerHTML = translations[lang].projectsHeading;
    document.getElementById('proj-1-title').textContent = translations[lang].proj1Title;
    document.getElementById('proj-1-desc').innerHTML = translations[lang].proj1Desc.replace(/\n/g, '<br>');
    document.getElementById('proj-2-title').textContent = translations[lang].proj2Title;
    document.getElementById('proj-2-desc').innerHTML = translations[lang].proj2Desc.replace(/\n/g, '<br>');
    document.getElementById('proj-3-title').textContent = translations[lang].proj3Title;
    document.getElementById('proj-3-desc').innerHTML = translations[lang].proj3Desc.replace(/\n/g, '<br>');
    document.getElementById('proj-4-title').textContent = translations[lang].proj4Title;
    document.getElementById('proj-4-desc').innerHTML = translations[lang].proj4Desc.replace(/\n/g, '<br>');

    document.querySelectorAll('.proj-btn').forEach(btn => {
        btn.textContent = translations[lang].projBtn;
    });

    // قسم Testimonials
    document.getElementById('testimonial-heading').innerHTML = translations[lang].testimonialHeading;

    // قسم Contact
    document.getElementById('contact-heading').innerHTML = translations[lang].contactHeading;
    document.getElementById('input-name').placeholder = translations[lang].inputName;
    document.getElementById('input-email').placeholder = translations[lang].inputEmail;
    document.getElementById('input-phone').placeholder = translations[lang].inputPhone;
    document.getElementById('input-subject').placeholder = translations[lang].inputSubject;
    document.getElementById('input-message').placeholder = translations[lang].inputMessage;
    document.getElementById('input-submit').value = translations[lang].inputSubmit;
}

if (langSwitcher) {
    langSwitcher.addEventListener('click', () => {
        let newLang = currentLang === 'en' ? 'ar' : 'en';
        switchLanguage(newLang);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
});