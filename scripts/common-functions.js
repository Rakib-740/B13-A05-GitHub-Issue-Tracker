// spinner

function showLoading() {
  const spinnerContainer = document.getElementById("loading-spin");
  const issueContainer = document.getElementById("issue-container");
  issueContainer.classList.remove("sm:grid-cols-4");
  //   console.log(spinnerContainer);

  spinnerContainer.classList.remove("hidden");
  spinnerContainer.classList.add("flex");
}

function stopLoading() {
  const spinnerContainer = document.getElementById("loading-spin");
  const issueContainer = document.getElementById("issue-container");

  //   console.log(spinnerContainer);
  spinnerContainer.classList.remove("flex");
  spinnerContainer.classList.add("hidden");
  issueContainer.classList.add("sm:grid-cols-4");
}
// showLoading();
// stopLoading();
