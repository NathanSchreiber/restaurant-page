const content = document.getElementById('content');

// Renders home page on page load
window.onload = pageContents(), contactContents();

const menuButton = document.querySelector('.menu');
const homeButton = document.querySelector('.home');
const contactButton = document.querySelector('.contact');


// Removes home/contact contents when menu is clicked and adds menu contents
menuButton.addEventListener('click', (e) => {
    const reviewSection = document.querySelector('.reviews');
    const menuSection = document.querySelector('div.menu');
    const contactSection = document.querySelector('div.contact');
    if (reviewSection) {
        reviewSection.remove();
    }
    if (contactSection) {
        contactSection.remove();
    }
    if (menuSection) {
        menuSection.remove();
    }
    
    menuContents();
});

// Removes menu/contact contents when home is clicked and adds home contents
homeButton.addEventListener('click', (e) => {
    const reviewSection = document.querySelector('.reviews');
    const menuSection = document.querySelector('div.menu');
    const contactSection = document.querySelector('div.contact');
    if (menuSection) {
        menuSection.remove();
    }
    if (contactSection) {
        contactSection.remove();
    }
    if (reviewSection) {
        reviewSection.remove();
    }

    homeContents();
});

// Removes home/menu contents when contact is clicked and adds contact contents
contactButton.addEventListener('click', (e) => {
    const reviewSection = document.querySelector('.reviews');
    const menuSection = document.querySelector('div.menu');
    const contactSection = document.querySelector('div.contact');
    if (reviewSection) {
        reviewSection.remove();
    }
    if (menuSection) {
        menuSection.remove();
    }
    if (contactSection) {
        contactSection.remove();
    }

    contactContents();
});

// Adds content to page
function pageContents() {
    const hero = document.createElement('div');
    hero.classList.add('hero-image')
    content.append(hero);
    navContents();
    titleContent();
    descriptionContent();

    // Creates nav contents
    function navContents() {
        const nav = document.createElement('div');
        nav.classList.add('nav');

        const navList = document.createElement('ul');
        navList.classList.add('nav');

        const menu = document.createElement('li');
        menu.classList.add('menu');
        menu.textContent = "Menu";

        const home = document.createElement('li');
        home.classList.add('home');
        home.textContent = "Home";

        const contact = document.createElement('li');
        contact.classList.add('contact');
        contact.textContent = "Contact";

        hero.appendChild(nav);
        nav.appendChild(navList);
        navList.append(menu, home, contact);
    };

    // Creates title section
    function titleContent() {
        const title = document.createElement('div');
        title.classList.add('title');

        const textTitle = document.createElement('h1');
        textTitle.textContent = `Benny's Casual Italy`;

        title.appendChild(textTitle);
        hero.appendChild(title);
    }

    // Creates description section
    function descriptionContent() {
        const description = document.createElement('div');
        description.classList.add('description');

        const textDescription = document.createElement('p');
        textDescription.classList.add('description');
        textDescription.textContent = "The only casual Italian restaurant in town";

        description.appendChild(textDescription);
        hero.appendChild(description);
    }
};

//Adds content to home page
function homeContents() {
    const reviews = document.createElement('div');
    reviews.classList.add('reviews');
    content.appendChild(reviews);
    reviewContent();

    // Creates content of review section
    function reviewContent() {
        const reviewHeader = document.createElement('div');
        reviewHeader.classList.add('review-header');

        const textReviewHeader = document.createElement('h2');
        textReviewHeader.textContent = "What people think!";

        const reviewOne = document.createElement('div');
        const reviewTwo = document.createElement('div');
        const reviewThree = document.createElement('div');
        reviewOne.classList.add('review-1');
        reviewTwo.classList.add('review-2');
        reviewThree.classList.add('review-3');

        const textReviewOne = document.createElement('p');
        const textReviewTwo = document.createElement('p');
        const textReviewThree = document.createElement('p');
        textReviewOne.textContent = `This place has the best Italian food I've ever eaten in my life, and I didn't even have to dress up!`;
        textReviewTwo.textContent = `"I love Benny's Casual Italy! I go here every year for my birthday!"`;
        textReviewThree.textContent = `"Wow, just wow!"`;

        reviews.append(reviewHeader, reviewOne, reviewTwo, reviewThree);
        reviewHeader.appendChild(textReviewHeader);
        reviewOne.appendChild(textReviewOne);
        reviewTwo.appendChild(textReviewTwo);
        reviewThree.appendChild(textReviewThree);
    };
};

// Adds content to menu page
function menuContents() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const foodOne = document.createElement('div');
    foodOne.classList.add('food-1');
    const foodOneImg = document.createElement('div');
    foodOneImg.classList.add('food-1-img');
    const foodOneTitle = document.createElement('p');
    foodOneTitle.classList.add('food-1-title');
    foodOneTitle.textContent = "Spicy Seafood - $18";
    const foodOneDescription = document.createElement('p');
    foodOneDescription.classList.add('food-1-description');
    foodOneDescription.textContent = 
    "Served with sliced tomatoes, clams, and red peppers";

    const foodTwo = document.createElement('div');
    foodTwo.classList.add('food-2');
    const foodTwoImg = document.createElement('div');
    foodTwoImg.classList.add('food-2-img');
    const foodTwoTitle = document.createElement('p');
    foodTwoTitle.classList.add('food-2-title');
    foodTwoTitle.textContent = 
    "Fettuccine Alfredo - $21";
    const foodTwoDescription = document.createElement('p')
    foodTwoDescription.classList.add('food-2-description');
    foodTwoDescription.textContent = "Served with ham and assorted greens";

    const foodThree = document.createElement('div');
    foodThree.classList.add('food-3');
    const foodThreeImg = document.createElement('div');
    foodThreeImg.classList.add('food-3-img');
    const foodThreeTitle = document.createElement('p');
    foodThreeTitle.classList.add('food-3-title');
    foodThreeTitle.textContent = "Spaghetti - $17";
    const foodThreeDescription = document.createElement('p');
    foodThreeDescription.classList.add('food-3-description');
    foodThreeDescription.textContent = 
    "Served with sliced tomatoes, and your choice of greens";


    foodOne.append(foodOneImg, foodOneTitle, foodOneDescription);
    foodTwo.append(foodTwoImg, foodTwoTitle, foodTwoDescription);
    foodThree.append(foodThreeImg, foodThreeTitle, foodThreeDescription);
    menu.append(foodOne, foodTwo, foodThree);
    content.appendChild(menu);
};

// Adds content to contact page
function contactContents() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactHeader = document.createElement('p');
    contactHeader.classList.add('contact-header');
    contactHeader.textContent = "Contact Us!";

    const contactMethods = document.createElement('div');
    contactMethods.classList.add('contact-methods');

    const address = document.createElement('div');
    address.classList.add('address');

    const street = document.createElement('p');
    street.classList.add('street');
    street.textContent = "123 Main Street";

    const cityState = document.createElement('p');
    cityState.classList.add('city-state');
    cityState.textContent = "Parma, OH 44134";

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phone-number');
    phoneNumber.textContent = "555-555-5555";

    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = "BennysCasualItaly@example.com";

    const hours = document.createElement('div');
    hours.classList.add('hours');

    const hoursHeader = document.createElement('p');
    hoursHeader.classList.add('hours-header');
    hoursHeader.textContent = "Hours";

    const monday = document.createElement('p');
    monday.classList.add('monday');
    monday.textContent = "Monday: 1pm - 10pm";

    const tuesday = document.createElement('p');
    tuesday.classList.add('tuesday');
    tuesday.textContent = "Tuesday: 1pm - 10pm";

    const wednesday = document.createElement('p');
    wednesday.classList.add('wednesday');
    wednesday.textContent = "Wednesday: 1pm - 10pm";

    const thursday = document.createElement('p');
    thursday.classList.add('thursday');
    thursday.textContent = "Thursday: 1pm - 10pm";

    const friday = document.createElement('p');
    friday.classList.add('friday');
    friday.textContent = "Friday: 1pm - 11pm";

    const saturday = document.createElement('p');
    saturday.classList.add('saturday');
    saturday.textContent = "Saturday: 1pm - 11pm";

    const sunday = document.createElement('p');
    sunday.classList.add('sunday');
    sunday.textContent = "Sunday: 1pm - 9pm";



    hours.append(hoursHeader, monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    address.append(street, cityState);
    contactMethods.append(address, phoneNumber, email);
    contact.append(contactHeader, contactMethods, hours);
    content.appendChild(contact);
};