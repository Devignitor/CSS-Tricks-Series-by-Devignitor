const blurRange = document.getElementById('blur-range');
  const satRange  = document.getElementById('sat-range');
  const blurVal   = document.getElementById('blur-val');
  const satVal    = document.getElementById('sat-val');
  const cardOn    = document.getElementById('card-on');
  let currentMode = 'blur';

  function applyFilter() {
    const b = blurRange.value;
    const s = satRange.value;
    blurVal.textContent = b + 'px';
    satVal.textContent  = s + '%';

    let filterStr = '';
    if (currentMode === 'blur')       filterStr = `blur(${b}px) saturate(${s}%)`;
    if (currentMode === 'grayscale')  filterStr = `blur(${b}px) grayscale(100%)`;
    if (currentMode === 'brightness') filterStr = `blur(${b}px) brightness(${Math.round(s/100 * 1.5 * 100)/100})`;

    cardOn.style.backdropFilter = filterStr;
    cardOn.style.webkitBackdropFilter = filterStr;
  }

  function applyMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + mode).classList.add('active');
    applyFilter();
  }

  blurRange.addEventListener('input', applyFilter);
  satRange.addEventListener('input', applyFilter);