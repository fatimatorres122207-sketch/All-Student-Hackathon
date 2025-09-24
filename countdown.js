const { DateTime } = require("luxon");

const eventDate = DateTime.fromObject(
  { year: 2025, month: 12, day: 6, hour: 10, minute: 0 },
  { zone: 'America/Chicago' }
).toMillis();

console.log(eventDate);
const countdown = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
        countdown.innerHTML = "The event has started!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
