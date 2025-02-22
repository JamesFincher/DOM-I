const siteContent = {
	// DO NOT CHANGE THIS OBJECT
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io",
	},
	footer: {
		copyright: "Copyright Great Idea! 2021",
	},
	images: {
		"logo-img": "http://localhost:9000/img/logo.png",
		"cta-img": "http://localhost:9000/img/cta.png",
		"accent-img": "http://localhost:9000/img/accent.png",
	},
};

console.log("project wired!");

//nav link setup

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function (link, i) {
	link.classList.add("italic");
	link.textContent = siteContent.nav[`nav-item-${i + 1}`];
});

//logo img now

const logoImg = document.querySelector(".logo");

logoImg.src = siteContent.images["logo-img"];

//cta now

const ctaH1 = document.querySelector(".cta h1");
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta button");

ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector(".cta img");

ctaImg.src = siteContent.images["cta-img"];

// body now
const mainContentImg = document.querySelector(".middle-img");
mainContentImg.src = siteContent.images["accent-img"];

const h4 = document.querySelectorAll(".main-content h4");

h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];

const p = document.querySelectorAll(".main-content p");

p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];

// footer now

const footer = document.querySelector("footer a");
footer.textContent = siteContent.footer.copyright;
footer.classList.add("bold");

const contactHeading = document.querySelectorAll(".contact h4");
contactHeading[0].textContent = siteContent["contact"]["contact-h4"];

const contactText = document.querySelectorAll(".contact p");

contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];
