import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from './firebase';

const userRef = doc(db, 'users/F4tp3FPX3UJFNJ22p8uw');
const usersCollectionRef = collection(db, 'users');


onSnapshot(userRef, (snapshot) => {
  console.log(snapshot.data());
})

onSnapshot(usersCollectionRef, (snapshot) => {
  console.log(snapshot.docs.map(doc => doc.data()));
});