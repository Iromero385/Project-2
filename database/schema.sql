DROP DATABASE IF EXISTS Explore_db;

CREATE database Explorer_db;

USE Explorer_db; 

CREATE TABLE explorers(
id int NOT NULL auto_increment,
userName varchar(100) NOT NULL,
passcode varchar(255) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE locations(
id int NOT NULL auto_increment,
destination varchar(255) NOT NULL,
address varchar(255) NOT NULL,
rating int NOT NULL,
cost decimal(10,2),
facts varchar(255) NOT NULL, 
comments varchar(255),
userId int NOT NULL, 
urlImage varchar(255) NOT NULL,
primary key(id),
foreign key(userId) references explorers(id)
);

INSERT INTO explorers (userName, passcode) 
value ("papito@gmail.com", "123456");

INSERT INTO locations(destination, address, rating, cost, facts, comments, userId, urlImage)
value("Tacos Chingones", "123 yo mama street Martinez CA 94553", 5, 2.99, "The tacos have melted cheeese between the first and second tortilla layers", "it melts in your face",1,"https://images.getbento.com/accounts/6c88495d27880ed358a00d23e3eb0da9/media/images/289347MdwHLVERTeasl7HHKmU__S8A3968.jpg?w=1000&fit=max&auto=compress,format&h=1000" )


