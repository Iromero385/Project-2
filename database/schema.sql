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
INSERT INTO locations (city,destination, address, rating, cost, facts, comments, userId, urlImage)
VALUE 
("San Francisco","Alcatraz","San Francisco, CA 94133",4.5, 49.95,"Alcatraz reveals stories of American incarceration, justice, and our common humanity.", "The trip to alcatraz was amazing. Learned a lot", 1, "../../assets/SfImages/alcatrazz.jpg" ),
("San Francisco","Go-cart experience", "Embarcadero,Ca", 4.8, 126.13, "Pass through the famous Golden Gate Park and explore San Francisco's most iconic sites on a GoCar. Visit the spots you can't get to on a bus and choose to customize your own map! It's totally up to you.", "whoaa!Go carting was an experience for the books", 2, "./../assets/SfImages/tour-yellow-cars.jpeg"),
("San Francisco","Full house scene", "Castro st.", 3.5, 0, "Take some amazing pictures in the actual location where the show 'Full House' was filmed. Rekindle the 90's sitcom show while having a picnic near the famous victorian houses.", " WOW. what a nice picnic we had today.", 1, "../../assets/SfImages/houses.jpeg"),
("San Francisco","Broadway NightLife","Broadway st.", 3.0, "The neon-lined stretch of Broadway through North Beach was historically the city's red-light district, home to strip clubs and other adult businesses, as well as many nightclubs and bars, and has been featured in several films and television shows", "It's always a fun night on Broadway street with a group of people", 1, "./../assets/SfImages/italy.jpeg"),
("San Francisco","Golden Gate Bay Cruise","Golden Gate st.", 4.0, "Sail along San Francisco's breathtaking waterfront, under the majestic Golden Gate Bridge, and around notorious Alcatraz Island. Discover San Francisco's history via an award-winning audio commentary, available in 16 languages.", "Sailing during the evening was incredible!", 2, "./../assets/SfImages/bridgeImage.jpeg"),
("San Francisco","Muir Woods","Marin,Ca",4.7,10.00,"Muir Woods, home to some of the oldest and most beautiful trees in the world; you will have over an hour to walk amongst the breathtaking redwoods before coming back to SF.", "Loved to see all the trees in Muir Woods. Will come back soon!", 1, "./../assets/SfImages/muirwoods.jpeg"),
("San Francisco","Bay Sailing Tour with Drinks","Embarcadero,Ca",5.0,49.96,"For a relaxing afternoon on the water, hop aboard the Privateer traditional sailboat for a 90-minute cruise of the bay, complete with beer and wine. Get personal attention from a skilled crew as you enjoy stunning views of the bay!", "Loved to sail the pacific ocean! Will come back soon!", 2, "../../assets/SfImages/sailing.jpg"),
("San Francisco","Hop-On Hop-Off: Classic, Premium or Deluxe","Embarcadero,Ca",3.5,55.00,"See the sights of San Francisco at your own pace from the top deck of a double decker, hop-on hop-off sightseeing bus. Choose from a Classic, Premium or Deluxe Ticket and marvel at monuments such as the Transamerica Pyramid and Golden Gate Bridge.", "Bus ride was incredible! Will come back soon!", 2, "../../assets/SfImages/bustour.jpg"),
("San Francisco","Scenic Helicopter Flight","Polk st.",5.0,265.00,"Soar over San Francisco on an exhilarating 25-30 minute helicopter flight and get bird's eye views of Alcatraz, the Golden Gate Bridge, Angel Island and the coastline of California.", "Unbelievable experince! Most memorable anniversary!", 1, "../../assets/SfImages/heli.jpg"),
("San Francisco","Skip The Line: California Academy of Sciences Entrance"," Grand Ave.",4.5,35.00,"Visit San Francisco’s California Academy of Sciences, the world’s only aquarium-planetarium-rainforest-living museum. The venue allows you to see African penguins, rocket through the galaxy, experience a coral reef, and much more, all in one place!", "Fun time! took my kids and they loved it!", 2, "../../assets/SfImages/CAS.jpg");
INSERT INTO locations (city,destination, address, rating, cost, facts, comments, userId, urlImage)
VALUE ("Seattle", "Seattle: Pike Place Market Chef-Guided Food Tour", "Seattle,Ca", 4.6, 59.95,"Embark on a culinary tasting adventure of Pike Place Market with a local chef guide. Stop at 10 different artisanal vendors; learning about local production and tasting your way through the flavors of the Northwest.", "Very fun time exploring Pike Place!", 1, "../../assets/SeattleImages/PM.jpg"),
("Seattle", "Mount Rainier Park All-Inclusive Small Group Tour", "Seattle,Ca", 4.8, 249.95,"Discover Mt. Rainier like never before on this day-long, guided walk or snowshoe adventure with a stop for lunch. Learn local secrets as you enjoy spectacular scenery and explore thrilling trails.",  "It's a long 10 hours but worth it when you actually get up to the mountain", 2,"../../assets/SeattleImages/mountain.jpg"),
("Seattle", "Olympic National Park Small Group Tour", "Seattle,Ca", 4.8, 263.15, "Explore the rugged and beautiful World Heritage Site, the Olympic National Park, with your small group in a comfortable van, an award-winning local guide, a beautiful lunch, local wine, snacks, and drinks.", "These trails were stunning!",1, "../../assets/SeattleImages/hug.jpg"),
("Seattle","Snoqualmie Falls & Woodinville Wine Tasting", "Seattle,Ca", 4.5, 240.15, "Experience the essence of Washington's wild beauty and independent spirit on a memorable day trip to Snoqualmie Falls and the Woodinville Wine Country. Taste fine wines at 3 boutique wineries and follow trails on interpretative nature walks.", "The wine was so good!I will definetly be coming back with a bigger group", 2,"../../assets/SeattleImages/wine.jpg"),
("Seattle","Half-Day Coffee, Chocolate, and Wine Tour", "Seattle,Ca", 4.8, 99.00, "Experience an exclusive guided tour of Starbucks' flagship Roastery location where the best coffee in the world is served daily, visit Fran’s Chocolates production facility for a tour and tasting, and end your tour at Browne Family Vineyards.", "The chocolate was so good!I will plan for a longer time next time",1, "../../assets/SeattleImages/choc.jpg"),
("Seattle","Underground Donut Tour", "Seattle,Ca", 4.7, 30.00, "Take a trip with Seattle's only donut tour. Making 4 stops at some of the city's best donut shops, you'll sample all the best donuts Seattle has to offer. You can enjoy samples at each location, and learn about the history of donuts in the Emerald City.", "The donuts had a particular flavor you will not be able to find anywhere else!Incredible",2,"../../assets/SeattleImages/donut.jpg"),
("Seattle","Cooking Class and Pike Place Market Tour","Seattle,Ca",3.5, 127.00,"Get an introduction to fresh ingredients sourced from Pike Place. Create a multi-course meal before indulging in the fruits of your labor. End the experience with a brief market tour.", "cooking was amazing, it seemed like the chef really seemed like he knew what he was doing",1,"../../assets/SeattleImages/cook.jpg"),
("Seattle","Private San Juan Island Tour","Seattle,Ca",5.0, 787.91,"Spend the day exploring San Juan Island, discovering this mysterious landscape with a naturalist guide. Ride a ferry to seek fantastic hikes, birding spots, and whale watching from shore. Transportation, a light breakfast, and lunch are included.", "The boat scene during the evening was unforgettable. Will do it again",2,"../../assets/SeattleImages/island.jpg"),
("Seattle","The Ultimate Food Experience with Local Guide","Seattle,Ca",4.7, 188.26,"Discover the famous spots and hidden gems of the Seattle food scene! With your local guide, you will discover why Seattle is known for Pacific Northwest cuisine and fresh produce. Indulge in local treats, like clam chowder, mac n' cheese and craft beer!", "Eating street food is my favorite especially in Seattle.", 1, "../../assets/SeattleImages/food.jpg"),
("Seattle","Cannabis Tour: Half-Day Herban Adventure","Seattle,Ca",3.5, 114.26,"Explore behind the scenes of Seattle’s cannabis industry and culture on this 2.5-hour tour. Follow your guide down the rabbit hole of America’s fastest growing start-up industry.", "It was awful. never coming back.", 2, "../../assets/SeattleImages/canni.jpg");