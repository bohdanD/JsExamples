
function Todo(buttonEl, textEl, listEl) {
    this.addBtn = buttonEl;
    this.textBox = textEl;
    this.list = listEl;
    this.elements = [];

    this.add = function () {
        var text = this.textBox.value;
        if (!text) {
            return;
        }
        this.textBox.value = '';
        this.elements.push(text);
        this.list.innerHTML += `
            <li>${text}</li>
        `;
    }

    this.render = function(elements) {
        this.textBox.onkeypress = function (event) {
            if (event.which === 13) {
                this.add();
            }
        }.bind(this)
        this.addBtn.onclick = this.add.bind(this);
        if(elements){
            this.elements = elements;
        }
        this.elements.forEach(function(item) {
            this.list.innerHTML += `
            <li>${item}</li>
        `;
        }.bind(this));
    }
}

var btn = document.getElementById('add');
var textBox = document.getElementById('textInput');
var list = document.getElementById('list');
var todo = new Todo(btn, textBox, list);
var array = ['sdsds', 'dfdfdgg', 'fdfdfdfdfdfdfd'];
todo.render(array);