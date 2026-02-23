let currentStatus = "all";
const total = document.getElementById("total");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const availableJobs = document.getElementById("availableJobs");

const allTab = document.getElementById("allTab");
const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");

const allCardSection = document.getElementById("allCards");

function calculateCount() {
  const allCardSection = document.querySelectorAll(".card");
  total.innerText = allCardSection.length;
  availableJobs.innerText = allCardSection.length;
  interviewCount.innerText = document.querySelectorAll(
    '[data-status ="interview"]',
  ).length;
  rejectedCount.innerText = document.querySelectorAll(
    '[data-status="rejected"]',
  ).length;
  //   total.innerText = allCardSection.children.length;
  //   availableJobs.innerText = allCardSection.children.length;
}
calculateCount();
function toggleStyle(id) {
  allTab.className =
    "bg-[#FFFFFF] border border-[#F1F2F4] px-3 py-2 text-[#64748B] font-semibold text-[12px] w-20 rounded-sm cursor-pointer";
  interviewTab.className =
    "bg-[#FFFFFF] border border-[#F1F2F4] px-3 py-2 text-[#64748B] font-semibold text-[12px] w-20 rounded-sm cursor-pointer";
  rejectedTab.className =
    "bg-[#FFFFFF] border border-[#F1F2F4] px-3 py-2 text-[#64748B] font-semibold text-[12px] w-20 rounded-sm cursor-pointer";

  const selected = document.getElementById(id);
  selected.className =
    "bg-[#3B82F6] px-3 py-2 text-white font-semibold text-[12px] w-20 rounded-sm cursor-pointer";

  if (id === "allTab") currentStatus = "all";
  if (id === "interviewTab") currentStatus = "interview";
  if (id === "rejectedTab") currentStatus = "rejected";

  applyFilter();
}
function applyFilter() {
  const cards = document.querySelectorAll(".card");
  let visibleCount = 0;

  cards.forEach((card) => {
    if (currentStatus === "all") {
      card.style.display = "block";
      visibleCount++;
    } else if (card.getAttribute("data-status") === currentStatus) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  showEmptyState(visibleCount);
  calculateCount();
}

function showEmptyState(count) {
  document.querySelector(".empty-state")?.remove();

  if (count === 0) {
    const emptyDiv = document.createElement("div");
    emptyDiv.className =
      "empty-state text-center py-16 bg-white border border-[#F1F2F4] rounded-2 space-y-5";
    emptyDiv.innerHTML = `
            <img src="jobs.png" class="w-24 mx-auto mb-4 opacity-60" />
      <div class="space-y-1">
        <h1 class="text-[#002C5C] text-2xl font-semibold">No jobs available</h1>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
      </div>
        `;
    allCardSection.appendChild(emptyDiv);
  }
}

document.querySelector("main").addEventListener("click", function (event) {
  const card = event.target.closest(".card");
  if (!card) return;

  // intervieBtn
  if (event.target.classList.contains("interviewBtn")) {
    card.setAttribute("data-status", "interview");
    card.querySelector(".status").innerText = "INTERVIEW";
    card.querySelector(".status").className =
      "status bg-[#DCFCE7] text-[#16A34A] px-3 py-2 font-medium text-[14px]";
    calculateCount();
    applyFilter();
  }

  // rejectBtn
  if (event.target.classList.contains("rejectedBtn")) {
    card.setAttribute("data-status", "rejected");
    card.querySelector(".status").innerText = "REJECTED";
    card.querySelector(".status").className =
      "status bg-[#FEE2E2] text-[#DC2626] px-3 py-2 font-medium text-[14px]";
    calculateCount();
    applyFilter();
  }
});
