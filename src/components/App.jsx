import { useSelector, useDispatch } from "react-redux";
import { addContacts } from '../redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const dispatch = useDispatch();
  console.log(addContacts())
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
