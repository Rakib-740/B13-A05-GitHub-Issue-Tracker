async function searchSomething(searchText) {
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`,
  );
  const json = await res.json();

  const searchIssues = json.data;

  document.getElementById("all-btn").classList.remove("btn-primary");
  document.getElementById("open-btn").classList.remove("btn-primary");
  document.getElementById("closed-btn").classList.remove("btn-primary");
  document.getElementById("issue-container").innerHTML = "";

  displayIssues(searchIssues);
}

document.getElementById("search-btn").addEventListener("click", function () {
  const searchValue = document
    .getElementById("search-value")
    .value.trim()
    .toLowerCase();

  if (searchValue === "") {
    alert("type something first");
    return;
  } else {
    searchSomething(searchValue);
    document.getElementById("search-value").value = "";
  }
});
