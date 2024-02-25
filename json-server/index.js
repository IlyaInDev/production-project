const fs = require('fs');
// const jsonServer = require('json-server');
const express = require('express');
const path = require('path');
const cors = require('cors');

// const server = jsonServer.create();
const app = express();

// server.use(cors());
app.use(cors());

// const router = server.router(path.resolve(__dirname, 'db.json'));

// Нужно для небольшой задержки(имитация реального backend)
app.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Проверяем, авторизован ли пользователь
// eslint-disable-next-line consistent-return
// server.use(async (req, res, next) => {
//     if (!req.headers.authorization) {
//         return res.status(403).json({ message: 'AUTH ERROR' });
//     }

//     next();
// });

// app.use(jsonServer.defaults({}));
app.use(express.json());
// app.use(jsonServer.bodyParser);
// server.use(router);

// Эндпоинт для логина
app.post('/login', (req, res) => {
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

app.get('/posts', (req, res) => {
    if (req.headers.authorization) {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
        const { posts = [] } = db;
        res.send(posts);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

app.get('/profile', (req, res) => {
    if (req.headers.authorization) {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
        const { profile = {} } = db;
        res.send(profile);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

app.put('/profile', (req, res) => {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
    db.profile = req.body;
    fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 4));
    res.send(req.body);
});

app.get('/articles/:id', (req, res) => {
    if (req.headers.authorization) {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
        const { articles = {} } = db;
        const article = articles.find((article) => article.id === req.params.id);
        return res.send(article);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

// Запуск сервера
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});