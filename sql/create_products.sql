 create table products (
 item_id integer  not null auto_increment,
 product_name varchar(25) not null,
 scientic_name varchar(50),
 department_name varchar(12),
 price float(4,2) not null,
 stock_quantity integer,
 primary key (item_id));