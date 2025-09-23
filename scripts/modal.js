function playVideo(card) {
  const videoEl = card.querySelector("video");
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");

  if (!videoEl) return;

  modalVideo.src = videoEl.src;
  modal.style.display = "flex";
  modalVideo.play();
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");

  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideo.src = "";
}

function openSkillModal(card) {
  const skillName = card.dataset.skill;
  const modal = document.getElementById("skillModal");
  const frame = document.getElementById("skillFrame");

  // 예: 기술 이름에 따라 skill_detail.html 내부에서 anchor 처리할 수도 있음
  frame.src = `sections/skill_detail.html#${encodeURIComponent(skillName)}`;
  modal.style.display = "flex";
}

function closeSkillModal() {
  const modal = document.getElementById("skillModal");
  const frame = document.getElementById("skillFrame");

  modal.style.display = "none";
  frame.src = "";
}


window.onclick = function (event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeModal();
  }
};

