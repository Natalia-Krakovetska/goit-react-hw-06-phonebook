import { createSlice } from "@reduxjs/toolkit";
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: '',
    reducers: {
        addContacts(state, action) { 
            console.log('hello')
        }
    }
}
);
export const { addContacts } = contactsSlice.actions;
