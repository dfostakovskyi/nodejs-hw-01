import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (err) {
    console.error('Error reading the file:', err);
  }
};

console.log(await countContacts());
