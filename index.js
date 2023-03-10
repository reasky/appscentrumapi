var request = require('request');

function AppsCentrumApi(token, appid) {
  this.token = token
  this.appId = appid
}

AppsCentrumApi.prototype.todayShow = async function () {
  this.date = new Date().toISOString().split('T')[0]

  const response = new Promise((resolve, reject) => {
    request({
      headers: {
        'cookie': `apps_user_lang=ru; PHPSESSID=${this.token};`,
      },
      uri: `https://appscentrum.com/preroll/getStats?app_vk_id=${this.appId}&date_from=${this.date}&date_to=${this.date}&period=no&page_num=1&row_count=25&group_by=app`,
      method: 'GET'
    }, function (err, res, body) {
      if(err) reject(err);
      resolve(JSON.parse(res.body).rows[0].ads_cnt)
    });
  })

  return response
}

AppsCentrumApi.prototype.todayMoney = async function () {
  this.date = new Date().toISOString().split('T')[0]

  const response = new Promise((resolve, reject) => {
    request({
      headers: {
        'cookie': `apps_user_lang=ru; PHPSESSID=${this.token};`,
      },
      uri: `https://appscentrum.com/preroll/getStats?app_vk_id=${this.appId}&date_from=${this.date}&date_to=${this.date}&period=no&page_num=1&row_count=25&group_by=app`,
      method: 'GET'
    }, function (err, res, body) {
      if(err) reject(err);
      resolve(JSON.parse(res.body).rows[0].amount)
    });
  })

  return response
}

AppsCentrumApi.prototype.daysShow = async function (days) {
  this.days = days;
  this.date = new Date().toISOString().split('T')[0]
  this.daysBefore = new Date((new Date().getTime() - this.days * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];

  const response = new Promise((resolve, reject) => {
    request({
      headers: {
        'cookie': `apps_user_lang=ru; PHPSESSID=${this.token};`,
      },
      uri: `https://appscentrum.com/preroll/getStats?app_vk_id=${this.appId}&date_from=${this.daysBefore}&date_to=${this.date}&period=no&page_num=1&row_count=25&group_by=app`,
      method: 'GET'
    }, function (err, res, body) {
      if(err) reject(err);
      resolve(JSON.parse(res.body).rows[0].ads_cnt)
    });
  })

  return response
}

AppsCentrumApi.prototype.daysMoney = async function (days) {
  this.days = days;
  this.date = new Date().toISOString().split('T')[0]
  this.daysBefore = new Date((new Date().getTime() - this.days * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];

  const response = new Promise((resolve, reject) => {
    request({
      headers: {
        'cookie': `apps_user_lang=ru; PHPSESSID=${this.token};`,
      },
      uri: `https://appscentrum.com/preroll/getStats?app_vk_id=${this.appId}&date_from=${this.daysBefore}&date_to=${this.date}&period=no&page_num=1&row_count=25&group_by=app`,
      method: 'GET'
    }, function (err, res, body) {
      if(err) reject(err);
      resolve(JSON.parse(res.body).rows[0].amount)
    });
  })

  return response
}

module.exports = AppsCentrumApi
