import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('server is ready');
});

// get a list of  5 jokes
 app.get('/jokes' , (req, res))

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
