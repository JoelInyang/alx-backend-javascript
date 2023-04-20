//returns a resolved promise below
export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
