import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises'

export const thanos = async () => {
try {
    const data = await fs.readFile(PATH_DB, 'utf-8')
    const contacts = JSON.parse(data);
    const thanos = contacts.filter(() => Math.random() >= 0.5)
    await fs.writeFile(PATH_DB, JSON.stringify(thanos,null,2))
} catch (error) {
    console.error('Error:', error)
}
};

await thanos();

