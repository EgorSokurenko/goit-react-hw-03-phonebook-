import "./ContactList.css";
import propTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/Contact/contact-action";

export default function ContactList() {
  const contacts = useSelector((state) => state.persistedReducer.items);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  let visibleContacts = [];
  if (contacts) {
    visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <ul className="contactList">
      {visibleContacts &&
        visibleContacts.map((contact) => {
          return (
            <li className="contactItem" key={contact.id}>
              <div className="contactBlock">
                <span>{contact.name}</span>
                <span className="nubmer">{contact.number}</span>
              </div>

              <button
                className="deleteBotton"
                onClick={() => {
                  dispatch(actions.deleteContact(contact.id));
                }}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}
