import React, { useEffect } from "react";
import css from "./App.module.scss";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { getError, getIsLoading } from "../redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css["container"]}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
    </div>
  );
};

export default App;
