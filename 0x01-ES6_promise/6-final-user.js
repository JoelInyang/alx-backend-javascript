import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];

  const signUpUserPromise = signUpUser(firstName, lastName);
  promises.push(
    signUpUserPromise.then(value => ({
      status: 'resolved',
      value
    }))
    .catch(error => ({
      status: 'rejected',
      value: error
    }))
  );

  const uploadPhotoPromise = uploadPhoto(fileName);
  promises.push(
    uploadPhotoPromise.then(value => ({
      status: 'resolved',
      value
    }))
    .catch(error => ({
      status: 'rejected',
      value: error
    }))
  );

  return Promise.all(promises);
}

