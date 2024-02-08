const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

// const router = server.router(path.resolve(__dirname, 'db.json'));

// Нужно для небольшой задержки(имитация реального backend)
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Проверяем, авторизован ли пользователь
// eslint-disable-next-line consistent-return
server.use(async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);
// server.use(router);

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
        const { users = [] } = db;

        const userFromDb = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromDb) {
            return res.json(userFromDb);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.get('/posts', (req, res) => {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
    const { posts = [] } = db;
    res.send(posts);
});

// Запуск сервера
server.listen(8000, () => {
    console.log('Server is running on port 8000');
});