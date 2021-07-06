"use strict";
const mockDBCalls = require("../database/index.js");

const getUsersHandler = async (request, response) => {
  try {
    const data = await mockDBCalls.getUsers();

    return response.status(200).send(data);
  } catch (e) {
    return response.status(500).send({ error: "Server Error" });
  }
};

module.exports = (app) => {
  app.get("/users", getUsersHandler);
};
