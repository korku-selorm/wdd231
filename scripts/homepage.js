document.addEventListener("DOMContentLoaded", () => {

  // Current Year
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Last Modified
  document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

  // Hamburger Menu Toggle
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    toggle.textContent = toggle.textContent === "☰" ? "X" : "☰";
    nav.classList.toggle("show");
  });

  // Course Data
const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: false },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: false },
  { code: "WDD 231", name: "Web Frontend Development I", credits: 3, completed: false },
  { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: false },
  { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: false },
  { code: "CSE 210", name: "Programming with Classes", credits: 2, completed: false },
  { code: "WDD 331R", name: "Advanced CSS", credits: 2, completed: false }
];

const coursesGrid = document.getElementById("courses-grid");
const creditsValue = document.getElementById("credits-value");

function displayCourses(list) {
  coursesGrid.innerHTML = "";

  list.forEach(course => {
    const card = document.createElement("div");
    card.className = `course-card ${course.completed ? "completed" : ""}`;
    card.textContent = course.code;
    coursesGrid.appendChild(card);
  });

  const total = list.reduce((sum, c) => sum + c.credits, 0);
  creditsValue.textContent = total;
}

displayCourses(courses);

document.querySelectorAll(".filter-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-buttons button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    let filtered = courses;

    if (filter === "WDD") filtered = courses.filter(c => c.code.startsWith("WDD"));
    else if (filter === "CSE") filtered = courses.filter(c => c.code.startsWith("CSE"));

    displayCourses(filtered);
  });
});


  // Filter Buttons
  document.querySelectorAll(".filter-buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-buttons button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      let filtered = courses;

      if (filter === "WDD") filtered = courses.filter(c => c.code.startsWith("WDD"));
      else if (filter === "CSE") filtered = courses.filter(c => c.code.startsWith("CSE"));

      displayCourses(filtered);
    });
  });

});