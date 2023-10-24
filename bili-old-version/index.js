// ==UserScript==
// @name         bilibili 网页旧版本
// @namespace    https://github.com/downhill6/UserScript
// @version      0.1
// @description  try to take over the world!
// @author       大下坡
// @match        https://www.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico?v=1
// @grant GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  function setup() {
    window.addEventListener('load', () => {
      // 删除 cookie
      document.cookie = "buvid3=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=.bilibili.com";
      document.cookie = "buvid4=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=.bilibili.com";
    });
  }

  setup();
})();
