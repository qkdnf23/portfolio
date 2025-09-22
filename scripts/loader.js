document.addEventListener("DOMContentLoaded", async () => {
  const sections = ["industryworks", "preindustry", "skills"];
  const main = document.getElementById("main-content");

  // 모든 섹션 로드
  for (const name of sections) {
    const res = await fetch(`sections/${name}.html`);
    const html = await res.text();
    const div = document.createElement("div");
    div.innerHTML = html;
    main.appendChild(div);
  }

  // 🎬 영상 모달 삽입
  const videoModalRes = await fetch("videoModal.html");
  const videoModalHtml = await videoModalRes.text();
  document.body.insertAdjacentHTML("beforeend", videoModalHtml);

  // 🧠 스킬 모달 삽입
  const skillModalRes = await fetch("skillModal.html");
  const skillModalHtml = await skillModalRes.text();
  document.body.insertAdjacentHTML("beforeend", skillModalHtml);
});
