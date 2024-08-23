import Gun from 'gun';
import express from 'express';
const app = express();
const port = 8765;

app.use('/gun', Gun.serve);
app.listen(port, () => {
    console.log(`GUN server running at http://localhost:${port}/gun`);
});
