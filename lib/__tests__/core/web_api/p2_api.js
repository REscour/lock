'use strict';

var _testUtils = require('testUtils');

jest.mock('auth0-js');

var getClient = function getClient() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var lockId = 'lockId';
  var clientId = 'cid';
  var domain = 'me.auth0.com';
  var Auth0APIClient = require('core/web_api/p2_api').default;
  var client = new Auth0APIClient(lockId, clientId, domain, options);
  client.client.popup = {
    authorize: jest.fn(),
    loginWithCredentials: jest.fn()
  };
  client.client.client = {
    login: jest.fn(),
    getUserCountry: jest.fn()
  };
  return client;
};

var getAuth0ClientMock = function getAuth0ClientMock() {
  return require('auth0-js');
};

describe('Auth0APIClient', function() {
  beforeEach(function() {
    jest.resetModules();
  });
  describe('init', function() {
    describe('with overrides', function() {
      it('forwards options to WebAuth', function() {
        var options = {
          audience: 'foo',
          redirectUrl: '//localhost:8080/login/callback',
          responseMode: 'query',
          responseType: 'code',
          leeway: 60,
          overrides: {
            __tenant: 'tenant1',
            __token_issuer: 'issuer1'
          },
          plugins: [{ name: 'ExamplePlugin' }],
          _telemetryInfo: {}
        };
        var client = getClient(options);
        var mock = getAuth0ClientMock();
        expect(mock.WebAuth.mock.calls[0][0]).toMatchSnapshot();
      });
    });

    describe('should set authOpt according options', function() {
      it('should set sso:true when inside the universal login page', function() {
        (0, _testUtils.setURL)('https://me.auth0.com/');
        var options = {
          sso: true
        };
        var client = getClient(options);
        expect(client.authOpt.sso).toBe(true);
      });
      it('should set sso:false when inside the universal login page', function() {
        (0, _testUtils.setURL)('https://me.auth0.com/');
        var options = {
          sso: false
        };
        var client = getClient(options);
        expect(client.authOpt.sso).toBe(false);
      });
      it('should set sso:undefined when outside the universal login page', function() {
        (0, _testUtils.setURL)('https://other-url.auth0.com/');
        var options = {};
        var client = getClient(options);
        expect(client.authOpt.sso).toBe(undefined);
      });
    });
  });
  describe('logIn', function() {
    var assertCallWithCallback = function assertCallWithCallback(mock, callbackFunction) {
      expect(mock.calls.length).toBe(1);
      expect(mock.calls[0][0]).toMatchSnapshot();
      mock.calls[0][1]();
      expect(callbackFunction.mock.calls.length).toBe(1);
    };
    describe('with social/enterprise (without username and email)', function() {
      it('should call authorize when redirect===true', function() {
        var client = getClient({
          redirect: true
        });
        var callback = jest.fn();
        client.logIn({}, {}, callback);
        var mock = getAuth0ClientMock();
        var authorizeMock = mock.WebAuth.mock.instances[0].authorize.mock;
        assertCallWithCallback(authorizeMock, callback);
      });
      it('should call popup.authorize when redirect===false', function() {
        var client = getClient({
          redirect: false
        });
        var callback = jest.fn();
        client.logIn({}, {}, callback);
        var mock = getAuth0ClientMock();
        var authorizeMock = mock.WebAuth.mock.instances[0].popup.authorize.mock;
        assertCallWithCallback(authorizeMock, callback);
      });
    });
    describe('with credentials', function() {
      it('should call client.login', function() {
        var client = getClient({
          redirect: true
        });
        var callback = jest.fn();
        client.logIn({ username: 'foo' }, {}, callback);
        var mock = getAuth0ClientMock();
        var loginMock = mock.WebAuth.mock.instances[0].login.mock;
        assertCallWithCallback(loginMock, callback);
      });
      it('should call popup.loginWithCredentials when redirect is false and sso is false', function() {
        var client = getClient({
          redirect: false,
          sso: false
        });
        var callback = jest.fn();
        client.logIn({ username: 'foo' }, {}, callback);
        var mock = getAuth0ClientMock();
        var loginWithCredentialsMock =
          mock.WebAuth.mock.instances[0].popup.loginWithCredentials.mock;
        assertCallWithCallback(loginWithCredentialsMock, callback);
      });
      it('should call popup.loginWithCredentials when redirect is false and sso is true', function() {
        var client = getClient({
          redirect: false,
          sso: true
        });
        var callback = jest.fn();
        client.logIn({ username: 'foo' }, {}, callback);
        var mock = getAuth0ClientMock();
        var loginWithCredentialsMock =
          mock.WebAuth.mock.instances[0].popup.loginWithCredentials.mock;
        assertCallWithCallback(loginWithCredentialsMock, callback);
      });
    });
  });
  it('passwordlessStart should call client.passwordlessStart', function() {
    var client = getClient({});
    client.passwordlessStart({ foo: 'bar' }, function() {});
    var mock = client.client.passwordlessStart.mock;

    expect(mock.calls.length).toBe(1);
    expect(mock.calls[0]).toMatchSnapshot();
  });
  it('passwordlessVerify should call client.passwordlessLogin', function() {
    var client = getClient({});
    client.passwordlessVerify({ foo: 'bar' }, function() {});
    var mock = client.client.passwordlessLogin.mock;

    expect(mock.calls.length).toBe(1);
    expect(mock.calls[0]).toMatchSnapshot();
  });
  it('getUserCountry should call getUserCountry', function() {
    var client = getClient({});
    client.getUserCountry('cb');
    var mock = client.client.client.getUserCountry.mock;

    expect(mock.calls.length).toBe(1);
    expect(mock.calls[0]).toMatchSnapshot();
  });
  describe('parseHash', function() {
    it('should pass __enableImpersonation:false when options._enableImpersonation is not present', function() {
      var client = getClient({});
      client.parseHash('hash', 'cb');
      var mock = getAuth0ClientMock();
      var parseHashMock = mock.WebAuth.mock.instances[0].parseHash.mock;
      expect(parseHashMock.calls.length).toBe(1);
      expect(parseHashMock.calls[0]).toMatchSnapshot();
    });
    it('should pass __enableImpersonation when options._enableImpersonation===true', function() {
      var client = getClient({ _enableImpersonation: true });
      client.parseHash('hash', 'cb');
      var mock = getAuth0ClientMock();
      var parseHashMock = mock.WebAuth.mock.instances[0].parseHash.mock;
      expect(parseHashMock.calls.length).toBe(1);
      expect(parseHashMock.calls[0]).toMatchSnapshot();
    });
  });
});
