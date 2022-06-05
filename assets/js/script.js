const rows = Array.from(document.querySelectorAll(".row"));
const [hourBlocks, minuteBlocks, secondBlocks] = rows.map(row => {
    return row.querySelectorAll(".block");
});

const setBlocks = (blocks, value) => {
    const length = blocks.length;
    for (let i = 0; i < length; i++) {
        blocks[i].style.background = value[value.length - 1 - i] === "1" ?
            "#e26a07"
            : "#2f3e46";
    }
};

const setTime = time => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    setBlocks(secondBlocks, seconds.toString(2));
    if (seconds === 0) {
        setBlocks(minuteBlocks, minutes.toString(2));
        setBlocks(hourBlocks, (hours % 12).toString(2));
    }
};

const initTime = new Date();
setBlocks(secondBlocks, initTime.getSeconds().toString(2));
setBlocks(minuteBlocks, initTime.getMinutes().toString(2));
setBlocks(hourBlocks, initTime.getHours().toString(2));

setInterval(() => {
    const time = new Date();
    setTime(time);
}, 1000);