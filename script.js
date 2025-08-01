let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  currentPage++;
  if (document.getElementById(`page${currentPage}`)) {
    document.getElementById(`page${currentPage}`).classList.add("active");
  }
}
