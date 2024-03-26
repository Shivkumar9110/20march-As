class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  // Getter method for password
  get password() {
    return this._password.replace(/./g, '*'); // Replaces each character with asterisk
  }

  // Setter method for password
  set password(newPassword) {
    // Regular expressions to check if the password meets the criteria
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const isLongEnough = newPassword.length >= 8;

    // If password meets all criteria, set the new password
    if (hasUpperCase && hasNumber && isLongEnough) {
      this._password = newPassword;
      console.log("Password updated successfully.");
    } else {
      console.error("Error: Password must be at least 8 characters long and contain at least one uppercase letter and one number.");
    }
  }
}

// Example usage:
const user = new User("example_user", "oldPassword");
console.log(user.password); // Output: ************
user.password = "newPassword123";
console.log(user.password); // Output: ************
user.password = "short"; // Output: Error: Password must be at least 8 characters long and contain at least one uppercase letter and one number.
