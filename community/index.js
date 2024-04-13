const $ = (s, a = false) => {
    if (a) {
        return document.querySelectorAll(s);
    } else {
        return document.querySelector(s);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        $('.loader').classList.add('removed');
        setTimeout(() => {
            $('.loader-bg').classList.add('removed');
        }, 1000);
    }, 1000);

    console.log('[App] Loaded.');
});