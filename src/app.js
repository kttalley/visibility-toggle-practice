const appTitle = "Visibility Toggle";
let buttonTitle  = "REVEAL THE TROOF"; 
let visible = false;


const revealButton = () => {
//    visible ? visible === true : visibile === false;
    if(visible === false){
        visible = true;
        buttonTitle = 'hide that shit bro';
    } else {
        visible = false;
        buttonTitle = "REVEAL THE TROOF";
    }
    renderTemplate();
}
const renderTemplate = () => {
    const template = (
        <div>
            <h1>{appTitle}</h1>
            <button onClick = {revealButton}> {buttonTitle}</button>
            {visible && <p>This app sucks tho. </p>} 
        </div>
    );

    ReactDOM.render(
        template,
        appRoot
    );
};



const appRoot = document.getElementById('app');
renderTemplate();