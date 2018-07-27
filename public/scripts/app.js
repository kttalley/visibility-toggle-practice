"use strict";

var appTitle = "Visibility Toggle";
var buttonTitle = "REVEAL THE TROOF";
var visible = false;
var upper = true;
var buttonPlacer = function buttonPlacer() {
    if (buttonTitle.length > 14) {}
};

var revealButton = function revealButton() {
    //    visible ? visible === true : visibile === false;
    if (visible === false) {
        visible = true;
        upper = false;
        buttonTitle = 'hide that shit bro';
    } else {
        visible = false;
        upper = true;
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
        upper && React.createElement(
            "button",
            { onClick: revealButton },
            " ",
            buttonTitle
        ),
        visible && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "This app sucks tho. "
            ),
            React.createElement(
                "button",
                { onClick: revealButton },
                " ",
                buttonTitle,
                " "
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderTemplate();
