DROP DATABASE IF EXISTS Explorer_db;

CREATE database Explorer_db;

USE Explorer_db;

CREATE TABLE explorers(
id int NOT NULL auto_increment,
userName varchar(100) NOT NULL,
passCode varchar(255) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE locations (
id int NOT NULL auto_increment,
destination varchar(255) NOT NULL,
address varchar(255) NOT NULL,
rating int NOT NULL,
cost decimal(10,2),
facts varchar(255) NOT NULL,
comments varchar(255),
userId int NOT NULL,
urlImage varchar(255) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (userId) REFERENCES explorers(id)
);

INSERT INTO explorers (userName, passCode)
values ("jesus.blopez97@gmail.com" ,"123456");

INSERT INTO locations(destination, address, rating, cost, facts, comments, userID, urlImage)
value (
"Mexico",
"Vive Mexico!",
 5,
3.5,
"The best street tacos ever!",
"Pastor is the best one",
1,
 "https://en.wikipedia.org/wiki/File:001_Tacos_de_carnitas,_carne_asada_y_al_pastor.jpg");