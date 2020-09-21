$("#postButton").on("click", function(e) {
    e.preventDefault();
    var todo = $("#todoText").val();
    $("#todoList").append(`<span name="text"> <input type="checkbox" name="todo" />${todo} <br> </span>`);
})

$("#clearButton").on("click", function(e) {
    e.preventDefault();
    var todos = $("[name=todo]");
    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = false;
    }
})

$("#markButton").on("click", function(e) {
    e.preventDefault();
    var todos = $("[name=todo]");
    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = true;
    }
})

$("#deleteButton").on("click", function(e) {
    e.preventDefault();
    var texts = $("[name=text]");
    var l = texts.length;
    for (var i = 0; i < l; i++) {
        texts[i].remove();
    }
})