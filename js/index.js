var items = document.querySelectorAll('.item');

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        // open data-url in new page
        window.open(this.getAttribute('data-url'), '_blank');
    });
}

var logo_text = document.querySelector('.logo-text');
logo_text.addEventListener('click', function () {
    // open data-url in new page
    top.location = '/';
});