Проект был создан в рамках марафона "Вездекод" ВКонтакте. Позволяет смотреть курсы криптовалют без обновления страницы.

На 23.12.2021 - API https://exchange.bitcoin.com/ __не работает__

# Установка
- Настроить .env файл (`VUE_APP_OUTPUT_DIR`,`VUE_APP_PUBLIC_PROD_PATH`, `VUE_APP_INDEX_PROD_PATH`)
- Залить все файлы, в качестве root_directory указать `main`
- Выполнить `npm install && npm run build`

В качестве примера используются 20 валют, они находятся в `main/symbols.json`
