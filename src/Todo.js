'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import TodoStore from './TodoStore';
import './Todo.soy';

class Todo extends SoyComponent {
}

Todo.ELEMENT_CLASSES = 'todo';

ComponentRegistry.register('Todo', Todo);

export default Todo;
