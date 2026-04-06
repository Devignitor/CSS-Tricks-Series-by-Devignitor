const rw = document.getElementById('ratio-w');
  const rh = document.getElementById('ratio-h');
  const box = document.getElementById('play-box');
  const boxLabel = document.getElementById('play-box-label');
  const infoRatio = document.getElementById('info-ratio');
  const infoH = document.getElementById('info-h');

  function updateRatio() {
    const w = parseInt(rw.value) || 1;
    const h = parseInt(rh.value) || 1;
    box.style.aspectRatio = w + '/' + h;
    boxLabel.textContent = w + ' / ' + h;
    infoRatio.textContent = w + ' / ' + h;
    const computed = Math.round(200 * h / w);
    infoH.textContent = computed + 'px';
  }

  rw.addEventListener('input', updateRatio);
  rh.addEventListener('input', updateRatio);
  updateRatio();
