const range = document.getElementById('width-range');
  const valLabel = document.getElementById('width-val');
  const pClamp = document.getElementById('p-clamp');
  const pVw = document.getElementById('p-vw');

  const MAX_WIDTH = 748;

  range.addEventListener('input', update);
  update();

  function update() {
    const w = parseInt(range.value);
    valLabel.textContent = w + 'px';

    // Simulate clamp(18px, 4vw, 48px) relative to demo container
    const vw = (w / MAX_WIDTH) * 100;
    const preferred = vw * 0.04 * MAX_WIDTH / 16; // in px
    const clamped = Math.min(48, Math.max(18, preferred));
    pClamp.style.fontSize = clamped.toFixed(1) + 'px';

    // bare 5vw (no clamp)
    const bareVw = vw * 0.05 * MAX_WIDTH / 16;
    pVw.style.fontSize = bareVw.toFixed(1) + 'px';
  }
