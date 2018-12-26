var resizeTimer;

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeVideos, 100);
    });
});

function resizeVideos() {
    var iframes = document.querySelectorAll("iframe");
    for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        var styles = window.getComputedStyle(iframe);
        var widthPx = styles.getPropertyValue("width");
        var width = parseInt(widthPx.substring(0, widthPx.length - 2));
        iframe.style.height = (width / 16 * 9) + "px";
    }
}