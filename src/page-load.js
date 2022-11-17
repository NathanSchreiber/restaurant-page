const content = document.getElementById('content');

function homeContents() {
    const hero = document.createElement('div');
    hero.classList.add('hero-image')
    const reviews = document.createElement('div');
    reviews.classList.add('reviews');
    hero.textContent = "Hello Friends";
    content.appendChild(hero);
}

onload = homeContents();