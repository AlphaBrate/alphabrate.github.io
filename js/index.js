const footer_links = `
<div class="footer">
    <div class="rows">
        <div class="cols">
            <div class="col">
                <font class="footer-heading">
                    GitHub Accounts
                </font>
                <a href="https://github.com/rtzg">ReTrn - Developer</a>
                <a href="https://github.com/alphabrate">AlphaBrate - Officials</a>
                <a href="https://github.com/musicterms">Music Terms - Web App</a>
            </div>
            <div class="col">
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
                <font class="footer-heading"><a href="/about">About</a> AlphaBrate</font>
                <a href="/about/support.html">Seek Support</a>
                <a href="/about/downloads.html">Downloads</a>
                <a href="/projects">Projects</a>
                <a href="/donate-to-us-thank-you-very-much/">Donate</a>
                <a href="/sitemap.xml">Site Map</a>
                <a href="/about/policies/">Policies & Terms</a>
            </div>
        </div>
    </div>
    <div class="space-break" data-height="2"></div>
</div>`

const copyright_info = `
<p class="color-gray">&copy; AlphaBrate 2024 under APEL License.</p>
<p class="color-lighter-gray f10px">All rights to the designs and photographs displayed on this site are reserved.
<br>By using, browsing, sharing, or redistributing our services, products,
    or projects, you agree to our <span class="nowrap"><a href="/about/policies">Privacy Terms</a> and <a href="/about/policies">Terms of Service</a>.</span></p>`

const resize_init = () => {
    try {
        document.querySelector('.words.lowerright').style.top = document.querySelector('.words.upperleft').clientHeight + 'px'

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

window.onload = () => {

    document.getElementById('footer-links').innerHTML = footer_links
    document.getElementById('copyright').innerHTML = copyright_info
    resize_init()

    try {
        var spaces = document.querySelectorAll('.space-break')
        for (var i = 0; i < spaces.length; i++) {
            spaces[i].style.marginBottom = spaces[i].getAttribute('data-height') + 'rem';
        }
    } catch { }
}

window.addEventListener('resize', resize_init)

var scroll_function = () => {
    var scroll = window.scrollY
    var height_of_top_section = document.querySelector('.top.section').clientHeight
    if (scroll > height_of_top_section) {
        document.querySelector('meta[name="theme-color"]').content = 'rgb(255, 255, 255)'
    } else {
        var from = [255, 255, 255]
        var to = [34, 31, 42]
        var percent = 1 - (scroll / height_of_top_section)
        var color = []
        for (var i = 0; i < 3; i++) {
            color.push(from[i] + (to[i] - from[i]) * percent)
        }
        document.querySelector('meta[name="theme-color"]').content = `rgb(${color[0]}, ${color[1]}, ${color[2]})`        
    }
}

window.addEventListener('scroll', scroll_function)