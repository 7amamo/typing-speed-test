
let words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// Setting Levels
let lvls = {
    "Easy": 5,
    "Normal": 5,
    "Hard": 2
};

// Default Level
let defaultLevelName = "Normal"; // Change Level From Here
let defaultLevelSeconds = lvls[defaultLevelName];

let time = document.querySelector(".game .control .time span")

document.querySelector(".game .message span.lvl").innerHTML = defaultLevelName;
document.querySelector(".game .message span.seconds").innerHTML = defaultLevelSeconds;
document.querySelector(".game .control .time span").innerHTML = defaultLevelSeconds;
document.querySelector(".game .control .score .total").innerHTML = words.length

let start = document.querySelector(".game .start")
let word = document.querySelector(".game .the-word")
let upcomingword = document.querySelector(".game .upcoming-words")
let input = document.querySelector(".game .input")
let scoreGot = document.querySelector(".control .score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");


input.onpaste = function () {
    return false;
}



start.onclick = function () {
    start.remove()
    input.focus();
    addelmentinupcomingword(words)
}

function addelmentinupcomingword(words) {
    let randomword = words[Math.floor(Math.random() * words.length)]
    let indexofrandomword = words.indexOf(randomword)
    words.splice(indexofrandomword, 1)
    word.innerHTML = randomword
    upcomingword.innerHTML = ""

    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div")
        div.appendChild(document.createTextNode(words[i]))
        upcomingword.appendChild(div)
    }
    startPlay()
}

function startPlay() {
    time.innerHTML = defaultLevelSeconds;
    start = setInterval(function () {
        time.innerHTML--;

        if (time.innerHTML === "0") {
            clearInterval(start)

            if (word.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = '';
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    addelmentinupcomingword(words);

                } else {
                    let span = document.createElement("span");
                    span.className = 'good';
                    let spanText = document.createTextNode("Congratz");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    upcomingword.remove();
                }


            } else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }

    }, 1000) 

}