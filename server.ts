import { aaa } from "./app";

const port = 3000 || process.env.port;
aaa.listen(port, () => {
    console.log('Server port ${port}!');
});
