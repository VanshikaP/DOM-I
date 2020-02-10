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
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Updating The Nav Headers
let navLinks = Array.from(document.querySelectorAll('nav a'));
for(let i = 0; i < navLinks.length; i++){
  navLinks[i].textContent = siteContent["nav"]["nav-item-" + (i+1)];
  navLinks[i].style.color = "green";
}


//Updating CTA
document.querySelector('.cta h1').textContent = siteContent.cta.h1;
document.querySelector('.cta button').textContent = siteContent.cta.button;
document.getElementById('cta-img').setAttribute('src', siteContent.cta["img-src"]);

//Main Content

//features
document.querySelector('.top-content h4').textContent = siteContent["main-content"]["features-h4"];
document.querySelector('.top-content p').textContent = siteContent["main-content"]["features-content"];

//about 
document.querySelector('.top-content .text-content:last-child h4').textContent = siteContent["main-content"]["about-h4"];
document.querySelector('.top-content .text-content:last-child p').textContent = siteContent["main-content"]["about-content"];

//img
document.getElementById('middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//services
document.querySelector('.bottom-content h4').textContent = siteContent["main-content"]["services-h4"];
document.querySelector('.bottom-content p').textContent = siteContent["main-content"]["services-content"];

//product
document.querySelector('.bottom-content .text-content:nth-child(2) h4').textContent = siteContent["main-content"]["product-h4"];
document.querySelector('.bottom-content .text-content:nth-child(2) p').textContent = siteContent["main-content"]["product-content"];

//vision
document.querySelector('.bottom-content .text-content:last-child h4').textContent = siteContent["main-content"]["vision-h4"];
document.querySelector('.bottom-content .text-content:last-child p').textContent = siteContent["main-content"]["vision-content"];


//Contact
document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"];
document.querySelector('.contact p').textContent = siteContent.contact.address;
document.querySelector('.contact p:nth-child(2)').textContent = siteContent.contact.phone;
document.querySelector('.contact p:last-child').textContent = siteContent.contact.email;

//Footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;
