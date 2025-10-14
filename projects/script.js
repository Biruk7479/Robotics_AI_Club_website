// Equipment data with categories and descriptions
const equipmentData = [
  // Microcontrollers
  {
    name: "Arduino Uno with USB cable",
    category: "microcontrollers",
    icon: "🔌",
    description: "Popular microcontroller board perfect for beginners. Ideal for prototyping and learning electronics with easy-to-use IDE."
  },

  // Sensors
  {
    name: "DS18B20 (LM35) Temperature Sensor",
    category: "sensors",
    icon: "🌡️",
    description: "Digital temperature sensor with high precision. Measures temperature from -55°C to +125°C with ±0.5°C accuracy."
  },
  {
    name: "Ultrasonic Sensor",
    category: "sensors",
    icon: "📡",
    description: "HC-SR04 distance measurement sensor. Measures distances from 2cm to 400cm using ultrasonic waves."
  },
  {
    name: "DHT11 Sensor",
    category: "sensors",
    icon: "💧",
    description: "Temperature and humidity sensor. Measures 0-50°C and 20-90% RH with basic accuracy for environmental monitoring."
  },
  {
    name: "Infrared Receiver",
    category: "sensors",
    icon: "📶",
    description: "IR receiver module for remote control signals. Works with standard IR remotes at 38kHz carrier frequency."
  },
  {
    name: "IR LED/Photo Sensor",
    category: "sensors",
    icon: "👁️",
    description: "Infrared LED and photodiode pair. Used for object detection, line following, and proximity sensing."
  },
  {
    name: "LDR (Light Dependent Resistor)",
    category: "sensors",
    icon: "☀️",
    description: "Photoresistor that changes resistance based on light intensity. Perfect for light-sensing applications."
  },
  {
    name: "Water Level Sensor",
    category: "sensors",
    icon: "💦",
    description: "Detects water level and depth. Useful for automatic watering systems and leak detection."
  },
  {
    name: "Sound Sensor",
    category: "sensors",
    icon: "🔊",
    description: "Microphone module that detects sound intensity. Features digital and analog outputs for sound-activated projects."
  },
  {
    name: "Joystick Module",
    category: "sensors",
    icon: "🕹️",
    description: "2-axis analog joystick with push button. Ideal for gaming controls and directional input."
  },
  {
    name: "Load Cell with Amplifier",
    category: "sensors",
    icon: "⚖️",
    description: "Precision weight sensor with HX711 amplifier. Measures weight accurately for digital scale projects."
  },
  {
    name: "Accelerometer/Gyroscope",
    category: "sensors",
    icon: "🎯",
    description: "MPU6050 6-axis motion tracking sensor. Combines 3-axis gyroscope and accelerometer for orientation detection."
  },

  // Actuators
  {
    name: "SG90 Servo Motor",
    category: "actuators",
    icon: "🔄",
    description: "Compact servo motor with 180° rotation. Perfect for robotic arms, camera mounts, and precise positioning."
  },
  {
    name: "Stepper Motor with ULN2003 Driver",
    category: "actuators",
    icon: "⚙️",
    description: "28BYJ-48 stepper motor for precise angular control. Includes driver board for easy interfacing."
  },
  {
    name: "5V Buzzer",
    category: "actuators",
    icon: "🔔",
    description: "Active piezo buzzer for audio alerts and alarms. Simple on/off operation for sound notifications."
  },
  {
    name: "One Channel 5V Relay",
    category: "actuators",
    icon: "🔌",
    description: "Relay module for controlling high-voltage devices. Switches AC/DC loads up to 10A with optocoupler isolation."
  },

  // Displays
  {
    name: "16×2 LCD Display with I2C Module",
    category: "displays",
    icon: "📺",
    description: "16 characters × 2 lines LCD with I2C interface. Reduces wiring from 16 to 4 pins for easy integration."
  },
  {
    name: "8×8 Dot Matrix Display",
    category: "displays",
    icon: "🔲",
    description: "MAX7219 controlled LED matrix. Display scrolling text, animations, and custom graphics."
  },
  {
    name: "Seven Segment Display (Single)",
    category: "displays",
    icon: "7️⃣",
    description: "Single digit 7-segment LED display. Common cathode/anode for numeric and basic character display."
  },
  {
    name: "Seven Segment Display (4-digit)",
    category: "displays",
    icon: "🔢",
    description: "4-digit 7-segment display with TM1637 driver. Perfect for clocks, counters, and numeric outputs."
  },

  // Components
  {
    name: "Breadboard",
    category: "components",
    icon: "📋",
    description: "830-point solderless breadboard for prototyping. Build and test circuits without soldering."
  },
  {
    name: "Jumper Wires",
    category: "components",
    icon: "🔗",
    description: "Male-to-male, male-to-female, and female-to-female wires. Essential for breadboard connections."
  },
  {
    name: "9V Battery Plug",
    category: "components",
    icon: "🔋",
    description: "9V battery connector with DC barrel jack. Powers Arduino and circuits independently."
  },
  {
    name: "Remote Controller",
    category: "components",
    icon: "📱",
    description: "Infrared remote control with 21 keys. Program custom functions for wireless control."
  },
  {
    name: "Push Button",
    category: "components",
    icon: "🔘",
    description: "Tactile push button switches. Momentary contact for user input and triggering events."
  },
  {
    name: "Toggle Switch",
    category: "components",
    icon: "🎚️",
    description: "SPDT toggle switch for manual on/off control. Maintains state without power."
  },
  {
    name: "Potentiometer",
    category: "components",
    icon: "🎛️",
    description: "Variable resistor (10kΩ typical). Adjust analog values for volume, brightness, and calibration."
  },
  {
    name: "Shift Register",
    category: "components",
    icon: "💾",
    description: "74HC595 8-bit shift register. Expand digital outputs using only 3 pins with serial communication."
  },
  {
    name: "Resistor Set",
    category: "components",
    icon: "⚡",
    description: "Assortment of resistors (220Ω to 10kΩ). Essential for current limiting and voltage division."
  },
  {
    name: "LEDs",
    category: "components",
    icon: "💡",
    description: "Assorted color LEDs (red, green, blue, yellow). Visual indicators and status lights."
  },
  {
    name: "RGB Module",
    category: "components",
    icon: "🌈",
    description: "Common cathode/anode RGB LED module. Create millions of colors with PWM control."
  },
  {
    name: "Keypad 4×4",
    category: "components",
    icon: "🔢",
    description: "16-key matrix keypad. User input for passwords, menus, and numeric entry."
  },
  {
    name: "RFID RC522 Reader/Tag/Key",
    category: "components",
    icon: "🔐",
    description: "13.56MHz RFID reader module. Read/write tags for access control and identification."
  },
  {
    name: "Real Time Clock Module",
    category: "components",
    icon: "🕐",
    description: "DS1307/DS3231 RTC with battery backup. Keeps accurate time even when powered off."
  },
  {
    name: "RF Transceiver",
    category: "components",
    icon: "📡",
    description: "NRF24L01 2.4GHz wireless module. Two-way communication up to 100m range."
  },
  {
    name: "Solder/Solder Iron",
    category: "components",
    icon: "🔥",
    description: "Soldering equipment for permanent connections. Essential for final project assembly."
  }
];

// Equipment rendering function
function renderEquipment(category = 'all') {
  const grid = document.getElementById('equipmentGrid');
  grid.innerHTML = '';

  const filtered = category === 'all' 
    ? equipmentData 
    : equipmentData.filter(item => item.category === category);

  filtered.forEach((item, index) => {
    const equipmentItem = document.createElement('div');
    equipmentItem.className = 'equipment-item';
    equipmentItem.style.animationDelay = `${index * 0.05}s`;
    
    equipmentItem.innerHTML = `
      <div class="equipment-icon">${item.icon}</div>
      <div class="equipment-name">${item.name}</div>
      <div class="equipment-desc">${item.description}</div>
      <span class="equipment-category">${item.category}</span>
    `;
    
    grid.appendChild(equipmentItem);
  });

  // Trigger animation
  gsap.fromTo('.equipment-item', 
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out'
    }
  );
}

// Tab switching
function initEquipmentTabs() {
  const tabs = document.querySelectorAll('.equipment-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const category = tab.getAttribute('data-category');
      renderEquipment(category);
    });
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  function toggleMenu() {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}

// GSAP Animations
function initAnimations() {
  // Hero animation
  gsap.from('.hero-mini .pill', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.2
  });

  gsap.from('.hero-mini h1', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4
  });

  gsap.from('.hero-mini .sub', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.6
  });

  // Project cards animation with ScrollTrigger
  gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 60,
      duration: 1,
      delay: index * 0.2,
      ease: 'power3.out'
    });
  });

  // Section titles
  gsap.utils.toArray('.section .h2').forEach(title => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
      },
      opacity: 0,
      x: -30,
      duration: 0.8
    });
  });

  // CTA section animation
  gsap.from('.cta-box', {
    scrollTrigger: {
      trigger: '.cta-box',
      start: 'top 80%',
    },
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: 'back.out(1.2)'
  });
}

// Animate SVG illustrations
function animateSVGElements() {
  // Pulse animation for data points
  gsap.to('.data-points circle', {
    scale: 1.3,
    opacity: 1,
    duration: 1.5,
    stagger: 0.2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });

  // Alert indicator pulse
  gsap.to('.alert-indicator circle', {
    scale: 1.2,
    opacity: 0.5,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });

  // Domain group hover effects
  const domainGroups = document.querySelectorAll('.domain-group');
  domainGroups.forEach(group => {
    group.addEventListener('mouseenter', () => {
      gsap.to(group, {
        y: -8,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    group.addEventListener('mouseleave', () => {
      gsap.to(group, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Render initial equipment
  renderEquipment('all');
  
  // Initialize tabs
  initEquipmentTabs();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize animations
  initAnimations();
  
  // Animate SVG elements
  animateSVGElements();
  
  // Initialize smooth scroll
  initSmoothScroll();

  // Add active state to current nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.style.color = 'var(--neon)';
    }
  });

  // Add scroll effect to header
  let lastScroll = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });

  // Parallax effect for hero background
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-mini');
    
    if (hero) {
      const heroHeight = hero.offsetHeight;
      if (scrolled < heroHeight) {
        hero.querySelector('.hero-bg').style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    }
  });

  console.log('🤖 Robotics & AI Club - Projects Page Initialized');
  console.log(`📦 ${equipmentData.length} equipment items loaded`);
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { equipmentData, renderEquipment };
}
