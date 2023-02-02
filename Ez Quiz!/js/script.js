const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
checkBtn = document.querySelector(".check-word");
scoreText = document.querySelector(".score")

var score = -1;

let correctWord, timer;

const initTimer = maxTime => {
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        swal({

                title: "Waktu Habis",

                text: "",

                icon: "error",

                button: true

            });
        pindah(url);
    }, 1000);

}

function updatescore() {
    score++;
}

const initGame = () => {
    updatescore();
    scoreText.innerText = score;
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initTimer(100);
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return swal({

                title: "Error",

                text: "Jawab dulu sebelum Cek Jawaban",

                icon: "error",

                button: true

            });

    if(userWord !== correctWord) return swal({

                title: "Salah",

                text: "Jawaban kamu salah!",

                icon: "error",

                button: true

            });

    swal({

                title: "Benar",

                text: "Jawaban kamu benar!",

                icon: "success",

                button: true

            });
    initGame();

}

function pindah(url)
{
window.location = url;
}
setInterval("pindah('selesai.html')",100000);

checkBtn.addEventListener("click", checkWord);