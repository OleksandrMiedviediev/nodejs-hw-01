import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises'

export const removeAllContacts = async () => {
    try {
        const emplyArray = []
        await fs.writeFile(PATH_DB, JSON.stringify(emplyArray), 'utf-8')
        console.log(`Remove all contacts`)
    } catch (error) {
        console.error('Error remove contacts:', error);
    }
};

await removeAllContacts();
