// ==UserScript==
// @name GeoFS Ejection addon
// @namespace http://tampermonkey.net/
// @version 1
// @description An addon for GeoFS that ejects player and switches to paraglider
// @author KireinaR (Wen/Syn)
// @match http:///geofs.php
// @match https:///geofs.php
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
      await sleep(3000);
      geofs.aircraft.instance.change(50);
    }
  });
})();