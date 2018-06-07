
class TodoList {
	constructor() {

		this.items = [];
		this.$toDoUl = document.querySelector('.todo ul')
		this.$input = document.querySelector('input[name="new-item"]');
		this.$input.addEventListener('keyup',  (event) => {
			if (event.keyCode === 13) {
				let newItem = new TodoItem(this.$input.value);
				this.$input.innerHTML = '';
				this.items.push(newItem);
				this.updateView()
				
			}
			
		});

		
	}

	updateView() {
		for (var i = 0; i < this.items.length; i++) {
			this.$toDoUl.appendChild(this.items[i].$toDoLi);
		}

		this.$totalItems = document.querySelector(".total");
		this.$totalItems.innerHTML = this.items.length;
		console.log(this.items.length);

		this.$doneItems = document.querySelector("span.done");
		this.allDoneItems = document.querySelectorAll("li.done");
		console.log(this.allDoneItems.length)

		this.$doneItems.innerHTML = this.allDoneItems.length
	}

}





/**
 * One todo list item
 * Keeps track of it's own state (text, done, etc)
 * Updates it's own internal DOM as needed
 */
class TodoItem {
	constructor(text) {


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
			
		this.$doneButton.addEventListener('click', () => {
			this.crossOut();

		})
	}


	crossOut() {
		this.done = !this.done;
		this.updateViews();	
		
	}

	updateViews () {
		//access this.done boolean with the li
		if (this.done) {
			this.$toDoLi.classList.add('done');
		} else {
			this.$toDoLi.classList.remove('done');
		}
	}
}


let toDoList = new TodoList();
// let toDoItem1 = new TodoItem(`Milk`);
// let toDoItem2 = new TodoItem(`Eggs`);
// let toDoItem3 = new TodoItem(`Diapers`);