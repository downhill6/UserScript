// ==UserScript==
// @name         去除京东读书对于文字选取限制
// @namespace    https://github.com/downhill6/UserScript
// @version      0.1
// @description  try to take over the world!
// @author       大下坡
// @match        https://e.m.jd.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  const style = document.createElement('style');
  style.innerHTML = `body {
    user-select: unset!important;
  }`;
  document.body.append(style);
})();
