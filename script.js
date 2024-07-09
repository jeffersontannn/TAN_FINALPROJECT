function submitForm(event) {
    event.preventDefault(); 


    document.getElementById("confirmationMessage").style.display = "block";


    document.getElementById("contactForm").reset();


    setTimeout(function() {
        document.getElementById("confirmationMessage").style.display = "none";
    }, 5000); // Adjust timeout (in milliseconds) as needed
}


document.getElementById("contactForm").addEventListener("submit", submitForm);


document.querySelectorAll('.portfolio-categories .btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


document.getElementById('btn-project-6').addEventListener('click', function() {
    window.open('https://jeffersontannn.github.io/TANTSA6/', '_blank');
});

document.getElementById('btn-project-7').addEventListener('click', function() {
    window.open('https://jeffersontannn.github.io/TAN_TSA7/', '_blank');
});

document.getElementById('btn-project-8').addEventListener('click', function() {
    window.open('https://jeffersontannn.github.io/TAN_TSA8/', '_blank');
});
