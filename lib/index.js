"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _search = _interopRequireDefault(require("./search"));

var _album = _interopRequireDefault(require("./album"));

var _config = _interopRequireDefault(require("./config"));

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpotifyWrapper = /*#__PURE__*/function () {
  function SpotifyWrapper(options) {
    _classCallCheck(this, SpotifyWrapper);

    this.apiURL = options.apiURL || _config["default"];
    this.token = options.token;
    this.album = _album["default"].bind(this)();
    this.search = _search["default"].bind(this)();
  }

  _createClass(SpotifyWrapper, [{
    key: "request",
    value: function request(url) {
      var headers = {
        headers: {
          Authorization: "'Bearer ".concat(this.token, "'")
        }
      };
      return fetch(url, headers).then(_utils["default"]);
    }
  }]);

  return SpotifyWrapper;
}();

exports["default"] = SpotifyWrapper;