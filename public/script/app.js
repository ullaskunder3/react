'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameList = function (_React$Component) {
    _inherits(NameList, _React$Component);

    function NameList() {
        _classCallCheck(this, NameList);

        return _possibleConstructorReturn(this, (NameList.__proto__ || Object.getPrototypeOf(NameList)).apply(this, arguments));
    }

    _createClass(NameList, [{
        key: 'render',
        value: function render() {
            var people = [{ name: 'Ullas' }, { name: 'Captain' }, { name: 'America' }];
            return React.createElement(
                'ul',
                null,
                React.createElement(
                    'p',
                    null,
                    'List Component'
                ),
                people.map(function (person) {
                    return React.createElement(
                        'li',
                        { key: person.name },
                        person.name.toUpperCase()
                    );
                })
            );
        }
    }]);

    return NameList;
}(React.Component);
// creating button component


var Button = function (_React$Component2) {
    _inherits(Button, _React$Component2);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                null,
                'Add'
            );
        }
    }]);

    return Button;
}(React.Component);

var Header = function (_React$Component3) {
    _inherits(Header, _React$Component3);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Header Component'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var jsx = React.createElement(
    'div',
    null,
    React.createElement(Header, null),
    React.createElement(NameList, null),
    React.createElement(NameList, null),
    React.createElement(Button, null)
);

ReactDOM.render(jsx, document.getElementById('app'));
