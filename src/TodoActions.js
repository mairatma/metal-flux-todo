'use strict';

import TodoDispatcher from './TodoDispatcher';

class TodoActions {
	static addTodo(text) {
		TodoDispatcher.dispatch({
			type: TodoActions.ADD_TODO,
			text: text
		});
	}

	static markAllCompleted() {
		TodoDispatcher.dispatch({
			type: TodoActions.MARK_ALL_COMPLETED
		});
	}

	static markAllIncompleted() {
		TodoDispatcher.dispatch({
			type: TodoActions.MARK_ALL_INCOMPLETED
		});
	}
}

TodoActions.ADD_TODO = 'add-todo';
TodoActions.MARK_ALL_COMPLETED = 'mark-all-completed';
TodoActions.MARK_ALL_INCOMPLETED = 'mark-all-incompleted';

export default TodoActions;
