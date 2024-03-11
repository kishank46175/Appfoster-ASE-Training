INSERT INTO CUSTOMERS(id,firstName,lastName,country,item,amount) values(1,Kishan,K,India,keyboard,900);


INSERT INTO CUSTOMERS(id,firstName,lastName,country,item,amount) values(2,"tiger","N","India","keyboard",1200),
(3,"Aditya","Jadhav","India","Mouse",400), (4,"Suraj","P","India","Laptop",12200);


SELECT country, COUNT(*) FROM CUSTOMERS GROUP BY country;




select item from Customers where amount between 100 and 500;


SELECT firstName,lastName from Customers where item like 'keyboard';


SELECT firstName,lastName ,country from Customers where ship_stat like 'pending';
