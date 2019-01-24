
(function () {
    var btn = document.getElementById('clickMeBtn');
    btn.onclick = onClickFunction;
    var input = document.getElementById('textInput');
    function onClickFunction() {
        alert('Inputed text: ' + input.value);
    }

})();


(function (){
    var btn = document.getElementById('addMarkup');
    var div = document.getElementById('markupContainer');
    btn.onclick = function () {
        div.innerHTML = `
            <h3>Hello from div</h3>
            <h4>This is rendered markup</h4>
        `;
    }
})();
