function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
signUpUser("John", "Doe").then(user => {
  console.log(user.firstName); // Output: John
  console.log(user.lastName); // Output: Doe
});

