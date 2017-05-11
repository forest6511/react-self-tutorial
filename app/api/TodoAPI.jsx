var $ = require('jquery');

module.exports = {
    setTodo: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodo: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filterdTodos = todos;

        // Filter by showCompleted
        filterdTodos = filterdTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // Filter by search Text

        // Sort todos with non-completed first

        return filterdTodos;
    }
};