import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
    try {
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileContent);
    const newContacts = [];

    for ( let contact = 0; contact < number; contact++) {
        const fakeContact = createFakeContact();
        newContacts.push(fakeContact);
    }

    contacts.push(...newContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
} catch (error) {
        console.error('Error generating contacts:', error);
    }
};

generateContacts(5);
