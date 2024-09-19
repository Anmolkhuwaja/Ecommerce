 // Wait until the DOM is fully loaded
 document.addEventListener("DOMContentLoaded", function() {
 
    var iso = new Isotope('.collection-list', {
        itemSelector: '.col-md-6',
        layoutMode: 'fitRows'
    });

    // Filter buttons functionality
    var filterButtons = document.querySelectorAll('.filter-button-group button');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            var filterValue = button.getAttribute('data-filter');

            iso.arrange({ filter: filterValue });

            filterButtons.forEach(function(btn) {
                btn.classList.remove('active-filter-btn');
            });

            button.classList.add('active-filter-btn');
        });
    });
});