var rating, rat_count = 1;
const server = "https://alphabrate-server.onrender.com"
// const server = "http://localhost:3000"

document.title = app_info.name + " | App Gallery | AlphaBrate"

// Get user's device, whether Windows MacOS Linux Android iOS or unknown not case sensitive
let device = navigator.platform.split(' ')[0].toLowerCase()
if (device == 'iphone' || device == 'ipad') {
    device = 'iOS'
} else if (device == 'win32') {
    device = 'Windows'
} else if (device == 'linux') {
    device = 'Linux'
} else if (device == 'mac') {
    device = 'MacOS'
} else if (device == 'android') {
    device = 'Android'
} else if (device == 'unknown') {
    device = 'this device'
}

// Compare with the array of app_info.works_on, if include windows, macos, linux, android, ios, web, or all, not case sensitive

let works_on = false;
app_info.works_on.forEach(e => {
    if (e.toLowerCase() == device.toLowerCase() || e.toLowerCase() == 'all' || e.toLowerCase() == 'web') {
        works_on = true
    }
})

let works_text = works_on ? 'Works on this device' : `× Not available on ${device}`

document.querySelector('.device').innerHTML = works_text



fetch(`${server}/rating/${app}`, {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    },
}).then(data => {
    data.json().then(d => {
        addRatings(d)
    })
})

let ratingsDetailsTriggled = false;

function addRatings(d) {
    rating = d.rating
    rat_count = d.count

    document.querySelector('#raw_rating').href = `${server}/rating/${app}/raw`

    document.querySelector('.app-down>p>c').innerHTML = `${rating} (${rat_count}) <span class="stars">★</span>`


    document.querySelector('.app-down>p>c').addEventListener('click', e => {
        if (ratingsDetailsTriggled) {
            e.target.parentElement.querySelector('.ratings-details').animate([
                { opacity: 1, maxHeight: '5px', margin: '32px' },
                { opacity: 0, maxHeight: '0px', margin: '0px' }
            ], {
                duration: 200,
                easing: 'ease-in-out',
                fill: 'forwards'
            })
            setTimeout(() => {
                e.target.parentElement.querySelector('.ratings-details').remove()
            }, 200)
            ratingsDetailsTriggled = false
            return
        }

        ratingsDetailsTriggled = true

        // red to blue to green
        let colors = [
            "#E4313D",
            "#D13791",
            "#6EF3FF",
            "#6EFFE2",
            "#90EE90",
            "#90EE90"
        ]
        // add div.ratings-details>(span.ratings-1~5) as siblings of p>c
        var ratings_details = document.createElement('div')
        ratings_details.className = 'ratings-details'
        for (let i = 1; i <= 5; i++) {
            var span = document.createElement('span')
            span.className = `ratings`
            span.setAttribute('data-count', d.details[i]);
            span.setAttribute('data-rating', i)
            span.style.width = `${d.details[i] * 100 / rat_count}%`
            span.style.background = `linear-gradient(90deg, ${colors[i - 1]} 0%, ${colors[i]} 100%)`
            if (colors[i - 1].includes('#')) {
                var r = parseInt(colors[i - 1].substring(1, 3), 16)
                var g = parseInt(colors[i - 1].substring(3, 5), 16)
                var b = parseInt(colors[i - 1].substring(5, 7), 16)
                var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
                span.style.color = (yiq >= 128) ? 'black' : 'white'
            }

            span.appendChild(document.createElement('span'))

            span.style.setProperty('--basic-color', colors[i - 1])
            ratings_details.appendChild(span)
        }
        e.target.parentElement.appendChild(ratings_details)
    })
}

function addValues() {
    document.getElementById('start_redirect').href = `/apps/redirect.html?app=${app_info.app_id}&url=${app_info.app_url}`

    document.getElementById("load").style.display = "none"
    function replaceAppInfo() {
        const all_el = document.querySelectorAll("*")
        all_el.forEach(e => {
            var keys = Object.keys(app_info)
            keys.forEach(k => {
                if (e.innerHTML.includes("_" + k.toUpperCase() + "_")) {
                    e.innerHTML = e.innerHTML.replaceAll("_" + k.toUpperCase() + "_", app_info[k])
                }
            })
        })
    }

    replaceAppInfo()

    document.querySelector('.app-down>p>c').innerHTML += `<div class="animated-loader"></div>`

    document.head.innerHTML += `<style>body::before{background-image: url('${app_info.artwork}');}`

    var images = JSON.parse(app_info.screenshots)
    var image_loop = document.querySelector('.image-loop')
    images.forEach(i => {
        var img = document.createElement('img')
        img.src = i
        img.alt = `A Screenshot of ${app_info.name}.`
        image_loop.appendChild(img)
    })


    // Add social media metas and meta tags
    var metas = `
                <link rel="icon" href="/favicon.ico" type="image/x-icon">
                <meta name="apple-mobile-web-app-capable" content="yes">
                <meta name="mobile-web-app-capable" content="yes">
                <meta property="og:title" content="${app_info.name} on AlphaBrate App Gallery">
                <meta property="og:description" content="${app_info.desc}">
                <meta property="og:image" content="${app_info.icon}">
                <meta property="og:url" content="https://alphabrate.github.io/apps/app/${app_info.app_id}.html">
                <meta name="twitter:card" content="summary_large_image">
                <meta name="twitter:title" content="${app_info.name} on AlphaBrate App Gallery">
                <meta name="twitter:description" content="${app_info.desc}">
                <meta name="twitter:image" content="${app_info.icon}">
                <meta name="twitter:site" content="@AlphaBrate_Team">
                <meta name="twitter:creator" content="@AlphaBrate_Team">
                <meta name="twitter:domain" content="alphabrate.github.io">
                <meta name="twitter:creator:id" content="AlphaBrate_Team">
                <meta name="twitter:site:id" content="AlphaBrate_Team">
                <meta name="twitter:label1" content="Rating">
                <meta name="twitter:data1" content="${app_info.rating} stars">
                <meta name="twitter:label2" content="Price">
                <meta name="twitter:data2" content="Free">
                <meta name="twitter:label3" content="Category">
                <meta name="twitter:data3" content="${app_info.category}">
                <meta name="description" content="${app_info.desc}">
                `
    document.head.innerHTML += metas
}

addValues()


// App

var prev_session = localStorage.getItem('session')
const session = prev_session ? prev_session : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
localStorage.setItem('session', session)

var search = new URLSearchParams(window.location.search)
let can_rate = search.get('rate')

if (can_rate === 'true') {
    localStorage.setItem(app_info.app_id, 'true')
}

let rated = false

function addRating(r) {
    if (localStorage.getItem(app_info.app_id) != 'true' || localStorage.getItem(`${app_info.app_id}+D`) === 'true') {
        return
    }
    fetch(`${server}/rating/${app}/${r}/${session}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    }).then(data => {
        localStorage.setItem(`${app_info.app_id}+D`, 'true')
        localStorage.setItem(`${app_info.app_id}+R`, r)
        location.reload()
    })
}

if (localStorage.getItem(app_info.app_id) === 'true') {
    document.querySelectorAll('.hid_rating').forEach(e => {
        e.classList.remove('hid_rating')
    })
}

if (localStorage.getItem(`${app_info.app_id}+D`) === 'true') {
    document.getElementById('rating_intro').innerHTML = 'You have <span class="nowrap">rated this app.</span>'
    active(localStorage.getItem(`${app_info.app_id}+R`))
    document.getElementById('submit_rating').style.display = 'none'
    document.getElementById('stars').disabled = true
}

function active(n) {
    rated = true
    for (let i = 0; i < 5; i++) {
        if (i < n) {
            document.querySelectorAll('.star')[i].classList.add('colored')
        } else {
            document.querySelectorAll('.star')[i].classList.remove('colored')
        }
    }
}

function sendResult() {
    var stars = document.getElementById('stars').value
    if (!rated) {
        rated = true
        stars = 5
        document.querySelectorAll('.star').forEach(e => {
            e.classList.add('colored')
        })
    }
    addRating(stars)
}

var search = new URLSearchParams(window.location.search)
var app_sourced = search.get('sourced')

if (app_sourced == app_info.app_id) {
    localStorage.setItem(app_info.app_id, 'true');
    var url_without_query = window.location.href.split('?')[0]
    window.history.replaceState({}, document.title, url_without_query)
    location.reload()
}

document.getElementById('raw_rating').href = `${server}/rating/${app}/raw`