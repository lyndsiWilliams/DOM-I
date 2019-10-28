const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM<br> Is<br> Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "mainContent": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};


// ----- Nav bar construction -----
const nav = document.querySelectorAll('nav a');
const nav1 = nav.item(0);
const nav2 = nav.item(1);
const nav3 = nav.item(2);
const nav4 = nav.item(3);
const nav5 = nav.item(4);
const nav6 = nav.item(5);
nav1.textContent = siteContent.nav["nav-item-1"];
nav2.textContent = siteContent.nav["nav-item-2"];
nav3.textContent = siteContent.nav["nav-item-3"];
nav4.textContent = siteContent.nav["nav-item-4"];
nav5.textContent = siteContent.nav["nav-item-5"];
nav6.textContent = siteContent.nav["nav-item-6"];

// Nav bar img
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// ----- Call to action construction -----

const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent.cta["h1"];

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta["button"];

// CTA img
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];


// ----- Main content construction -----

// Top content
const topH4 = document.querySelectorAll('.top-content .text-content h4');
const featuresH4 = topH4.item(0);
const aboutH4 = topH4.item(1);
const topContent = document.querySelectorAll('.top-content .text-content p');
const featuresContent = topContent.item(0);
const aboutContent = topContent.item(1);

featuresH4.textContent = siteContent.mainContent["features-h4"];
aboutH4.textContent = siteContent.mainContent["about-h4"];

featuresContent.textContent = siteContent.mainContent["features-content"];
aboutContent.textContent = siteContent.mainContent["features-content"];

// Middle image
const midImg = document.querySelector('.middle-img');
midImg.src = siteContent.mainContent["middle-img-src"];

// Bottom content
const bottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
const servicesH4 = bottomH4.item(0);
const productH4 = bottomH4.item(1);
const visionH4 = bottomH4.item(2);
const bottomContent = document.querySelectorAll('.bottom-content .text-content p');
const servicesContent = bottomContent.item(0);
const productContent = bottomContent.item(1);
const visionContent = bottomContent.item(2);

servicesH4.textContent = siteContent.mainContent["services-h4"];
productH4.textContent = siteContent.mainContent["product-h4"];
visionH4.textContent = siteContent.mainContent["vision-h4"];

servicesContent.textContent = siteContent.mainContent["services-content"];
productContent.textContent = siteContent.mainContent["product-content"];
visionContent.textContent = siteContent.mainContent["vision-content"];


// ----- Contact section construction -----
const contactH4 = document.querySelector('.contact h4');
const contactText = document.querySelectorAll('.contact p');
const contactAddress = contactText.item(0);
const contactPhone = contactText.item(1);
const contactEmail = contactText.item(2);

contactH4.textContent = siteContent.contact["contact-h4"];
contactAddress.textContent = siteContent.contact["address"];
contactPhone.textContent = siteContent.contact["phone"];
contactEmail.textContent = siteContent.contact["email"];


// ----- Footer construction -----
const footerText = document.querySelector('footer p');

footerText.textContent = siteContent.footer["copyright"];