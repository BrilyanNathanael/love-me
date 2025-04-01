const containerQuestion = document.getElementById("container");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
    const newX = Math.floor(Math.random() * containerQuestion.offsetWidth);
    const newY = Math.floor(Math.random() * containerQuestion.offsetHeight);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
})

yesBtn.addEventListener("click", () => {
    let next = document.getElementById("next");
    containerQuestion.style.display = "none";
    next.style.display = "block";

    setTimeout(() => {
        const sayYes = document.getElementById("sayYes");
        sayYes.style.display = "block";
        next.style.display = "none";
    }, 2800);
})