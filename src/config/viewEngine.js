import express from "express";

/*
config view engine for nodejs app
 */

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views","./src/views");
};

module.exports = configViewEngine;