
# AppsCentrumApi




## Установка

Установка с помощью npm | yarn

```bash
  npm installs appscentrumapi | yarn add appscentrumapi
```
    
## Usage/Examples

```javascript
const AppsCentrumApi = require('appscentrumapi')

let appscentrum = new AppsCentrumApi(process.env.USERTOKEN, process.env.APPID)

async function getStat() {
  console.log(await appscentrum.todayMoney())
  console.log(await appscentrum.todayShow())
}

getStat()

```


## Возможности

- Получать статистику по заработку за сегодня,
- Получать статистику по просмотрам рекламы за сегодня. 


## Авторы

- [@ReaskyDev](https://github.com/ReaskyDev)

