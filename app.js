const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const events = require("./routes/api/events");
const songs = require("./routes/api/songs");
const libraries = require("./routes/api/libraries");
const login = require("./validation/login")
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path')
const calls = require('./routes/api/api_calls');
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}



app.use("/api/users", users);
app.use(express.static(path.join(__dirname, "frontend/public")));
app.use("/api/events", events);
app.use("/api/songs", songs);
app.use("/api/libraries", libraries);
app.use("/api/calls", calls);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/public/index.html'));
});


const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server is running on port ${port}`));

