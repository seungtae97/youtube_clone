import express from "express";
const app = express();
const port = 4000;

const handleListening = () =>
    console.log(`Listening on: http://localhost:${port}`);

const handleHome = (req, res) => res.send("Hello from my home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);
app.listen(port, handleListening);
