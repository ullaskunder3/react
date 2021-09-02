'use strict';

var people = [{ name: 'ullas' }, { name: 'kunder' }, { name: 'Villas' }];
var template = React.createElement(
    'ul',
    null,
    people.map(function (person) {
        return React.createElement(
            'li',
            { key: person.name },
            person.name
        );
    })
);
ReactDOM.render(template, document.getElementById('app'));
