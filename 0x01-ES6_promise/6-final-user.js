//Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js below
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const sign = await signUpUser(firstName, lastName);
  let photo;
  try {
    photo = await uploadPhoto(fileName);
  } catch (err) {
    photo = err.toString();
  }
  return [
    { value: sign, status: 'fulfilled' },
    { value: photo, status: 'rejected' },
  ];
}
