// ==UserScript==
// @name         bilibili 播放器添加额外倍速选项
// @namespace    https://github.com/downhill6/UserScript
// @version      0.1
// @description  try to take over the world!
// @author       大下坡
// @match        https://www.bilibili.com/video/*
// @icon         https://www.bilibili.com/favicon.ico?v=1
// @grant GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  function setup() {
    const ul = document.querySelector('.bpx-player-ctrl-playbackrate-menu');
    if (ul === null) {
      setTimeout(() => {
        setup();
      }, 500);
      return;
    }

    [2.5,3,4].forEach((value) => {
      const firstLi = ul.querySelector('li');
      const li = firstLi.cloneNode(true);
      li.dataset.value = value;
      li.innerText = `${value.toFixed(1)}x`;
      ul.insertBefore(li, firstLi);
    });
  }

  setup();
})();
