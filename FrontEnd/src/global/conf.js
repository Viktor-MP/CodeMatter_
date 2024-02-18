import {TOKEN} from './enviro.js'

const languages = [
    { name: 'EN', state: true },
    { name: 'AR', state: false },
    { name: 'RU', state: false },
]
const socIcons = {
    facebook: '../media/soc-icons/ico-facebook.webp',
    linkedin: '../media/soc-icons/ico-linkedin.webp',
}

const pageNavigation = [
    {
        id: 'faq',
        en: 'FAQ',
        am: 'հաճախ տրվող հարցեր',
        ru: 'Часто задаваемые вопросы',
    },
    {
        id: 'lessons',
        en: "courses",
        am: "դասընթացներ",
        ru: "курсы",
    },
    {
        id: 'mentors',
        en: "mentors",
        am: "դասախոսներ",
        ru: "наставники",
    },
    {
        id: 'contacts',
        en: "contacts",
        am: "արագ կապ",
        ru: "контакт",
    },
    {
        id: 'partners',
        en: 'partners',
        am: 'գործընկերներ',
        ru: 'партнеры',
    },
    {
        id: 'view',
        en: 'feedbacks',
        am: 'Կարծիքներ',
        ru: 'отзывы',
    },
]

const posts_conf = [
    {
        id: 1,
        path: "../media/curses/Viktor.webp",
        state: true,
        people_count: {
            min: 4,
            max: 7
        },
        name: "HTML/CSS JAVASCRIPT",
        off_of: "OFFLINE COURSE",
        post_text: "Viktor Melik - Parsadanyan",
        prof: 'Front-end developer',
        description: "Դասընթացը մշակվել է CODE MATTER դպրոցի պրոֆեսիոնալ մասնագետների կողմից, հաշվի են առնվել ՏՏ ոլորտի մասնագիտական խնդիրները և բոլոր հնարավոր պահանջները, որոնց պետք է բավարարի սկսնակ վեբ-ծրագրավորողը։",
        sum_time: "Ամսական 40.000 շաբաթական 2 օր, 2 ժամ",
        result: "արդյունք",
        faqs: [
            {
                harc: "Ու՞մ համար է նախատեսված դասընթացը:",
                patasxan: "Ու՞մ համար է նախատեսված դասընթացը\n\n" +
                    "Դասընթացը նախատեսված է սկսնակ ծրագրավորողների համար, ովքեր ցանկանում են առաջին քայլերն անել վեբ-ծրագրավորման մեջ, և back-end ծրագրավորողների, ովքեր ցանկանում են մասնագիտական աճ գրանցել և դառնալ FULL STACK ծրագրավորող"
            },
            {
                harc: "Ի՞նչ մեթոդով եք դասավանդում։",
                patasxan: "Ի՞նչ մեթոդով եք դասավանդում։\n\n" +
                    "Դասընթացները անցկացվում են ծրագրային ուսումնասիրության  և “PEER TO PEER” մեթոդով։ Ծրագրային ուսուցումը հնարավորություն է տալիս կիրառել տեսական դասերը, աշխատել կոդի հետ սկսած առաջին դասընթացից։ Դասավանդման այս մեթոդը կրկնակի բարձրացնում է դասընթացի արդյունավետությունը՝ հնարավորություն տալով ամրապնդել գիտելիքները։ “ PEER TO PEER” կամ << Հավասարը հավասարին>> մեթոդի էությունն այն է, որ ուսանողը իր ստացած գիտելիքները բացատրում է մյուս ուսանողներին կամ իրեն հետաքրքրող հարցերը քննարկում է խմբի հետ։ Ընթանում են մասնագիտական քննարկումներ, բանակցություններ, որի ընթացքում ստեղծվում է ամուր և երկկողմանի շահավետ նեթվորք։"

            },
            {
                harc: "Դասընթացի բովանդակությունը։",
                patasxan: "Դասընթացի բովանդակությունը։\n\n" +
                    "Դասընթացի առաջին ամսում դուք ծանոթանում եք Վեբ-ծրագրավորման բազային գործիքներին, ներառյալ HTML-ի և CSS-ի հիմունքները Երկրորդ ամսվա ընթացքում ավելի խորը պատկերացում եք կազմում HTML-ի և CSS-ի մասին՝ կիրառելով ստացված գիտելիքները։ Ծանոթանում եք ավելի առաջադեմ մեթոդների հետ՝ օպտիմիզացված HTML կառուցվածքներ ստեղծելու համար: Երրորդ և չորրորդ ամիսները կենտրոնանում է JavaScript-ի  խորացված ուսումնասիրության վրա։ Զուգահեռ սկսում եք աշխատել անհատական պորտֆոլիո ստեղծելու վրա։ Դասընթացի ավարտին հանձնում եք ավարտական քննություն՝ զուգահեռ պատրաստվելով տեխնիկական հարցազրույցներին։"
            },
            {
                harc: "Ի՞նչ կտա ինձ դասընթացը։",
                patasxan: "Ի՞նչ կտա ինձ դասընթացը։\n\n" +
                    "Դասընթացի տևողությունը 5 ամիս է, շաբաթական  2 oր՝ 4 լսարանային ժամ։\n" +
                    "Դասընթացի ավարտին դուք կստանաք հետևյալ արդյունքները։\n\n" +
                    "✔️ Վեբ-ծրագրավորման  բազային խորացված գիտելիքներ,\n" +
                    "✔️Անհատական պրոեկտ(ներ), ձեր պորտֆոլիոյի համար,\n" +
                    "✔️Պատրաստ կլինեք ՏՏ ոլորտի տեխնիկական հարցազրույցներին, որը կբարձրացնի աշխատանքի ընդունվելու հնարավորությունները,\n" +
                    "✔️ Ավարտական վկայական,\n" +
                    "✔️ Գերազանցության վկայական՝ քննությունը լավ հանձնելու դեպքում:\n" +
                    "✔️ 20% զեղչի քարտ՝ հաջորդ դասընթացներին մասնակցելու համար, որը  կարող եք նաև նվիրել ձեր հարազատներին։\n" +
                    "✔️6 Ամիս հետադարձ կապ մեր մասնագետների հետ,\n" +
                    "✔️ Կդառնաք մեր դպրոցի ակումբի անդամ և կմիանաք փակ չատերին, որտեղ ակտիվորեն հրապարակում ենք աշխատանքի առաջարկներ և անցկացնում ենք մասնագիտական քննարկումներ։\n\n" +
                    "Դասընթացի տևողությունն ու արժեքը։ Դասընթացի տևողությունը 5 ամիս է, շաբաթական  2 oր՝ 4 լսարանային ժամ։ Ձեր ներդրումը ամսեկան՝ 40.000 դրամ։ Կարո՞ղ եմ միանալ դասընթացին առանց նախնական գիտելիքների։ Դասընթացին միանալու համար նախնական գիտելիքների անհրաժեշտություն չկա։ Հարկավոր է միայն համակարգչի առկայություն և անգլերենի մինիմալ գիտելիքներ, իսկ մնացածը կապահովեն մեր պրոֆեսիոնալ մասնագետները։"
            },
        ],
        curs_map: [
            {
                name: "HTML/CSS JAVASCRIPT",
                position: 'top',
                month: 'MONTH 1',
                nom: [
                    {
                        header: "1.1 Introduction to Pythonn",
                        dots: [
                            '• Installing Python',
                            '• Running the Python interpreterl',
                            '• Using the command line to execute Python scripts'
                        ]
                    },
                    {
                        header: "1.2 Python Syntax",
                        dots: [
                            '• Variables and data types (numbers, strings, lists, dictionaries)',
                            '• Operators (arithmetic, comparison, logical)',
                            '• Conditional statements (if, elif, else)',
                            '• Loops (for, while)'
                        ]
                    }
                ]
            },
            {
                name: "HTML/CSS JAVASCRIPT",
                position: 'bottom',
                month: 'MONTH 2',
                // for: "Advanced HTML and CSS",
                nom: [
                    {
                        header: "2.1 HTML Forms and Tables",
                        dots: [
                            '• Creating forms for data input',
                            '• Creating tables to structure information',
                        ]
                    },
                    {
                        header: "2.2 Advanced CSS",
                        dots: [
                            '• Positioning elements',
                            '• Using external styles and fonts',
                            '• Creating animations and transitions'
                        ]
                    }
                ]
            },
            {
                name: "HTML/CSS JAVASCRIPT",
                position: 'top',
                month: 'MONTH 3',
                for: "JavaScript",
                nom: [
                    {
                        header: "3.1. Introduction to JavaScript",
                        dots: [
                            '• Basics of JavaScript syntax',
                            '• Variable declaration and manipulation',
                            '• User interaction using alert, prompt, confirm',
                        ]
                    },
                    {
                        header: "3.2 Operators and Conditional Constructs",
                        dots: [
                            '• Arithmetic operators',
                            '• Conditional statements (if, else, switch)',
                            '• Loops (for, while)'
                        ]
                    }
                ]
            },
            {
                name: "HTML/CSS JAVASCRIPT",
                position: 'bottom',
                month: 'MONTH 4',
                for: "Advanced JavaScript",
                nom: [
                    {
                        header: "4.1 Functions and Event Handlers",
                        dots: [
                            '• Creating and invoking functions',
                            '• Handling mouse and keyboard events',
                        ]
                    },
                    {
                        header: "4.2. Objects and DOM (Document Object Model)",
                        dots: [
                            '• Working with objects, arrays, and strings',
                            '• Interacting with web pages through the DOM',
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        path: "../media/curses/Samvel.webp",
        state: false,
        people_count: {
            min: 1,
            max: 7
        },
        name: "PYTHON BASIC",
        off_of: "OFFLINE COURSE",
        post_text: "Samvel Torosyan",
        prof: 'Back-end developer',
        description: 'Առաջին ամսում Դուք կծանոթանաք վեբ ծրագրավորման բազային գործիքներին, ներառյալ HTML-ի և CSS-ի հիմունքները:Երկրորդ ամսվա ընթացքում դուք ավելի խորը պատկերացում կունենաք HTML-ի և CSS-ի մասին:',
        sum_time: "Ամսական 40.000 շաբաթական 2 օր, 2 ժամ",
        result: "արդյունճ",
        faqs: [
            {
                harc: "Ու՞մ համար է նախատեսված դասընթացը:",
                patasxan: "Ու՞մ համար է նախատեսված դասընթացը\n\n" +
                    "Դասընթացը նախատեսված է սկսնակ ծրագրավորողների համար, ովքեր ցանկանում են առաջին քայլերն անել ծրագրավորման մեջ, և ..."
            },
            {
                harc: "Ի՞նչ մեթոդով եք դասավանդում։",
                patasxan: "Ի՞նչ մեթոդով եք դասավանդում։\n\n" +
                    "Դասընթացները անցկացվում են ծրագրային ուսումնասիրության  և “PEER TO PEER” մեթոդով։ Ծրագրային ուսուցումը հնարավորություն է տալիս կիրառել տեսական դասերը, աշխատել կոդի հետ սկսած առաջին դասընթացից։ Դասավանդման այս մեթոդը կրկնակի բարձրացնում է դասընթացի արդյունավետությունը՝ հնարավորություն տալով ամրապնդել գիտելիքները։ “ PEER TO PEER” կամ << Հավասարը հավասարին>> մեթոդի էությունն այն է, որ ուսանողը իր ստացած գիտելիքները բացատրում է մյուս ուսանողներին կամ իրեն հետաքրքրող հարցերը քննարկում է խմբի հետ։ Ընթանում են մասնագիտական քննարկումներ, բանակցություններ, որի ընթացքում ստեղծվում է ամուր և երկկողմանի շահավետ նեթվորք։"
            },
            {
                harc: "Դասընթացի բովանդակությունը։",
                patasxan: "Դասընթացի բովանդակությունը։\n\n" +
                    "..."
            },
            {
                harc: "Ի՞նչ կտա ինձ դասընթացը։",
                patasxan: "Ի՞նչ կտա ինձ դասընթացը։\n\n" +
                    "Դասընթացի տևողությունը 4 ամիս է, շաբաթական  2 oր՝ 4 լսարանային ժամ։\n" +
                    "Դասընթացի ավարտին դուք կստանաք հետևյալ արդյունքները։\n\n" +
                    "✔️ Python բազային խորացված գիտելիքներ,\n" +
                    "✔️ Անհատական պրոեկտ(ներ), ձեր պորտֆոլիոյի համար,\n" +
                    "✔️ Պատրաստ կլինեք ՏՏ ոլորտի տեխնիկական հարցազրույցներին, որը կբարձրացնի աշխատանքի ընդունվելու հնարավորությունները,\n" +
                    "✔️ Ավարտական վկայական,\n" +
                    "✔️ Գերազանցության վկայական՝ քննությունը լավ հանձնելու դեպքում:\n" +
                    "✔️ 20% զեղչի քարտ՝ հաջորդ դասընթացներին մասնակցելու համար, որը  կարող եք նաև նվիրել ձեր հարազատներին։\n" +
                    "✔️ 6 Ամիս հետադարձ կապ մեր մասնագետների հետ,\n" +
                    "✔️ Կդառնաք մեր դպրոցի ակումբի անդամ և կմիանաք փակ չատերին, որտեղ ակտիվորեն հրապարակում ենք աշխատանքի առաջարկներ և անցկացնում ենք մասնագիտական քննարկումներ։\n\n" +
                    "Դասընթացի տևողությունն ու արժեքը։ Դասընթացի տևողությունը 5 ամիս է, շաբաթական  2 oր՝ 4 լսարանային ժամ։ Ձեր ներդրումը ամսեկան՝ 40.000 դրամ։ Կարո՞ղ եմ միանալ դասընթացին առանց նախնական գիտելիքների։ Դասընթացին միանալու համար նախնական գիտելիքների անհրաժեշտություն չկա։ Հարկավոր է միայն համակարգչի առկայություն և անգլերենի մինիմալ գիտելիքներ, իսկ մնացածը կապահովեն մեր պրոֆեսիոնալ մասնագետները։"
            },
        ],
        curs_map: [
            {
                name: "Python Basic",
                position: 'top',
                month: 'MONTH 1',
                nom: [
                    {
                        header: "1.1 Introduction to Pythonn",
                        dots: [
                            '• Installing Python',
                            '• Running the Python interpreterl',
                            '• Using the command line to execute Python scripts'
                        ]
                    },
                    {
                        header: "1.2 Python Syntax",
                        dots: [
                            '• Variables and data types (numbers, strings, lists, dictionaries)',
                            '• Operators (arithmetic, comparison, logical)',
                            '• Conditional statements (if, elif, else)',
                            '• Loops (for, while)'
                        ]
                    },
                    {
                        header: "1.3. Functions and Modulesn",
                        dots: [
                            '• a Defining and calling functionsn',
                            '• a Creating custom modulesn)',
                            '• a Using standard Python libraries)'
                        ]
                    },
                    {
                        header: "1.4. File Handlingn",
                        dots: [
                            '• Opening, reading, and writing filesl',
                            '• Working with text and binary filesl',
                            '• Exception handling (try, except)',
                        ]
                    }
                ]
            },
            {
                name: "Python Basic",
                position: 'bottom',
                month: 'MONTH 2',
                for: "",
                nom: [
                    {
                        header: "2.1 Object-Oriented Programming (OOP)",
                        dots: [
                            '• Classes and objectsl',
                            '• Inheritance and polymorphism',
                            '• Encapsulation and abstraction',
                        ]
                    },
                    {
                        header: "2.2 Working with Datan",
                        dots: [
                            '• Working with databases (MySQL, PostgreSQL',
                            '• Working with data formats (JSON, CSV)',
                            '• Working with APIs'
                        ]
                    },
                    {
                        header: "2.3 Graphical Interface and Web Developmentn",
                        dots: [
                            '• Creating graphical interfaces using the Tkinter library',
                            '• Web development using frameworks (Flask)',
                            '• Interacting with databases in web applications'
                        ]
                    }
                ]
            },
            {
                name: "Python Basic",
                position: 'top',
                month: 'MONTH 3',
                nom: [
                    {
                        header: "3.1 Algorithm Theoryn",
                        dots: [
                            '• Studying basic algorithm theory concepts,\nsuch as the concept of an algorithm,\nalgorithm efficiency, algorithm complexity.',
                        ]
                    },
                    {
                        header: "3.2 Basic Data Structuresn",
                        dots: [
                            '• Arrays and lists',
                            '• Stacks and queues',
                            '• Linked lists',
                            '• Trees and graphs'
                        ]
                    }
                ]
            }
        ]
    },

    {
        id: 3,
        path: "../media/curses/Samvel.webp",
        state: true,
        people_count: {
            min: 3,
            max: 7
        },
        name: "DevOps", // +
        off_of: "OFFLINE COURSE", // +
        post_text: "Alik Martirosyan", // +
        prof: 'DevOps engineer', // +
        description: "Դասընթացը մշակվել է CODE MATTER դպրոցի պրոֆեսիոնալ մասնագետների կողմից, հաշվի են առնվել ՏՏ ոլորտի մասնագիտական խնդիրները և բոլոր հնարավոր պահանջները, որոնց պետք է բավարարի սկսնակ վեբ-ծրագրավորողը։",
        sum_time: "Ամսական 70.000 շաբաթական 2 օր, 2 ժամ",
        result: "արդյունք",  // +
        faqs: [
            {
                harc: "Ու՞մ համար է նախատեսված դասընթացը:",
                patasxan: "Ու՞մ համար է նախատեսված դասընթացը\n\n"
            },
            {
                harc: "Ի՞նչ մեթոդով եք դասավանդում։",
                patasxan: "Ի՞նչ մեթոդով եք դասավանդում։\n\n"
            },
            {
                harc: "Դասընթացի բովանդակությունը։",
                patasxan: "Դասընթացի բովանդակությունը։\n\n"
            },
            {
                harc: "Ի՞նչ կտա ինձ դասընթացը։",
                patasxan: "Ի՞նչ կտա ինձ դասընթացը։\n\n"
            },
        ],
        curs_map: [
            {
                name: "DevOps",
                position: 'top',
                month: 'MONTH 1',
                nom: [
                    {
                        header: "1.1 Fundamentals of DevOps",
                        dots: [
                            '• Introduction to DevOps',
                            '• Running the Python interpreterl',
                            '• Key DevOps Principles and Practices'
                        ]
                    },
                    {
                        header: "1.2 Version Control and Collaboration Tools",
                        dots: [
                            '• Introduction to Version Control (Git)',
                            '• Collaborative Development with Git',
                            '• Git Branching Strategies',
                        ]
                    },
                    {
                        header: "1.3 CI/CD Fundamentals and Docker Basics",
                        dots: [
                            '• Introduction to CI/CD',
                            '• Setting up Jenkins for CI',
                            '• Docker Basics and Commands',
                        ]
                    }
                ]
            },
            {
                name: "DevOps",
                position: 'bottom',
                month: 'MONTH 2',
                nom: [
                    {
                        header: "2.1 Advanced CI/CD with Jenkins",
                        dots: [
                            '• Jenkins Pipeline DSL',
                            '• Jenkins Pipeline Best Practices',
                            '• Integrating Automated Testing',
                        ]
                    },
                    {
                        header: "2.2 Containerization and Kubernetes Basics",
                        dots: [
                            '• Introduction to Containers',
                            '• Docker Image Management',
                            '• Introduction to Kubernetes'
                        ]
                    },
                    {
                        header: "2.3 Infrastructure as Code (IaC) with Terraform",
                        dots: [
                            '• Basics of Terraform',
                            '• Managing Infrastructure with Terraform',
                            '• Terraform Best Practices'
                        ]
                    }
                ]
            },
            {
                name: "DevOps",
                position: 'top',
                month: 'MONTH 3',
                nom: [
                    {
                        header: "3.1 Cloud Services and Advanced Infrastructure Management",
                        dots: [
                            '• Introduction to Cloud Computing',
                            '• Auto Scaling and Load Balancing',
                            '• Disaster Recovery Planning',
                        ]
                    },
                    {
                        header: "3.2 Advanced Kubernetes Concepts and Security",
                        dots: [
                            '• Kubernetes Operators and Helm Charts',
                            '• Kubernetes Security Best Practices',
                            '• Introduction to Monitoring and Logging'
                        ]
                    },
                    {
                        header: "3.3 DevOps Security and Project Work",
                        dots: [
                            '• DevOps Security Best Practices',
                            '• Security Testing in CI/CD Pipelines',
                            '• Collaborative Project Development'
                        ]
                    }
                ]
            },
            {
                name: "DevOps",
                position: 'bottom',
                month: 'MONTH 4',
                nom: [
                    {
                        header: "4.1 Collaboration Tools and Configuration Management with Ansible",
                        dots: [
                            '• Introduction to ChatOps',
                            '• Using Slack and Microsoft Teams',
                            '• Introduction to Ansible',
                        ]
                    },
                    {
                        header: "4.2 Release Management and Team Collaboration",
                        dots: [
                            '• Release Strategies and Planning',
                            '• Blue-Green Deployments',
                            '• Effective Communication in DevOps',
                        ]
                    },
                    {
                        header: "4.3 Advanced Monitoring and Analytics, Kubernetes Service Mesh",
                        dots: [
                            '• Advanced Monitoring Techniques',
                            '• Analytics for Continuous Improvement',
                            '• Istio for Service Mesh',
                        ]
                    }
                ]
            },
            {
                name: "DevOps",
                position: 'top',
                month: 'MONTH 5',
                nom: [
                    {
                        header: "5.1 DevOps Tools Evaluation and Adoption",
                        dots: [
                            '• Evaluating DevOps Tools',
                            '• Toolchain Integration',
                            '• Case Studies in Tool Adoption',
                        ]
                    },
                    {
                        header: "5.2 Final Project and Presentation Preparation",
                        dots: [
                            '• Final Project Work and Presentation Preparation',
                            '• Graduation Ceremony and Networking',
                        ]
                    },
                    {
                        header: "5.3 Career Guidance and Emerging DevOps Trends",
                        dots: [
                            '• Career Opportunities in DevOps',
                            '• Resume Building and Interview Tips',
                            '• Emerging Trends in DevOps',
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        path: "../media/curses/Samvel.webp",
        state: false,
        people_count: {
            min: 7,
            max: 7
        },
        name: "Graphic design",
        off_of: "OFFLINE COURSE",
        post_text: "Armina Galstyan",
        prof: 'Graphic designer',
        description: 'Առաջին ամսում Դուք կծանոթանաք վեբ ծրագրավորման բազային գործիքներին, ներառյալ HTML-ի և CSS-ի հիմունքները:Երկրորդ ամսվա ընթացքում դուք ավելի խորը պատկերացում կունենաք HTML-ի և CSS-ի մասին:',
        sum_time: "Ամսական 40.000 շաբաթական 2 օր, 2 ժամ",
        result: "արդյունճ",
        faqs: [
            {
                harc: "Ու՞մ համար է նախատեսված դասընթացը:",
                patasxan: "Ու՞մ համար է նախատեսված դասընթացը\n\n"
            },
            {
                harc: "Ի՞նչ մեթոդով եք դասավանդում։",
                patasxan: "Ի՞նչ մեթոդով եք դասավանդում։\n\n"
            },
            {
                harc: "Դասընթացի բովանդակությունը։",
                patasxan: "Դասընթացի բովանդակությունը։\n\n"
            },
            {
                harc: "Ի՞նչ կտա ինձ դասընթացը։",
                patasxan: "Ի՞նչ կտա ինձ դասընթացը։\n\n"
            },
        ],
        curs_map: [
            {
                name: "Graphic design",
                position: 'top',
                month: 'MONTH 1',
                for: "",
                nom: [
                    {
                        header: "1.1 Introduction to Design Thinking",
                        dots: [
                            '• Introduction to Design Thinking',
                            '• Basics of Color Theory',
                            '• Typography Essentials'
                        ]
                    },
                    {
                        header: "1.2 Introduction to Design Software",
                        dots: [
                            '• Getting Started with Adobe Creative Suite',
                            '• Understanding Photoshop Basics',
                            '• Introduction to Illustrator for Design',
                        ]
                    },
                    {
                        header: "1.3. Project Work and Critique",
                        dots: [
                            '• Designing Basic Elements',
                            '• Applying Color and Typography',
                            '• Peer Critique and Feedback'
                        ]
                    }
                ]
            },
            {
                name: "Graphic design",
                position: 'bottom',
                month: 'MONTH 2',
                for: "",
                nom: [
                    {
                        header: "2.1 Advanced Design Principles",
                        dots: [
                            '• Layout and Composition',
                            '• Advanced Color Theory',
                            '• Visual Hierarchy and Balance',
                        ]
                    },
                    {
                        header: "2.2 Advanced Design Software Techniques",
                        dots: [
                            '• Mastering Photoshop',
                            '• Advanced Illustrator Techniques',
                            '• Introduction to InDesign'
                        ]
                    },
                    {
                        header: "2.3 Project Development and Client Interaction",
                        dots: [
                            '• Designing for a Specific Audience',
                            '• Client Communication and Project Scope',
                            '• Iterative Design and Client Feedback'
                        ]
                    }
                ]
            },
            {
                name: "Graphic design",
                position: 'top',
                month: 'MONTH 3',
                for: "",
                nom: [
                    {
                        header: "3.1 Specialized Design Areas",
                        dots: [
                            '• Introduction to Web Design',
                            '• Basics of UI/UX Design',
                            '• Branding and Identity Design',

                        ]
                    },
                    {
                        header: "3.2 Hands-on Project: Website Design",
                        dots: [
                            '• Wireframing and Prototyping',
                            '• Visual Design for Websites',
                            '• Responsive Design Principles',
                        ]
                    },
                    {
                        header: "3.3 Portfolio Development",
                        dots: [
                            '• Building a Design Portfolio',
                            '• Showcasing Your Work Online',
                            '• Peer Review and Portfolio Refinement',
                        ]
                    }
                ]
            },
            {
                name: "Graphic design",
                position: 'bottom',
                month: 'MONTH 3',
                for: "",
                nom: [
                    {
                        header: "3.1 Design Trends and Emerging Technologies",
                        dots: [
                            '• Staying Updated on Design Trends',
                            '• Exploring Augmented and Virtual Reality in Design',
                            '• Design for Mobile Platforms'
                        ]
                    },
                    {
                        header: "3.2 Designing for User Experience (UX)",
                        dots: [
                            '• Understanding User-Centered Design',
                            '• Conducting Usability Testing',
                            '• Improving UX through Design',
                        ]
                    },
                    {
                        header: "3.3 Career Preparation and Final Project",
                        dots: [
                            '• Job Search Strategies for Designers',
                            '• Interview Skills and Portfolio Presentation',
                            '• Final Project Presentation and Graduation',
                        ]
                    }
                ]
            }
        ]
    },
]

const faqs_conf = [
    {
        harc: "Ինչի՞ հիման վրա են անցկացվում դասընթացները",
        patasxan: "Դասընթացները հիմնված են ուսումնասիրվող ծրագրի հիման վրա։ Այս մեթոդի առավելությունն այն է, որ սկսած դասընթացի առաջին օրվանից, ուսանողները ստանում են թե՛ տեսական, թե՛ պրակտիկ գիտելիքներ։ Ստացած գիտելիքները կիրառելով մասնագիտությանը տիրապետելը դառնում է կրկնակի հեշտ և հետաքրքիր։"
    },
    {
        harc: "Ի՞նչ կտա ինձ կրթությունը ձեզ մոտ սովորելու դեպքում",
        patasxan: "Մեզ մոտ սովորելու դեպքում դուք կստանաք՝ Եռալեզու վկայական 6 ամիս հետադարձ կապ մասնագետների հետ\n տեխնիկական հարցազրույցների նախապատրաստություն ավարտական պորտֆոլիո հիմնված իրական պրոեկտի վրա քննությունը լավ հանձնելու դեպքում՝ գերազանցության վկայական լավագույն արդյունքների դեպքում ՝ աշխատանքի ընդունվելու աջակցություն 20% զեղչի նվեր-քարտ՝ մեր բոլոր դասընթացների համար\n"
    },
    {
        harc: "Ինչի՞ հիման վրա են անցկացվում դասընթացները",
        patasxan: "Դասընթացները հիմնված են ուսումնասիրվող ծրագրի հիման վրա։ Այս մեթոդի առավելությունն այն է, որ սկսած դասընթացի առաջին օրվանից, ուսանողները ստանում են թե՛ տեսական, թե՛ պրակտիկ գիտելիքներ։ Ստացած գիտելիքները կիրառելով մասնագիտությանը տիրապետելը դառնում է կրկնակի հեշտ և հետաքրքիր։"
    }
]

const teachers_conf = [
    {
        name: 'Samvel Torosyan\n',
        as: 'Python developer',
        img_path: "../media/curses/Samvel.webp",
        socs: [
            {
                url: "https://www.facebook.com/samvel.torosyan.397",
                icon: socIcons['facebook'],
                alt: 'facebook'
            },
            {
                url: "https://www.linkedin.com/in/samvel-torosyan",
                icon: socIcons['linkedin'],
                alt: 'linkedin'

            },
        ]
    },
    {
        name: 'Viktor Melik Parsadanyan\n',
        img_path: "../media/curses/Viktor.webp",
        as: 'Frontend developer',
        socs: [
            {
                url: "https://www.facebook.com/vik.mp.64/?locale=ru_RU",
                icon: socIcons.facebook,
                alt: 'facebook'
            },
            {
                url: "https://www.linkedin.com/in/viktor-melik-parsadanyan-107903243/",
                icon: socIcons.linkedin,
                alt: 'linkedin'

            },
        ]
    },
]

let pluses_conf = [
    {
        id: 1,
        img: "../media/choose_we/team.webp",
        header: "հատուկ մշակված դասընթացներ",
        description: "Մենք լրջորեն ենք մոտենում դասընթացների կառուցվածքին և բովանդակությանը, ինչը մեզ թույլ է տալիս վստահ լինել ուսանողների հաջողության հարցում: Յուրաքանչյուր դասընթաց մշակվում է լավագույն մասնագետների կողմից և համապատասխանում է տեխնիկական և շուկայական պահանջներին:"
    },
    {
        id: 5,
        img: "../media/choose_we/sales.webp",
        header: "զեղչային համակարգեր",
        description: "Մեզ մոտ պարբերաբար գործում են զեղչային համակարգեր և վճարման ապառիկ տարբերակներ: Սա մեծ հնարավորություն է տալիս ստանալ որակյալ կրթություն միաժամանակ խնայելով գումար և ժամանակ: Այն ուսանողներն, ովքեր ավարտում են մեր դասընթացներից որևէ մեկը, ստանում են զեղչի նվեր-քարտեր, հաջորդ դասընթացներին 20% զեղչով միանալու համար:"
    },

    {
        id: 2,
        img: "../media/choose_we/Rooper.webp",
        header: "անհատական մոտեցում",
        description: "Մեր դասընթավարները անհատական մոտեցում են ցուցաբերում յուրաքանչյուր ուսանողի նկատմամբ, ինչը թույլ է տալիս ուսանողներին գրանցել մեծ հաջողություններ ավարտական քննությունների ժամանակ և պրակտիկ աշխատանքների ընթացքում"
    },
    {
        id: 3,
        img: "../media/choose_we/script.webp",
        header: "մեթոդաբանություն",
        description: "Գիտելիքներ ունենալուց զատ, մենք կարևորում ենք դրանց ճիշտ կիրառումը: Այս պատճառով, սկսած դասընթացների երկրորդ ամսից մենք նախապատրաստում ենք ուսանողներին տեխնիկական հարցազրույցներին:"
    },
    {
        id: 4,
        img: "../media/choose_we/Untitled.webp",
        header: "հասանելի կրթություն",
        description: "Մենք կարևորում ենք այն գաղափարը, որ որակյալ կրթությունը պետք է հասանելի լինի բոլորին և մեր առաքելությունն է, խաթարել ուսման որակի բարձրացմանը Հայաստանում: Այդ, իսկ պատճառով մեր մշակված դասընթացները մատչելի են շուկայական սահմանված արժեքներից 15-20%-ով:"
    },
    {
        id: 6,
        img: "../media/choose_we/Robot.webp",
        header: "Նեթվորք",
        description: "Դասընթացից հետո բոլոր ավարտած ուսանողները դառնում են Code Matter-ի ակումբի անդամ և հնարավերություն են ստանում միանալու փակ խմբերին և չատերին:"
    },
]

const feedbacks_conf = [
    {
        id: 1,
        name: "Անահիտ Գրիգորյան",
        description: "Մասնակցել եմ PYTHON A-Z դասընթացին չունենալով սկզբնական գիտելիքներ։ Դասընթացը բովանդակալից էր, հատկապես պրակտիկ աշխատանքները օգնեցին ամրապնդել թեմաները։ Շնորհակալ եմ  Code Matter դպրոցի թիմին և հատկապես դասավանդող կազմին։"
    },
    {
        id: 2,
        name: "Վարդան Սարգսյան",
        description: "Ուսուցիչները պատասխանատու են վերաբերվում բոլոր ուսանողներին, ես սկզբից մտածում էի որ խմբային դասերը էֆֆեկտիվ չեն լինի, բայց առանձնահատուկ ուշադրությունը իմ և մյուսների նկատմամբ հակառակ ապացուցեց ինձ։ Ողջ ամսիների ընթացքում կլանված սովորել եմ իսկ հիմա արդեն տեսնում եմ արդյունքները։"
    },
    {
        id: 3,
        name: "Լիանա Վարոսյան",
        description: "Մասնակցել եմ JS անհատական դասընթացին ու անսահման գոհ եմ։ Բարդ ու հետաքրքիր ընթացք էր, որից շատ-շատ գոհ եմ։ Հիմա արդեն աշխատում եմ Junior JS developer։  Սպասելիքներս արդարացված են։"
    },
    {
        id: 1,
        name: "Նարեկ Հակոբյան",
        description: "Շնորհակալություն FrontEnd-ի գերազանց դասընթացի համար: Պրոֆեսիոնալ ուսուցիչ, կառուցվածքային նյութ և հիանալի հարթակ: Հատուկ շնորհակալություն զեղչի համար. դա իսկապես արժեքավոր էր:"
    },
]

const events_conf = {
    name: "TAKE YOUR GIFT",
    post_type: 'video',
    is_open: false,
    video: "../media/media-video/IMG_9198.MP4",
    header: "GRANCVEL"
}

const logos_conf = [
    {
        name: "AmeriaBank",
        img: "../media/companies-logos/Ameriabank_new_logo-removebg-preview.webp",
    },
    {
        name: "iDBank",
        img: "../media/companies-logos/og-idram.webp",
    },
    {
        name: "AmeriaBank",
        img: "../media/companies-logos/Ameriabank_new_logo-removebg-preview.webp",
    },
    {
        name: "iDBank",
        img: "../media/companies-logos/og-idram.webp",
    },
    {
        name: "AmeriaBank",
        img: "../media/companies-logos/Ameriabank_new_logo-removebg-preview.webp",
    },
    {
        name: "iDBank",
        img: "../media/companies-logos/og-idram.webp",
    },
    {
        name: "AmeriaBank",
        img: "../media/companies-logos/Ameriabank_new_logo-removebg-preview.webp",
    },
    {
        name: "iDBank",
        img: "../media/companies-logos/og-idram.webp",
    },
]



export {
    feedbacks_conf,
    pageNavigation,
    teachers_conf,
    events_conf,
    pluses_conf,
    posts_conf,
    logos_conf,
    faqs_conf,
    languages,
    TOKEN
}