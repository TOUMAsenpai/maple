const client = require("../index");

client.on("ready", () =>
    console.log(`${client.user.tag} esta listo y funcionando.`)
);
