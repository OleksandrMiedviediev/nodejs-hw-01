import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
     let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
        const newContact = createFakeContact();

        contacts.push(newContact)

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

        console.log(`New contact added: ${newContact.name}`);

  } catch (error) {
    console.error('Error generating contact:', error);
  }
};

await addOneContact();
