
const picker = document.getElementById('color-picker');
  const hexLabel = document.getElementById('hex-label');
  const liveWrap = document.getElementById('live-wrap');

  picker.addEventListener('input', () => {
    const c = picker.value;
    hexLabel.textContent = c;
    liveWrap.style.accentColor = c;
    document.getElementById('after-col').style.accentColor = c;
    document.documentElement.style.setProperty('--live', c);
  });
