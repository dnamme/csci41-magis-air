DROP DATABASE IF EXISTS magisdb;
CREATE DATABASE magisdb;
USE magisdb;
DROP TABLE IF EXISTS TICKET_SALES;
DROP TABLE IF EXISTS CREW;
DROP TABLE IF EXISTS CREW_ASSIGNMENT;
DROP TABLE IF EXISTS DAYSCHEDULE;
DROP TABLE IF EXISTS FLIGHT;
DROP TABLE IF EXISTS CITY;
DROP TABLE IF EXISTS AIRPORT;
DROP TABLE IF EXISTS AIRPORT_ROUTE;
DROP TABLE IF EXISTS ROUTE;
DROP TABLE IF EXISTS IROUTE;
DROP TABLE IF EXISTS FLIGHT_FBOOKING;
DROP TABLE IF EXISTS FLIGHTBOOKING;
DROP TABLE IF EXISTS ADDITIONALITEM;
DROP TABLE IF EXISTS ITEM_BOOKING;
DROP TABLE IF EXISTS FLIGHT_TRAVELHIST;
DROP TABLE IF EXISTS TRAVEL_HISTORY;
DROP TABLE IF EXISTS PASSENGER;
DROP TABLE IF EXISTS SPASSENGER;
DROP TABLE IF EXISTS AIRPLANE;
DROP TABLE IF EXISTS AIRPLANE_ROUTE;


CREATE TABLE CITY (
    cityid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    cityname VARCHAR(255),
    country VARCHAR(255)
);

CREATE TABLE AIRPORT(
    airportid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    airportname VARCHAR(255),
    airportcapacity INT,
    noofterminals INT,
    cityid INT,
    FOREIGN KEY (cityid) REFERENCES CITY(cityid) ON DELETE RESTRICT
);

CREATE TABLE ROUTE(
    routeid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    origin VARCHAR(255),
    destination VARCHAR(255),
    duration TIME,
    flighttype VARCHAR(20),
    CONSTRAINT chk_ft CHECK (flighttype IN ('direct', 'indirect'))
);

CREATE TABLE AIRPORT_ROUTE(
    airportid INT NOT NULL,
    routeid INT NOT NULL,
    PRIMARY KEY(airportid,routeid),
    FOREIGN KEY(routeid) REFERENCES ROUTE(routeid) ON DELETE RESTRICT,
    FOREIGN KEY(airportid) REFERENCES AIRPORT(airportid) ON DELETE RESTRICT
);

CREATE TABLE IROUTE(
    irouteid INT NOT NULL,
    noofstopovers int,
    PRIMARY KEY (irouteid),
    FOREIGN KEY (irouteid) REFERENCES ROUTE(routeid) ON DELETE RESTRICT
);

CREATE TABLE AIRPLANE(
    airplaneid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    airplanename VARCHAR(255),
    manufacturer VARCHAR(255),
    seatcapacity INT,
    airplanemodel VARCHAR(255),
    status VARCHAR(255)
);

CREATE TABLE AIRPLANE_ROUTE(
    routeid INT NOT NULL,
    airplaneid INT NOT NULL,
    PRIMARY KEY(routeid,airplaneid),
    FOREIGN KEY(routeid) REFERENCES ROUTE(routeid) ON DELETE RESTRICT,
    FOREIGN KEY(airplaneid) REFERENCES AIRPLANE(airplaneid) ON DELETE RESTRICT
);

CREATE TABLE PASSENGER(
    passengerid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    fname VARCHAR(100),
    lname VARCHAR(100),
    middleinitial VARCHAR(3),
    gender VARCHAR(25),
    age INT,
    birthdate DATE
);

CREATE TABLE SPASSENGER(
    spassengerid INT NOT NULL,
    seniorcitizenid INT,
    discount FLOAT,
    PRIMARY KEY (spassengerid),
    FOREIGN KEY (spassengerid) REFERENCES PASSENGER(passengerid) ON DELETE RESTRICT
);

CREATE TABLE FLIGHTBOOKING(
    bookingno INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    bookingdate DATE,
    totalcost FLOAT,
    passengerid INT,
    FOREIGN KEY (passengerid) REFERENCES PASSENGER(passengerid) ON DELETE RESTRICT 
);

CREATE TABLE ADDITIONALITEM(
    itemid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    description VARCHAR(255),
    quantity INT,
    cost FLOAT
);

CREATE TABLE FLIGHT(
    flightid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    depdate DATETIME,
    arrivedate DATETIME,
    duration TIME,
    cost FLOAT,
    originid INT,
    destinationid INT,
    FOREIGN KEY (originid) REFERENCES CITY(cityid) ON DELETE RESTRICT,
    FOREIGN KEY (destinationid) REFERENCES CITY(cityid) ON DELETE RESTRICT
);

CREATE TABLE CREW(
    crewid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    fname VARCHAR(100),
    lname VARCHAR(100),
    middleinitial VARCHAR(3),
    role VARCHAR(100)
);

CREATE TABLE DAYSCHEDULE(
    date DATE,
    flightscheduleid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    flightid INT,
    FOREIGN KEY (flightid) REFERENCES FLIGHT(flightid) ON DELETE RESTRICT
);

CREATE TABLE TRAVELHISTORY(
    generationdate DATE,
    travelhistoryid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    passengerid INT,
    FOREIGN KEY (passengerid) REFERENCES PASSENGER(passengerid) ON DELETE RESTRICT
);

CREATE TABLE TICKET_SALES(
    saleid INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    flightid INT,
    soldnumber INT,
    earnedincome FLOAT,
    periodend DATE,
    FOREIGN KEY (flightid) REFERENCES FLIGHT(flightid) ON DELETE RESTRICT
);

CREATE TABLE FLIGHT_TRAVELHIST(
    flightid INT NOT NULL,
    travelhistoryid INT NOT NULL,
    PRIMARY KEY (flightid, travelhistoryid),
    FOREIGN KEY (flightid) REFERENCES FLIGHT(flightid) ON DELETE RESTRICT,
    FOREIGN KEY (travelhistoryid) REFERENCES TRAVELHISTORY(travelhistoryid) ON DELETE RESTRICT
);

CREATE TABLE CREW_ASSIGNMENT(
    flightid INT NOT NULL,
    crewid INT NOT NULL,
    dateassigned DATE NOT NULL DEFAULT '1970-01-01',
    PRIMARY KEY (flightid, crewid, dateassigned),
    FOREIGN KEY (flightid) REFERENCES FLIGHT(flightid) ON DELETE RESTRICT,
    FOREIGN KEY (crewid) REFERENCES CREW(crewid) ON DELETE RESTRICT
);

CREATE TABLE FLIGHT_FBOOKING(
    flightid INT NOT NULL,
    bookingno INT NOT NULL,
    PRIMARY KEY (flightid, bookingno),
    FOREIGN KEY (flightid) REFERENCES FLIGHT(flightid) ON DELETE RESTRICT,
    FOREIGN KEY (bookingno) REFERENCES FLIGHTBOOKING(bookingno) ON DELETE RESTRICT
);

CREATE TABLE ITEM_FBOOKING(
    itemid INT NOT NULL,
    bookingno INT NOT NULL,
    PRIMARY KEY(itemid, bookingno),
    FOREIGN KEY (itemid) REFERENCES ADDITIONALITEM(itemid) ON DELETE RESTRICT,
    FOREIGN KEY (bookingno) REFERENCES FLIGHTBOOKING(bookingno) ON DELETE RESTRICT
);
