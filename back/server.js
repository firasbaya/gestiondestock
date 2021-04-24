const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose=require('mongoose')
const app = express();
const dbConfig = require ('./config/db.config.js');
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const db=require("./models");
const Role=db.role
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to family business application." });
});
require("../back/routes/article.routes")(app);
require("../back/routes/client.routes")(app);
require("../back/routes/fournisseur.routes")(app);
require("../back/routes/entre.routes")(app);
require("../back/routes/sortie.routes")(app);
require("../back/routes/depense.routes")(app);
require("../back/routes/admin.routes")(app);
require("../back/routes/magasinier.routes")(app);
require('./models/user.model.js');
require('../back/routes/auth.routes')(app);
require('../back/routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

/*       new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });
 */
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
