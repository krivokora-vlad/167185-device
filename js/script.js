var link = document.querySelector('.btn-contact');
var popup = document.querySelector('.modal-write-us');
var close = popup.querySelector('.modal-close');
var username = popup.querySelector('[name="username"]');
var email = popup.querySelector('[name="email"]');
var text = popup.querySelector('[name="text"]');
var form = popup.querySelector('form');

link.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('modal-show');
    username.focus();
});

close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('form-error');
    username.classList.remove('input-error');
    email.classList.remove('input-error');
    text.classList.remove('input-error');
});

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains('modal-show')) {
        popup.classList.remove('modal-show');
        popup.classList.remove('form-error');
        username.classList.remove('input-error');
        email.classList.remove('input-error');
        text.classList.remove('input-error');
        }
    }
});

form.addEventListener('submit', function(event) {
    if (!username.value || !email.value || !text.value) {
        event.preventDefault();
        popup.classList.remove('form-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('form-error');
    }
    if (!username.value) {
        event.preventDefault();
        username.classList.add('input-error');
    }
    if (!email.value) {
        event.preventDefault();
        email.classList.add('input-error');
    }
    if (!text.value) {
        event.preventDefault();
        text.classList.add('input-error');
    }
});

form.addEventListener('change', function(event) {
    if (username.value) {
        username.classList.add('input-value');
    } else {
        username.classList.remove('input-value');
    }
    if (email.value) {
        email.classList.add('input-value');
    } else {
        email.classList.remove('input-value');
    }
    if (text.value) {
        text.classList.add('input-value');
    } else {
        text.classList.remove('input-value');
    }
})

var mapOpen = document.querySelector('.map-open');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');

mapOpen.addEventListener('click', function(event) {
    event.preventDefault();
    mapPopup.classList.add('modal-map-open');
});

mapClose.addEventListener('click', function(event) {
    event.preventDefault();
    mapPopup.classList.remove('modal-map-open');
});

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains('modal-map-open')) {
        mapPopup.classList.remove('modal-map-open');
        }
    }
});
