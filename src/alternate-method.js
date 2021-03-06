let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1> Visibility Toggle </h1>
            <button onClick = {toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p> These are the deets you can now see! </p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();