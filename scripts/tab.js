// for all tab

document.getElementById("all-btn").addEventListener("click", function () {
  // spinner show
//   showLoading();


  document.getElementById("issue-container").innerHTML = "";
  this.classList.add("btn-primary");
  document.getElementById("open-btn").classList.remove("btn-primary");
  document.getElementById("closed-btn").classList.remove("btn-primary");

  displayIssues(issueData);
//   stopLoading();
});

// for open tab

document.getElementById("open-btn").addEventListener("click", function () {
  // spinner show
//   showLoading();
  document.getElementById("issue-container").innerHTML = "";

  this.classList.add("btn-primary");
  document.getElementById("all-btn").classList.remove("btn-primary");
  document.getElementById("closed-btn").classList.remove("btn-primary");

  // filtering open issues
  const openIssues = issueData.filter(issue => issue.status === "open");
  
  displayIssues(openIssues);
//   stopLoading();
});


// for closed tab

document.getElementById("closed-btn").addEventListener("click", function () {

  document.getElementById("issue-container").innerHTML = "";

  this.classList.add("btn-primary");
  document.getElementById("all-btn").classList.remove("btn-primary");
  document.getElementById("open-btn").classList.remove("btn-primary");

  // filtering closed issues
  const closedIssues = issueData.filter(issue => issue.status === "closed");
  
  displayIssues(closedIssues);
});

// document.getElementById("all-btn").click();