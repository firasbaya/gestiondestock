const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.articles = require("./article.model.js")(mongoose);
db.clients = require("./client.model.js")(mongoose);
db.fournisseurs = require("./fournisseur.model.js")(mongoose);
db.entres = require("./entre.model.js")(mongoose);
db.sorties = require("./sortie.model.js")(mongoose);
db.depenses = require("./depense.model.js")(mongoose);
db.admins = require("./admin.model.js")(mongoose);
db.magasiniers = require("./magasinier.model.js")(mongoose);
db.user=require("./user.model.js")
db.role=require("./role.model.js")
db.ROLES=["user","admin","moderator"];

module.exports = db;
