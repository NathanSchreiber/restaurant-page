const content = document.getElementById('content');

// Renders home page on page load
window.onload = homeContents();

const menuButton = document.querySelector('.menu');
const reviewSection = document.querySelector('.reviews');

menuButton.addEventListener('click', (e) => {
    reviewSection.remove();
});

// Adds content to home page
function homeContents() {
    const hero = document.createElement('div');
    hero.classList.add('hero-image')
    const reviews = document.createElement('div');
    reviews.classList.add('reviews');
    content.append(hero, reviews);
    navContents();
    titleContent();
    descriptionContent();
    reviewContent();

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