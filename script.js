<script>
    document.getElementById('btn-project-6').addEventListener('click', function() {
        window.location.href = 'https://jeffersontannn.github.io/TANTSA6/';
    });

    document.getElementById('btn-project-7').addEventListener('click', function() {
        window.location.href = 'https://jeffersontannn.github.io/TAN_TSA7/';
    });

    document.getElementById('btn-project-8').addEventListener('click', function() {
        window.location.href = 'https://jeffersontannn.github.io/TAN_TSA8/';
    });

    // Optionally handle the "All" button to show all projects
    document.getElementById('btn-all').addEventListener('click', function() {
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.style.display = 'block';
        });
    });

    // Filter portfolio items based on the category buttons
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
