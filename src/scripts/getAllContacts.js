import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const getAllContacts = async () => {
    try {
        const fileContent = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(fileContent);
        return contacts;
    } catch (error) {
        console.error('Error retrieving contacts:', error);
        return [];
    }
};

console.log(await getAllContacts());
