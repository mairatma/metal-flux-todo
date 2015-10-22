/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from Todo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Todo.
 */

if (typeof Templates.Todo == 'undefined') { Templates.Todo = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="component"><section class="todoapp">' + Templates.Todo.header(opt_data, null, opt_ijData) + Templates.Todo.main(opt_data, null, opt_ijData) + Templates.Todo.footer(opt_data, null, opt_ijData) + '</section><footer class="info"><p>Double-click to edit a todo</p><p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p><p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p><p>Part of <a href="http://todomvc.com">TodoMVC</a></p></footer></div>');
};
if (goog.DEBUG) {
  Templates.Todo.content.soyTemplateName = 'Templates.Todo.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.header = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<header id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header" class="header"><h1>todos</h1><input class="new-todo" placeholder="What needs to be done?" autofocus data-onkeyup="handleInputKeyUp_"></header>');
};
if (goog.DEBUG) {
  Templates.Todo.header.soyTemplateName = 'Templates.Todo.header';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.main = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-main" class="main' + soy.$$escapeHtmlAttribute(opt_data.todos.length == 0 ? ' hidden' : '') + '"><input class="toggle-all" type="checkbox"><label for="toggle-all">Mark all as complete</label><ul class="todo-list">';
  var todoList20 = opt_data.todos;
  var todoListLen20 = todoList20.length;
  for (var todoIndex20 = 0; todoIndex20 < todoListLen20; todoIndex20++) {
    var todoData20 = todoList20[todoIndex20];
    output += '<li><div class="view"><input class="toggle" type="checkbox"><label>' + soy.$$escapeHtml(todoData20.text) + '</label><button class="destroy"></button></div><input class="edit"></li>';
  }
  output += '</ul></section>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Todo.main.soyTemplateName = 'Templates.Todo.main';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.footer = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<footer id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-footer" class="footer' + soy.$$escapeHtmlAttribute(opt_data.todos.length == 0 ? ' hidden' : '') + '"><span class="todo-count"></span><ul class="filters"><li><a href="#/" class="selected">All</a></li><li><a href="#/active">Active</a></li><li><a href="#/completed">Completed</a></li></ul><button class="clear-completed">Clear completed</button></footer>');
};
if (goog.DEBUG) {
  Templates.Todo.footer.soyTemplateName = 'Templates.Todo.footer';
}

Templates.Todo.content.params = ["id"];
Templates.Todo.header.params = ["id"];
Templates.Todo.main.params = ["id","todos"];
Templates.Todo.footer.params = ["id","todos"];
export default Templates.Todo;
/* jshint ignore:end */
