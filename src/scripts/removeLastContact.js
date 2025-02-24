import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);
    contacts.pop();
    await writeContacts(contacts);
    console.log('Last contact has been removed successfully.');
  } catch (err) {
    console.error('Error removing last contact:', err);
  }
};

removeLastContact();
