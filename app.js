const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Show form
app.get("/", (req, res) => {
    res.render("index", {
        submitted: false
    });
});

// Form submitted
app.post("/submit", (req, res) => {

    console.log("Application:", req.body);

    res.render("index", {
        submitted: true
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
