
import { Contacts } from './ContactsList.styles';
import ContacsListItem from '../ContactsListItem/ContactsListItem';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';

export function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
 const dispatch = useDispatch();
const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

    return (
        <Contacts>
        {filteredContacts.map(({ id, name, number }) => (
            <ContacsListItem
              key={id}
              name={name}
              number={number}
              onDelete={() => dispatch(deleteContact(id))}
            />
          ))}
        </Contacts>
    );
};
