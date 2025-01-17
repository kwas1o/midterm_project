 // Enhanced stars generation
 const scene = document.querySelector('a-scene');
 for (let i = 0; i < 2000; i++) {
     const star = document.createElement('a-sphere');
     const size = Math.random() * 0.05 + 0.02;
     star.setAttribute('radius', size);
     star.setAttribute('position', {
         x: (Math.random() - 0.5) * 200,
         y: (Math.random() - 0.5) * 200,
         z: (Math.random() - 0.5) * 200
     });
     star.setAttribute('material', {
         shader: 'standard',
         emissive: `rgb(255, ${200 + Math.random() * 55}, ${200 + Math.random() * 55})`,
         emissiveIntensity: 1
     });
     scene.appendChild(star);
 }

const celestialInfo = {
   sun: {
       title: "☀️ ดวงอาทิตย์ (The Sun)",
       details: [
           " เป็นดาวฤกษ์ที่อยู่ศูนย์กลางของระบบสุริยะ",
           " มวล: 1.989 × 10^30 กิโลกรัม (มวลคิดเป็น 99.86% ของระบบสุริยะ)",
           " เส้นผ่านศูนย์กลาง: 1.39 ล้านกิโลเมตร (109 เท่าของโลก)",
           " อุณหภูมิพื้นผิว: 5,500°C",
           " อายุ: 4.6 พันล้านปี",
           " ระยะห่างจากโลก: 149.6 ล้านกิโลเมตร"
       ]
   },
   saturn: {
       title: "🪐 ดาวเสาร์ (Saturn)",
       details: [
           " เป็นดาวเคราะห์ที่ใหญ่เป็นอันดับ 2 ในระบบสุริยะ",
           " มีวงแหวนที่สวยงามและโดดเด่นที่สุดในระบบสุริยะ",
           " ระยะห่างจากดวงอาทิตย์: 1.4 พันล้านกิโลเมตร",
           " เส้นผ่านศูนย์กลาง: 116,460 กิโลเมตร",
           " อุณหภูมิเฉลี่ย: -178°C",
           " ระยะเวลาการโคจรรอบดวงอาทิตย์: 29.5 ปีโลก"
       ]
   }
};

const cursor = document.getElementById('customCursor');
const planetInfo = document.getElementById('planetInfo');
const infoContent = document.getElementById('infoContent');
const closeButton = document.querySelector('.close-button');

// Function to update cursor position
document.body.addEventListener('mousemove', (event) => {
   cursor.style.left = `${event.pageX}px`;
   cursor.style.top = `${event.pageY}px`;
});

// Hide info box
closeButton.addEventListener('click', () => {
   planetInfo.style.display = 'none';
});

// Show planet info
function showInfo(planet) {
   let content = `<h2>${celestialInfo[planet].title}</h2><ul>`;
   celestialInfo[planet].details.forEach(detail => {
       content += `<li>${detail}</li>`;
   });
   content += `</ul>`;
   infoContent.innerHTML = content;
   planetInfo.style.display = 'block';
}

// Handle click on planets
document.querySelectorAll('.clickable-object').forEach(obj => {
   obj.addEventListener('click', function () {
       if (obj.classList.contains('sun')) {
           showInfo('sun');
       } else if (obj.classList.contains('saturn')) {
           showInfo('saturn');
       }
   });
});
