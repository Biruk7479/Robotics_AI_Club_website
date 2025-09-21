window.addEventListener('load', () => {
  // Parallax glow on title
  const title = document.getElementById('title');
  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth/2, cy = window.innerHeight/2;
    const dx = (e.clientX - cx)/cx, dy = (e.clientY - cy)/cy;
    title.style.transform = `rotateY(${dx*8}deg) rotateX(${dy*-6}deg)`;
  });

  // CTA ripple micro-interaction
  const cta = document.getElementById('joinBtn');
  cta.addEventListener('click', (e)=>{
    const r = document.createElement('span');
    r.className = 'ripple';
    const rect = cta.getBoundingClientRect();
    const d = Math.max(rect.width, rect.height);
    r.style.width = r.style.height = d + 'px';
    r.style.left = (e.clientX - rect.left - d/2)+ 'px';
    r.style.top  = (e.clientY - rect.top  - d/2)+ 'px';
    cta.appendChild(r);
    requestAnimationFrame(()=>{
      r.style.transition = 'transform .6s ease, opacity .8s ease';
      r.style.transform = 'scale(1)';
      r.style.opacity = '0';
    });
    setTimeout(()=> r.remove(), 800);
    // Demo: smooth scroll to About
    document.querySelector('#about').scrollIntoView({behavior:'smooth'});
  });

  // Floating binary bits
  const bits = document.getElementById('bits');
  const chars = ['0','1'];
  for(let i=0;i<90;i++){
    const s = document.createElement('span');
    s.className='bit';
    s.textContent = chars[Math.random()>0.5?1:0];
    s.style.left = Math.random()*100+'%';
    s.style.top = Math.random()*100+'%';
    s.style.fontSize = (10+Math.random()*12)+'px';
    bits.appendChild(s);
    const dur = 10 + Math.random()*20;
    s.animate([
      { transform:`translateY(0px)`, opacity:.15 },
      { transform:`translateY(-120px)`, opacity:.4 }
    ], { duration: dur*1000, iterations: Infinity, direction:'alternate', easing:'ease-in-out', delay:Math.random()*2000});
  }

  // Typewriter mission statement
  const lines = [
    'The Robotics and AI Club at Addis Ababa University was founded to bring together students who are eager to learn, innovate, and excel in the rapidly evolving fields of robotics and artificial intelligence.',
    'We believe that by fostering an environment where students can share ideas, work on hands-on projects, and engage with industry professionals, we can inspire the next generation of innovators.'
  ];
  const target = document.getElementById('typewriter');
  let li=0, ci=0;
  function typeLoop(){
    if(li >= lines.length) return;
    if(ci <= lines[li].length){
      target.textContent = lines[li].slice(0,ci);
      ci++;
      setTimeout(typeLoop, 24);
    } else {
      setTimeout(()=>{ li++; ci=0; target.textContent += '\n'; typeLoop(); }, 2000);
    }
  }
  typeLoop();

  // Neural network edges pulse when section in view
  const nn = document.getElementById('nn');
  const edges = nn.querySelector('#edges');
  const l1 = [60,140,220,300].map(y=>({x:70,y}))
  const l2 = [40,120,200,280].map(y=>({x:200,y}))
  const l3 = [80,160,240].map(y=>({x:340,y}))
  const l4 = [{x:450,y:170}]
  function wire(a,b){
    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d', `M${a.x},${a.y} C ${(a.x+ b.x)/2},${a.y} ${(a.x+b.x)/2},${b.y} ${b.x},${b.y}`);
    p.setAttribute('stroke','#00F5FF');
    p.setAttribute('stroke-opacity','.25');
    edges.appendChild(p);
  }
  l1.forEach(a=> l2.forEach(b=> wire(a,b)));
  l2.forEach(a=> l3.forEach(b=> wire(a,b)));
  l3.forEach(a=> l4.forEach(b=> wire(a,b)));

  // Pulse animation on scroll into view
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        nn.animate([{filter:'brightness(1)'},{filter:'brightness(1.4)'}],{duration:900, iterations:3, direction:'alternate'});
      }
    })
  }, {threshold:.4});
  obs.observe(nn);

  // GSAP scroll reveals
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.section, .partners').forEach((el)=>{
    gsap.from(el,{
      opacity:0, y:30, duration:0.9, ease:'power2',
      scrollTrigger:{trigger:el, start:'top 80%'}
    })
  })

  // Tab switching functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Tab clicked:', btn.textContent); // Log clicked tab

    // Remove active class from all buttons and contents
    tabBtns.forEach(b => {
      b.classList.remove('active');
      console.log('Removed active from:', b.textContent);
    });
    tabContents.forEach(c => {
      c.classList.remove('active');
      console.log('Removed active from content:', c.id);
    });

    // Add active class to clicked button and corresponding content
    btn.classList.add('active');
    const tabId = btn.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
    console.log('Added active to content:', tabId);
  });
});
});

 // Create floating particles
    document.addEventListener('DOMContentLoaded', function() {
      const particlesContainer = document.getElementById('particles');
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random size
        const size = 2 + Math.random() * 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 15}s`;
        
        particlesContainer.appendChild(particle);
      }
    });