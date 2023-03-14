  
import { FormContacts } from './FormContacts/FormContacts';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <FormContacts />
      <h2 style={{ fontSize: '34px', marginBottom: '10px' }}>Contacts</h2>

      <Filter />
      <ContactsList />
    </div>
  );
};



