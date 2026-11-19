const KEY='shakir-portfolio-v1';
const DEF={
 name:'Shakir Ali',title:'CS Undergraduate | Aspiring AI Developer',heroA:'Building',heroB:'Smart Software',
 tagline:'I build responsive web interfaces and database-driven applications with clean, maintainable code.',
 about:'Computer Science undergraduate in my 5th semester at Sukkur IBA University, building desktop and web applications with C++, Java, SQL, HTML/CSS and JavaScript.',
 obj:'My goal is to become an AI Developer: applying a strong software foundation and growing my AI expertise to build innovative, user-centric applications that solve real-world problems.',
 skills:['C++','Java','HTML/CSS','JavaScript','SQL','DBMS','OOP','Critical Thinking'],
 stats:[{v:'5th',l:'Semester'},{v:'3.67',l:'Foundation CGPA'},{v:'4+',l:'Projects Built'}],
 email:'itshakir.dev@gmail.com',phone:'+92 3340675656',loc:'Ghotki, Pakistan',
 gh:'https://github.com/itshakirdev',li:'https://www.linkedin.com/in/itshakir/',photo:'',
 exp:[
  {k:'Education',t:'Bachelor of Computer Science',o:'Sukkur IBA University',p:'2024 – 2028',d:'Currently in 5th semester, focusing on software development, OOP, data structures and databases.'},
  {k:'Education',t:'STHP Foundation Semester',o:'Sukkur IBA University',p:'CGPA 3.67',d:''},
  {k:'Course',t:'Interaction Design and UX/UI Principles',o:'Coursera',p:'',d:''},
  {k:'Course',t:'Prompt Engineering for ChatGPT',o:'Coursera',p:'',d:''},
  {k:'Activity',t:'Active Member, Public Speaking Society',o:'Sukkur IBA University',p:'',d:'Building communication and presentation skills.'},
  {k:'Activity',t:'Coding Competition, Gen AI Workshop, SIBATHON 2026',o:'Participant',p:'',d:''}],
 proj:[
  {n:'Voting System',cat:'Console App',tech:'C++',d:'Console-based voting system with voter registration, vote casting and file-based result management.',link:'',img:''},
  {n:'Store Management System',cat:'Desktop App',tech:'Java, OOP, Swing',d:'Inventory and sales management application built with Java, OOP principles and Java Swing.',link:'',img:''},
  {n:'Doctor Appointment Booking',cat:'Desktop App',tech:'Java, DSA',d:'Appointment scheduling and patient record management application implementing data structures and algorithms.',link:'',img:''},
  {n:'Amazon Page Clone',cat:'Web Design',tech:'HTML, CSS, JavaScript',d:'Responsive front-end clone of the Amazon homepage.',link:'',img:''}]
};
let hasSaved=false;
let D=load();let cat='All';
function load(){try{const s=localStorage.getItem(KEY);if(s){hasSaved=true;return Object.assign({},DEF,JSON.parse(s))}}catch(e){}return JSON.parse(JSON.stringify(DEF))}
function save(){try{localStorage.setItem(KEY,JSON.stringify(D));return true}catch(e){alert('Could not save. Images may be too large.');return false}}
const $=id=>document.getElementById(id);
function h(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e}
function url(u){u=(u||'').trim();if(!u)return '';if(!/^https?:\/\//i.test(u))u='https://'+u;return /^https?:\/\//i.test(u)?u:''}
function link(text,href,cls){const a=h('a',cls,text);a.href=href;a.target='_blank';a.rel='noopener';return a}
const ini=n=>(n||'?').split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase();
function photoNode(){if(D.photo){const i=document.createElement('img');i.src=D.photo;i.alt=D.name;return i}return document.createTextNode(ini(D.name))}
function shrink(file,w,hh,cb){const rd=new FileReader();rd.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas');c.width=w;c.height=hh;const s=Math.max(w/im.width,hh/im.height),sw=w/s,sh=hh/s;c.getContext('2d').drawImage(im,(im.width-sw)/2,(im.height-sh)/2,sw,sh,0,0,w,hh);cb(c.toDataURL('image/jpeg',.82))};im.src=rd.result};rd.readAsDataURL(file)}

function render(){
 document.title=D.name+' – Portfolio';
 $('logo').textContent='';$('logo').append(D.name,h('i',null,'.'));
 $('hello').textContent='Hi, I’m '+D.name;
 $('tagline').textContent=D.tagline;$('title').textContent=D.title;$('aname').textContent=D.name;
 $('about-t').textContent=D.about;$('obj').textContent=D.obj;
 ['photoBox','aphoto'].forEach(id=>{$(id).textContent='';$(id).append(photoNode())});
 const sk=$('skills');sk.textContent='';D.skills.forEach(x=>sk.append(h('span','chip',x)));
 const so=$('social');so.textContent='';
 if(url(D.gh))so.append(link('GitHub ↗',url(D.gh)));if(url(D.li))so.append(link('LinkedIn ↗',url(D.li)));if(D.email)so.append(link('Email ↗','mailto:'+D.email));
 const st=$('stats');st.textContent='';
 D.stats.forEach(s=>{if(!s.v&&!s.l)return;const c=h('div','stat');c.append(h('div','sv',s.v),h('div','sl',s.l),h('span','ar','↗'));st.append(c)});
 const ex=$('exp');ex.textContent='';
 D.exp.forEach(e=>{const r=h('div','xr'),l=h('div','xl'),b=h('div');
  l.append(h('span','k',e.k||''));if(e.p)l.append(h('div',null,e.p));
  b.append(h('h3',null,e.t||''));if(e.o)b.append(h('div','o',e.o));if(e.d)b.append(h('p',null,e.d));r.append(l,b);ex.append(r)});
 renderProj();
 const cm=$('cmail');cm.textContent='';if(D.email)cm.append(link(D.email,'mailto:'+D.email,'mail'));
 const cb=$('cbtns');cb.textContent='';
 if(url(D.gh))cb.append(link('GitHub',url(D.gh),'btn ghost'));if(url(D.li))cb.append(link('LinkedIn',url(D.li),'btn ghost'));
 const inf=$('info');inf.textContent='';[D.loc,D.phone].forEach(v=>{if(v)inf.append(h('li',null,v))});
 $('foot').textContent='© '+new Date().getFullYear()+' '+D.name;
}
function renderProj(){
 const cats=['All',...new Set(D.proj.map(p=>p.cat).filter(Boolean))];if(!cats.includes(cat))cat='All';
 const f=$('filters');f.textContent='';
 cats.forEach(c=>{const b=h('button',c===cat?'on':'',c);b.onclick=()=>{cat=c;renderProj()};f.append(b)});
 const pj=$('proj');pj.textContent='';
 D.proj.forEach((x,i)=>{if(cat!=='All'&&x.cat!==cat)return;
  const c=h('article','pc'),cv=h('div','cover');cv.style.setProperty('--h',(i*67+90)%360);
  if(x.img){const im=document.createElement('img');im.src=x.img;im.alt=x.n;cv.append(im)}else cv.textContent=(x.n||'?')[0].toUpperCase();
  const b=h('div','pb');b.append(h('span','cat',x.cat||'Project'),h('h3',null,x.n||''),h('p',null,x.d||''));
  const ch=h('div','chips');(x.tech||'').split(',').map(t=>t.trim()).filter(Boolean).forEach(t=>ch.append(h('span','chip',t)));b.append(ch);
  if(url(x.link))b.append(link('View Project ↗',url(x.link)));c.append(cv,b);pj.append(c)});
}

/* editor */
function rowEl(kind,v){
 const r=h('div','row');const rm=h('button','rm','Remove');rm.type='button';rm.onclick=()=>r.remove();r.append(rm);
 const add=(lab,cls,val,ta)=>{r.append(h('label',null,lab));const i=document.createElement(ta?'textarea':'input');i.className=cls;i.value=val||'';r.append(i)};
 if(kind==='exp'){
  r.append(h('label',null,'Type'));const sel=document.createElement('select');sel.className='k';['Education','Course','Work','Internship','Volunteer','Activity'].forEach(o=>{const op=h('option',null,o);op.value=o;sel.append(op)});sel.value=v.k||'Education';r.append(sel);
  add('Title','t',v.t);add('Organization','o',v.o);add('Period / Grade','p',v.p);add('Description','d',v.d,1);
 }else{
  add('Project name','n',v.n);add('Category (used for filter)','cat',v.cat);add('Technologies (comma separated)','tech',v.tech);add('Description','d',v.d,1);add('Link (optional)','link',v.link);
  r.dataset.img=v.img||'';r.append(h('label',null,'Cover image (optional)'));
  const fi=document.createElement('input');fi.type='file';fi.accept='image/*';const th=document.createElement('img');th.className='thumb';th.alt='';if(v.img)th.src=v.img;else th.hidden=true;
  fi.onchange=()=>{const f=fi.files[0];if(f)shrink(f,800,500,d=>{r.dataset.img=d;th.src=d;th.hidden=false})};
  r.append(fi,th)}
 return r}
function openEdit(){
 const m={'f-name':D.name,'f-title':D.title,'f-tagline':D.tagline,'f-about':D.about,'f-obj':D.obj,'f-skills':D.skills.join(', '),'f-email':D.email,'f-phone':D.phone,'f-loc':D.loc,'f-gh':D.gh,'f-li':D.li};
 for(const k in m)$(k).value=m[k]||'';
 for(let i=0;i<3;i++){const s=D.stats[i]||{};$('s-v'+i).value=s.v||'';$('s-l'+i).value=s.l||''}
 $('expRows').textContent='';D.exp.forEach(e=>$('expRows').append(rowEl('exp',e)));
 $('projRows').textContent='';D.proj.forEach(x=>$('projRows').append(rowEl('proj',x)));
 pv();document.body.classList.add('editing')}
function pv(){const b=$('pvBox');b.textContent='';if(D.photo){const i=document.createElement('img');i.src=D.photo;i.alt='';b.append(i)}else b.append(h('div','ph',ini($('f-name').value||D.name)))}
function closeEdit(){document.body.classList.remove('editing')}
function collect(sel,keys){return [...document.querySelectorAll(sel+' .row')].map(r=>{const o={};keys.forEach(k=>o[k]=r.querySelector('.'+k).value.trim());if(r.dataset.img!==undefined)o.img=r.dataset.img;return o})}
$('editBtn').onclick=openEdit;$('closeBtn').onclick=closeEdit;$('shade').onclick=closeEdit;
$('addExp').onclick=()=>$('expRows').append(rowEl('exp',{}));
$('addProj').onclick=()=>$('projRows').append(rowEl('proj',{}));
$('rmPhoto').onclick=()=>{D.photo='';pv()};
$('photoIn').onchange=e=>{const f=e.target.files[0];if(f)shrink(f,520,650,d=>{D.photo=d;pv()})};
$('saveBtn').onclick=()=>{
 D.name=$('f-name').value.trim()||'Your Name';D.title=$('f-title').value.trim();D.tagline=$('f-tagline').value.trim();
 D.about=$('f-about').value.trim();D.obj=$('f-obj').value.trim();
 D.skills=$('f-skills').value.split(',').map(s=>s.trim()).filter(Boolean);
 D.stats=[0,1,2].map(i=>({v:$('s-v'+i).value.trim(),l:$('s-l'+i).value.trim()}));
 D.email=$('f-email').value.trim();D.phone=$('f-phone').value.trim();D.loc=$('f-loc').value.trim();D.gh=$('f-gh').value.trim();D.li=$('f-li').value.trim();
 D.exp=collect('#expRows',['k','t','o','p','d']).filter(x=>x.t);
 D.proj=collect('#projRows',['n','cat','tech','d','link']).filter(x=>x.n);
 if(save()){render();closeEdit()}};
$('reset').onclick=()=>{if(confirm('Reset everything to the default content?')){D=JSON.parse(JSON.stringify(DEF));try{localStorage.removeItem(KEY)}catch(e){}render();openEdit()}};
$('theme').onclick=()=>{const r=document.documentElement;r.dataset.theme=r.dataset.theme==='light'?'dark':'light'};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeEdit()});

/* export / import: use these to make your edits permanent on the deployed site */
$('exportBtn').onclick=()=>{const b=new Blob([JSON.stringify(D,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='profile.json';a.click();URL.revokeObjectURL(a.href)};
$('importBtn').onclick=()=>$('importIn').click();
$('importIn').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();
 r.onload=()=>{try{D=Object.assign({},DEF,JSON.parse(r.result));save();render();openEdit()}catch(err){alert('Invalid JSON file.')}};r.readAsText(f);e.target.value=''};

render();
/* first visit: load defaults from data/profile.json (edit that file, then redeploy) */
if(!hasSaved){fetch('data/profile.json').then(r=>r.ok?r.json():null).then(j=>{if(j){D=Object.assign({},DEF,j);render()}}).catch(()=>{})}
