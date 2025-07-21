import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
        const emptyContacts = JSON.stringify([]);
        fs.writeFile(PATH_DB, emptyContacts, 'utf-8');
        console.log('All contacts have been removed successfully.');
    } catch (error) {
        console.error('Error writing to contacts file:', error);
    }
};

removeAllContacts();
