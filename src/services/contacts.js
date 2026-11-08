import { ContactsCollections } from "../db/models/contact.js";

export const getAllContacts = async () =>{
    const contacts = await ContactsCollections.find();
    return contacts;
};

export const getAllContactById = async (contactID) => {
    const contact = await ContactsCollections.findById(contactID);
    return contact;
};
