let correctAnswers = 0;
function checkAnswer1() {
    
    const selected = document.querySelector('input[name="q1"]:checked');

    if (!selected) {
        alert("Where's your answer, mate?");
        return;
    }

    if (selected.value === 'a') {
        correctAnswers += 1;
    }

    // Update the result display (edit the element id if your HTML uses a different one)
    document.getElementById('result').textContent = 'Number of correct answers: ' + correctAnswers;
    document.getElementById('submit-q1').disabled = true;
}