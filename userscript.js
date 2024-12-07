// ==UserScript==
// @name GeoFS Ejection addon
// @namespace http://tampermonkey.net/
// @version 1
// @description An addon for GeoFS that ejects player and switches to paraglider
// @author KireinaR (Wen/Syn)
// @match https://geo-fs.com/geofs.php*
// @match https://*.geo-fs.com/geofs.php*
// @run-at document-end
// @grant none
// ==/UserScript==

(function () {
  "use strict";

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  document.addEventListener("keydown", async (event) => {
    if (event.key === "`") {
      geofs.aircraft.instance.stopEngine();
      await sleep(6000);
      geofs.aircraft.instance.change(50);
    }
  });

  function sonicBoom() {
    if (
      geofs.animation.values.kias >= 667 &&
      geofs.animation.values.kias <= 668
    ) {
      audio.impl.html5.playFile(
        "https://github.com/KireinaR/GeoFS-Ejector/raw/refs/heads/main/sonicboom.mp3"
      );
    }
  }
  let sonicBoomInt = setInterval(function () {
    sonicBoom();
  }, 40);
})();
