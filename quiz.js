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

    document.getElementById('result').textContent = 'Number of correct answers: ' + correctAnswers;
    document.getElementById('submit-q1').disabled = true;
}

  const navEntries = performance.getEntriesByType("navigation");
  if (navEntries.length > 0 && navEntries[0].type === "reload") {
    window.location.href = "index.html";
  }