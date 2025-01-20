// Enhanced stars generation
const scene = document.querySelector("a-scene");

for (let i = 0; i < 10000; i++) {
  const star = document.createElement("a-sphere");

  // Set initial size
  const size = Math.random() * 0.09 + 0.05;
  star.setAttribute("radius", size);

  // Set random position
  star.setAttribute("position", {
    x: (Math.random() - 0.5) * 500,
    y: (Math.random() - 0.5) * 500,
    z: (Math.random() - 0.5) * 500,
  });

  // Set material properties
  star.setAttribute("material", {
    shader: "standard",
    emissive: `rgb(255, ${100 + Math.random() * 155}, ${
      100 + Math.random() * 155
    })`,
    emissiveIntensity: 0.5, // Default glow intensity
  });

  // Add animation for glow (emissiveIntensity)
  star.setAttribute("animation", {
    property: "material.emissiveIntensity",
    dir: "alternate",
    dur: Math.random() * 3000 + 2000, // Duration between 2-5 seconds
    easing: "easeInOutSine",
    to: Math.random() * 2 + 1, // Random maximum glow intensity
  });

  scene.appendChild(star);
}

const celestialInfo = {
  sun: {
    title: "☀️ ดวงอาทิตย์ (The Sun)",
    details: [
      "เป็นดาวฤกษ์ที่อยู่ศูนย์กลางของระบบสุริยะ",
      "มวล: 1.989 × 10^30 กิโลกรัม (มวลคิดเป็น 99.86% ของระบบสุริยะ)",
      "เส้นผ่านศูนย์กลาง: 1.39 ล้านกิโลเมตร (109 เท่าของโลก)",
      "อุณหภูมิพื้นผิว: 5,500°C",
      "อายุ: 4.6 พันล้านปี",
      "ระยะห่างจากโลก: 149.6 ล้านกิโลเมตร",
    ],
  },
  blackhole: {
    title: "🌀 หลุมดำ (Black Hole)",
    details: [
      "พื้นที่ในอวกาศที่มีแรงโน้มถ่วงสูงจนแสงไม่สามารถหลุดออกมาได้",
      "ไม่สามารถมองเห็นได้ แต่สามารถตรวจจับจากผลกระทบที่มีต่อสิ่งรอบข้าง",
      "เกิดจากการยุบตัวของดาวฤกษ์ที่มีมวลมาก",
    ],
  },
  earth: {
    title: "🌍 โลก (Earth)",
    details: [
      "ดาวเคราะห์อันดับที่ 3 จากดวงอาทิตย์ อยู่ในเขตที่เอื้อต่อการมีสิ่งมีชีวิต",
      "มีระยะห่างจากดวงอาทิตย์: 149.6 ล้านกิโลเมตร (1 AU)",
      "มีดวงจันทร์ 1 ดวง และเอียงแกน 23.5 องศา ทำให้เกิดฤดูกาล",
      "เส้นผ่านศูนย์กลาง: 12,742 กิโลเมตร",
    ],
  },
  moon: {
    title: "🌕 ดวงจันทร์ (Moon)",
    details: [
      "บริวารตามธรรมชาติดวงเดียวของโลก",
      "ระยะห่างจากโลกเฉลี่ย: 384,400 กิโลเมตร",
      "ไม่มีบรรยากาศ แต่มีร่องรอยการชนของอุกกาบาตมากมาย",
      "ระยะเวลาการโคจรรอบโลก: 27.3 วัน",
    ],
  },
  saturn: {
    title: "🪐 ดาวเสาร์ (Saturn)",
    details: [
      "เป็นดาวเคราะห์ที่ใหญ่เป็นอันดับ 2 ในระบบสุริยะ",
      "มีวงแหวนที่สวยงามและโดดเด่นที่สุดในระบบสุริยะ",
      "ระยะห่างจากดวงอาทิตย์: 1.4 พันล้านกิโลเมตร",
      "เส้นผ่านศูนย์กลาง: 116,460 กิโลเมตร",
      "อุณหภูมิเฉลี่ย: -178°C",
      "ระยะเวลาการโคจรรอบดวงอาทิตย์: 29.5 ปีโลก",
    ],
  },
  mars: {
    title: "🔴 ดาวอังคาร (Mars)",
    details: [
      "ดาวเคราะห์ที่มีสภาพเหมือนโลกมากที่สุดในระบบสุริยะ",
      "มีระยะห่างจากดวงอาทิตย์: 227.9 ล้านกิโลเมตร",
      "มีดาวจันทร์ 2 ดวง คือ Phobos และ Deimos",
      "เส้นผ่านศูนย์กลาง: 6,779 กิโลเมตร",
      "อุณหภูมิเฉลี่ย: -60°C",
      "มีบรรยากาศที่บางและมีองค์ประกอบหลักเป็น CO2",
    ],
  },
  venus: {
    title: "♀️ ดาวศุกร์ (Venus)",
    details: [
      "ดาวเคราะห์ที่มีอุณหภูมิสูงที่สุดในระบบสุริยะ",
      "ระยะห่างจากดวงอาทิตย์: 108.2 ล้านกิโลเมตร",
      "เส้นผ่านศูนย์กลาง: 12,104 กิโลเมตร",
      "อุณหภูมิพื้นผิว: 465°C",
      "บรรยากาศหนาทึบประกอบด้วยก๊าซคาร์บอนไดออกไซด์",
    ],
  },
  jupiter: {
    title: "♃ ดาวพฤหัสบดี (Jupiter)",
    details: [
      "เป็นดาวเคราะห์ที่ใหญ่ที่สุดในระบบสุริยะ",
      "ระยะห่างจากดวงอาทิตย์: 778.5 ล้านกิโลเมตร",
      "เส้นผ่านศูนย์กลาง: 139,820 กิโลเมตร",
      "อุณหภูมิเฉลี่ย: -108°C",
      "มีดาวจันทร์มากกว่า 79 ดวง (รวมถึง Europa, Io, Ganymede, Callisto)",
    ],
  },
  neptune: {
    title: "♆ ดาวเนปจูน (Neptune)",
    details: [
      "ดาวเคราะห์ที่ห่างไกลจากดวงอาทิตย์ที่สุดในระบบสุริยะ",
      "ระยะห่างจากดวงอาทิตย์: 4.5 พันล้านกิโลเมตร",
      "เส้นผ่านศูนย์กลาง: 49,244 กิโลเมตร",
      "อุณหภูมิพื้นผิว: -200°C",
      "มีวงแหวนบางๆ และลมที่เร็วที่สุดในระบบสุริยะ",
    ],
  },
  uranus: {
    title: "♅ ดาวยูเรนัส (Uranus)",
    details: [
      "ดาวเคราะห์ที่หมุนข้างๆ และมีวงแหวน",
      "ระยะห่างจากดวงอาทิตย์: 2.9 พันล้านกิโลเมตร",
      "เส้นผ่านศูนย์กลาง: 50,724 กิโลเมตร",
      "อุณหภูมิพื้นผิว: -224°C",
      "บรรยากาศประกอบด้วยไฮโดรเจนและฮีเลียม",
    ],
  },
  mercury: {
    title: "☿️ ดาวพุธ (Mercury)",
    details: [
      "ดาวเคราะห์ที่ใกล้เคียงกับดวงอาทิตย์ที่สุดในระบบสุริยะ",
      "ระยะห่างจากดวงอาทิตย์: 57.9 ล้านกิโลเมตร",
      "เส้นผ่านศูนย์กลาง: 4,880 กิโลเมตร",
      "ไม่มีบรรยากาศหรือมีบรรยากาศบางเฉียบ",
      "อุณหภูมิพื้นผิว: -180°C ถึง 430°C",
      "วันบนดาวพุธ: 88 วันโลก",
    ],
  },
};


const cursor = document.getElementById("customCursor");
const planetInfo = document.getElementById("planetInfo");
const infoContent = document.getElementById("infoContent");
const closeButton = document.querySelector(".close-button");

// Function to update cursor position
document.body.addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.pageX}px`;
  cursor.style.top = `${event.pageY}px`;
});

// Hide info box
closeButton.addEventListener("click", () => {
  planetInfo.style.display = "none";
});

// Show planet info
function showInfo(planet) {
  let content = `<h2>${celestialInfo[planet].title}</h2><ul>`;
  celestialInfo[planet].details.forEach((detail) => {
    content += `<li>${detail}</li>`;
  });
  content += `</ul>`;
  infoContent.innerHTML = content;
  planetInfo.style.display = "block";
}

function displayPlanetInfo(event) {
  const planet = event.target;
  
  // Check if the clicked object is a clickable planet
  if (planet.classList.contains("clickable-object")) {
    const planetName = planet.id; // Get the ID of the clicked planet
    
    // Show the planet info
    const planetInfo = document.getElementById('planetInfo');
    const infoContent = document.getElementById('infoContent');
    
    infoContent.innerHTML = `<h2>${planetName}</h2><p>Information about ${planetName}...</p>`;
    
    planetInfo.style.display = "block"; // Show planet info
  }
}

// Close the planet info when clicking the close button
document.querySelector('.close-button').addEventListener('click', () => {
  const planetInfo = document.getElementById('planetInfo');
  planetInfo.style.display = "none"; // Hide the info panel
});

// Handle click on planets
document.querySelectorAll(".clickable-object").forEach((obj) => {
  obj.addEventListener("click", function () {
    if (obj.classList.contains("sun")) {
      showInfo("sun");
    } else if (obj.classList.contains("saturn")) {
      showInfo("saturn");
    } else if (obj.classList.contains("moon")) {
      showInfo("moon");
    } else if (obj.classList.contains("earth")) {
      showInfo("earth");
    } else if (obj.classList.contains("blackhole")) {
      showInfo("blackhole");
    } else if (obj.classList.contains("mars")) {
      showInfo("mars");
    } else if (obj.classList.contains("venus")) {
      showInfo("venus");
    } else if (obj.classList.contains("jupiter")) {
      showInfo("jupiter");
    } else if (obj.classList.contains("neptune")) {
      showInfo("neptune");
    } else if (obj.classList.contains("uranus")) {
      showInfo("uranus");
    } else if (obj.classList.contains("mercury")) {
      showInfo("mercury");
    }
  });
});
