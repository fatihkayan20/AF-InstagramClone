var validator = require("validator");

exports.validateSignupData = (data) => {
  let errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is badly formatted";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLoginData = (data) => {
  let errors = {};

  if (validator.isEmpty(data.usernameOrEmail)) {
    errors.usernameOrEmail = "Username or password is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
