// cc_7 

// JavaScript code to update headline
document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('messageInput');
  var button = document.getElementById('sendButton');
  var headline = document.getElementById('ctaHeadline');

  function updateHeadline() {
    var txt = input.value.trim();
    if (txt) headline.textContent = txt;
  }

  button.addEventListener('click', updateHeadline);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateHeadline();
    }
  });
});