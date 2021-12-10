import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contact-action";

const ContactState = [];
const addContactReducer = (state, { payload }) => {
  if (
    state.find(
      (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
    )
  ) {
    alert(`${payload.name} is already in contacts`);
    return;
  }
  return [payload, ...state];
};
const contact = createReducer(ContactState, {
  [addContact]: addContactReducer,
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  // На случай если я не прав. Просто в таком случае изменяеться весь стейт контактов, а нам нужно только чтобы визуал менялся. так что или я лох или тз не коректно описно;)
  // [changeFilter]: (state, { payload }) =>
  //   state.filter((contact) =>
  //     contact.name.toLowerCase().includes(payload.toLowerCase())
  //   ),
});

export default contact;
