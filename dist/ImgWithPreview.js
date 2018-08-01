'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 带大图预览的图片组件, 鼠标进入时显示预览大图, 移出时去掉预览大图
 */
var ImgWithPreview = function (_Component) {
  _inherits(ImgWithPreview, _Component);

  function ImgWithPreview() {
    _classCallCheck(this, ImgWithPreview);

    var _this = _possibleConstructorReturn(this, (ImgWithPreview.__proto__ || Object.getPrototypeOf(ImgWithPreview)).call(this));

    _this.state = {
      showPreview: false
    };
    return _this;
  }

  _createClass(ImgWithPreview, [{
    key: 'handleShowPreview',
    value: function handleShowPreview() {
      console.log('show');this.setState({ showPreview: true });
    }
  }, {
    key: 'handleHidePreview',
    value: function handleHidePreview() {
      console.log('hide');this.setState({ showPreview: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', _extends({}, this.props, { onMouseEnter: this.handleShowPreview, onMouseLeave: this.handleHidePreview })),
        _react2.default.createElement(
          'div',
          { style: {
              border: "1px solid #ebedf0",
              position: "fixed",
              right: "2%",
              top: "2%",
              borderRadius: "5px",
              zIndex: "999",
              display: this.state.showPreview ? "inline-block" : "none"
            } },
          _react2.default.createElement('img', { src: this.props.src, style: {
              maxWidth: "800px",
              maxHeight: "800px",
              borderRadius: "5px"
            } })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return ImgWithPreview;
}(_react.Component);

var _default = ImgWithPreview;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImgWithPreview, 'ImgWithPreview', 'src/ImgWithPreview.js');
  reactHotLoader.register(_default, 'default', 'src/ImgWithPreview.js');
  leaveModule(module);
})();

;
//# sourceMappingURL=ImgWithPreview.js.map