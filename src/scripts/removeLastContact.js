import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    try {
        const fileContent = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(fileContent);

        if (contacts.length > 0) {
            contacts.pop();
        }

        const upadatedContent = JSON.stringify(contacts, null, 2);
        await fs.writeFile(PATH_DB, upadatedContent, 'utf-8');
        console.log('Last contact has been removed successfully.');
    } catch (error) {
        console.error('Error reading or writing contacts file:', error);
    }
};

removeLastContact();
