
# AppsCentrumApi




## Установка

Установка с помощью npm | yarn

```bash
  npm install appscentrumapi | yarn add appscentrumapi
```
    
## Использование

```javascript
const AppsCentrumApi = require('appscentrumapi')

let appscentrum = new AppsCentrumApi(process.env.USERTOKEN, process.env.APPID)

async function getStat() {
  console.log(await appscentrum.todayMoney())
  console.log(await appscentrum.todayShow())
  console.log(await appscentrum.daysShow())
  console.log(await appscentrum.daysMoney())
}

getStat()

```


## Возможности

- Получать статистику по заработку за сегодня,
- Получать статистику по просмотрам рекламы за сегодня. 


## Как получить токен?

- Открываем https://appscentrum.com/, авторизируемся,
- Открываем Dev Tools (F12),
- Открываем раздел сеть (Network), далее XHR запросы,
- Обновляем страницу (F5), в разделе XHR появится запрос "getApps",
- В заголовках этого запроса смотрим Cookie, там и будет наш токен (PHPSESSID)
    `Cookie: apps_user_lang=ru; PHPSESSID=USERTOKEN`


## Авторы

- [@ReaskyDev](https://github.com/ReaskyDev)

