import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const data = await readContacts();
    let contacts = JSON.parse(data);

    const newContact = createFakeContact();
    contacts.push(newContact);

    await writeContacts(contacts);
    console.log('Contact has been added successfully.');
  } catch (err) {
    console.error('Error adding contact to the file:', err);
  }
};

addOneContact();
