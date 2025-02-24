import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    console.error('Error reading the file:', err);
  }
};

console.log(await getAllContacts());
