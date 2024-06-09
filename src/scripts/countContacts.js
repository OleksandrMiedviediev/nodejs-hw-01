import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises'

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8')
        const countContacts = JSON.parse(data).length;
        return `Contacts: ${countContacts}`;

    } catch (error) {
        console.error('Error count contacts:', error);
    }
};

console.log(await countContacts());
