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
    }
    
    else if (currentQuestion === 3) {
        myDiv.innerHTML = `
            <label>How does Hornet heal?</label><br>
            <input type="radio" name="q3" value="a"> By reaping enemy souls<br>
            <input type="radio" name="q3" value="b"> By walking on lava<br>
            <input type="radio" name="q3" value="c"> By binding silk<br>
            <button type="button" onclick="checkAnswer3()" id="submit-q3">Submit Answer</button>
            <button type="button" onclick="nextQuestion()" id="next-q3">Next Question</button>
        `;
    }
    else {
        myDiv.innerHTML = `
            <h3>Quiz complete!</h3>
            <p>You got ${correctAnswers} correct answers.</p>
            <button type="button" onclick="goHome()">Back to Home</button>
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

function checkAnswer3() {
    const selected = document.querySelector('input[name="q3"]:checked');
    if (!selected) {
        alert("Where's your answer, mate?");
        return;
    }
    if (selected.value === 'c') {
        correctAnswers++;
    }
    document.getElementById('result').textContent = 'Correct answers: ' + correctAnswers;
    document.getElementById('submit-q3').disabled = true;
}

function goHome() {
    window.location.href = "index.html";
}

const navEntries = performance.getEntriesByType("navigation");
if (navEntries.length > 0 && navEntries[0].type === "reload") {
    window.location.href = "index.html";
}

renderQuestion();