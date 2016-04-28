CREATE TABLE UsersHabanero (
	fName VARCHAR(30) NOT NULL,
    username VARCHAR(50) NOT NULL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    passwrd VARCHAR(50) NOT NULL,
    numTel VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    colonia VARCHAR(30) NOT NULL,
    admin BOOLEAN NOT NULL DEFAULT FALSE 
);

INSERT INTO UsersHabanero(fName, username, email, passwrd, numTel, address, colonia, admin)
VALUES  ('Sandra Cantu', 'sandraBoss', 'habanero@gmail.com', '1234', '83871103' ,'Bahia Blanca 3740', "colonia", TRUE),
		('Karina Villarreal', 'karyConejo', 'sandracantu85@gmail.com', 'conejo', '83871103' ,'Bahia Blanca 3740', "colonia", TRUE);