document.addEventListener("DOMContentLoaded", function () {
  const editAction = document.getElementById("editAction");
  const editIcon = document.getElementById("editIcon");
  const editText = document.getElementById("editText");
  const rightSection = document.getElementById("rightSection");
  const profileImage = document.getElementById("profileImage");
  const userImageInput = document.getElementById("UserImage");

  const inputs = document.querySelectorAll(".input-box input");

  let isEditMode = false;

  editAction.addEventListener("click", function () {
    if (isEditMode) {
      isEditMode = false;
      editIcon.classList.remove("fa-check");
      editIcon.classList.add("fa-edit");
      editText.textContent = "Edit";
      inputs.forEach((input) => {
        input.readOnly = true;
      });
    } else {
      isEditMode = true;
      editIcon.classList.remove("fa-edit");
      editIcon.classList.add("fa-check");
      editText.textContent = "Save";
      inputs.forEach((input) => {
        input.readOnly = false;
      });
    }
  });

  userImageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      profileImage.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
});
