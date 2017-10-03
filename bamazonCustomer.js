
var inquirer = require('inquirer');
var mysql = require('mysql');
var currentInventory = [];
var status = "";

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'h3ckl3r',
	database: 'bamazon'
});
function validateTheInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}
function promptForPurchase() {
    console.log(status);
    status = "";
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			validate: validateTheInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many?',
			validate: validateTheInput,
			filter: Number
		}
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;

		var queryStr = 'select * from products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;
			console.log("doing the check" +data.length);
			if (data.length == 0) {
				console.log('error: Invalid Item ID.');
				status ="error: invalid item id";
				takeInventory();

			} else {
				var productData = data[0];
				if (quantity <= productData.stock_quantity) {
					console.log('Placing order!');
					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('order has been placed!  total is $' + productData.price * quantity);
						console.log("\n---------------------------------------------------------------------\n");
						connection.end();
					})
				} else {
                    status = "Insufficient quantity in stock to honor request";
					takeInventory();
				}
			}
		})
	})
}
function takeInventory() {
	var data;
	queryStr = 'select * from products order by item_id';
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Current Inventory: ');
		var str = '';
		for (var i = 0; i < data.length; i++) {
			str = '';
			str += 'Item ID: ' + data[i].item_id + ' ';
			str += 'Product Name: ' + data[i].product_name + ' ';
			str += 'Department: ' + data[i].department_name + ' ';
			str += 'Price: $' + data[i].price + '\n';
			console.log(str);
		}
	  	promptForPurchase();
	})
}

function runMe() {
	takeInventory();
}
runMe();