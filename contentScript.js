const url = new URL(window.location.href);
const q = new URLSearchParams(url.search).get('q');
const iframe = document.createElement('iframe')
iframe.id = 'salonaIframe';
iframe.src = `https://salona.org/iframe?q=${q}`;
iframe.style = 'border: none; width: 100%;';
iframe.scrolling = 'no';
document.body.appendChild(iframe);
window.onload = function() {
    const iframe = document.getElementById('salonaIframe');
    iframe.contentWindow.postMessage(null, 'https://salona.org');
    window.addEventListener('message', function(event) {
        iframe.style.height = event.data;
    }, false);
}
