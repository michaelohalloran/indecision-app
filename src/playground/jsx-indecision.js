console.log('app.js is running');

let app = {
    title: 'Indecision App',
    subtitle: 'Let computer decide',
    options: []
};

const appRoot = document.getElementById('app');

const handleSubmit = (e)=> {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderPage();
};

const removeAll = ()=> {
    app.options = [];
    renderPage();
};

const handleDecision = ()=> {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderPage = ()=> {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length===0} onClick={handleDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {app.options.map((option, i)=><li key={i}>{option}</li>)}
            </ol>
            <form onSubmit={handleSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderPage();







