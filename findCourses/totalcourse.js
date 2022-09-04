const searchBox = document.querySelector(".searchInput");
const coursesName = document.querySelectorAll(".courseTitle");
const searchBtn = document.querySelector(".btn");
searchBtn.addEventListener("click", () => {
  alert(searchBox.value);
  for (let i = 0; i < coursesName.length; i++) {
    if (
      coursesName[i].textContent.toLocaleLowerCase() ===
      searchBox.value.toLocaleLowerCase()
    ) {
      console.log(coursesName[i].parentNode);
      coursesName[i].parentNode.style.display = "block";
    } else {
      coursesName[i].parentNode.style.display = "none";
    }
  }
});
