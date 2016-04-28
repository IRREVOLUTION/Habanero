CREATE TABLE OrderHabanero (
	name VARCHAR(30) NOT NULL PRIMARY KEY,
    list VARCHAR(500) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT "pendiente",
    cantidad INTEGER NOT NULL,
    total INTEGER NOT NULL,
    direccion VARCHAR(100) NOT NULL
);

INSERT INTO OrderHabanero(name, list, status, cantidad, total, direccion)
VALUES  ('Sandra Cantu', '1Orden de Tacos al Carbon-3Orden de Tostadas-2Queso Flameado-', 'pendiente',3, 100, 'Bahia Blanca 3740'),
		('Karina Villarreal', '1Pirata con Carne Asada-3Papa con Carne Asada-', 'pendiente',2, 200, 'Bahia Blanca 3740');