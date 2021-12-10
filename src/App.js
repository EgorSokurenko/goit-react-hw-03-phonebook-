import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter/";
import ContactList from "./components/ContactList/";

// const useContactsLocalStorage = (key) => {
//   console.log(window.localStorage.getItem(key));
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? [];
//   });
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// };

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
