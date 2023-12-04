console.log("holamundo")
try {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("sw.js")
            .then(registration => {
            }).catch(err => {
            })
    }
} catch (error) {
}

ScrollReveal().reveal('.reveal', {
    delay: 200,
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
})

function navidad() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25);

    const difference = christmas - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    setTimeout(navidad, 1000);
}
navidad();


const discordOnline = true;
const twitterOnline = true;
const whatsappOnline = true;

function updateStatus(elementId, isOnline) {
    const statusElement = document.getElementById(elementId);
    if (isOnline) {
        statusElement.classList.add('online');
    } else {
        statusElement.classList.remove('online');
    }
}

window.onload = function () {
    updateStatus('discord-status', discordOnline);
    updateStatus('twitter-status', twitterOnline);
    updateStatus('whatsapp-status', whatsappOnline);
};

function redirectTo(url) {
    window.location.href = url;
}

function openWhatsApp() {
    const phoneNumber = '+5214581122218';
    const message = 'Hola, estoy visitando tu portafolio.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}


