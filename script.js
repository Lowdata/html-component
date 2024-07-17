document.addEventListener("DOMContentLoaded", function () {
  const allPagesCheckbox = document.getElementById("allPages");
  const pageCheckboxes = document.querySelectorAll(".pageCheckbox");
  const doneButton = document.getElementById("doneButton");

  allPagesCheckbox.addEventListener("change", function () {
    pageCheckboxes.forEach((checkbox) => {
      checkbox.checked = allPagesCheckbox.checked;
    });
  });

  pageCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (!checkbox.checked) {
        allPagesCheckbox.checked = false;
      } else if (Array.from(pageCheckboxes).every((cb) => cb.checked)) {
        allPagesCheckbox.checked = true;
      }
    });
  });
  doneButton.addEventListener("click", function () {
    alert("Done");
  });
});
