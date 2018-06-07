'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoList = function () {
	function TodoList() {
		var _this = this;

		_classCallCheck(this, TodoList);

		this.items = [];
		this.$toDoUl = document.querySelector('.todo ul');
		this.$input = document.querySelector('input[name="new-item"]');
		this.$input.addEventListener('keyup', function (event) {
			if (event.keyCode === 13) {
				var newItem = new TodoItem(_this.$input.value);
				_this.$input.innerHTML = '';
				_this.items.push(newItem);
				_this.updateView();
			}
		});
	}

	_createClass(TodoList, [{
		key: 'updateView',
		value: function updateView() {
			for (var i = 0; i < this.items.length; i++) {
				this.$toDoUl.appendChild(this.items[i].$toDoLi);
			}

			this.$totalItems = document.querySelector(".total");
			this.$totalItems.innerHTML = this.items.length;
			console.log(this.items.length);

			this.$doneItems = document.querySelector("span.done");
			this.allDoneItems = document.querySelectorAll("li.done");
			console.log(this.allDoneItems.length);

			this.$doneItems.innerHTML = this.allDoneItems.length;
		}
	}]);

	return TodoList;
}();

/**
 * One todo list item
 * Keeps track of it's own state (text, done, etc)
 * Updates it's own internal DOM as needed
 */


var TodoItem = function () {
	function TodoItem(text) {
		var _this2 = this;

		_classCallCheck(this, TodoItem);

		this.text = text;
		this.done = false;

		this.$toDoLi = document.createElement('li');
		this.$toDoP = document.createElement('p');
		// this.$toDoUL = document.querySelector('ul');

		this.$doneButton = document.createElement('button');
		this.$doneButton.textContent = 'Done';
		this.$doneButton.classList.add('done');

		this.$toDoLi.textContent = this.text;
		this.$toDoLi.appendChild(this.$doneButton);

		this.$doneButton.addEventListener('click', function () {
			_this2.crossOut();
		});
	}

	_createClass(TodoItem, [{
		key: 'crossOut',
		value: function crossOut() {
			this.done = !this.done;
			this.updateViews();
		}
	}, {
		key: 'updateViews',
		value: function updateViews() {
			//access this.done boolean with the li
			if (this.done) {
				this.$toDoLi.classList.add('done');
			} else {
				this.$toDoLi.classList.remove('done');
			}
		}
	}]);

	return TodoItem;
}();

var toDoList = new TodoList();
// let toDoItem1 = new TodoItem(`Milk`);
// let toDoItem2 = new TodoItem(`Eggs`);
// let toDoItem3 = new TodoItem(`Diapers`);
//# sourceMappingURL=main.js.map
