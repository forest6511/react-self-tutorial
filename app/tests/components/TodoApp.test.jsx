var React = require('react');
var TodoApp = require('TodoApp');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var expect = require('expect');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
        // Expect createdAt to be a number.
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handle Toggle called', () => {
        var todoData = {
            id: 12,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // check that todo first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call handleToggle will 12
        todoApp.handleToggle(12);
        expect(todoApp.state.todos[0].completed).toBe(true);
        // Expect  completedAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    // Test that when toggle from true to false, completed At get removed.
    it('should toggle todo from completed to incompleted', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: true,
            createdAt: 0,
            completedAt: 123
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // check that todo first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(true);
        // call handleToggle will 11
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
})