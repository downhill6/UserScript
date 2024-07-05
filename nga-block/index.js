// ==UserScript==
// @name         nga社区屏蔽特定版面
// @namespace    https://github.com/downhill6/UserScript
// @version      0.1
// @description  try to take over the world!
// @author       大下坡
// @match        https://ngabbs.com/*
// @icon         https://ngabbs.com/favicon.ico
// @grant GM_addStyle
// ==/UserScript==

(function () {
    'use strict';
  
    const BLOCKS = ['[国际新闻]'];
    function setup() {
      const tbodys = document.querySelector('table.forumbox')?.children ?? [];
      for (const tb of tbodys) {
        const title = tb.querySelector('span.titleadd2 a');
        if (BLOCKS.includes(title?.textContent)) {
          tb.style.display = 'none';
        }
      }
    }
  
    setup();
  })();
  