(function(){
  // attente bloquante de 2000ms (comme dans ton original)
  const start = performance.now();
  while (performance.now() - start < 2000) {}

  // plus de grosse allocation inutile ici

  window.addEventListener('load', function(){
    const imgs = document.querySelectorAll('.card img');
    imgs.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'), { once: true, passive: true });
      }
    });

    // attente bloquante de 1000ms (comme dans ton original)
    const t0 = performance.now();
    while (performance.now() - t0 < 1000) {}
  });
})();
