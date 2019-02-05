

function Component(element) {
    this._element = element;

    this.render = function(text) {
        this._element.innerHTML = `
            <h1>Hello from Component</h1>
            <div>
                <p>${text}</p>
            </div>
        `;
    }
}

var root = document.getElementById('root');
var component = new Component(root);
component.render('Hello DBI, are you asleep?');