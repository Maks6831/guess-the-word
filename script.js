const words = ['python', 'javascript', 'object', 'array', 'methods', 'hypertextmarkuplanguage'];
localStorage.setItem('words', JSON.stringify(words));
let button = document.getElementsByClassName("button");
let wordbox = document.getElementById("wordbox")

function getRandomWord(arr) {
    let randomindex = Math.floor(Math.random() * arr.length);

    return arr[randomindex];
}

;
console.log(getRandomWord(words))

button[0].addEventListener('click', function() {
    let chosenWord = getRandomWord(words);
    console.log(getRandomWord(words));
    wordbox.textContent = chosenWord;
    for 
    

})
