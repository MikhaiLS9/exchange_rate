# React + TypeScript + Vite

Exchange rate Application
Описание
gh-pages https://mikhails9.github.io/exchange_rate/

Exchange rate - это веб-приложение, предназначенное для конвертации валют в реальном времени. Приложение предлагает простой и интуитивно понятный интерфейс для быстрой конвертации валют между различными доступными парами. Особенности приложения включают в себя использование  "react-router-dom": "^6.23.1"  версии роутинга для навигации и авторизацию через Firebase, что обеспечивает безопасность пользовательских данных и удобный доступ к функциям приложения.
Основные функции
Конвертация валют: Пользователи могут легко выбрать парами валют и ввести сумму для конвертации, получая результат в реальном времени.
Актуальные курсы валют: Информация о курсах валют обновляется в реальном времени, что обеспечивает точность конвертаций.
Авторизация через Firebase: Используется для создания учетных записей пользователей, их аутентификации и хранения пользователя-специфичных данных.

Для запуска приложения на локальной машине убедитесь, что у вас установлены Node.js и npm.
Клонирование репозитория: Сначала склонируйте репозиторий приложения на вашу локальную машину, используя следующую команду:
git clone (https://github.com/MikhaiLS9/exchange_rate.git)

Установка зависимостей: Перейдите в директорию проекта и установите необходимые зависимости, выполнив следующую команду в терминале:
cd exchange_rate
npm install

Запуск приложения: После установки зависимостей запустите приложение, используя:
npm run dev

Приложение будет запущено и доступно по адресу http://localhost:3000 в вашем браузере.
Авторизация: Для использования функций приложения необходимо войти через ваш аккаунт Google, используя интерфейс авторизации Firebase.
Технологии
Приложение использует следующий стек технологий:
Frontend:
React.js
CSS Modules для стилей
Backend:
Firebase Authentication для аутентификации пользователей
Firebase Firestore для хранения данных
Контактная информация
Если у вас есть вопросы или предложения по улучшению приложения, не стесняйтесь обращаться к разработчикам.
Мы надеемся, что Currency Converter станет полезным инструментом для всех, кто ищет простое и эффективное решение для конвертации валют.


```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
