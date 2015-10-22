'use strict';

import TodoDispatcher from './TodoDispatcher';

class TodoActions {
	static addTodo(text) {
		TodoDispatcher.dispatch({
			type: TodoActions.ADD_TODO,
			text: text
		})
	}
}

TodoActions.ADD_TODO = 'add-todo';

export default TodoActions;
