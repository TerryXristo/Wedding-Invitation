const chatterbox = document.getElementById("chatterbox");
const invitation = document.getElementById("invitation");
const instruction = document.getElementById("instruction");

let stage = 0;
let autoTimer;

/*
Stages

0 = closed
1 = outer flaps open
2 = invitation reveal
*/

function openNextStage() {
stage++;

```
if (stage === 1) {
    chatterbox.classList.add("stage1");

    instruction.textContent = "Click again";
}

if (stage === 2) {
    chatterbox.classList.add("stage2");

    instruction.style.opacity = "0";

    setTimeout(() => {
        invitation.classList.add("show");
    }, 800);
}
```

}

function startAutoOpen() {
autoTimer = setTimeout(() => {
if (stage === 0) {
openNextStage();

```
        setTimeout(() => {
            openNextStage();
        }, 1800);
    }
}, 10000);
```

}

chatterbox.addEventListener("click", () => {
clearTimeout(autoTimer);

```
if (stage < 2) {
    openNextStage();
}
```

});

document.addEventListener("keydown", (e) => {
if (e.code === "Space") {
e.preventDefault();

```
    if (stage < 2) {
        openNextStage();
    }
}
```

});

startAutoOpen();
