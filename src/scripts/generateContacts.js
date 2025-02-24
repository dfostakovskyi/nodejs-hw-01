import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const data = await readContacts();
    let contacts = [];

    if (data) {
      try {
        contacts = JSON.parse(data);
      } catch (err) {
        console.error('Error parsing JSON:', err);
        contacts = [];
      }
    }

    if (!Array.isArray(contacts)) {
      contacts = [];
    }

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    await writeContacts(contacts);
    console.log(`${number} contacts have been added successfully.`);
  } catch (error) {
    console.error('An error occurred while generating contacts:', error);
  }
};

generateContacts(5);
