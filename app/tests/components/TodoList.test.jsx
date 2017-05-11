var React = require('react');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var expect = require('expect');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Do something'
            },
            {
                id: 2,
                text: 'Check mail'
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });
});