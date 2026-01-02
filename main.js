const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const btn = document.getElementById("copyEmailBtn");
if (btn) {
  btn.addEventListener("click", async () => {
    const email = btn.dataset.email || "";
    if (!email) return;

    const oldText = btn.textContent;
    try {
      await navigator.clipboard.writeText(email);
      btn.textContent = "已复制 ✅";
      btn.classList.add("primary");
      setTimeout(() => {
        btn.textContent = oldText;
        btn.classList.remove("primary");
      }, 1200);
    } catch (e) {
      // 兼容：某些环境 clipboard 可能不可用
      prompt("复制这个邮箱：", email);
    }
  });
}
