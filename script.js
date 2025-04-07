// Function for Explore Buttons
const exploreButtons = document.getElementsByClassName('explore');

for (let i = 0; i < exploreButtons.length; i++) {
    exploreButtons[i].addEventListener('click', () => {
        window.open("https://www.instagram.com/gs.skin.clinic/", "_blank");
    });
}

document.getElementById('insta').addEventListener('click', ()=> {
    window.open("https://www.instagram.com/gs.skin.clinic/", "_blank");
});

// Function to open the WhatsApp chat
document.getElementById('whatsapp-btn').addEventListener('click', wp);

// Ham menu

const mainMenu = document.querySelector('.center');
const offScreen = document.querySelector('.off-screen-menu');
const hamMenu = document.querySelector('.hamburger');
const bookapt = document.querySelector('.getApt');
const head = document.querySelector('.header');

// Function to handle opening WhatsApp
function wp() {
    window.open('https://wa.me/7529058713?text=Hello%20I%20want%20to%20book%20an%20appointment', '_blank');
}

// Add event listener to the original bookapt button (in the main menu)
bookapt.addEventListener('click', wp);

// When the hamburger menu is clicked:
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
    
    // Append the button's HTML (not hidden version) to offScreen
    offScreen.innerHTML = mainMenu.innerHTML;
    
    // Reattach the click event to the newly added button in offScreen
    const newBookApt = offScreen.querySelector('#whatsapp-btn');
    newBookApt.addEventListener('click', wp);
});
