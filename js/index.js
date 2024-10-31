const footer_links = `
<div class="footer">
    <div class="rows">
        <div class="cols">
            <div class="col">
                <span class="click-holder"></span>
                <font class="footer-heading">
                    GitHub Accounts
                </font>
                <a href="https://github.com/rtzg">ReTrn - Developer</a>
                <a href="https://github.com/alphabrate">AlphaBrate - Officials</a>
                <a href="https://github.com/musicterms">Music Terms - Web App</a>
            </div>
            <div class="col">
                <span class="click-holder"></span>
                <font class="footer-heading">
                    Official Accounts
                </font>
                <a href="https://x.com/AlphaBrate_Team">X</a>
                <a href="https://www.youtube.com/@alphabrate">YouTube</a>
                <a href="https://www.instagram.com/alphabrate/">Instagram</a>
            </div>
        </div>
        <div class="cols">
            <div class="col">
                <span class="click-holder"></span>
                <font class="footer-heading" style="display: flex; gap: .3rem;"><a style="margin:0;" href="/about">About</a> AlphaBrate</font>
                <a href="/about/support.html">Seek Support</a>
                <a href="/about/downloads.html">Downloads</a>
                <a href="/projects">Projects</a>
                <a href="/donate-to-us-thank-you-very-much/">Donate</a>
                <a href="/articles">Articles</a>
                <a href="/about/policies/">Policies & Terms</a>
                <a href="/apps">App Gallery</a>
            </div>
        </div>
        <div class="cols">
            <div class="col">
                <span class="click-holder"></span>
                <font class="footer-heading">
                    Projects & Products
                </font>
                <a href="/projects/popupjs" class="monospace">PopupJS</a>
                <a href="/apps/app/music-terms.html">Music Terms</a>
                <a href="/apps/app/alphabrate-hub.html">AlphaBrate Hub</a>
                <a href="/apps/app/live-weather.html">Weather Wallpaper</a>
                <a href="https://github.com/alphabrate/alb-msplayer">Music Player</a>
                <a href="https://github.com/alphabrate/nettransfer">Net Transfer</a>
            </div>
        </div>
    </div>
    <div class="space-break" data-height="2"></div>
</div>`

const copyright_info = `
<p class="color-gray">&copy; AlphaBrate 2024.</p>
<p class="color-lighter-gray f10px">All rights to the designs and photographs <span class="nowrap">displayed on this site are reserved.</span>
<br>By using, browsing, sharing, or redistributing our services, products,
    or projects, you agree to our <span class="nowrap"><a href="/about/policies">Privacy Terms</a> and <a href="/about/policies">Terms of Service</a>.</span></p>`

const resize_init = () => {
    try {
        // get .section.top>.intro-words actual height
        // count all elements in .section.top>.intro-words
        let intro_words = document.querySelector('.section.top>.intro-words')
        let intro_words_height = intro_words.clientHeight

        // all elements in .section.top>.intro-words
        intro_words.childNodes.forEach((element) => {
            // if element is not a text node
            if (element.nodeType != 3) {
                // get element's height
                let height = element.clientHeight
                // subtract element's height from intro_words_height
                intro_words_height += height
            }
        })

        // add intro-words acutal top
        intro_words_height += intro_words.offsetTop

        // set --height to .section.top
        intro_words.parentElement.style.setProperty('--height', intro_words_height + 'px')
    }
    catch { }
    try {
        var as_above = document.querySelectorAll('.as')

        for (var i = 0; i < as_above.length; i++) {
            let data_as = as_above[i].getAttribute('data-as')
            let prev_element = document.querySelector(data_as)

            if (as_above[i].getAttribute('data-same') == 'width') {
                let width = prev_element.clientWidth
                as_above[i].style.width = width + 'px'
            }

            if (as_above[i].getAttribute('data-same') == 'height') {
                let height = prev_element.clientHeight
                as_above[i].style.height = height + 'px'
            }
        }
    } catch (e) {
        console.log(e);
    }

    try {
        document.querySelector('.words.lowerright').style.opacity = 1
        document.querySelector('.words.lowerright').style.top = document.querySelector('.words.upperleft').clientHeight + 'px'
    } catch { }
    try {
        let not_desktop = window.innerWidth < 1024

        if (not_desktop) {
            let reversed = document.querySelectorAll('.reversed-in-mobile')
            reversed.forEach((element) => {
                let first_child = element.firstElementChild
                let last_child = element.lastElementChild
                element.insertBefore(last_child, first_child)

                element.classList.remove('reversed-in-mobile')
                element.classList.add('reversed-in-desktop')
            });

            let nowrap_on_mobile = document.querySelectorAll('.nowrap-on-desktop')

            nowrap_on_mobile.forEach((element) => {
                element.style.whiteSpace = 'normal'
            });

        }
        else {
            let reversed = document.querySelectorAll('.reversed-in-desktop')

            reversed.forEach((element) => {
                let first_child = element.firstElementChild
                let last_child = element.lastElementChild
                element.insertBefore(last_child, first_child)

                element.classList.remove('reversed-in-desktop')
                element.classList.add('reversed-in-mobile')
            });

            let nowrap_on_desktop = document.querySelectorAll('.nowrap-on-desktop')

            nowrap_on_desktop.forEach((element) => {
                element.style.whiteSpace = 'nowrap'
            });

        }
    } catch { }
}

function spaceBreak() {
    try {
        var spaces = document.querySelectorAll('.space-break')
        for (var i = 0; i < spaces.length; i++) {
            spaces[i].style.marginBottom = spaces[i].getAttribute('data-height') + 'rem';
        }
    } catch { }
}

window.onload = () => {

    try {
        document.querySelector('.nav-bar>a').href = '../'
    } catch { }

    try {
        document.getElementById('footer-links').innerHTML = footer_links
        document.getElementById('copyright').innerHTML = copyright_info
    } catch { }

    resize_init();

    try {
        document.querySelector('.top.section.shorter').classList.add('pwa')
    } catch { }

    spaceBreak();

    document.body.style.opacity = 1

    let isInPWA = window.matchMedia('(display-mode: standalone)').matches
    if (isInPWA) {
        document.getElementById('footer-links').style.display = 'none'
        document.getElementById('copyright').style.display = 'none'

        // meta viewport
        document.head.innerHTML += `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`

        const darkMode = (dark) => {
            if (dark) {
                document.querySelector('.logo>img').src = "/icons/light.alphabrate.svg"
            } else {
                document.querySelector('.logo>img').src = "/icons/alphabrate.svg"
            }
        }

        darkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);

        window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => darkMode(e.matches));

    }

    try {
        document.querySelectorAll('.footer>.rows>.cols>.col>.click-holder').forEach((element) => {
            element.addEventListener('click', () => {
                if (isOnMobile) {
                    element.parentElement.classList.toggle('show');
                }
            });
        });

        document.querySelectorAll('.footer>.rows>.cols>.col>.footer-heading').forEach((element) => {
            element.addEventListener('click', () => {
                if (isOnMobile) {
                    element.parentElement.classList.toggle('show');
                }
            });
        });

        document.querySelectorAll('.footer>.rows>.cols>.col').forEach((element) => {
            // get height
            const height = element.clientHeight;
            // set --height to height
            element.style.setProperty('--height', height - 24 + 'px');
            // set height to 0
            element.classList.add('collapsed');
        });
    } catch { }
}

window.addEventListener('resize', resize_init)

const colors = {
    light: [255, 255, 255],
    dark: [40, 40, 40]
}

var user_prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    user_prefers = e.matches ? 'dark' : 'light'
    scroll_function()
})

let themeColor;

var scroll_function = () => {
    if (!document.querySelector('.nav-bar')) {
        if (!themeColor) {
            try {
                var scroll = window.scrollY
                var height_of_top_section = document.querySelector('.top.section').clientHeight
                if (scroll > height_of_top_section) {
                    document.querySelector('meta[name="theme-color"]').content = `rgb(${colors[user_prefers].join(', ')})`
                } else {
                    var from = colors[user_prefers]
                    var to = [34, 31, 42]
                    var percent = 1 - (scroll / height_of_top_section)
                    var color = []
                    for (var i = 0; i < 3; i++) {
                        color.push(from[i] + (to[i] - from[i]) * percent)
                    }
                    document.querySelector('meta[name="theme-color"]').content = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
                }
            } catch {
                try { document.querySelector('meta[name="theme-color"]').content = `rgb(${colors[user_prefers].join(', ')})` }
                catch { }
            }
        } else {
            document.querySelector('meta[name="theme-color"]').content = themeColor;
        }
    } else {
        document.querySelector('meta[name="theme-color"]').content = `rgb(${colors[user_prefers].join(', ')})`

        if (window.scrollY > 0) {
            document.querySelector('.nav-bar').classList.add('scrolled')
        } else {
            document.querySelector('.nav-bar').classList.remove('scrolled')
        }
    }
}

scroll_function();

window.addEventListener('scroll', scroll_function)

try {
    var ios_only = document.querySelectorAll('.ios-only')
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    if (!isIOS) {
        ios_only.forEach((element) => {
            element.style.display = 'none'
        })
    }
} catch { }

function Confirm(t, b, e = {}) {
    let scrTop = window.scrollY
    console.log(scrTop);
    let body = document.querySelector('body')
    body.style.position = 'fixed'
    body.style.top = `-${scrTop}px`
    body.style.width = '100%'
    document.getElementById('alert-title').innerHTML = t
    document.getElementById('alert-text').innerHTML = b

    document.getElementById('alert-fullscreen').style.opacity = 1
    document.getElementById('alert-fullscreen').style.pointerEvents = 'all'

    if (e.confirm == undefined) e.confirm = () => { confirmEnd() }
    if (e.cancel == undefined) e.cancel = () => { confirmEnd() }

    try {
        document.getElementById('alert-confirm').onclick = e.confirm;
        document.getElementById('alert-cancel').onclick = e.cancel;
    } catch { }
}

function confirmEnd() {
    let body = document.querySelector('body')
    let bodyTop = body.style.top
    let scrTop = -parseInt(bodyTop)
    body.style.position = ''
    body.style.top = ''
    window.scrollTo(0, scrTop)

    document.getElementById('alert-fullscreen').style.opacity = 0
    document.getElementById('alert-fullscreen').style.pointerEvents = 'none'
}

const isOnPC = window.innerWidth > 1024;

if (isOnPC) {
    document.body.classList.add('pc');
}

const isOnMobile = window.innerWidth < 630;

let frosted = document.querySelectorAll('.frosted');

frosted.forEach((element) => {
    // if position is static or unset set it to relative
    if (element.style.position == '' || element.style.position == 'static') {
        element.style.position = 'relative';
    }
});

spaceBreak();

if (document.querySelector('img[data-src]')) {
    document.querySelectorAll('img[data-src]').forEach((element) => {
        element.src = element.getAttribute('data-src');

        element.addEventListener('load', () => {
            element.removeAttribute('data-src');
        });
    });
}