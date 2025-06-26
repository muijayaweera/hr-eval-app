document.getElementById('evaluation-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('employeeName').value;
  const evaluator = document.getElementById('evaluatorName').value;
  const punctuality = parseInt(document.getElementById('scorePunctuality').value);
  const comprehension = parseInt(document.getElementById('scoreComprehension').value);
  const qa = parseInt(document.getElementById('scoreQA').value);

  function getFeedback(score, category) {
    if (score >= 4) return `Excellent performance in ${category}. `;
    else if (score === 3) return `Satisfactory level in ${category}. `;
    else return `Needs improvement in ${category}. `;
  }

  const feedbackText = `
    <h3>Feedback for ${name}</h3>
    <p><strong>Evaluator:</strong> ${evaluator}</p>
    <p>${getFeedback(punctuality, "Punctuality")}</p>
    <p>${getFeedback(comprehension, "Comprehension")}</p>
    <p>${getFeedback(qa, "Q&A Defense")}</p>
    <p>Overall Score: ${punctuality + comprehension + qa}/15</p>
  `;

  document.getElementById('feedback-output').innerHTML = feedbackText;
});
