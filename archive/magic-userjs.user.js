// ==UserScript==
// @name         Magic Userscript+ (sharmanhall) : Show Site All UserJS
// @description  Show current site all UserJS, the easier way to install UserJs for Tampermonkey.
// @author       Sharmanhall <tyler@tylerhalltech.com>
// @namespace    https://github.com/TylerHallTech/Userscript-Plus
// @homepageURL  https://github.com/TylerHallTech/Userscript-Plus
// @downloadURL  https://cdn.jsdelivr.net/gh/TylerHallTech/Userscript-Plus@master/archive/magic-userjs.user.js
// @updateURL    https://cdn.jsdelivr.net/gh/TylerHallTech/Userscript-Plus@master/archive/magic-userjs.user.js
// @supportURL   https://github.com/TylerHallTech/Userscript-Plus/issues/new
// @version      2.4.17
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA5NiA5NiI+CjwhLS0gV3JpdHRlbiBmcm9tIHNjcmF0Y2gsIGJhc2VkIG9uIGh0dHBzOi8vZ3JlYXN5Zm9yay5vcmcvYXNzZXRzL2JsYWNrbG9nbzk2LTk0MWE2MzNjOTcxYjI1YzBjOWU5ODJlZDQ5OWI1ZDhjLnBuZyAtLT4KPGNpcmNsZSBmaWxsPSIjMDAwIiByPSI0OCIgY3k9IjQ4IiBjeD0iNDgiLz4KPGNsaXBQYXRoIGlkPSJHcmVhc3lGb3JrQ2lyY2xlQ2xpcCIgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJPGNpcmNsZSBmaWxsPSIjMDAwIiByPSI0NyIgY3k9IjQ4IiBjeD0iNDgiLz4KPC9jbGlwUGF0aD4KPHRleHQgZmlsbD0iI2ZmZiIgY2xpcC1wYXRoPSJ1cmwoI0dyZWFzeUZvcmtDaXJjbGVDbGlwKSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOCIgZm9udC1mYW1pbHk9IidEZWphVnUgU2FucycsIFZlcmRhbmEsIEFyaWFsLCAnTGliZXJhdGlvbiBTYW5zJywgc2Fucy1zZXJpZiIgbGV0dGVyLXNwYWNpbmc9Ii0wLjc1IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgc3R5bGU9Ii1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgdXNlci1zZWxlY3Q6IG5vbmU7Ij4KCTx0c3BhbiB4PSI1MSIgeT0iMTMiIHRleHRMZW5ndGg9IjU3Ij49IG51bGw7PC90c3Bhbj4KCTx0c3BhbiB4PSI1NiIgeT0iMzUiIHRleHRMZW5ndGg9Ijk4Ij5mdW5jdGlvbiBpbml0PC90c3Bhbj4KCTx0c3BhbiB4PSI0OSIgeT0iNTciIHRleHRMZW5ndGg9IjExMyI+Zm9yICh2YXIgaSA9IDA7PC90c3Bhbj4KCTx0c3BhbiB4PSI1MCIgeT0iNzkiIHRleHRMZW5ndGg9IjEwNSI+WG1sSHR0cFJlcTwvdHNwYW4+Cgk8dHNwYW4geD0iNDgiIHk9IjEwMSIgdGV4dExlbmd0aD0iODAiPmFwcGVuZENoPC90c3Bhbj4KPC90ZXh0Pgo8cGF0aCBmaWxsPSIjMDAwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iNCIKCWQ9Ik0gNDQsMjkKCWE2LjM2Mzk2LDYuMzYzOTYgMCwwLDEgMCw5CglsMzYsMzYKCWEzLjI1LDMuMjUgMCwwLDEgLTYuNSw2LjUKCWwtMzYsLTM2CglhNi4zNjM5Niw2LjM2Mzk2IDAsMCwxIC05LDAKCWwtMTksLTE5CglhMS43Njc3NywxLjc2Nzc3IDAsMCwxIDAsLTIuNQoJbDEzLjAsLTEzCglhMS43Njc3NywxLjc2Nzc3IDAsMCwxIDIuNSwwCgl6Ii8+CjxwYXRoIGZpbGw9IiNmZmYiCglkPSJNIDQ0LDI5CglhNi4zNjM5Niw2LjM2Mzk2IDAsMCwxIDAsOQoJbDM2LDM2CglhMy4yNSwzLjI1IDAsMCwxIC02LjUsNi41CglsLTM2LC0zNgoJYTYuMzYzOTYsNi4zNjM5NiAwLDAsMSAtOSwwCglsLTE5LC0xOQoJYTEuNzY3NzcsMS43Njc3NyAwLDAsMSAyLjUsLTIuNQoJbDE0LDE0IDQsLTQgLTE0LC0xNAoJYTEuNzY3NzcsMS43Njc3NyAwLDAsMSAyLjUsLTIuNQoJbDE0LDE0IDQsLTQgLTE0LC0xNAoJYTEuNzY3NzcsMS43Njc3NyAwLDAsMSAyLjUsLTIuNQoJeiIvPgo8L3N2Zz4K
// @license      MIT
// @include      *
// @exclude      *://paypal.com/*
// @exclude      *://mega.nz
// @exclude      *://*.alipay.com/*
// @exclude      *://*bank.*/*
// @exclude      *://*perfectmoney.*/*
// @exclude      *://*stripe.com/*
// @exclude      *://*ica.yandex.com/*
// @exclude      *://*authorize.net/*
// @exclude      *://*2checkout.com/*
// @exclude      *://192.168*
// @exclude      *://127.0.0*
// @exclude      *://router.*.*/*
// @exclude      *://gitlab.com/*
// @exclude      *://10.0.0*
// @exclude      *://*skrill.com/*
// @exclude      *://*zalo.me/*
// @exclude      *://pay.amazon.*/*
// @exclude      *://*.opayo.co.uk/*
// @exclude      *://*.payza.org/*
// @exclude      *://*.bluesnap.com/*
// @exclude      *://securionpay.com/*
// @exclude      *://*.unionpayintl.*/*
// @exclude      *://*.99bill.com/*
// @exclude      *://*.yeepay.com/*
// @exclude      *://*payoneer.com/*
// @exclude      *://*myetherwallet.com/*
// @exclude      *://bitpay.com/*
// @exclude      *://*.*/login
// @exclude      *://*.*/join
// @exclude      *://*.*/signin
// @exclude      *://*.*/signup
// @exclude      *://*.*/sign-up
// @exclude      *://*.*/cart
// @exclude      *://*.*.gov/*
// @exclude      *://*.*/password_reset
// @exclude      *://*.*/checkout*
// @exclude      *://*.*/settings/*
// @exclude      *://*.*/options/*
// @exclude      *://*.*.*/login
// @exclude      *://*.*.*/join
// @exclude      *://*.*.*/signin
// @exclude      *://*.*.*/signup
// @exclude      *://*.*.*/sign-up
// @exclude      *://*.*.*/cart
// @exclude      *://*.*.*/checkout*
// @exclude      *://*.*.*/settings/*
// @exclude      *://*.*.*/options/*
// @exclude      *://*.*.*.gov/*
// @exclude      *://*.*.*/password_reset
// @require      https://update.greasyfork.org/scripts/23419/634829/ljs.js
// @resource     uiJs   https://cdn.jsdelivr.net/gh/TylerHallTech/Userscript-Plus@master/archive/ui.js
// @resource     count  https://greasyfork.org/scripts/by-site.json
// @resource     adult  https://sleazyfork.org/scripts/by-site.json
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @noframes
// @connect      greasyfork.org
// @connect      sleazyfork.org
// @connect      cdn.jsdelivr.net
// @run-at       document-end
// ==/UserScript==
// https://greasyfork.org/scripts/23419-l-js/code/ljs.js
// // @require      https://cdn.jsdelivr.net/gh/TylerHallTech/Userscript-Plus@master/archive/ljs.js
/**
 * Enable built-in "Greasyfork Search with Sleazyfork Results include"
 * 启用内置"使用 Sleazyfork 搜索"结果包括"
 * 組み込みの「スライジーフォークの結果を含む脂っこく検索」を有効にする
 * Включить встроенный "Greasyfork Поиск с Sleazyfork Результаты включают"
 * https://greasyfork.org/scripts/23840
 */
 const sleazyfork_redirect = true, // 'true' to enable, 'false' to disable
 custom_width = '90vw', // Default UserJS width: 90vw | Original UserJS width: 860px
 /**
 * Injected stylesheet
 * https://github.com/TylerHallTech/Userscript-Plus/tree/master/src/sass
 */
 boxCSS = `*:not(select) {
    scrollbar-color: #fff #2e323d;
    scrollbar-width: thin
}

::-webkit-scrollbar {
    max-width: 8px !important;
    max-height: 8px !important
}

::-webkit-scrollbar-thumb {
    background: #fff
}

::-webkit-scrollbar-track {
    background-color: #2e323d
}

body.userjs-popup {
    color: #fff !important;
    background-color: #2e323d !important;
    width: 800px !important;
    height: 550px;
    top: 0px;
    left: 0px
}

body.userjs-popup #app {
    position: fixed;
    width: inherit;
    display: grid;
    grid-template-rows: repeat(4, 1fr)
}

body.userjs-popup #app .ivu-card {
    width: 100%;
    height: 100%;
    padding: 0px
}

body.userjs-popup #app .ivu-card-extra {
    top: 8px !important
}

/*body.userjs-popup #app .ivu-card-head {
    border-bottom: 1px solid #fff !important;
    padding: 2.5% 16px !important
}*/

body.userjs-popup #app .ivu-badge {
    padding: 0px 5px
}

body.userjs-popup #app .ivu-tooltip {
    border-color: #fff !important;
    border-radius: 4px !important;
    background-color: #fff !important
}

body.userjs-popup #app .ivu-btn-icon-only,
body.userjs-popup #app .ivu-modal-body,
body.userjs-popup #app .ivu-table {
    color: #fff !important;
    background-color: #2e323d !important
}

body.userjs-popup #app .ivu-btn-icon-only td,
body.userjs-popup #app .ivu-btn-icon-only th,
body.userjs-popup #app .ivu-modal-body td,
body.userjs-popup #app .ivu-modal-body th,
body.userjs-popup #app .ivu-table td,
body.userjs-popup #app .ivu-table th {
    color: #fff !important;
    background-color: #2e323d !important
}

body.userjs-popup #app .ivu-btn-icon-only-body,
body.userjs-popup #app .ivu-modal-body-body,
body.userjs-popup #app .ivu-table-body {
    overflow-x: hidden
}

body.userjs-popup #app .ivu-btn-icon-only-row-highlight,
body.userjs-popup #app .ivu-btn-icon-only-row-hover,
body.userjs-popup #app .ivu-modal-body-row-highlight,
body.userjs-popup #app .ivu-modal-body-row-hover,
body.userjs-popup #app .ivu-table-row-highlight,
body.userjs-popup #app .ivu-table-row-hover {
    color: #9cc3e7 !important
}

body.userjs-popup #app .card-title {
    color: #fff !important;
    cursor: pointer
}

body.userjs-popup #app .table-footer {
    position: fixed;
    bottom: 0;
    padding-left: 10px;
    width: 100%;
    background-color: #fff
}

body.userjs-popup #app .table-footer a {
    color: #ed3f14
}

body.userjs-popup #app .circle {
    width: 56px;
    height: 56px;
    line-height: 56px;
    border-radius: 28px;
    float: right;
    right: 40px
}

body.userjs-popup #app .badge {
    top: -17px;
    left: -6%;
    width: 26px;
    height: 26px;
    line-height: 26px;
    border-radius: 13px
}

@media screen and (max-width: 1228px) {
    .jae-userscript {
        max-width: 100%;
        width: 100%;
        height: 100%
    }
}

.jae-userscript {
    position: fixed;
    width: 370px;
    bottom: 10px;
    right: 20px;
    z-index: 9999999999;
    height: 56px;
    background: rgba(0, 0, 0, 0);
}

.jae-userscript iframe {
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 15px;
    display: block !important;
    background: transparent;
}

.jae-userscript span {
    background-color: #2e323d;
    color: #fff;
    width: fit-content;
    display: block;
    padding: 1rem;
    border-radius: 15px;
    right: 10px;
    position: fixed
}

.jae-userscript-shadow {
    box-shadow: 0 1px 4px rgba(0, 0, 0, .3)
}

.jae-userscript-shadow:after,
.jae-userscript-shadow:before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 15px;
    left: 10px;
    width: 50%;
    height: 20%;
    box-shadow: 0 15px 10px rgba(0, 0, 0, .7)
}

.jae-userscript-shadow:after {
    right: 10px;
    left: auto;
    transform: rotate(3deg)
}

.jae-userscript-shadow:before {
    transform: rotate(-3deg)
}

@media(prefers-color-scheme: dark) {
    body.userjs-options :root {
        background-color: #202023;
        color: #e8eaed
    }

    body.userjs-options section:not(:first-child) {
        border-top: 1px solid #4c4c4e
    }
}

body.userjs-options form {
    font-size: 1.25em
}

body.userjs-options section:not(:first-child) {
    border-top: 1px solid #4c4c4e
}

body.userjs-options section.checkbox>label,
body.userjs-options section.checkboxlist>label,
body.userjs-options section.select {
    display: flex;
    justify-content: space-between;
    padding: .825em
}

body.userjs-options section.checkbox>label,
body.userjs-options section.checkboxlist>label {
    cursor: pointer
}

body.userjs-options section.checkboxlist {
    padding-left: .825em;
    padding-bottom: .5em
}

body.userjs-options section.checkboxlist>label {
    padding-top: .5em;
    padding-bottom: .5em
}

body.userjs-options section.checkboxlist p {
    margin-bottom: .5em
}

body.userjs-options .switch {
    position: relative;
    width: 38px;
    user-select: none
}

body.userjs-options .switch input {
    display: none
}

body.userjs-options .switch input:checked+label {
    background-color: #5a6f93;
    margin-left: 0
}

body.userjs-options .switch input:checked+label:before {
    right: 0px;
    background-color: #8ab4f8
}

body.userjs-options .switch label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 16px;
    padding: 0;
    line-height: 16px;
    border: 0px solid #fff;
    border-radius: 20px;
    background-color: #9aa0a6
}

body.userjs-options .switch label:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin: -2px;
    background: #dadce0;
    position: absolute;
    top: 0;
    right: 20px;
    border-radius: 20px
}






/* Move the close button to the left and add some margin */
.ivu-card-head .ivu-tooltip-rel {
    position: relative;
    left: -10px; /* Adjust this value as needed */
    margin-right: 5px; /* Adjust this value as needed */
}

/* Ensure that the card-title doesn't overlap with the close button */
.ivu-card-head .card-title {
    display: flex;
    align-items: center;
}

/* Optionally, you can adjust the vertical alignment of the close button */
.ivu-card-head .ivu-tooltip-rel button {
    vertical-align: middle; /* Adjust this value as needed */
}


@media screen and (max-width: 1228px)
#app{
  width:100% !important;
}
`,

 err = (...error) => {
    console.error('[%cUserJS%c] %cERROR', 'color: rgb(29, 155, 240);', '', 'color: rgb(249, 24, 128);', ...error);
  };

 if(typeof unsafeWindow === 'undefined') {
   err('[%cUserJS%c] %cERROR', 'color: rgb(29, 155, 240);', '', 'color: rgb(249, 24, 128);', "Unsupported: unsafeWindow");
 } else {
  unsafeWindow.GmAjax = GM_xmlhttpRequest;
 };
(() => {
	ljs.addAliases({
		jQuery:'https://cdn.jsdelivr.net/gh/jquery/jquery@3.6.1/dist/jquery.slim.min.js'
	});
  const win = self ?? window,
  doc = win.document,
  qs = (element, selector) => {
    selector = selector ?? doc ?? doc.body;
    return selector.querySelector(element);
  },
  delay = ms => new Promise(resolve => setTimeout(resolve, ms)),
  iframe = {
    write: () => {
      const root = qs('#jae_userscript_box > .jae-userscript',doc.body),
      dom = root.children[0],
      domDoc = `<!DOCTYPE html><html>
      <head>
      <meta charset="utf-8">
      <title>Show Site All UserJS</title>
      </head>
      <body style="background: none transparent">
      <div id="app" style="width:100% !important";></div>
      </body></html>`;
      if (dom.tagName && 'iframe' == dom.tagName.toLowerCase()) {
        let c = dom.contentDocument ?? dom.contentWindow.document;
        try {
          c.open();
          c.write(domDoc);
          c.close();
        } catch (d) {
          err(`loading { ${dom.name} }; [ ${d} ]`);
          if(root) {
            root.innerHTML = `<span>[ERROR] loading { ${dom.name} }; [ ${d} ]</span>`;
            delay(2500).then(() => {
              root.innerHTML = '';
            });
          };
        }
      }
    }
  },
  sleazy = () => {
    let otherSite = /greasyfork\.org/.test(location.hostname) ? 'sleazyfork' : 'greasyfork';
    qs('span.sign-in-link') ? /scripts\/\d+/.test(location.href) ? !qs('#script-info') && (otherSite == 'greasyfork' || qs('div.width-constraint>section>p>a')) ? location.href = location.href.replace(/\/\/([^.]+\.)?(greasyfork|sleazyfork)\.org/, '//$1' + otherSite + '.org') : false : false : false;
  };

  class FetchUserjs {
    constructor() {
      this.host = win.location.hostname.split('.').splice(-2).join('.');
      this.showTime = 10;
      this.quietKey = 'jae_fetch_userjs_quiet';
      this.countKey = 'jae_fetch_userjs_count';
      this.adultKey = 'jae_fetch_userjs_adult';
      this.tplBox = `<div id="jae_userscript_box">
    <style>${boxCSS}</style>
    <div class="jae-userscript">
    <iframe class="UserJSFrame" name="jaeFetchUserJSFrame" src="about:blank" allowTransparency="true"></iframe>
    </div>
    </div>`;
    }

    getCountData(host) {
      let countData = GM_getResourceText('count');
      countData = JSON.parse(countData);
      let count = countData[host];
      sessionStorage.setItem(this.countKey, count);
      return count;
    }

    setSize(w, h) {
      if(w.trim() === '90vw') {
        if(custom_width.trim() !== '') {
          return qs('#jae_userscript_box > .jae-userscript',doc.body).setAttribute('style', `width: ${custom_width};height: ${h}px;`)
        }
      }
      return qs('#jae_userscript_box > .jae-userscript',doc.body).setAttribute('style', `width: ${w};height: ${h}px;`)
    }

    addEventListener(eventName, handler) {
      qs('#jae_userscript_box').addEventListener(eventName, handler);
    }

    bindEvent() {
      this.timeId = setTimeout(() => {
        qs('#jae_userscript_box').remove();
      }, this.showTime * 2000);
      this.addEventListener('max', () => {
        this.setSize('90vw', 492);
        clearTimeout(this.timeId);
      });
      this.addEventListener('min', () => {
        this.setSize('370px', 56);
      });
      this.addEventListener('close', () => {
        sessionStorage.setItem(this.quietKey, 1);
        qs('#jae_userscript_box').remove();
      });
      this.addEventListener('loading', () => {
        clearTimeout(this.timeId);
      });
    }

    execFrameJs(frameWindow) {
      let uiJs = GM_getResourceText('uiJs');
      return function (jsStr) {
        frameWindow.eval(jsStr);
      }.call(frameWindow, uiJs);
    }

    get isQuiet() {
      let quiet = sessionStorage.getItem(this.quietKey);
      return quiet ? true : false;
    }

    render() {
      if (!this.isQuiet) {
        if (this.getCountData(this.host)) {
          $('body').append(this.tplBox);
          iframe.write();
          this.execFrameJs(jaeFetchUserJSFrame.window);
          this.bindEvent();
        }
      }
    }

  }

  let fu = new FetchUserjs();
  ljs.exec(['jQuery'], () => {
    /greasyfork\.org/.test(location.hostname) && sleazyfork_redirect ? sleazy() : false;
    fu.render();
  });

})();
