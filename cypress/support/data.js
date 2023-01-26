//Used to declare Data, to be used in the AirBnb site tests

let input = {
  ValidUsername: "Admin",
  InvalidUsername: "Username",
  CaseSensitiveUsername: "admin" || "ADMIN",
  ValidPassword: "admin123",
  InvalidPassword: "pass123",
  CaseSensitivePassword: "Admin123",
  SpecialCharactersUsername: "@dmin123",
  LongString:
    "6FGGhSyw5CLypzwVZu4jnBV26TxY1aNedgRq3wAUvXtnjPy03rF2VXzBjNnKOaW96qYVqwSex0l8U28ZI5nVoHvRBsYOAPm1Qg9o",
};
let selector = {
  PasswordField: "[name='password']",
  UserProfileDropdown: ".oxd-userdropdown-name",
  UserProfileDropdownItem: '[role="menuitem"]',
  LoginButton: 'button[type="submit"]',
  ErrorInvalidCredentials: ".orangehrm-login-error",
  ErrorRequired: ".oxd-input-group__message",
  InputBorder: ".oxd-input--error",
  ForgotPassword: ".orangehrm-login-forgot > .oxd-text",
  OrangeHRM: ".orangehrm-copyright a",
  SocialMediaIcons: "div.orangehrm-login-footer-sm",
};

module.exports = {
  input,
  selector,
};
