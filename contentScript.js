const url = new URL(window.location.href);
const q = new URLSearchParams(url.search).get('q');
document.body.innerHTML += `
<iframe
    id="salonaIframe"
    src="https://salona.org/iframe?q=${q}"
    style="border: none; width: 100%;"
    scrolling="no"
></iframe>`;
window.onload = function() {
    const iframe = document.getElementById('salonaIframe');
    iframe.contentWindow.postMessage('', 'https://salona.org');
    window.addEventListener('message', function(event) {
        iframe.style.height = event.data;
    }, false);
}
