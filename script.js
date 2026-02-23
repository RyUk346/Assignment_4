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
