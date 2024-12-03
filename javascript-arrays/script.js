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
*/
let groceries = ["milk", "fruit", "bread", "eggs"];
groceries.splice(1, 1, "ice cream");
alert(groceries);
groceries.splice(0, 1);
alert(groceries);
