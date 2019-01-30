

(function () {

    var btn = document.getElementById('add');
    var textBox = document.getElementById('textInput');
    var list = document.getElementById('list');
    // var todos = [];

    btn.onclick = onClick;

    function onClick() {
        var text = textBox.value;
        if (!text) {
            return;
        }
        textBox.value = '';
        // todos.push(text);
        list.innerHTML += `
            <li>${text}</li>
        `;
    }

    textBox.onkeypress = function (event) {
        if (event.which === 13) {
            onClick();
        }
    }

})();