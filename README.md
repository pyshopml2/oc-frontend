## Разработка ведется в ветке dev
## Установка
* Установить https://nodejs.org/en/
* Клонировать репозиторий и установить зависимости
```
git clone git@github.com:pyshopml2/oc-frontend.git
cd oc-frontend
git checkout dev
npm install
```
* Запустить сборку проекта
```
npm run build
```
* Появится папка build со всеми необходимыми файлами, которые нужно разместить на сервере.

## Docker
```
cd oc-frontend

docker build -t oc-frontend:0.1 .
docker run -ti -d -p 3000:3000 oc-frontend:0.1
```
Приложение доступно - localhost:3000
