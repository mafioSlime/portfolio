const words = ['Web Developer ', "UX & UI Designer", "Coding & Coffee"]
let count = 0
let index = 0
let currentText = ''
let letter = ''

const type = () => {
    if (count === words.length) {
        count = 0;
    }
    currentText = words[count]
    letter = currentText.slice(0, ++index)

    document.querySelector('.type-writer').textContent = letter;
    if (letter.length === currentText.length) {
        count++
        index = 0;
    }
    setTimeout(type, 150)
}

type();