const correctAnswers = ['c', 'd', 'a', 'b', 'c'];

function checkAllAnswers() {
  const selectedOptions = $('input[type="radio"]:checked');
  if (selectedOptions.length < 5) {
    const feedbackDiv = $('#feedback');
    feedbackDiv.text("Please select an option!");
    feedbackDiv.css('color', 'red');
  } else {
    let correctCount = 0;
    selectedOptions.each(function(i) {
      if ($(this).val() === correctAnswers[i]) {
        correctCount++;
      }
    });
    const feedbackDiv = $('#feedback');
    feedbackDiv.text(`You got ${correctCount} out of 5 Questions correct!`);
    feedbackDiv.css('color', 'green');
  }
}


