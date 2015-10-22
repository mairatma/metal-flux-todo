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

	static markCompleted(index) {
		TodoDispatcher.dispatch({
			type: TodoActions.MARK_COMPLETED,
			index: index
		});
	}

	static markIncompleted(index) {
		TodoDispatcher.dispatch({
			type: TodoActions.MARK_INCOMPLETED,
			index: index
		});
	}
}

TodoActions.ADD_TODO = 'add-todo';
TodoActions.MARK_ALL_COMPLETED = 'mark-all-completed';
TodoActions.MARK_ALL_INCOMPLETED = 'mark-all-incompleted';
TodoActions.MARK_COMPLETED = 'mark-completed';
TodoActions.MARK_INCOMPLETED = 'mark-incompleted';

export default TodoActions;
