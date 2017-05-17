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
        filterdTodos = filterdTodos.filter((todo) => {
            //console.log(todo);
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        // Sort todos with non-completed first
        filterdTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });


        return filterdTodos;
    }
};