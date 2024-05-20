import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('server is ready');
});

// get a list of  5 jokes
 app.get('/api/jokes' , (req, res) =>{
    const jokes = 
    [
        {
            "id": 1,
            "joke": "Why don't scientists trust atoms? Because they make up everything."
        },
        {
            "id": 2,
            "joke": "Why did the coffee file a police report? It got mugged."
        },
        {
            "id": 3,
            "joke": "How does a penguin build its house? Igloos it together."
        },
        {
            "id": 4,
            "joke": "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            "id": 5,
            "joke": "What do you call a belt made out of watches? A waist of time."
        }
    ];
    res.send(jokes);
 })

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
