import { createAction } from "@reduxjs/toolkit";
const shortid = require("shortid");

export const addContact = createAction(
  "contact/add",
  function prepere(name, number) {
    return {
      payload: {
        id: shortid.generate(),
        name,
        number,
      },
    };
  }
);
export const deleteContact = createAction("contact/delete");
export const changeFilter = createAction("сontact/change");
