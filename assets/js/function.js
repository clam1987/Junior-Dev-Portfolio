// Landing page scroll functions
let $window = $(window),
    $body = $("body");

// Guarantee that the page loads
$window.on("load", () => {
    $body.removeClass("preloaded");
});

$window.on("touchmove", () => {
    return false;
})

    $window.on("orientationchange", () => {
        $body.scrollTop(0);
    })


// window.onload = function() { document.body.classList.remove('is-preload'); }
// window.ontouchmove = function() { return false; }
// window.onorientationchange = function() { document.body.scrollTop = 0; }