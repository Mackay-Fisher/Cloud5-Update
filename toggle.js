function setStylesheet() {
    let chosenStyle = localStorage.getItem('chosen-stylesheet') || 'defualt.css';
    document.getElementById('theme-style').setAttribute('href', chosenStyle);
}

function toggleStylesheet() {
    let currentStyle = document.getElementById('theme-style').getAttribute('href');

    if (currentStyle === 'defualt.css' || !currentStyle) {
        document.getElementById('theme-style').setAttribute('href', 'alt.css');
        localStorage.setItem('chosen-stylesheet', 'alt.css');
    } else {
        document.getElementById('theme-style').setAttribute('href', 'defualt.css');
        localStorage.setItem('chosen-stylesheet', 'defualt.css');
    }
}

// Apply the correct stylesheet on page load
window.onload = setStylesheet;