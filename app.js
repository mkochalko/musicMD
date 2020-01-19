const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const events = require("./routes/api/events");
const songs = require("./routes/api/songs");

const login = require("./validation/login")
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


app.use("/api/users", users);
app.use("/api/events", events);
app.use("/api/songs", songs);



const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server is running on port ${port}`));

