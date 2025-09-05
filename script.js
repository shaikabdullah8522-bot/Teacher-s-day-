const teachers = [
  ["Shylaja", "Happy Teacher’s Day! Thank you for guiding me, inspiring me, and making me believe in myself."],
  ["Hymavathi", "To the world you may be just a teacher, but to me, you are a hero. Wishing you a very Happy Teacher’s Day!"],
  ["Shusheela", "Teachers shape the future, and you have shaped mine beautifully. Thank you and Happy Teacher’s Day!"],
  ["Sathyavathi", "A great teacher is like a candle—it consumes itself to light the way for others. Happy Teacher’s Day!"],
  ["Radha Rani", "Your wisdom, patience, and kindness inspire me every day. Wishing you a wonderful Teacher’s Day!"],
  ["Devender Reddy", "Happy Teacher’s Day to the one who taught me lessons beyond books and gave me values for life."],
  ["Avula Yakaiah", "Behind every successful student is a devoted teacher. Thank you for being mine. Happy Teacher’s Day!"],
  ["Anuradha", "The way you make learning enjoyable is a gift I’ll always treasure. Wishing you a Happy Teacher’s Day!"],
  ["Nirmala", "A teacher like you makes learning a joy. Thank you for everything, and Happy Teacher’s Day!"],
  ["Sudha Rani", "You taught me not just with words, but with your actions and example. Happy Teacher’s Day!"],
  ["Teja Rani", "Every lesson you taught was a step towards my growth. Thank you, and Happy Teacher’s Day!"],
  ["Padmavathi", "You are the reason learning feels like an adventure. Wishing you a Happy Teacher’s Day!"],
  ["Padmaja", "Dear teacher, your encouragement and support have made all the difference. Happy Teacher’s Day!"],
  ["Vanitha", "Not all superheroes wear capes — some stand in classrooms. Happy Teacher’s Day!"],
  ["Radhika Rayapuri", "Your dedication and support have been a guiding light in my journey. Wishing you a Happy Teacher’s Day!"]
];

const quotes = [
  "👩‍🏫 Teaching is the profession that creates all other professions.",
  "🌟 A good teacher can inspire hope, ignite imagination, and instill love for learning.",
  "📚 Teachers plant seeds of knowledge that grow forever.",
  "💡 One child, one teacher, one pen, and one book can change the world."
];

const grid = document.getElementById("teacherGrid");
const mainTitle = document.getElementById("mainTitle");
const wishBtn = document.getElementById("wishBtn");

let music = new Audio("https://www.bensound.com/bensound-music/bensound-sunny.mp3");
music.loop = true;

function showTeacher() {
  let input = document.getElementById("teacherInput").value.trim().toLowerCase();
  grid.innerHTML = "";
  let found = false;
  teachers.forEach(t => {
    if (t[0].toLowerCase().includes(input)) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h2>${t[0]} 🌺</h2><p>"${t[1]}"</p>`;
      grid.appendChild(card);
      mainTitle.innerText = `🌸 Happy Teacher's Day, ${t[0]} Teacher 🌸`;
      found = true;
    }
  });
  if (!found) {
    grid.innerHTML = "<p style='text-align:center;color:#333;'>No teacher found with that name.</p>";
    mainTitle.innerText = "🌸 Happy Teacher's Day 🌸";
  }
  music.play();
  wishBtn.innerText = "Enter";
  wishBtn.disabled = true;
}

let index = 0;
function rotateQuotes() {
  document.getElementById("quoteBox").innerText = quotes[index];
  index = (index + 1) % quotes.length;
}
setInterval(rotateQuotes, 4000);
rotateQuotes();

function createConfetti() {
  for (let i = 0; i < 20; i++) {
    let c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = `hsl(${Math.random() * 360},70%,60%)`;
    c.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}
setInterval(createConfetti, 3000);