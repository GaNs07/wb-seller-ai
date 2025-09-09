**Вставь этот код:**

```bash
#!/bin/bash
echo "Установка зависимостей..."
cd client && npm install && cd ..
cd server && npm install && cd ..
echo "Готово! Запускайте docker-compose up --build"
