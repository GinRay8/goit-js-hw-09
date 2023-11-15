function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const elements = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
};

let initTime;
let intervalId;
let isActive = false;

elements.btnStart.addEventListener('click', () => {
    if (isActive) return;
    isActive = true;
    elements.btnStart.disabled = true;
    initTime = Date.now();
    intervalId = setInterval(() => {
        const currenTime = Date.now();
        const diff = currenTime - initTime;
        console.log(diff);
        const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
    },1000)
});

elements.btnStop.addEventListener('click', () => {
    if (!isActive) return;
    isActive = false;
    elements.btnStart.disabled = false;
    clearInterval(intervalId);
});
