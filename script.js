const words = ['python', 'javascript', 'object', 'array', 'methods', 'hypertextmarkuplanguage'];
localStorage.setItem('words', JSON.stringify(words));
let button = document.getElementsByClassName("button");
let wordBox = document.getElementById("wordbox")

function getRandomWord(arr) {
    let randomindex = Math.floor(Math.random() * arr.length);

    return arr[randomindex];
}

;
console.log(getRandomWord(words))

button[0].addEventListener('click', function() {
    let chosenWord = getRandomWord(words);
    console.log(chosenWord);
    let underScore = '';
    for (let i = 0; i < chosenWord.length; i++) {
        underScore += '<p>  _ , </p>';

    }
    wordBox.innerHTML = underScore;

    document.addEventListener('keydown', (event)=> {
        let name = event.key;
        console.log(name);
    });
})

