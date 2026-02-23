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
}
