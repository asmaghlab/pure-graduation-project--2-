let btnsAdd = Array.from(document.querySelectorAll(".add-course.add")); // Buttons for adding materials
let btnsDelete = Array.from(document.querySelectorAll(".add-course.delete")); // Buttons for deleting materials
let tableMaterials = document.querySelector(".assigned-materials tbody");
let tableUnMaterials = document.querySelector(".unassigned-materials tbody");
let assignedMaterial = [];

// Function to add a material to the assigned materials table
function addMaterial(material, btnIndex) {
  if (!assignedMaterial.includes(material) && assignedMaterial.length < 7) {
    assignedMaterial.push(material);
    displayMaterials(material);
    // Disable the "Add" button for the added material
    btnsAdd[btnIndex].disabled = true;
  }
}

// Function to delete a material from the assigned materials table
function deleteMaterial(material, btnIndex) {
  const index = assignedMaterial.indexOf(material);
  if (index !== -1) {
    assignedMaterial.splice(index, 1);
    tableMaterials.children[index].remove();
    // Enable the "Add" button for the deleted material
    btnsAdd[btnIndex].disabled = false;
  }
}

// Function to display a material in the assigned materials table
function displayMaterials(material) {
  let trElement = document.createElement("tr");
  let tdElement = document.createElement("td");
  tdElement.innerText = material;

  // Add buttons for deleting the material within the table row

  let btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-sm", "btn-danger", "add-course", "delete");
  btnDelete.innerText = "Delete";
  btnDelete.onclick = function () {
    deleteMaterial(material, material.split(" ")[1] - 1);
  };

  trElement.append(tdElement, btnDelete);
  tableMaterials.appendChild(trElement);
}

// Add event listeners to "Add" buttons
btnsAdd.forEach((btn) => {
  btn.onclick = function () {
    const el = btnsAdd.find((btn) => btn.getAttribute("data-material-id") === this.getAttribute("data-material-id"));
    const index = el.getAttribute("data-material-id") - 1;
    const material = tableUnMaterials.children[index].children[0].innerText;
    addMaterial(material, index);
  };
});

// Add event listeners to "Delete" buttons (if they exist)
btnsDelete.forEach((btn) => {
  btn.onclick = function () {
    const el = btnsDelete.find((btn) => btn.getAttribute("data-material-id") === this.getAttribute("data-material-id"));
    const index = el.getAttribute("data-material-id") - 1;
    const material = tableMaterials.children[index].children[0].innerText;
    deleteMaterial(material, index);
  };
});

// Check initial state of submit button based on existing assigned materials
// if (assignedMaterial.length === 0) {
//   document.querySelector(".submit-materials").disabled = true;
// }


const saveBtn = document.querySelector("#save-academic-advising");

saveBtn.addEventListener("click", function () {
  if (assignedMaterial.length === 0) {
    return alert("Please assign at least one material");
  }
  const materials = assignedMaterial.map((material) => material.split(" ")[1]);
  // save to local storage
  localStorage.setItem("assignedMaterials", JSON.stringify(materials));
  // alert user of success
  alert("Materials assigned successfully");
})

// load from local storage
const assignedMaterials = JSON.parse(localStorage.getItem("assignedMaterials"));

if (assignedMaterials) {
  assignedMaterials.forEach((material) => {
    addMaterial(`Material ${material}`, material - 1);
  })
}