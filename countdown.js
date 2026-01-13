// Ensure Luxon is loaded globally
const { DateTime } = luxon;

// Event date: Dec 6, 2025 at 10:00 AM Central Time
const eventDate = DateTime.fromObject(
  { year: 2026, month: 12, day: 6, hour: 10, minute: 0 },
  { zone: 'America/Chicago' }
).toMillis();

function updateCountdown() {
  const countdown = document.getElementById("countdown");

  // Safety check in case the element is not found
  if (!countdown) return;

  const now = DateTime.now().toMillis();
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

// Call once immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
