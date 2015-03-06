CREATE SCHEMA IF NOT EXISTS travel DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;

CREATE TABLE travel.users (
	user_id int NOT NULL AUTO_INCREMENT,
	login varchar(60) NOT NULL,
	password varchar(60) NOT NULL,
	PRIMARY KEY (user_id));

CREATE TABLE travel.roles (
	role_id int NOT NULL AUTO_INCREMENT,
	role varchar(60) NOT NULL,
	user_id int NOT NULL,
	PRIMARY KEY (role_id));

CREATE TABLE travel.users_roles (
	user_id int NOT NULL,
	role_id int NOT NULL,
	PRIMARY KEY (user_id, role_id),
	CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES travel.users(user_id),
	CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES travel.roles(role_id));

  
CREATE TABLE travel.markers (
	marker_id int NOT NULL AUTO_INCREMENT,
	latitude double NOT NULL,
	longitude double NOT NULL,
	address varchar(250),
	message varchar(250),
	PRIMARY KEY (marker_id));
  
CREATE TABLE travel.routes (
	router_id int NOT NULL AUTO_INCREMENT,
	user_id int NOT NULL,
	PRIMARY KEY (router_id),
	CONSTRAINT fk_user_route FOREIGN KEY (user_id) REFERENCES travel.users(user_id));
	
CREATE TABLE travel.routes_markers (
	router_id int NOT NULL,
	marker_id int NOT NULL,
	PRIMARY KEY (router_id, marker_id),
	CONSTRAINT fk_route FOREIGN KEY (router_id) REFERENCES travel.routes(router_id),
	CONSTRAINT fk_marker FOREIGN KEY (marker_id) REFERENCES travel.markers(marker_id));
	
INSERT INTO travel.users(user_id, login, password)
	VALUES (1, 'den', '1111');
INSERT INTO travel.users(user_id, login, password)
	VALUES (2, 'serg', '1111');

INSERT INTO travel.roles (user_id, role)
	VALUES (1, 'ROLE_ADMIN');
INSERT INTO travel.roles (user_id, role)
	VALUES (2, 'ROLE_USER');

INSERT INTO travel.users_roles (user_id, role_id)
	VALUES (1, 1);
INSERT INTO travel.users_roles (user_id, role_id)
	VALUES (2, 2);
	
INSERT INTO travel.markers (marker_id, latitude, longitude, address, message)
	VALUES (1,32.056258,49.445019,'Lubava','sdsqwe11');
INSERT INTO travel.markers (marker_id, latitude, longitude, address, message)
	VALUES (2,32.063446,49.446637,'Kontrabas','2222');
INSERT INTO travel.markers (marker_id, latitude, longitude, address, message)
	VALUES (3,32.054734,49.435957,'Stadion','333');
INSERT INTO travel.markers (marker_id, latitude, longitude, address, message)
	VALUES (4,32.063317,49.438343,'Central Runok','Runok');
INSERT INTO travel.markers (marker_id, latitude, longitude, address, message)
	VALUES (5,32.070463,49.434659,'Smachne Excpresso','Excpreso');
INSERT INTO travel.markers (marker_id, latitude, longitude, address, message)
	VALUES (6,32.081621,49.435176,'Apelsin','Apelsin');
INSERT INTO travel.markers (marker_id, latitude, longitude, address, message)
	VALUES (7,32.076058,49.439306,'Grand','MArket');
INSERT INTO travel.markers (marker_id, latitude, longitude, address, message)
	VALUES (8,32.067636,49.450412,'Rivera','Rivera');

	
INSERT INTO travel.routes (router_id, user_id)
	VALUES (1, 1);
INSERT INTO travel.routes (router_id, user_id)
	VALUES (2, 2);
INSERT INTO travel.routes (router_id, user_id)
	VALUES (3, 2);