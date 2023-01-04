import MutationObserver from 'mutationobserver-shim';

import '@testing-library/jest-dom/extend-expect'

test('Projenin son versiyonu', () => {
  const pjson = require('./package.json')
  expect(pjson.version).toBe('0.0.1')
});
