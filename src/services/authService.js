import { DB, auth } from '../configs/firebaseConfig';

export const authSingInAsync = ({ email, password }) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const authSignOutAsync = () => {
  return auth.signOut();
};

export const authSignUpAsync = ({ email, password }) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const addUserExtraInfo = (userId, { email, firstName, secondName }) => {
  return DB.collection('users')
    .doc(userId)
    .set({ email, firstName, secondName });
};

export const getUserExtraInfo = (userId) => {
  return DB.collection('users')
    .doc(userId)
    .get()
    .then((snapshot) => {
      return { ...snapshot.data() };
    })
    .catch((error) => {
      return error;
    });
};
