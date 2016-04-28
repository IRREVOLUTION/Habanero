CREATE TABLE Menu (
	nameM VARCHAR(50) NOT NULL PRIMARY KEY,
	precio VARCHAR(50) NOT NULL,
    img VARCHAR(50) NOT NULL,
    descr VARCHAR(5000) NOT NULL,
    class VARCHAR(100) NOt NULL
);

INSERT INTO Menu(nameM, precio, img, descr, class)
VALUES  ("Orden de Tacos al Carbon en Ma&iacute;z", "75.00", "img/orden_taco.jpg", "Cl&aacute;sica orden de 5 tacos ","taco"),
		("Orden de Tacos al Carbon en Harina", "75.00", "img/habanero_logo.jpg", "5 tacos en una deliciosa tortilla de harina","taco"),
		("Papa", "50.00", "img/habanero_logo.jpg", "Deliciosa papa pereparada con mantequilla, queso y creama","plato"),
		("Papa con Carne Asada", "70.00", "img/papa.jpg", "Como nuestra papa pero con carne asada","plato"),
		("Tostada", "20.00", "img/tostada.jpg", "Una tostada con queso gratinado y carne asada","plato"),
		("Hamburgesa al Carbon", "80.00", "img/ham.jpg", "Hamburguesa con papas a la francesa","plato"),
		("Pirata en Harina", "80.00", "img/habanero_logo.jpg", "Pirata con carne y aguacate","taco"),
		("Pirata en Ma&iacute;z", "80.00", "img/habanero_logo.jpg", "Pirata con carne y aguacate","taco"),
		("Pirata en Harina con Aguacate", "80.00", "img/pirata.jpg", "Pirata con carne y aguacate","taco"),
		("Pirata en Ma&iacute;z con Aguacate", "80.00", "img/habanero_logo.jpg", "Pirata con carne y aguacate","taco"),
		("Salchicha Especial con Queso", "30.00", "img/habanero_logo.jpg", "Salchicha de asador entre dos tortillas","entrada"),
		("Queso Flameado", "60.00", "img/habanero_logo.jpg", "Queso flameado con chorizo","entrada"),
		("Frijoles a la Charra", "15.00", "img/habanero_logo.jpg", "Cl&aacute;sicos frijoles a la charra","entrada"),
		("Refrescos", "15.00", "img/habanero_logo.jpg", "Eliga entre Coca-cola, Manzana, Naranja, Sprite, Sangr&iacute;a y Ponche","complemento"),
		("Guacamole", "50.00", "img/habanero_logo.jpg", "Guacamole acompa&ntilde;ado con pico de gallo","complemento"),
		("Cebolla Asada", "15.00", "img/habanero_logo.jpg", "Cebolla asada en la parrilla, acompa&ntilde;ada de sal y lim&oacute;n","complemento"),
		("Sirl&oacute;n", "320.00", "img/habanero_logo.jpg", "1 Kg, Incluye salsa, tortillas y frijoles","kilo"),
		("T-Bone", "320.00", "img/tbone.jpg", "1 Kg, Incluye salsa, tortillas y frijoles","kilo"),
		("Chulet&oacute;n", "170.00", "img/habanero_logo.jpg", "1/2 Kg, Incluye salsa, tortillas y frijoles","kilo");

