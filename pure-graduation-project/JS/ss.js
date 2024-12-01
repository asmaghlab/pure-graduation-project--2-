// header
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const container = document.getElementById("card-container");
const options = [
  { icon: "fas fa-user", value: "Student", label: "Student" },
  { icon: "fas fa-user-tie", value: "Staff", label: "Staff" },
  { icon: "fa-solid fa-user-gear", value: "Parent", label: "Parent" },
];

function redirectToLogin(userType) {
  // Redirect based on user type, potentially adding query parameters
  // for specific login pages or logic differentiation.
  let loginUrl;
  switch (userType) {
    case "Student":
      loginUrl = "./student_form.html";
      break;
    case "Staff":
      loginUrl = "./staff_form.html";
      break;
    case "Parent":
      loginUrl = "./parent form.html";
      break;
    default:
      // Handle unexpected user type or invalid input
      console.error("Invalid user type:", userType);
      break;
  }
  window.location.href = loginUrl;
}

options.forEach((ele) => {
  const link = document.createElement("a");
  link.href = "#"; // Prevent default anchor (#) link behavior
  link.className = "box";

  const icon = document.createElement("i");
  icon.className = ele.icon;

  const heading = document.createElement("h1");
  heading.textContent = ele.value;

  link.appendChild(icon);
  link.appendChild(heading);
  container.appendChild(link);

  // Add event listener to handle click and redirect based on user type
  link.addEventListener("click", () => redirectToLogin(ele.value));
});
