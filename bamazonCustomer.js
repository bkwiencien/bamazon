var mysql = require("mysql");
var inquirer = require("inquirer");
var currentInventory = [];
var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "h3ckl3r",
        database: "bamazon"
});
connection.connect(function(err){
        if(err){throw err;}
        takeInventory();
        startTheProcess();
        endItAll();

});
function takeInventory() {
	    currentInventory = [];
        connection.query("select * from products order by item_id",function(err,results){
                if(err){throw err;}
               for (j=0;j<results.length;j++) {
                	var data = {
                		item_id:       results[j].item_id,
                		product_name: results[j].product_name,
                		department_name: results[j].department_name,
                		price:          results[j].price
                	}
                    currentInventory.push(data); 
                }
                for (j=0;j<currentInventory.length;j++) {
                	var str = "item_id " + currentInventory[j].item_id + " ";
                	    str = str + "product name " + currentInventory[j].product_name + " ";
                	    str = str + "depertment name " + currentInventory[j].department_name + " ";
                	    str = str + "price " + currentInventory[j].price + "\n";
                	    console.log(str);
                }
               
        });
    }
    function startTheProcess() {
    	
    }
    function endItAll() {
    	connection.end();
    }
