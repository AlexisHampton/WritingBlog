import express from "express"

const app = express();

app.listen(5001, (req, res) => {
    console.log("Listenting on 5001");
});