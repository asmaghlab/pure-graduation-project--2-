// header
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// type login
const container = document.getElementById("card-container");
const options = [
  { icon: "fas fa-user", value: "Student", label: "Student" },
  { icon: "fas fa-user-tie", value: "Staff", label: "Staff" },
  { icon: "fa-solid fa-user-gear", value: "Parent", label: "Student" },
];

options.forEach((ele) => {
  const link = document.createElement("a");
  link.href = "./Login.html";
  link.className = "box";
  link.onclick = () => SetType(ele);

  const icon = document.createElement("i");
  icon.className = ele.icon;

  const heading = document.createElement("h1");
  heading.textContent = ele.value;

  link.appendChild(icon);
  link.appendChild(heading);
  container.appendChild(link);
});
