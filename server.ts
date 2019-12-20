import { app } from "./app";

const port = 3000 || process.env.port;
app.listen(port, () => {
    console.log('Server port ${port}!');
});
