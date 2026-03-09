let issueData = [];

// load issues
async function loadIssue() {
  showLoading();
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  
  const json = await res.json();
  stopLoading();
  //   console.log(json.data);
  issueData = json.data;
  document.getElementById("all-btn").click();
  displayIssues(issueData);
  
}

const displayIssues = (issues) => {
  const issueContainer = document.getElementById("issue-container");

  // issueContainer.innerHTML = "";

  issues.forEach((issue) => {
    const issueCard = document.createElement("div");

    issueCard.className = `flex flex-col gap-3 shadow-sm rounded-lg border-t-4 ${issue.status === 'open' 
      ? "border-t-[rgb(99,230,190)]" 
      : "border-t-[rgb(177,151,252)]"}`;

    issueCard.innerHTML = `
        <div>
            <div class="flex flex-col p-4 gap-3 shadow-sm">
              <div class="flex justify-between">
                ${issue.status === "open"
                    ?`<img src="./assets/Open-Status.png" alt=""/>`
                    :`<img src="./assets/Closed- Status .png" alt="">`
                }
                <div class="badge badge-soft badge-warning ${issue.priority === "high" ? "bg-[#FEECEC] text-[#EF4444]" : issue.priority === "medium" ? "bg-[#FFF6D1] text-[#F59E0B]" : "bg-[#EEEFF2] text-[#9CA3AF]"}">${
                  issue.priority === "high"
                  ? "HIGH"
                  : issue.priority === "medium"
                  ? "MEDIUM"
                  : "LOW"
                }</div>
              </div>
              <div class="">
                <h2 class="text-[14px] text-[#1F2937] font-semibold mb-2">
                  ${issue.title}
                </h2>
                <p class="text-[12px] text-[#64748B] mb-3">
                  ${issue.description}
                </p>
                <div class="">
                  ${labels(issue.labels)}
                </div>
              </div>
            </div>
            <div class="flex gap-2 flex-col p-4">
              <p class="text-[12px] text-[#64748B]">#${issue.id} ${issue.author}</p>
              <p class="text-[12px] text-[#64748B]">${new Date(issue.updatedAt).toLocaleDateString()}</p>
            </div>
        </div>
          `;

    issueContainer.append(issueCard);
  });
};

// label badge create function

const labels = (items) => {
  const label = items.map(item =>
    `<div class="badge badge-soft badge-warning">${item.toUpperCase()}</div>`
  );

  return label.join(" ");
}



loadIssue();
