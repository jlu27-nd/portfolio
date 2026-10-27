(() => {
const entries=[["/assets/enlisted-2007.jpg","Jonathan Lu during his 2007 deployment in support of Operation Iraqi Freedom","A foundation of service","Deployed in support of Operation Iraqi Freedom, 2007.","",""],["/assets/field.jpg","Jonathan Lu in military field uniform","Service in the field","Special Forces training brought medicine, leadership, and care in austere environments together.","",""],["/assets/gw-bshs-preview.jpg","Screenshot of George Washington University’s BSHS in Clinical Health Sciences program page","Learning while serving","My undergraduate education in clinical health sciences at George Washington University laid a foundation for continued study.","https://military.smhs.gwu.edu/bshs-clinical-health-sciences","Explore the GW program"],["/assets/mph-graduation.jpg","Jonathan Lu in graduation regalia at George Washington University","A wider view of health","Public health expanded my perspective from the individual patient to the communities and systems around them.","https://publichealth.gwu.edu/programs/public-health-online","Explore the GW MPH program"],["/assets/jonathan-lu.jpg","Portrait of Jonathan Lu","Service and scholarship","Named a Pat Tillman Scholar in 2020, continuing a commitment to learning and service.","https://news.asu.edu/20241105-health-and-medicine-college-health-solutions-alumnus-named-military-medic-year","Read the ASU profile"],["/assets/academic.jpg","Jonathan Lu in doctoral regalia holding his diploma","Connecting physical and behavioral health","My doctoral work explored sleep and pain among Special Forces operators.","https://news.asu.edu/20241105-health-and-medicine-college-health-solutions-alumnus-named-military-medic-year","Read the ASU story"],["/assets/firefighter.jpg","Jonathan Lu in firefighter turnout gear","Recognition rooted in service","The Military Medic of the Year recognition also reflects the volunteers and colleagues who shaped my work.","https://www.yelmonline.com/stories/former-volunteer-firefighter-and-emt-earns-national-honor,361068","Read the story"],["/assets/ache-preview.jpg","Screenshot of the American College of Healthcare Executives website","Fellow of ACHE","FACHE · American College of Healthcare Executives. Explore the professional home of healthcare leaders.","https://www.ache.org/","Visit ACHE"],["/assets/pmp-preview.jpg","Screenshot of PMI’s Project Management Professional certification page","Project Management Professional","PMP · Project Management Institute. Explore the certification and its focus on project leadership.","https://www.pmi.org/certifications/project-management-pmp","Explore PMP certification"],["/assets/jonathan-lu.jpg","Portrait of Jonathan Lu","The next chapter: ESTEEM","Master of Science in Engineering, Science & Technology Entrepreneurship, University of Notre Dame. Expected 2027.","",""],["/assets/jonathan-lu.jpg","Portrait of Jonathan Lu","Continuing the journey","Master of Business Administration, University of Notre Dame. Expected 2028.","",""]];
const panel=document.getElementById('milestone-preview');
const slot=document.querySelector('.timeline-preview-slot');
const triggers=[...document.querySelectorAll('.milestone-trigger')];
if(!panel||!slot||!triggers.length)return;
const narrow=matchMedia('(max-width:900px)');
let active=null, dismissed=false;
const img=panel.querySelector('img'), link=panel.querySelector('.preview-link');
let positionFrame=0;
function positionPreview(){
positionFrame=0;
if(!active||panel.hidden||narrow.matches)return;
const anchor=active.getBoundingClientRect(), column=slot.getBoundingClientRect();
const bounds=document.querySelector('.timeline-layout').getBoundingClientRect();
panel.style.visibility=bounds.bottom<0||bounds.top>innerHeight?'hidden':'';
const margin=18;
panel.style.width=column.width+'px';
panel.style.left=column.left+'px';
const height=panel.getBoundingClientRect().height;
const desired=anchor.top+anchor.height/2-80;
const top=Math.max(margin,Math.min(desired,innerHeight-height-margin));
panel.style.top=top+'px';
panel.style.setProperty('--preview-pointer-top',Math.max(22,Math.min(height-22,anchor.top+anchor.height/2-top))+'px');
}
function schedulePosition(){if(!positionFrame)positionFrame=requestAnimationFrame(positionPreview);}
function place(){if(active){
(narrow.matches?active.closest('.milestone-event'):slot).append(panel);
if(narrow.matches){panel.style.removeProperty('visibility');panel.style.removeProperty('width');panel.style.removeProperty('left');panel.style.removeProperty('top');}
schedulePosition();
}}
function show(button){if(dismissed)return; const item=entries[Number(button.dataset.preview)]; if(!item)return;
triggers.forEach(b=>b.setAttribute('aria-expanded',String(b===button)));
active=button; place();
img.src=item[0];img.alt=item[1];img.style.objectFit=Number(button.dataset.preview)===0?'contain':'';img.style.objectPosition=Number(button.dataset.preview)===3?'center 5%':'';img.classList.toggle('is-screenshot',[2,7,8].includes(Number(button.dataset.preview)));
panel.querySelector('.preview-title').textContent=item[2];
panel.querySelector('.preview-description').textContent=item[3];
panel.querySelector('.preview-year').textContent=button.closest('.milestone').querySelector('.milestone-date').textContent;
link.hidden=!item[4];if(item[4]){link.href=item[4];link.textContent=item[5]+' ↗';link.setAttribute('aria-label',item[5]+' (opens in a new tab)');}else{link.removeAttribute('href');}
panel.hidden=false;
positionPreview();
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
window.addEventListener('scroll',schedulePosition,{passive:true});
window.addEventListener('resize',schedulePosition);
img.addEventListener('load',schedulePosition);
new ResizeObserver(schedulePosition).observe(panel);
})();