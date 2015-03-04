CREATE SCHEMA IF NOT EXISTS W DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;

CREATE TABLE W.users (
	user_id int NOT NULL AUTO_INCREMENT,
	login varchar(60) NOT NULL,
	password varchar(60) NOT NULL,
	PRIMARY KEY (user_id));

CREATE TABLE W.user_roles (
	role_id int NOT NULL AUTO_INCREMENT,
	role varchar(60) NOT NULL,
	user_id int NOT NULL,
	PRIMARY KEY (role_id),
	CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES W.users(user_id));
  
CREATE TABLE W.markers (
	marker_id int NOT NULL AUTO_INCREMENT,
	latitude double NOT NULL,
	longitude double NOT NULL,
	address varchar(250),
	message varchar(250),
	PRIMARY KEY (marker_id));
  
CREATE TABLE W.routes (
	router_id int NOT NULL AUTO_INCREMENT,
	user_id int NOT NULL,
	PRIMARY KEY (router_id),
	CONSTRAINT fk_user_route FOREIGN KEY (user_id) REFERENCES W.users(user_id));
	
CREATE TABLE W.routes_markers (
	router_id int NOT NULL,
	marker_id int NOT NULL,
	PRIMARY KEY (router_id, marker_id),
	CONSTRAINT fk_route FOREIGN KEY (router_id) REFERENCES W.routes(router_id),
	CONSTRAINT fk_marker FOREIGN KEY (marker_id) REFERENCES W.markers(marker_id));
	
INSERT INTO W.users(user_id, login, password)
	VALUES (1, 'den', '1111');
INSERT INTO W.users(user_id, login, password)
	VALUES (2, 'serg', '1111');

INSERT INTO W.user_roles (user_id, role)
	VALUES (1, 'ROLE_ADMIN');
INSERT INTO W.user_roles (user_id, role)
	VALUES (2, 'ROLE_USER');
	
INSERT INTO W.markers (marker_id, address)
	VALUES (1, 'Cherkasy');
INSERT INTO W.markers (marker_id, address)
	VALUES (2, 'Kiev');
	
INSERT INTO W.routes (router_id, user_id)
	VALUES (1, 1);
INSERT INTO W.routes (router_id, user_id)
	VALUES (2, 2);
INSERT INTO W.routes (router_id, user_id)
	VALUES (3, 2);
	
INSERT INTO W.routes_markers (router_id, marker_id)
	VALUES (1, 1);
INSERT INTO W.routes_markers (router_id, marker_id)
	VALUES (2, 2);
INSERT INTO W.routes_markers (router_id, marker_id)
	VALUES (3, 2);