(() => {
const entries=[["/assets/uniform.jpg","Jonathan Lu in Army dress uniform","A foundation of service","A career rooted in service to others. This portrait reflects that military chapter.","",""],["/assets/field.jpg","Jonathan Lu in military field uniform","Service in the field","Special Forces training brought medicine, leadership, and care in austere environments together.","",""],["/assets/academic.jpg","Jonathan Lu at his doctoral graduation","Learning while serving","My undergraduate education in clinical health sciences laid a foundation for continued study. Pictured: my later doctoral graduation.","https://people.wright.edu/jonathan.lu","View academic profile"],["/assets/academic.jpg","Jonathan Lu at his doctoral graduation","A wider view of health","Public health expanded my perspective from the individual patient to the communities and systems around them. Pictured: my later doctoral graduation.","https://people.wright.edu/jonathan.lu","View academic profile"],["/assets/jonathan-lu.jpg","Portrait of Jonathan Lu","Service and scholarship","Named a Pat Tillman Scholar in 2020, continuing a commitment to learning and service.","https://news.asu.edu/20241105-health-and-medicine-college-health-solutions-alumnus-named-military-medic-year","Read the ASU profile"],["/assets/academic.jpg","Jonathan Lu in doctoral regalia holding his diploma","Connecting physical and behavioral health","My doctoral work explored sleep and pain among Special Forces operators.","https://news.asu.edu/20241105-health-and-medicine-college-health-solutions-alumnus-named-military-medic-year","Read the ASU story"],["/assets/firefighter.jpg","Jonathan Lu in firefighter turnout gear","Recognition rooted in service","The Military Medic of the Year recognition also reflects the volunteers and colleagues who shaped my work.","https://www.yelmonline.com/stories/former-volunteer-firefighter-and-emt-earns-national-honor,361068","Read the story"],["/assets/ache-preview.jpg","Screenshot of the American College of Healthcare Executives website","Fellow of ACHE","FACHE · American College of Healthcare Executives. Explore the professional home of healthcare leaders.","https://www.ache.org/","Visit ACHE"],["/assets/pmp-preview.jpg","Screenshot of PMI’s Project Management Professional certification page","Project Management Professional","PMP · Project Management Institute. Explore the certification and its focus on project leadership.","https://www.pmi.org/certifications/project-management-pmp","Explore PMP certification"],["/assets/jonathan-lu.jpg","Portrait of Jonathan Lu","The next chapter: ESTEEM","Master of Science in Engineering, Science & Technology Entrepreneurship, University of Notre Dame. Expected 2027.","",""],["/assets/jonathan-lu.jpg","Portrait of Jonathan Lu","Continuing the journey","Master of Business Administration, University of Notre Dame. Expected 2028.","",""]];
const panel=document.getElementById('milestone-preview');
const slot=document.querySelector('.timeline-preview-slot');
const triggers=[...document.querySelectorAll('.milestone-trigger')];
if(!panel||!slot||!triggers.length)return;
const narrow=matchMedia('(max-width:900px)');
let active=null, dismissed=false;
const img=panel.querySelector('img'), link=panel.querySelector('.preview-link');
function place(){if(active){(narrow.matches?active.closest('.milestone-event'):slot).append(panel);}}
function show(button){if(dismissed)return; const item=entries[Number(button.dataset.preview)]; if(!item)return;
triggers.forEach(b=>b.setAttribute('aria-expanded',String(b===button)));
active=button; place();
img.src=item[0];img.alt=item[1];img.classList.toggle('is-screenshot',Number(button.dataset.preview)===7||Number(button.dataset.preview)===8);
panel.querySelector('.preview-title').textContent=item[2];
panel.querySelector('.preview-description').textContent=item[3];
panel.querySelector('.preview-year').textContent=button.closest('.milestone').querySelector('.milestone-date').textContent;
link.hidden=!item[4];if(item[4]){link.href=item[4];link.textContent=item[5]+' ↗';link.setAttribute('aria-label',item[5]+' (opens in a new tab)');}else{link.removeAttribute('href');}
panel.hidden=false;
}
function close(){panel.hidden=true;triggers.forEach(b=>b.setAttribute('aria-expanded','false'));}
triggers.forEach(button=>{
button.addEventListener('mouseenter',()=>{if(!narrow.matches){dismissed=false;show(button);}});
button.addEventListener('focus',()=>show(button));
button.addEventListener('click',()=>{dismissed=false;show(button);});
});
panel.querySelector('.preview-close').addEventListener('click',()=>{close();dismissed=true;active?.focus();dismissed=false;});
document.querySelector('.journey').addEventListener('keydown',e=>{if(e.key==='Escape'){close();dismissed=true;active?.focus();dismissed=false;}});
narrow.addEventListener('change',place);
})();