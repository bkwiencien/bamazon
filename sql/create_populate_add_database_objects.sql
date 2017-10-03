-- create the database --
create datbase bamazon;
use bamazon;
-- create the table --
create table products (
 item_id integer  not null auto_increment,
 product_name varchar(25) not null,
 scientific_name varchar(50),
 department_name varchar(12) not null,
 price float(4,2) not null,
 stock_quantity integer not null,
 primary key (item_id));
 -- populate the products table --
insert into products (product_name,scientific_name,department_name,price,stock_quantity) values('Sugar Apple','Annona squamosa','fruit',2.00,12);
insert into products (product_name,scientific_name,department_name,price,stock_quantity) values('Mammee Apple','Mammea americana','fruit',2.50,20);	
insert into products (product_name,scientific_name,department_name,price,stock_quantity) values('Cherymoya','Annona cherimola','fruit',3.00,10);	
insert into products (product_name,scientific_name,department_name,price,stock_quantity) values('Platonia','Platonia insignis','fruit',3.00,10);	
insert into products (product_name,scientific_name,department_name,price,stock_quantity) values('Breadfruit','Artocarpus altilis','fruit',3.00,5); 	
insert into products (product_name,scientific_name,department_name,price,stock_quantity) values('broccoli ',' Brassica oleracea','vegatable',2.50,50); 	
insert into products (product_name,scientific_name,department_name,price,stock_quantity) values('Spinach',' Spinacia oleracea','vegatable',2.50,50);
insert into products (product_name,scientific_name,department_name,price,stock_quantity) values('Lettuce','Lactuca sativa','vegatable',1.50,40);	
insert into products (product_name,scientific_name,department_name,price,stock_quantity) values('Carrots','aucus carota ','vegatable',2.50,40);
insert into products (product_name,scientific_name,department_name,price,stock_quantity) values('Aspagus','Asparagus officinalis','vegatable',2.50,20);	
commit;