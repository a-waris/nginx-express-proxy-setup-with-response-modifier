const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/path1', (req, res) => {
    res.send('Hello from Path 1!');
});

app.get('/path2', (req, res) => {
    res.send('Hello from Path 2!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
