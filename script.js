window.addEventListener('load', () => {
  // Parallax glow on title
  const title = document.getElementById('title');
  if (title) {
    document.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth/2, cy = window.innerHeight/2;
      const dx = (e.clientX - cx)/cx, dy = (e.clientY - cy)/cy;
      title.style.transform = `rotateY(${dx*8}deg) rotateX(${dy*-6}deg)`;
    });
  }

  // CTA ripple micro-interaction
  const cta = document.getElementById('joinBtn');
  if (cta) {
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
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({behavior:'smooth'});
      }
    });
  }

  // Floating binary bits
  const bits = document.getElementById('bits');
  if (bits) {
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
  }

  // Typewriter mission statement
  const target = document.getElementById('typewriter');
  if (target) {
    const lines = [
      'The Robotics and AI Club at Addis Ababa University was founded to bring together students who are eager to learn, innovate, and excel in the rapidly evolving fields of robotics and artificial intelligence.',
      'We believe that by fostering an environment where students can share ideas, work on hands-on projects, and engage with industry professionals, we can inspire the next generation of innovators.'
    ];
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
  }

  // Neural network edges pulse when section in view
  const nn = document.getElementById('nn');
  if (nn) {
    const edges = nn.querySelector('#edges');
    if (edges) {
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
    }
  }

  // GSAP scroll reveals
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.section, .partners').forEach((el)=>{
      gsap.from(el,{
        opacity:0, y:30, duration:0.9, ease:'power2',
        scrollTrigger:{trigger:el, start:'top 80%'}
      })
    })
  }

  // Tab switching functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabBtns.length > 0 && tabContents.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        const targetTab = document.getElementById(tabId);
        if (targetTab) {
          targetTab.classList.add('active');
        }
      });
    });
  }

  // Create floating particles
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
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
  }

  // Modal functionality
  const modal = document.getElementById('registrationModal');
  const clubRegisterBtn = document.getElementById('clubRegisterBtn');
  const closeModal = document.getElementById('closeModal');
  const form = document.getElementById('registrationForm');

  if (clubRegisterBtn && modal) {
    clubRegisterBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  }

  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  if (modal) {
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Registration submitted successfully! We will contact you soon.');
      if (modal) modal.style.display = 'none';
      form.reset();
    });
  }

  // Countdown timer for VEX registration (WITH NULL CHECKS)
  function updateCountdown() {
    // Get countdown elements safely
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    
    // Only proceed if all elements exist
    if (daysEl && hoursEl && minutesEl && secondsEl) {
      // Set the date we're counting down to (2 weeks from now)
      const countDownDate = new Date();
      countDownDate.setDate(countDownDate.getDate() + 14);
      
      const now = new Date().getTime();
      const distance = countDownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      daysEl.textContent = days.toString().padStart(2, '0');
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
  }
  
  // Only start countdown if the elements exist
  const countdownExists = document.getElementById("days") && 
                          document.getElementById("hours") && 
                          document.getElementById("minutes") && 
                          document.getElementById("seconds");
  
  if (countdownExists) {
    // Update the countdown every 1 second
    setInterval(updateCountdown, 1000);
    updateCountdown();
  }

  // GSAP animations (with safety check)
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.utils.toArray('.registration-card').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        }
      });
    });
  }
});