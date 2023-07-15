import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore'

const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

const app = initializeApp(config);

const db = getFirestore(app)

console.log(db);

async function addUser() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getUsers() {

  try {
    const querySnapshot = await getDocs(collection(db, "users"));
  
    querySnapshot.forEach((doc) => {
      console.log({id: doc.id, ...doc.data()});
    });
  } catch(error) {
    console.error(error);
  }
}

// What you pass will be set in the document unless you pass {merge: true} will behave as update
async function setUser() {
  try {
    const userDocRef = doc(db, 'users/F4tp3FPX3UJFNJ22p8uw');
    
    await setDoc(userDocRef, {another: false}, {merge: true});

  } catch (error) {
    console.error(error);
  }
}

async function updateUser() {
  try {
    const userDocRef = doc(db, 'users/F4tp3FPX3UJFNJ22p8uw');
    
    await updateDoc(userDocRef, {name: 'Nicolas'});

  } catch (error) {
    console.error(error);
  }
}


async function deleteUser() {
  try {
    const userDocRef = doc(db, 'users/F4tp3FPX3UJFNJ22p8uw');
    
    await deleteDoc(userDocRef);

  } catch (error) {
    console.error(error);
  }
}

async function getUser() {
  try {
    const userDocRef = doc(db, 'users/F4tp3FPX3UJFNJ22p8uw');

    const userSnapshot = await getDoc(userDocRef);
  
    console.log(userSnapshot.data());
  } catch(error) {
    console.log(error)
  }
}

// setUser();
// updateUser();
// getUsers();
// addUser();
getUser();
