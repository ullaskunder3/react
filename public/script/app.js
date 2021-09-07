"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeveloperList = function (_React$Component) {
    _inherits(DeveloperList, _React$Component);

    function DeveloperList() {
        _classCallCheck(this, DeveloperList);

        return _possibleConstructorReturn(this, (DeveloperList.__proto__ || Object.getPrototypeOf(DeveloperList)).apply(this, arguments));
    }

    _createClass(DeveloperList, [{
        key: "render",
        value: function render() {
            console.log(this.props.developerlist);
            return React.createElement(
                "ol",
                { className: "developer-list" },
                this.props.developerlist.map(function (developer) {
                    return React.createElement(
                        "li",
                        { key: developer.id, className: "developer-item" },
                        React.createElement("div", { className: "developer-avatar", style: {
                                backgroundImage: "url(" + developer.avatarUrl + ")"
                            } }),
                        React.createElement(
                            "div",
                            { className: "developer-details" },
                            React.createElement(
                                "p",
                                null,
                                developer.name
                            ),
                            React.createElement(
                                "p",
                                null,
                                developer.email
                            )
                        ),
                        React.createElement("button", { className: "contact-remove" })
                    );
                })
            );
        }
    }]);

    return DeveloperList;
}(React.Component);

var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            // Lets use reference
            var developerlist = [{
                id: 'DevJr1',
                name: 'Ullas Kunder',
                email: "ullaskunder3@gmail.com",
                "avatarUrl": "https://randomuser.me/api/portraits/med/men/1.jpg"
            }, {
                id: 'DevJr2',
                name: 'Captain',
                email: "ullaskunder3@gmail.com",
                "avatarUrl": "https://randomuser.me/api/portraits/med/men/1.jpg"
            }, {
                id: 'DevJr3',
                name: 'America',
                email: "ullaskunder3@gmail.com",
                "avatarUrl": "https://randomuser.me/api/portraits/med/men/1.jpg"
            }];
            return React.createElement(
                "div",
                null,
                React.createElement(DeveloperList, { developerlist: developerlist })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
