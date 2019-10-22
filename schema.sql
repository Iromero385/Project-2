-- DROP DATABASE IF EXISTS Explorer_db;

-- CREATE DATABASE Explorer_db;

-- USE Explorer_db;

-- CREATE TABLE explorers(
--     id INT AUTO_INCREMENT NOT NULL,
--     userName VARCHAR(100) NOT NULL,
--     passcode VARCHAR(55) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE locations (
-- 	id INT AUTO_INCREMENT NOT NULL,
--     location VARCHAR(255) NOT NULL,
--     address VARCHAR(255) NOT NULL,
--     rating INT NOT NULL,
--     cost DECIMAL,
--     facts VARCHAR(255) NOT NULL,
--     comments VARCHAR(255),
--     userId INT NOT NULL, 
--     urlImage VARCHAR(255) NOT NULL, 
--     PRIMARY KEY(id),
--     FOREIGN KEY(userId) REFERENCES explorers(id)

-- );