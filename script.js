// টাইপিং এফেক্ট
new Typed('#typing-text', {
    strings: ['Future Web Developer.', 'Tech Enthusiast.', 'Creative Designer.'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// ডিজিটাল ঘড়ি
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12 || 12;
    const hoursStr = String(hours).padStart(2, '0');

    document.getElementById('digital-clock').textContent = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

// পার্টিকেল জেএস কনফিগারেশন
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 55, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#38bdf8" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.4, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#38bdf8", "opacity": 0.15, "width": 1 },
        "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "bubble" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "bubble": { "distance": 100, "size": 5, "duration": 2, "opacity": 0.8, "speed": 3 }
        }
    }
});