const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

const PeopleRoutes = require("./routes/people");

app.use("/people", PeopleRoutes);

app.listen(PORT, () => console.info(`Server is running on port numer ${PORT}`));
