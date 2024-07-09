<script>
    function submitForm(event) {
        event.preventDefault();

        document.getElementById("confirmationMessage").style.display = "block";


        document.getElementById("contactForm").reset();
    }

    document.getElementById("contactForm").addEventListener("submit", submitForm);

    document.getElementById('btn-project-6').addEventListener('click', function() {
        window.location.href = 'https://jeffersontannn.github.io/TANTSA6/';
    });

    document.getElementById('btn-project-7').addEventListener('click', function() {
        window.location.href = 'https://jeffersontannn.github.io/TAN_TSA7/';
    });

    document.getElementById('btn-project-8').addEventListener('click', function() {
        window.location.href = 'https://jeffersontannn.github.io/TAN_TSA8/';
    });

    document.getElementById('btn-all').addEventListener('click', function() {
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.style.display = 'block';
        });
    });

    document.querySelectorAll('.portfolio-categories .btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            if (category !== 'all') {
                document.querySelectorAll('.portfolio-item').forEach(item => {
                    if (item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
</script>
