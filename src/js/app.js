export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(username) {
    if (/\d{3}/.test(username)) {
      return false;
    }
    return /^[a-z]+[a-z\d_-]+[a-z]$/i.test(username);
  }
}