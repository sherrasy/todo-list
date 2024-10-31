# todo-list

Приложение для работы с задачами, поддерживает следующие функции:

- авторизация. Простая проверка входа при введении слова admin в оба поля. Переход на другие страницы без авторизации возвращает на страницу входа;

- просмотр таблицы задач. Поддерживается сортировка по статусу выполнения или перемещения в корзину, а также отображение полного списка по умолчанию. Данные сохраняются в localStorage и получаются из него, если они есть;

- добавление новой задачи при нажатии на кнопку "Добавить";

- отметка выполненной задачи при нажатии на галочку. Кнопка не отображается, если заметка помечена выполненной;

- добавление задачи в корзину при нажатии на иконку корзины. Кнопка не отображается, если заметка уже в корзине;

- удаление задачи при нажатии на иконку крестик (отображается только на задачах из вкладки "Корзина").

### Запуск приложения

```bash
cd todo-list
npm i
npm run dev
```

Приложение будет доступно на `http://localhost:4001/todo-list/#/`
