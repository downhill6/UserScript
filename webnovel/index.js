// ==UserScript==
// @name         webnovel hide comment tooltip
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       大下坡
// @match        https://www.webnovel.com/book/*
// @icon         https://www.yueimg.com/en/images/logo2x.73b79370.png
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.innerHTML = `.operate-bar {
      display: none;
    }`;
    document.body.append(style);
})();