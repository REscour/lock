'use strict';

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('field/email', function() {
  var email = void 0;
  beforeEach(function() {
    jest.resetModules();

    jest.mock('field/index', function() {
      return {
        setField: jest.fn()
      };
    });

    email = require('field/email');
  });
  describe('setEmail()', function() {
    it('trims email', function() {
      email.setEmail(_immutable2.default.fromJS({}), ' email@test.com ');

      var mock = require('field/index').setField.mock;

      expect(mock.calls.length).toBe(1);
      expect(mock.calls[0]).toMatchSnapshot();
    });
  });
});
