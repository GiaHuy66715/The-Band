const submitForms = document.querySelectorAll('.form-submit');
const container = document.querySelector('.js-loading-container');
const congrats = document.querySelector('.js-congrats');


function appearLoadingCircle() {
  container.classList.add('open');
}

for (submitForm of submitForms) {
    submitForm.addEventListener("click", appearLoadingCircle);
}

container.addEventListener('click', function() {
  container.classList.remove('open');
});

congrats.addEventListener('click', function(event) {
    event.stopPropagation();
})
