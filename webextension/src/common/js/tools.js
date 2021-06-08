/* global chrome, psl, fetch */

import fuzzy from 'fuzzy.js';
import timeago from 'timeago.js';

let config = {
  api: 'https://greasyfork.org/scripts/by-site/{host}.json',
  sapi: 'https://sleazyfork.org/scripts/by-site/{host}.json'
},
brws = typeof browser == "undefined" ? chrome : browser;

export default {
  timeagoFormat (time) {
    let lang = (navigator.language === 'zh-CN') ? 'zh_CN' : 'en_short'
    return timeago(null, lang).format(time)
  },
  installUserJs (uri) {
    let jsStr = `
    let evt = parent.document.createEvent('MouseEvents'),
    link = parent.document.createElement('a');
    evt.initEvent('click', true, true);
    link.href = '${uri}'
    link.dispatchEvent(evt) `;
    brws.tabs.executeScript(null, { code: jsStr })
  },
  /* Nano Templates - https://github.com/trix/nano */
  nano (template, data) {
    return template.replace(/\{([\w.]*)\}/g, function (str, key) {
      let keys = key.split('.')
      let v = data[keys.shift()]
      for (let i = 0, l = keys.length; i < l; i++) v = v[keys[i]]
      return (typeof v !== 'undefined' && v !== null) ? v : ''
    })
  },

  get currentTab () {
    return new Promise(function (resolve, reject) {
      let queryInfo = {
        active: true,
        currentWindow: true
      }
      brws.tabs.query(queryInfo, (tabs) => {
        let tab = tabs[0]
        resolve(tab)
      })
    })
  },

  get sessionStorage () {
    return new Promise((resolve, reject) => {
      brws.runtime.getBackgroundPage((bg) => {
        resolve(bg.sessionStorage)
      })
    })
  },

  get host () {
    return new Promise((resolve, reject) => {
      this.currentTab.then((tab) => {
        let a = document.createElement('a')
        a.href = tab.url
        let mainHost = psl.get(a.hostname) || a.hostname.split('.').splice(-2).join('.')
        resolve(mainHost)
      })
    })
  },

  getData (callback) {
    this.sessionStorage.then((bgSessionStorage) => {
      this.host.then((host) => {
        let data = bgSessionStorage.getItem(host)
        if (data) {
          data = JSON.parse(data)
          callback(data)
        } else {
          let api = this.nano(config.api, {
            host: host
          }),
          sapi = this.nano(config.sapi, {
            host: host
          });
          fetch(sapi).then((r) => {r.json().then((json) => {
                json = json.map((item) => {
                  item.user = item.users[0]
                  return item
                })
                bgSessionStorage.setItem(host, JSON.stringify(json))
                callback(json)
              })
            })
          fetch(api).then((r) => {
              r.json().then((json) => {
                json = json.map((item) => {
                  item.user = item.users[0]
                  return item
                })
                bgSessionStorage.setItem(host, JSON.stringify(json))
                callback(json)
              })
          })
        }
      })
    })
  },

  searcher (data, query) {
    let rt = []
    for (let i = 0; i < data.length; i++) {
      let item = data[i]
      let max = null
      let frt = null
      for (let key of ['name', 'description', 'user']) {
        if (key === 'user') {
          frt = fuzzy(item['user']['name'], query)
        } else {
          frt = fuzzy(item[key], query)
        }
        if (max === null) {
          max = frt
        } else if (max.score < frt.score) {
          max = frt
        }
      }
      rt.push({
        item,
        'score': max.score
      })
    }
    rt = rt.filter((a) => a.score !== 0).sort((a, b) => b.score - a.score).map((a) => a.item)
    return rt
  },

  isZH () {
    let nlang = navigator.language.toLowerCase()
    if (nlang === 'zh') {
      nlang = 'zh-cn'
    }
    return nlang.search('zh-') === 0
  }
}
