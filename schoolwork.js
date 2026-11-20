(function () {
  const TARGET_URL = "https://truffled.lol";

  function mountFrame() {
    if (!document.body) return;

    document.title = "Math Study Portal";
    document.documentElement.style.height = "100%";
    document.body.style.cssText =
      "margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#000;";

    document.body.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = TARGET_URL;
    iframe.title = "Study Frame";
    iframe.style.cssText =
      "width:100%;height:100%;border:0;display:block;";
    iframe.allowFullscreen = true;

    document.body.appendChild(iframe);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountFrame);
  } else {
    mountFrame();
  }
})();
