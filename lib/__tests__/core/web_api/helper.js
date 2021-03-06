'use strict';

var _helper = require('core/web_api/helper');

describe('webAuthOverrides', function() {
  it('should return overrides if any field is compatible with WebAuth', function() {
    expect(
      (0, _helper.webAuthOverrides)({ __tenant: 'tenant1', __token_issuer: 'issuer1' })
    ).toMatchSnapshot();
  });

  it('should omit overrides that are not compatible with WebAuth', function() {
    expect(
      (0, _helper.webAuthOverrides)({
        __tenant: 'tenant1',
        __token_issuer: 'issuer1',
        backgroundColor: 'blue'
      })
    ).toMatchSnapshot();
  });

  it('should return null if no fields are compatible with WebAuth', function() {
    expect((0, _helper.webAuthOverrides)({ backgroundColor: 'blue' })).toBe(null);
  });
});

describe('normalizeError', function() {
  it('does nothing when there is no error', function() {
    var normalized = (0, _helper.normalizeError)(undefined);
    expect(normalized).toBe(undefined);
  });
  it('should map access_denied error to invalid_user_password when error.error === access_denied', function() {
    var error = {
      error: 'access_denied',
      description: 'foobar'
    };
    var expectedError = {
      code: 'invalid_user_password',
      error: 'invalid_user_password',
      description: 'foobar'
    };
    var actualError = (0, _helper.normalizeError)(error);
    expect(actualError).toMatchSnapshot();
  });
  it('should map access_denied error to invalid_user_password when error.code === access_denied', function() {
    var error = {
      code: 'access_denied',
      description: 'foobar'
    };
    var expectedError = {
      code: 'invalid_user_password',
      error: 'invalid_user_password',
      description: 'foobar'
    };
    var actualError = (0, _helper.normalizeError)(error);
    expect(actualError).toMatchSnapshot();
  });
});
