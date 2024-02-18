# RentCarUA

Rent car in Ukraine

## Технічне завдання

Створити застосунок для компанії, що надає послуги надання в Україні автомобілів в оренду. Застосунок складається з 3-х сторінок:

- домашня сторінка з загальним описом послуг, що надає компанія. Стилізація та оформлення на ваш розсуд.
- сторінка, що містить каталог автівок різної комплектації, які користувач може фільтрувати за маркою, ціною за годину оренди авто та кількістю кілометрів, яку подолав автомобіль під час його експлуатації (пробіг).
- сторінка з оголошеннями, які були додані користувачем в улюблені. Зовнішній вигляд програми повинен складатися з навігації (оформлення на ваш розсуд) та області перегляду.

### Основні вимоги

1. Відповідно до макету реалізувати картку оголошення про здачу авто в оренду.
2. На першій сторінці каталогу має рендеритися 12 оголошень, а їх решта - по кліку на кнопку Load more.
3. У разі кліку по кнопці у вигляді “серця” на картці оголошення воно має додаватися до списку улюблених, а колір кнопки змінюватися.
4. При оновленні сторінки має фіксуватись кінцевий результат дій користувача. Тобто, якщо додати оголошення в улюблені та оновити сторінку - то кнопка все одно залишається в стані “улюбленого оголошення” із відповідним кольором.
5. У разі повторного кліку по кнопці у вигляді “серця” оголошення повинно бути видалене зі списку улюблених, а колір кнопки змінитись до початкового стану.
6. У разі кліку по кнопці Learn more має відкриватись модальне вікно з детальною інформацією про авто та умови його оренди.
7. Модальне вікно повинно закриватись по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop або натисканню на клавішу Esc.
8. В коді пробіг авто має бути прописаний одним значенням (наприклад, 4500). В UI - виведено через кому (4,500).
9. Кнопку Rental car слід реалізувати як посилання, що надаватиме можливість користувачу зʼєднатись з компанією за номером телефону +380730000000.
10. Додай фільтрацію. dropdown із марками автомобіля makes.json - показати оголошення з автівками відповідної марки

### Маршрутизація та бекенд

Створи маршрутизацію, використовуючи `React Router`. У застосунку повинні бути такі маршрути:
`“/”` - домашня сторінка з загальним описом послуг, що надає компанія
`“/catalog”` - сторінка, що містить каталог автівок різної комплектації
`“/favorites”` - сторінка з оголошеннями, які були додані користувачем в улюблені.
Якщо користувач зайшов за маршрутом, якого не існує, його необхідно перенаправляти на домашню сторінку.

Для роботи зі списком оголошень створи свій персональний бекенд для розробки за допомогою UI-сервісу `https://mockapi.io/`. Створи ресурс `adverts`. Використай конструктор ресурсу та опиши об'єкт оголошення, як описано нижче.

### Advert

1. Створіть `advert` в **Mockapi** з наступними полями: `id`, `year`, `make`, `model`, `type`, `img`, `description`, `fuelConsumption`, `engineSize`, `accessories`, `functionalities`, `rentalPrice`, `rentalCompany`, `address`, `rentalConditions`, `mileage` (див. скріншот нижче).
   Забороняється додавати нові поля!
   Для наповнення колекції можна взяти adverts.json. Якщо даних не вистачає, або вони не повні - будь ласка, додайте їх самостійно.

2. Зображення авто можете підібрати самостійно.
3. В базі має бути від 32 оголошень з різними значеннями (на ваш розсуд). Реалізована пагінація, де одна сторінка пагінації повинна вміщати 12 оголошень.
   Пагінація має бути реалізована на стороні **Mockapi**

### Додай фільтрацію:

dropdown із марками автомобіля makes.json - показати оголошення з автівками відповідної марки

### Додаткове завдання

1. dropdown із цінами за годину оренди авто (крок 10$) - показати оголошення з автівками, ціна за оренду яких належить до діапазону цін, обраних користувачем
2. група inputів для визначення діапазону пробігу, в межах якого користувач шукатиме оголошення

### Критерії виконання

- Верстка фіксована в рх, семантична та валідна.
- Обов’язкове використання Redux
- Для запитів використовується бібліотека Axios
- Пагінація реалізована на бекенді
- Немає помилок в консолі браузера.
- Інтерактивність працює відповідно до технічного завдання.
- Код відформатовано та не містить невикористовуваного коду
- В репозиторії має бути описаний README.md.
- Проєкт задеплоїний на github pages або netlify.com.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Install Vite

```
$ npm create vite@latest
Need to install the following packages:
create-vite@5.2.0
Ok to proceed? (y) y
√ Project name: ... .
√ Current directory is not empty. Please choose how to proceed: » Ignore files and continue
√ Package name: ... rentcarua
? Select a framework: » - Use arrow-keys. Return to submit.
>   Vanilla
√ Select a framework: » React
√ Select a variant: » JavaScript + SWC

Scaffolding project in F:\Projects2\RentCarUA...

Done. Now run:

  npm install
  npm run dev
```

#### vite.config.js

Налаштування збірки взято з репозиторіїв:

https://github.com/IvettaGoIT/react_vite
https://github.com/goitacademy/vite-sass-app-template

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';

```js
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
    },
  },
  base: "/react_vite/",
});
```

Змінити назву проекта в `base:`

#### Перевірити `name`

в файлах:
package-lock.json
package.json

#### файл для Деплою

https://vitejs.dev/guide/static-deploy.html

1. Створити файл дії: створити папку з назвою `.github/workflows`, а в цій папці файл з будь-якою назвою (наприклад `deploy.yml`). Тут визначається дія для `GitHub Actions`.

2. Налаштувати дію для деплою на `GitHub Pages`: Додати вміст у файл `deploy.yml`, який буде збирати проект і розміщати його на `GitHub Pages` (приклад):

```
name: Build and deploy to GitHub Pages

on:
  push:
    branches: [main]
env:
  VITE_API_TEST: ${{secrets.VITE_API_TEST}}

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Install, build 🔧
        run: |
          npm install
          npm run build
          cp ./dist/index.html ./dist/404.html

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.0
        with:
          branch: gh-pages
          folder: dist
```
