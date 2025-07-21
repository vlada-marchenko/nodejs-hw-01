import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    try { 
        const fileContent = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(fileContent);
        return contacts.length;
    } catch (error) {
        console.error('Error reading or parsing contacts file:', error);
        return 0; 
    }
};

console.log(await countContacts());
