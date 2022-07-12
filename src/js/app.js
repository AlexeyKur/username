export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(username) {
    if (/\d{3}/.test(username)) {
      return false;
    }
    return /^[^\d_-]+[a-z\d_-]+[^\d_-]$/.test(username);
  }
}