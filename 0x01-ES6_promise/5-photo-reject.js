export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}
import uploadPhoto from './uploadPhoto';

uploadPhoto('my-photo.jpg')
  .then(() => {
    console.log('Photo uploaded successfully!');
  })
  .catch((error) => {
    console.error(error.message);
  });

