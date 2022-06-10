const hourBlocks = Array.from(document.querySelectorAll(".hour"));
const minuteBlocks = Array.from(document.querySelectorAll(".minute"));
const secondBlocks = Array.from(document.querySelectorAll(".second"));

const setBlocks = (blocks, value) => {
    blocks.map((block) => {
        block.classList.toggle("active", value % 2);
        value = Math.trunc(value / 2);
    })
};

const setClock = (init) => {
    const timeNow = new Date();
    const seconds = timeNow.getSeconds();
    setBlocks(secondBlocks, seconds);
    if (seconds === 0 || init) {
        setBlocks(minuteBlocks, timeNow.getMinutes());
        setBlocks(hourBlocks, (timeNow.getHours() % 12 || 12));
    }
};

setClock(true);
setInterval(setClock, 1000);
