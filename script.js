let correctAnswers = 0;
function checkAnswer1() {
    // Get the selected radio for question 1 (name="q1")
    const selected = document.querySelector('input[name="q1"]:checked');

    // If nothing is selected, do nothing (you can change this to show a message)
    if (!selected) return;

    // If the selected value is the correct one ('a'), add 1 to correctAnswers
    if (selected.value === 'a') {
        correctAnswers += 1;
    }

    // Update the result display (edit the element id if your HTML uses a different one)
    document.getElementById('result').textContent = 'Number of correct answers: ' + correctAnswers;
    document.getElementById('submit-q1').disabled = true;
}