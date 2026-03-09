// spinner

function showLoading() {
  const spinnerContainer = document.getElementById("loading-spin");
  const issueContainer = document.getElementById("issue-container");
  issueContainer.classList.remove("grid");
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
  issueContainer.classList.add("grid");
}
// showLoading();
// stopLoading();
