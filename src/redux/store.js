import { configureStore } from "@reduxjs/toolkit";
import { addContacts } from './contactsSlice';
import {contactsSlice} from './contactsSlice';
export const store = configureStore({
    reducer: {
      contacts: contactsSlice.reducer
  },
});