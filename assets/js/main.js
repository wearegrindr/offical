/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration: 2500,
    delay:300,
})

sr.reveal('.home_-img, .new__data, .care__img, .contact__content, .footer')
sr.reveal('.home__data, .care__list, contact__img, {delay:500}')
sr.reveal('.new__card, {delay:500, interval:100}')
sr.reveal('.shop__card, { interval:100}')

var text = ["EVERYDAY SOLUTIONS", "PERSONALISED GIFTS", "ARTISTIC EXPRESSION", "PROTOTYPING"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 2000);
function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
      counter = 0;
      // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
  }

var text2 = [" Create custom-made gifts that are tailored to your loved ones' interests, such as personalized keychains, photo frames, or jewelry. These thoughtful items cannot be found in stores, making them all the more special.", "Design and print your own home decorations, like vases, lampshades, or wall art. Match them perfectly to your home's aesthetic or create something that stands out as a conversation piece.", "Need a holder for your smartphone or a custom organizer for your tools? How about a unique case for your glasses? With 3D printing, you can design and print practical items tailored to your specific needs.", "Broken a small, irreplaceable part of a household item? Instead of replacing the entire device, you can often print a new part, saving money and reducing waste.", "If you've ever had an idea for a product or an invention, 3D printing is the perfect way to create a prototype and test your concept, making the journey from idea to reality faster and less expensive.", "With materials like biodegradable PLA, you can create useful objects and beautiful art without the environmental guilt. Plus, printing what you need, when you need it, helps reduce waste.","Design and print your own jewelry, accessories, or elements of clothing, allowing for unprecedented creativity and personal expression in fashion.","Artists can experiment with digital sculptures and models that are then brought into the physical world through 3D printing, pushing the boundaries of traditional art forms."];
var counter2 = 0;

var elem2 = document.getElementById("changeParagraph");
var inst2 = setInterval(change2, 5000);
function change2() {
  elem2.innerHTML = text2[counter2];
  counter2++;
  if (counter2 >= text2.length) {
    counter2 = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}