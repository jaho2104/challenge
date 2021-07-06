"use strict";
const mockDBCalls = require("../database/index.js");

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  try {
    const data = (
      await mockDBCalls.getListOfAgesOfUsersWith(request.params.itemToLookup)
    ).reduce((acc, curr) => {
      if (!acc[curr.age]) {
        acc[curr.age] = 1;

        return acc;
      }

      acc[curr.age]++;

      return acc;
    }, {});

    return response.status(200).send(data);
  } catch (e) {
    return response.status(500).send({ error: "Server Error" });
  }
};

module.exports = (app) => {
  app.get("/users/age/:itemToLookup", getListOfAgesOfUsersWithHandler);
};
