function scrollToSection(id) {
    const vp = document.getElementById('vp');
    const target = document.getElementById(id);
    vp.scrollTo({ top: target.offsetTop - 44, behavior: 'smooth' });
  }
