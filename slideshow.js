(() => {
  const gallery = document.querySelector('.hero-slideshow');
  if (!gallery) return;
  const scenes = [...gallery.querySelectorAll('.hero-scene')];
  const buttons = [...document.querySelectorAll('[data-slide]')];
  const toggle = document.getElementById('slideshow-toggle');
  const count = document.querySelector('.slide-count');
  const label = document.getElementById('hero-scene-label');
  const actions = document.querySelector('.slide-actions');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const ready = new Set();
  let active = 0, paused = reduced.matches, visible = true, timer;
  function schedule() {
    clearTimeout(timer);
    if (paused || !visible || document.hidden || ready.size < 2) return;
    timer = setTimeout(() => {
      for (let offset=1; offset<=scenes.length; offset++) {
        const next=(active+offset)%scenes.length;
        if (ready.has(next)) { show(next); break; }
      }
    }, 7000);
  }
  function show(index) {
    if (!ready.has(index)) return;
    active = index;
    scenes.forEach((scene,i) => {
      scene.classList.toggle('is-active',i===active);
      scene.setAttribute('aria-hidden',String(i!==active));
      buttons[i].setAttribute('aria-pressed',String(i===active));
    });
    label.textContent=scenes[active].dataset.label;
    count.textContent=String(active+1).padStart(2,'0')+' / '+String(scenes.length).padStart(2,'0');
    toggle.textContent=paused?'Play slideshow':'Pause slideshow';
    schedule();
  }
  buttons.forEach((button,i) => {
    button.disabled=true;
    button.addEventListener('click',() => { paused=true; show(i); });
  });
  toggle.addEventListener('click',() => { paused=!paused; show(active); });
  // Keyboard focus pauses rotation until the visitor explicitly restarts it.
  actions.addEventListener('focusin',(event) => { if (event.target !== toggle) { paused=true; show(active); } });
  reduced.addEventListener('change',() => { paused=reduced.matches; show(active); });
  document.addEventListener('visibilitychange',schedule);
  if ('IntersectionObserver' in window) new IntersectionObserver(([entry]) => {
    visible=entry.isIntersecting; schedule();
  },{threshold:0.1}).observe(gallery.parentElement);
  scenes.forEach(async (scene,i) => {
    const img=scene.querySelector('img');
    if(img.dataset.src) img.src=img.dataset.src;
    try {
      await img.decode();
      ready.add(i); buttons[i].disabled=false;
      if(i===0 || !ready.has(active)) show(i);
      actions.hidden=ready.size<2;
      schedule();
    } catch {
      buttons[i].disabled=true;
      buttons[i].setAttribute('aria-label',buttons[i].getAttribute('aria-label')+' (unavailable)');
    }
  });
})();
