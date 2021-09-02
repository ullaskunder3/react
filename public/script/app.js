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

ReactDOM.render(React.createElement(NameList, null), document.getElementById('app'));
