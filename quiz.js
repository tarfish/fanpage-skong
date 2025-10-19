let correctAnswers = 0;
let currentQuestion = 1;
const myDiv = document.getElementById('question');
function checkAnswer1() {
    
    const selected = document.querySelector('input[name="q1"]:checked');

    if (!selected) {
        alert("Where's your answer, mate?");
        return;
    }

    if (selected.value === 'a') {
        correctAnswers += 1;
    }

    document.getElementById('result').textContent = 'Number of correct answers: ' + correctAnswers;
    document.getElementById('submit-q1').disabled = true;
}

  const navEntries = performance.getEntriesByType("navigation");
  if (navEntries.length > 0 && navEntries[0].type === "reload") {
    window.location.href = "index.html";
  }

if (currentQuestion === 1) {
 myDiv.innerHTML = `<label>Who is the main character of Silksong?</label><br>
                    <input type="radio" name="q1" value="a"> Hornet<br>
                    <input type="radio" name="q1" value="b"> The Knight<br>
                    <input type="radio" name="q1" value="c"> Zote<br>
                    <button type="button" onclick="checkAnswer1()" id="submit-q1">Submit Answer</button>
                    <button type="button" onclick="nextQuestion(1)" id="next-q1">Next Question</button>
 `;
	} else if (currentQuestion === 2) {
 myDiv.innerHTML = `
 `;
	} else {
 
 myDiv.innerHTML = ``}