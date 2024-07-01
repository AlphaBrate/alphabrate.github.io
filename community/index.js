function log(f = 'App', m = '') { console.log(`[${f}] ${m}`); }

function log_warning(t = 'Warning!', m = 'This is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and will give them access to your account.') {
    console.log(`%c${t} %c${m}`,
        'font-size: 14px; color: white; font-weight: bold; font-family: Arial; background-color: red; padding: 5px 15px; border-radius: 5px 5px 0 0;',
        'font-size: 14px; color: black; font-weight: bold; background-color: yellow; padding: 5px 15px; border-radius: 0 5px 5px 5px; font-family: Arial;');
}
log_warning();

// if (!window.matchMedia('(display-mode: standalone)').matches) {
//     log('App', 'Not in PWA mode. Redirecting to PWA.');
//     location.href = '/pwa';
// }


var AlphaBrate_text = `%c
 ─ ─ ─ ─ ─ ─ ─ ╔ ═ ═ ═ ╗ ╔ ╗ ─ ─ ─ ─ ─ ╔ ╗ ─ ─ ─ ─ ─ ─ ╔ ═ ═ ╗ ─ ─ ─ ─ ─ ─ ─ ─ ─ ╔ ╗ ─ ─ ─ ─ ─ ─
 ─ ─ ─ ─ ─ ─ ─ ║ ╔ ═ ╗ ║ ║ ║ ─ ─ ─ ─ ─ ║ ║ ─ ─ ─ ─ ─ ─ ║ ╔ ╗ ║ ─ ─ ─ ─ ─ ─ ─ ─ ╔ ╝ ╚ ╗ ─ ─ ─ ─ ─
 ╔ ═ ═ ═ ╗ ─ ─ ║ ║ ─ ║ ║ ║ ║ ─ ╔ ═ ═ ╗ ║ ╚ ═ ╗ ╔ ═ ═ ╗ ║ ╚ ╝ ╚ ╗ ╔ ═ ╗ ╔ ═ ═ ╗ ╚ ╗ ╔ ╝ ╔ ═ ═ ╗ ─
 ║ ╔ ═ ╗ ║ ─ ─ ║ ╚ ═ ╝ ║ ║ ║ ─ ║ ╔ ╗ ║ ║ ╔ ╗ ║ ║ ╔ ╗ ║ ║ ╔ ═ ╗ ║ ║ ╔ ╝ ║ ╔ ╗ ║ ─ ║ ║ ─ ║ ║ ═ ╣ ─
 ║ ║ ─ ─ ║ ─ ─ ║ ╔ ═ ╗ ║ ║ ╚ ╗ ║ ╚ ╝ ║ ║ ║ ║ ║ ║ ╔ ╗ ║ ║ ╚ ═ ╝ ║ ║ ║ ─ ║ ╔ ╗ ║ ─ ║ ╚ ╗ ║ ║ ═ ╣ ─
 ║ ╚ ═ ╝ ║ ─ ─ ╚ ╝ ─ ╚ ╝ ╚ ═ ╝ ║ ╔ ═ ╝ ╚ ╝ ╚ ╝ ╚ ╝ ╚ ╝ ╚ ═ ═ ═ ╝ ╚ ╝ ─ ╚ ╝ ╚ ╝ ─ ╚ ═ ╝ ╚ ═ ═ ╝ ─
 ╚ ═ ═ ═ ╝ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ║ ║   T h i s   C o m m u n i t y   i s   ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ╚ ╝   B u i l t   b y   A l p h a B r a t e   ─ ─ ─ ─ ─ ─ ─ ─ ─ ─`;

console.log(AlphaBrate_text, 'font-weight: bold; font-size: 10px; font-family: Menlo;');
log('App', 'Loading.')

const $ = (s, a = false) => {
    if (a) {
        return document.querySelectorAll(s);
    } else {
        return document.querySelector(s);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    log('App', 'DOM Loaded.');
    $('#loading').innerText = 'Building Connection to Server.';
});

var simple_encrypt = {
    encryption: (d, s) => {
        let e = '';
        for (let i = 0; i < d.length; i++) {
            e += String.fromCharCode(d.charCodeAt(i) ^ s.charCodeAt(i % s.length));
        }
        return btoa(e);
    },
    decryption: (d, s) => {
        let e = '';
        d = atob(d);
        for (let i = 0; i < d.length; i++) {
            e += String.fromCharCode(d.charCodeAt(i) ^ s.charCodeAt(i % s.length));
        }
        return e;
    }
}

var search_params = new URLSearchParams(window.location.search);
var login_session = search_params.get('session');
var login_user = search_params.get('user');

const server_url = 'https://alphabrate-server.onrender.com';
// const server_url = 'http://192.168.1.114:3000';

if (login_session && login_user) {
    log('App-Server', 'Verifying user...');
    login_user = simple_encrypt.decryption(login_user, login_session);
    fetch(server_url + '/login/username', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': login_user
        },
        mode: 'cors'
    }).then(res => res.json()).then(data => {
        if (data.success) {
            log('App', 'User logged in.')
            $('.login').classList.add('removed');

            log('Server', 'User: ' + data.user.account.username);
            document.body.innerHTML = `<h1 style="color: black; text-align: center;">Welcome, ${data.user.account.username}</h1><p style="color: black; text-align: center;">We have been working on it.</p>`;
            localStorage.setItem('session', login_session);
            localStorage.setItem('user', login_user);
        }
    }).catch(err => {
        log('App-Server', 'Error: ' + err);
    });
} else {
    var session = localStorage.getItem('session');
    var user = localStorage.getItem('user');
    if (session && user) {
        location.href = location.href + '?session=' + session + '&user=' + simple_encrypt.encryption(user, session);
    }
}

fetch(server_url + '/server/time', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors'
}).then(res => res.text()).then(data => {
    $('.loader').classList.add('removed');
    setTimeout(() => {
        $('.loader-bg').classList.add('removed');
    }, 1000);
    $('#loading').innerText = '';
    log('App-Server', 'Time:' + data);
}).catch(err => {
    $('.loader').style.animation = 'none';
    $('.loader').innerText = '✕';
    $('#loading').innerText = '\nFailed to Connect to Server.\nPlease retry or contact support.';
    console.error('[App-Server] Error:', err);
    log('[App-Server]', 'Failed to connect to server.');
    log_warning('Error!', 'Failed to connect to server. Please retry or contact support at AlphaBrate@gmail.com');
    log_warning('Warning!', 'Unless you are a developer of us, or you got the code from us, do not paste anything here. Or else, you may be scammed for your account. If your code is from us, please ignore this.');

    log('App', 'Failed to connect to server.');
    log('App', 'Try to find the error of {Server}.');
    log('Error', 'Given Error: ' + err);
});

$('#login-login').addEventListener('click', () => {
    var url = server_url + '/login?redirect=' + location.href;
    location.href = url;
});

$('#login-register').addEventListener('click', () => {
    var url = server_url + '/register?redirect=' + location.href;
    location.href = url;
});