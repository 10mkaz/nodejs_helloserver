const eee = require('express')
const aaa = eee();

aaa.get("/", (rrr, sss) => {
    sss.send("Hello world");
});

export { aaa };
