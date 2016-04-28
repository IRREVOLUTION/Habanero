CREATE TABLE MesasHabanero (
	numbero VARCHAR(30) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fecha VARCHAR(50) NOT NULL,
    hora VARCHAR(50) NOT NULL,
    cantP VARCHAR(50) NOT NULL,
    disponible VARCHAR(30) NOT NULL
);

INSERT INTO MesasHabanero(numbero, nombre, fecha, hora, cantP, disponible)
VALUES  ('1', 'sandraBoss', '08/05/1992', '8:00', '5',"FALSE");