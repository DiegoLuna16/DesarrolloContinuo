const express = require('express');
const app = express();
const port = 3000;

// Ruta para servir la página con el botón
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Button Page</title>
        </head>
        <body>
            <h1>Button Page</h1>
            <form action="/action" method="post">
                <button type="submit">Click Me pls!</button>
            </form>
        </body>
        </html>
    `);
});

// Ruta para manejar el click del botón
app.post('/action', (req, res) => {
    // Aquí puedes manejar la lógica cuando se haga clic en el botón
    res.send('Button clicked!');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

