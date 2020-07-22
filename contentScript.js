const q = new URLSearchParams(new URL(window.location.href).search).get('q');
const a = document.createElement('a');
a.href = `https://salona.org/create?title=${q}`;
a.innerText = '＋';
a.style.background = 'inherit';
a.style.border = '1px solid #eaecef';
a.style.borderRadius = '50%';
a.style.bottom = '60px';
a.style.color = '#24292e';
a.style.fontSize = '30px';
a.style.left = '60px';
a.style.lineHeight = '60px';
a.style.position = 'fixed';
a.style.textAlign = 'center';
a.style.textDecoration = 'none';
a.style.width = '60px';
document.body.appendChild(a);
const iframe = document.createElement('iframe');
iframe.id = 'salonaIframe';
iframe.scrolling = 'no';
iframe.src = `https://salona.org/iframe?q=${q}`;
iframe.style.border = 'none';
iframe.style.height = '0';
iframe.style.width = '100%';
const appbar = document.getElementById('appbar');
document.getElementById('cnt').insertBefore(iframe, appbar);
window.onload = function() {
    const iframe = document.getElementById('salonaIframe');
    iframe.contentWindow.postMessage(null, 'https://salona.org');
    function resize(event) { iframe.style.height = event.data; }
    window.addEventListener('message', resize, false);
}
