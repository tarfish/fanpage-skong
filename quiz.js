let correctAnswers = 0;
let currentQuestion = 1;
const myDiv = document.getElementById('question');

function renderQuestion() {
    if (currentQuestion === 1) {
        myDiv.innerHTML = `
            <label>Who is the main character of Silksong?</label><br>
            <input type="radio" name="q1" value="a"> Hornet<br>
            <input type="radio" name="q1" value="b"> The Knight<br>
            <input type="radio" name="q1" value="c"> Zote<br>
            <button type="button" onclick="checkAnswer1()" id="submit-q1">Submit Answer</button>
            <button type="button" onclick="nextQuestion()" id="next-q1">Next Question</button>
        `;
    } else if (currentQuestion === 2) {
        myDiv.innerHTML = `
            <label>Who made the game?</label><br>
            <input type="radio" name="q2" value="a"> Ubisoft<br>
            <input type="radio" name="q2" value="b"> Team Cherry<br>
            <input type="radio" name="q2" value="c"> Microsoft<br>
            <button type="button" onclick="checkAnswer2()" id="submit-q2">Submit Answer</button>
            <button type="button" onclick="nextQuestion()" id="next-q2">Next Question</button>
        `;
    } else {
        myDiv.innerHTML = `
            <h3>Quiz complete!</h3>
            <p>You got ${correctAnswers} correct answers.</p>
            <button onclick="window.location.href='index.html'">Back to Home</button>
        `;
    }
}

function nextQuestion() {
    currentQuestion++;
    renderQuestion();
}

function checkAnswer1() {
    const selected = document.querySelector('input[name="q1"]:checked');
    if (!selected) {
        alert("Where's your answer, mate?");
        return;
    }
    if (selected.value === 'a') {
        correctAnswers++;
    }
    document.getElementById('result').textContent = 'Correct answers: ' + correctAnswers;
    document.getElementById('submit-q1').disabled = true;
}

function checkAnswer2() {
    const selected = document.querySelector('input[name="q2"]:checked');
    if (!selected) {
        alert("Where's your answer, mate?");
        return;
    }
    if (selected.value === 'b') {
        correctAnswers++;
    }
    document.getElementById('result').textContent = 'Correct answers: ' + correctAnswers;
    document.getElementById('submit-q2').disabled = true;
}

const navEntries = performance.getEntriesByType("navigation");
if (navEntries.length > 0 && navEntries[0].type === "reload") {
    window.location.href = "index.html";
}

renderQuestion();