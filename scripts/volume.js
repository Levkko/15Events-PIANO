const volumeSlider = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');

volumeValue.textContent = volumeSlider.value + '%';

volumeSlider.addEventListener('input', () => {
    volumeValue.textContent = `${volumeSlider.value}%`;
});

