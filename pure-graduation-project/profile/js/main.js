let btns = Array.from(document.querySelectorAll(".add-course"));
let tableMaterials = document.querySelector(".assigned-materials tbody");
let tableUnMaterials = document.querySelector(".unassigned-materials tbody");
let index = 0;

let assignedMaterial= []

btns.forEach((btn) => {
  btn.onclick = function () {
    index = btns.indexOf(btn);
    let material = tableUnMaterials.children[index].children[0].innerText;
    if(!assignedMaterial.includes(material)){
        assignedMaterial.push(material)
        displayMaterials(material);
    }
    if(assignedMaterial.length == 6){
        document.querySelector(".submit-materials").disabled = false
    }
  };
});


function displayMaterials(material){
    let trElement = document.createElement("tr");
    let tdElement = document.createElement("td");
    tdElement.innerText = material;
    trElement.append(tdElement);
    tableMaterials.appendChild(trElement);
}
