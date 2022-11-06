import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async () => {
  // We are creating a new database named 'contact_db' which will be using version 1 of the database.
  const db = await openDB('contact_db', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('contacts')) {
        console.log('contacts store already exists');
        return;
      }
      // Create a new object store for the data and give it a key name of 'id' which will increment automatically
      db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
      console.log('contacts store created');
    }
  })

  return db;
}

export const getDb = async () => {
  // Create a connection to the IndexedDB database and the version.
   const db = await openDB('contact_db',1)
   // Create a new transaction
   const tx = db.transaction('contacts', 'readonly')

   //open up desired object store
  const store = tx.objectStore('contacts');

  //To get all data in the database
  const request = store.getAll();

  // response
  const response  = await request;

  console.log('res.value', response);
  return response;
}

// The .add() method takes in an object as a parameter 
// the Object is populated by a form input.
export const postDb = async(name,email,phone,profile) => {
  console.log('---- Sending data to the database ----');

   const db = await openDB('contact_db',1);

   //Create teransaction
   const tx = db.transaction('contacts', 'readwrite');

   //Open store
   const store = tx.objectStore('contacts');

   //Request
   const request  = store.add({name,email,phone,profile});

   const response = await request
   console.log('🚀🚀🚀 saved data to the database 🚀🚀🚀', response);
   return;
}

export const deleteDb = async(id)=> {
  console.log(' ---- DELETE from the database ---', id);

  const db = await openDB('contact_db',1);

  //create transaction
  const tx = db.transaction('contacts','readwrite');

  const store = tx.objectStore('contacts');

  const request = store.delete(id);

  const response = await request;

  console.log('response.value', response);

  return response?.value
}

export const editDb = async(id, name, email, phone, profile) =>{
  //create conncection to indexDb
  const db = await openDB('contact_db',1);

  //Create new transaction
  const tx = db.transaction('contacts','readwrite');

  //Open up object store
  const store = tx.objectStore('contacts');

  //create put request to update a particular object in database
  const request = store.put({id, name, email, phone,profile});

  const response = await request;
  
  console.log('🚀 - data saved to the database', response);
}


