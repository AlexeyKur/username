import Validator from '../app';

test('check username', () => {
  const user = new Validator;
  expect(user.validateUsername('Alex')).toBe(true);
});

test('check _username', () => {
  const user = new Validator;
  expect(user.validateUsername('_Alex')).toBe(false);
});

test('check -username', () => {
  const user = new Validator;
  expect(user.validateUsername('-Alex')).toBe(false);
});

test('check 1username', () => {
  const user = new Validator;
  expect(user.validateUsername('1Alex')).toBe(false);
});

test('check username1', () => {
  const user = new Validator;
  expect(user.validateUsername('Alex1')).toBe(false);
});

test('check username-', () => {
  const user = new Validator;
  expect(user.validateUsername('Alex-')).toBe(false);
});

test('check username_', () => {
  const user = new Validator;
  expect(user.validateUsername('Alex_')).toBe(false);
});

test('check user123name', () => {
  const user = new Validator;
  expect(user.validateUsername('Alex123M')).toBe(false);
});