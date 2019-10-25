DROP DATABASE IF EXISTS Explorer_db;
CREATE DATABASE Explorer_db;
USE Explorer_db;
CREATE TABLE explorers(
    id INT AUTO_INCREMENT NOT NULL,
    userName VARCHAR(100) NOT NULL,
    passcode VARCHAR(55) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE locations (
    id INT AUTO_INCREMENT NOT NULL,
    city VARCHAR(100) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    cost DECIMAL(4,2),
    facts VARCHAR(255) NOT NULL,
    comments VARCHAR(255),
    userId INT NOT NULL, 
    urlImage VARCHAR(255) NOT NULL, 
    PRIMARY KEY(id),
    FOREIGN KEY(userId) REFERENCES explorers(id)
);
INSERT INTO explorers (userName, passcode)
VALUE ("papito@gmail.com", "12345"), ("JIGGALOW", "QUERY");
INSERT INTO locations (city,destination, address, rating, cost, facts, comments, userId, urlImage)
VALUE ("San Francisco","Alcatraz","",4.5, 49.95,"Alcatraz reveals stories of American incarceration, justice, and our common humanity.", "The trip to alcatraz was amazing. Learned a lot", 1, "../../assets/SfImages/alcatrazz.jpg" ),
("San Francisco","Go-cart experience", "Embarcadero,Ca", 4.8, 126.13, "Pass through the famous Golden Gate Park and explore San Francisco's most iconic sites on a GoCar. Visit the spots you can't get to on a bus and choose to customize your own map! It's totally up to you.", "whoaa!Go carting was an experience for the books", 2, "../../assets/SfImages/tour-yellow-cars.jpeg"),
("San Francisco","Full house scene", "Castro st.", 3.5, 0, "Take some amazing pictures in the actual location where the show 'Full House' was filmed. Rekindle the 90's sitcom show while having a picnic near the famous victorian houses.", " WOW. what a nice picnic we had today.", 1, "../../assets/SfImages/houses.jpeg");