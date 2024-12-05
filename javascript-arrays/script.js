/*let tasks = ["do homework", " clean up room", " eat dinner"];
// 				  0 			  1 			  2
alert(tasks[1]); // grab first item
tasks[0] = "make dinner"; // change first item
alert(tasks); //print list

tasks.push(" take a shower"); //appends to list
alert(tasks);

tasks.pop(); // removes last item of the list
alert(tasks);

tasks.splice();
// listName.splice(# of index where to start, number of elements to remove, element to add)
let myList = ["x", "t", "v", "c", "e"];
myList.splice(1, 1, "a"); // 3 parameters = all
myList.splice(3, 1); // 2 parameters = not replacing with anything
myList.splice(3); // 1 parameter = removes all items after it not including itself
alert(myList);

// splice removes all items after number of item
// slice removes all items before number of item

let groceries = ["milk", "fruit", "bread", "eggs"];
groceries.splice(1, 1, "ice cream");
alert(groceries);
groceries.splice(0, 1);
alert(groceries);
*/

let items = ["phone", "computer", "book"];
console.log(items);
items.push("pencil", "highlighter"); // add two items at end
console.log(items);
items.pop(); // remove last item
console.log(items);
items.splice(1, 0, "glasses"); // add new item to second place
console.log(items);
items.splice(2, 1); // remove third item
console.log(items);

let numbers = ["1", "2", "3"];
console.log(numbers);
numbers.splice(0, 0, "4"); // add number at start
console.log(numbers);
numbers.splice(1, 1, "6"); // replace second number
console.log(numbers);
