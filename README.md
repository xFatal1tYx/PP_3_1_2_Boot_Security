- [Задание](#Задание)
- [Скриншоты](#Скриншоты)

# Задание

1. Перенесите классы и зависимости из предыдущей задачи.
2. Создайте класс Role и свяжите User с ролями так, чтобы юзер мог иметь несколько ролей.
3. Имплементируйте модели Role и User интерфейсами GrantedAuthority и UserDetails соответственно. Измените настройку секьюрности с inMemory на userDetailService.
4. Все CRUD-операции и страницы для них должны быть доступны только пользователю с ролью admin по url: /admin/.
5. Пользователь с ролью user должен иметь доступ только к своей домашней странице /user, где выводятся его данные. Доступ к этой странице должен быть только у пользователей с ролью user и admin. Не забывайте про несколько ролей у пользователя!
6. Настройте logout с любой страницы с использованием возможностей thymeleaf.
7. Настройте LoginSuccessHandler так, чтобы админа после аутентификации направляло на страницу /admin, а юзера на его страницу /user.

# Скриншоты

```
Index page
![index](src/main/resources/image/index.png "index")
```
```
User page
![user](src/main/resources/image/user.png "user")
```
```
Admin page
![admin](src/main/resources/image/admin.png "admin")
```
```
Add/Edit page
![edit](src/main/resources/image/edit.png "edit")
```