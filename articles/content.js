var structures = window.location.href.split("/");
var ped = structures[structures.length - 3];
var Class = structures[structures.length - 2];
var articleId = location.search.split("article=")[1] || "index";

const ped_full = {
    "user-manuals": "User Manuals",
    "user-manual": "User Manual",
    "articles": "Articles",
    "article": "Article",
    "products": "Products",
    "product": "Product",
};
    

fetch("/articles/articles.json").then(res => res.json()).then(articles => {
    var j = articles[ped][Class][articleId];
    document.getElementById("center-title").innerHTML =
        document.getElementById("title").innerHTML = j.title;
    document.title = j.title + " | " + ped_full[ped] + " | The AlphaBrate Team"
    document.getElementById("author").innerHTML = j.author;
    document.getElementById("date").innerHTML = j.date;
    document.getElementById("description").innerHTML = j.description;
    var contentUrl = "/articles/" + ped + "/" + Class + "/" + j.content;
    fetch(contentUrl).then(res => res.text()).then(content => {
        document.getElementById("text").innerHTML = marked.parse(content);

        var imgs = document.querySelectorAll("img");
        imgs.forEach(img => {
            let src = img.src;
            let query = new URLSearchParams(src.split("?")[1]);
            let size = query.get("size") || "medium";
            img.classList.add("img-" + size);
            let radius = query.get("border-radius") || "0";
            img.style.borderRadius = radius;
            let center = query.get("center") || "false";
            if (center === "true") {
                img.parentElement.classList.add("center");
            };
            let bg = query.get("bg") || "var(--color-canvas-default)";
            img.style.backgroundColor = bg;
            let float_vert = query.get("float-vert") || "default";
            img.classList.add("float-vert-" + float_vert);
        });
    });
}).catch(() => {
    document.getElementById("center-title").innerHTML =
        document.getElementById("title").innerHTML = "Not Found";
    document.title = "Not Found | The AlphaBrate Team"
    document.getElementById("description").innerHTML = `The page you're looking for can't be found.`;
});

var canMakeCenterTitle = true;

const centerTitle = () => {
    if (document.getElementById("center-title").offsetWidth < window.innerWidth * 0.5) {
        document.addEventListener("scroll", () => {
            if (canMakeCenterTitle) {
                // #title opacity Y=25:1 Y=80:0
                var title = document.getElementById("title");
                var titleOpacity = 1 - (window.scrollY - 25) / 55;
                if (titleOpacity < 0) titleOpacity = 0;
                title.style.opacity = titleOpacity;
                // #center-title opacity: 65 = 0 90 = 1
                var centerTitle = document.getElementById("center-title");
                var centerTitleOpacity = (window.scrollY - 65) / 25;
                if (centerTitleOpacity < 0) centerTitleOpacity = 0;
                if (centerTitleOpacity > 1) centerTitleOpacity = 1;
                centerTitle.style.opacity = centerTitleOpacity;
            }
        });
        canMakeCenterTitle = true;
    } else {
        document.getElementById("title").style.opacity = 1;
        document.getElementById("center-title").style.opacity = 0;
        canMakeCenterTitle = false;
    }
}

centerTitle();

window.addEventListener("resize", () => centerTitle());