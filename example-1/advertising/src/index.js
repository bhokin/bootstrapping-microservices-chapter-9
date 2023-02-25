const express = require("express");
const advertising = require("./fixtures/advertising");

function setupHandlers(app) {
    app.get("/advertising", (req, res) => {
        const randomNum = randomNumber(advertising.length);
        const slice = advertising.slice(randomNum);
        res.send(slice)
    });
}

function randomNumber(number) {
    return Math.floor(Math.random() * number) + 1;
}

function startHttpServer() {
    return new Promise(resolve => {
        const app = express();
        setupHandlers(app);

        const port = process.env.PORT && parseInt(process.env.PORT) || 3000;
        app.listen(port, () => {
            resolve();
        });
    });
}

function main() {
    return startHttpServer();
}

main()
    .then(() => console.log("Microservice online."))
    .catch(err => {
        console.error("Microservice failed to start.");
        console.error(err && err.stack || err);
    });