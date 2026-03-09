// function to show modal

async function issueModal(id) {
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`,
  );
  const json = await res.json();
  const issue = json.data;

  const modalContainer = document.getElementById("modal-container");
  const modal = document.getElementById("modal-issue");

  modalContainer.innerHTML = `
        <div class="p-6 space-y-3">
                <h3 class="font-bold text-2xl text-[#1F2937]">${issue.title}</h3>
                <div class="flex items-center gap-2">
                    <button class="px-4 py-2 text-white rounded-full ${issue.status === "open" ? "bg-[#00A96E]" : "bg-[#A855F7]"}">${issue.status === "open" ? "Opened" : "Closed"}</button>
                    <span class="text-[#64748B]"> • </span>
                    <p class="text-xs text-[#64748B]">Opened by ${issue.author}</p>
                    <span class="text-[#64748B]"> • </span>
                    <p class="text-xs text-[#64748B]">${new Date(issue.createdAt).toLocaleDateString()}</p>
                </div>
                <div class="flex gap-1 items-center whitespace-nowrap">
                    ${labels(issue.labels)}
                </div>
                <p class="text-[#64748B]">${issue.description}</p>
                <div class="bg-[#F8FAFC] rounded-lg p-4 flex justify-between shadow-sm">
                    <div>
                        <p class="text-[#64748B]">Assignee:</p>
                        <h3 class="text-[#1F2937] font-semibold">${issue.assignee === "" ? "Unknown" : issue.assignee}</h3>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-[#64748B]">Priority:</p>
                        <h3 class="rounded-full w-fit px-4 py-2 text-white 
                        ${
                          issue.priority === "high"
                            ? "bg-[#EF4444]"
                            : issue.priority === "medium"
                              ? "bg-[#F59E0B]"
                              : "bg-[#9CA3AF]"
                        }">
                            ${
                              issue.priority === "high"
                                ? "HIGH"
                                : issue.priority === "medium"
                                  ? "MEDIUM"
                                  : "LOW"
                            }</h3>
                    </div>
                </div>
            </div>
    `;

  modal.showModal();
}
