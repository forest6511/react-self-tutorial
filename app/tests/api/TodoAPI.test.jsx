var expect = require('expect');

var TodoApi = require('TodoAPI');

describe('TodoApi', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoApi).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [
                {
                    id: 23,
                    test: 'test all files',
                    completed: false
                }
            ];

            TodoApi.setTodo(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });

        it('should not set valid todos array', () => {
            var badTodos = {a: 'b'};
            TodoApi.setTodo(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });

    });

    describe('getTodos', () => {
        it('should return empty array for bad localstorage data', () => {
            var actualTodos = TodoApi.getTodo();
            expect(actualTodos).toEqual([]);
        });

        it('should return todo if valid array in localstorage', () => {
            var todos = [
                {
                    id: 23,
                    test: 'test all files',
                    completed: false
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            expect(TodoApi.getTodo()).toEqual(todos);

        });
    });

    describe('filterTodos', () => {
        var todos = [
            {
                id: 1,
                test: 'some text hrer',
                completed: true
            },
            {
                id: 2,
                test: 'other text hrer',
                completed: false
            },
            {
                id: 3,
                test: 'some text hrer',
                completed: true
            },
        ];

        it('should return all items if showCompleted is ture', () => {
            var filterTodos = TodoApi.filterTodos(todos, true, '');

            expect(filterTodos.length).toBe(3);

        });

        it('should return completed items if showCompleted is false', () => {
            var filterTodos = TodoApi.filterTodos(todos, false, '');

            expect(filterTodos.length).toBe(1);

        });
    });
});
