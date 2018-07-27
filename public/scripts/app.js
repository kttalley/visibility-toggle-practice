"use strict";

var appTitle = "Visibility Toggle";
var buttonTitle = "REVEAL THE TROOF";
var visible = false;

var revealButton = function revealButton() {
    //    visible ? visible === true : visibile === false;
    if (visible === false) {
        visible = true;
        buttonTitle = 'hide that shit bro';
    } else {
        visible = false;
        buttonTitle = "REVEAL THE TROOF";
    }
    renderTemplate();
};
var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            appTitle
        ),
        React.createElement(
            "button",
            { onClick: revealButton },
            " ",
            buttonTitle
        ),
        visible && React.createElement(
            "p",
            null,
            "This app sucks tho. "
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderTemplate();
