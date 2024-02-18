let business_type = {
    "@context": "http://www.schema.org",
    "@type": "AutomotiveBusiness",
    "name": "Code Matter",
    "url": "https://codematter.am/",
    "sameAs": [
        "https://codematter.am/curses"
    ],
    "logo": "https://raw.githubusercontent.com/Viktor-MP/CodeMatter/527e8870d8834e3caa6fca5c63807b78c35a2915/frontend/src/media/logos/code.matterblack.png?token=GHSAT0AAAAAACMREULH33HE3K72AASTWKOSZM5VCJA",
    "image": "https://raw.githubusercontent.com/Viktor-MP/CodeMatter/527e8870d8834e3caa6fca5c63807b78c35a2915/frontend/src/media/logos/code.matterblack.png?token=GHSAT0AAAAAACMREULH33HE3K72AASTWKOSZM5VCJA",
    "description": "The main mission of the Code Matter school is to make high-quality and professional education accessible to people who want to engage in IT. Based on this goal, we have compiled courses designed for all levels, from beginners to practicing professionals.\nHigh-quality education is the cornerstone of a safe and strong future, and we contribute to its development with great love and responsibility:",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Armenia, Yerevan, moskovyan 3",
        "addressLocality": "Yerevan",
        "addressRegion": "Armenia",
        "postalCode": "0001",
        "addressCountry": "Армения"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.18394877950931",
        "longitude": "44.5222369865072"
    },
    "hasMap": "https://www.google.com/maps/place/3+Moskovyan+pokhoc/@40.1838996,44.5222048,17z/data=!4m7!3m6!1s0x406abce69a003aa3:0x4c8b06c650fc3623!4b1!8m2!3d40.1838996!4d44.5222048!16s%2Fg%2F11c3q3_3qq?entry=ttu",
    "openingHours": "Mo, Tu, We, Th, Fr, Sa, Su -",
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "phone",
        "telephone": "055134311"
    }
}

// Создаем элемент script и добавляем в него JSON-LD схему
let script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(business_type);

// Добавляем элемент script в тег head страницы
document.head.appendChild(script);
