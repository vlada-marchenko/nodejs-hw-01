import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
    try {
       const fileContent = fs.readFile(PATH_DB, 'utf-8');

       const contacts = JSON.parse(await fileContent);
       const fakeContact = createFakeContact();
       contacts.push(fakeContact);

       await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    } catch (error) {
        console.error('Error adding contact:', error);
    }
};

addOneContact();
