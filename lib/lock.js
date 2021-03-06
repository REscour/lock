'use strict';

exports.__esModule = true;

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

var _classic = require('./engine/classic');

var _classic2 = _interopRequireDefault(_classic);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var Auth0Lock = (function(_Core) {
  _inherits(Auth0Lock, _Core);

  function Auth0Lock(clientID, domain, options) {
    _classCallCheck(this, Auth0Lock);

    var _this = _possibleConstructorReturn(
      this,
      _Core.call(this, clientID, domain, options, _classic2.default)
    );

    (0, _core.injectStyles)();
    return _this;
  }

  return Auth0Lock;
})(_core2.default);

// telemetry

exports.default = Auth0Lock;
Auth0Lock.version = '11.4.0';

// TODO: should we have different telemetry for classic/passwordless?
// TODO: should we set telemetry info before each request?
// TODO: should we inject styles here?
