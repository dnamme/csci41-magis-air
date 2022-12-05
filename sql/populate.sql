INSERT INTO 
CITY(cityname, country)
VALUES
('Manila', 'Philippines'),
('Singapore', 'Singapore'),
('Beijing', 'China'),
('Shanghai', 'China'),
('Tokyo', 'Japan'),
('Los Angeles', 'USA'),
('New York', 'USA'),
('London', 'UK');

INSERT INTO
AIRPORT(airportname, airportcapacity, noofterminals, cityid)
VALUES
('Ninoy Aquino International Airport', 250, 4, 1),
('Changi Airport', 350, 4, 2),
('Beijing Capital International Airport', 400, 3, 3),
('Shanghai Pudong International Airport', 650, 3, 4),
('Shanghai Hongqiao International Airport', 450, 3, 4),
('Narita International Airport', 500, 3, 5),
('Los Angeles International Airport', 500, 9, 6),
('John Wayne Airport', 400, 3, 6),
('John F. Kennedy International Airport', 350, 8, 7),
('Newark Liberty International Airport', 250, 4, 7),
('Heathrow Airport', 500, 4, 8);

INSERT INTO
ROUTE(origin, destination, flighttype)
VALUES
('Manila', 'Singapore', 'direct'),  # 1
('Singapore', 'Manila', 'direct'),  # 2
('Manila', 'Beijing', 'direct'),  # 3
('Beijing', 'Manila', 'direct'),  # 4
('Manila', 'Beijing', 'indirect'),  # 5
('Beijing', 'Manila', 'indirect'),  # 6
('Singapore', 'Beijing', 'direct'),  # 7
('Beijing', 'Singapore', 'direct'),  # 8
('Manila', 'Shanghai', 'direct'),  # 9
('Shanghai', 'Manila', 'direct'),  # 10
('Singapore', 'Shanghai', 'direct'),  # 11
('Shanghai', 'Singapore', 'direct'),  # 12
('Manila', 'Tokyo', 'direct'),  # 13
('Tokyo', 'Manila', 'direct'),  # 14
('Singapore', 'Tokyo', 'direct'),  # 15
('Tokyo', 'Singapore', 'direct'),  # 16
('Shanghai', 'Tokyo', 'direct'),  # 17
('Tokyo', 'Shanghai', 'direct'),  # 18
('Manila', 'Los Angeles', 'direct'),  # 19
('Los Angeles', 'Manila', 'direct'),  # 20
('Manila', 'Los Angeles', 'indirect'),  # 21
('Los Angeles', 'Manila',  'indirect'),  # 22
('Beijing', 'Los Angeles', 'direct'),  # 23
('Los Angeles', 'Beijing', 'direct'),  # 24
('Beijing', 'Los Angeles', 'indirect'),  # 25
('Los Angeles', 'Beijing', 'indirect'),  # 26
('Manila', 'New York', 'direct'),  # 27
('New York', 'Manila', 'direct'),  # 28
('Manila', 'New York', 'indirect'),  # 29
('New York', 'Manila', 'indirect'),  # 30
('Singapore', 'New York', 'indirect'),  # 31
('New York', 'Singapore', 'indirect'),  # 32
('Tokyo', 'New York', 'direct'),  # 33
('New York', 'Tokyo', 'direct'),  # 34
('Tokyo', 'New York', 'indirect'),  # 35
('New York', 'Tokyo', 'indirect'),  # 36
('Manila', 'London', 'direct'),  # 37
('London', 'Manila', 'direct'),  # 38
('Manila', 'London', 'indirect'),  # 39
('London', 'Manila', 'indirect'),  # 40
('Beijing', 'London', 'direct'),  # 41
('London', 'Beijing', 'direct'),  # 42
('Beijing', 'London', 'indirect'),  # 43
('London', 'Beijing', 'indirect'),  # 44
('Shanghai', 'London', 'direct'),  # 45
('London', 'Shanghai', 'direct'),  # 46
('Shanghai', 'London', 'indirect'),  # 47
('London', 'Shanghai', 'indirect');  # 48

INSERT INTO
IROUTE(irouteid, noofstopovers)
VALUES
(5, 1),
(6, 1),
(21, 1),
(22, 1),
(25, 1),
(26, 1),
(29, 1),
(30, 1),
(31, 2),
(32, 2),
(39, 1),
(40, 1),
(43, 2),
(44, 2),
(47, 1),
(48, 1);

INSERT INTO
AIRPORT_ROUTE(airportid, routeid)
VALUES
(1, 1),
(1, 3),
(1, 5),
(1, 9),
(1, 13),
(1, 19),
(1, 21),
(1, 27),
(1, 29),
(1, 37),
(1, 39),
(2, 2),
(2, 7),
(2, 11),
(2, 15),
(2, 31),
(3, 4),
(3, 6),
(3, 8),
(3, 23),
(3, 25),
(3, 41),
(3, 43),
(4, 10),
(4, 12),
(4, 17),
(4, 45),
(4, 47),
(5, 10),
(5, 12),
(5, 17),
(6, 14),
(6, 16),
(6, 18),
(6, 33),
(6, 35),
(7, 20),
(7, 22),
(7, 24),
(7, 26),
(8, 20),
(8, 24),
(9, 28),
(9, 30),
(9, 32),
(9, 34),
(9, 36),
(10, 30),
(10, 32),
(10, 36),
(11, 38),
(11, 40),
(11, 42),
(11, 44),
(11, 46),
(11, 48);

INSERT INTO
FLIGHT(deptime, arrivetime, cost, routeid, code)
VALUES
('2021-01-30 20:25:00', '2021-01-30 23:55:00', 265, 1, 'MA 801'),
('1970-01-01 00:45:00', '1970-01-01 4:00:00', 265, 2, 'MA 803'),
('2010-01-01 4:15:00', '2010-01-01 8:55:00', 435, 3, 'MA 811'),
('2010-01-23 10:05:00', '2010-01-23 14:45:00', 435, 4, 'MA 831'),
('2012-01-01 6:30:00', '2012-01-01 12:30:00', 450, 7, 'MA 501'),
('2012-01-31 13:40:00', '2012-01-31 19:40:00', 450, 8, 'MA 420'),
('2012-03-14 9:40:00', '2012-03-14 14:45:00', 570, 11, 'MA 802'),
('2019-01-01 15:50:00', '2019-01-01 19:55:00', 570, 12, 'MA 893'),
('2021-01-30 15:30:00', '2021-01-30 18:05:00', 475, 17, 'MA 842'),
('2021-01-30 2:45:00', '2021-01-30 15:25:00', 575, 21, 'MA 823'),
('2021-01-30 6:30:00', '2021-01-30 22:15:00', 500, 30, 'MA 890'),
('2021-01-30 11:05:00', '2021-01-30 14:35:00', 265, 1, 'MA 891'),
('2021-01-30 15:30:00', '2021-01-30 18:45:00', 265, 2, 'MA 892'),
('2010-01-01 15:55:00', '2010-01-01 20:35:00', 435, 3, 'MA 893'),
('2010-01-01 21:35:00', '2010-01-02 2:15:00', 435, 4, 'MA 807'),
('2010-01-02 2:15:00', '2010-01-02 5:30:00', 480, 9, 'MA 701'),
('2010-01-01 6:45:00', '2010-01-01 10:00:00', 480, 10, 'MA 721'),
('2010-01-02 18:00:00', '2010-01-03 11:25:00', 475, 40, 'MA 711'),
('2022-12-22 4:00:00', '2022-12-22 10:00:00', 450, 8, 'MA 821'),
('2022-12-22 20:50:00', '2022-12-23 2:50:00', 450, 7, 'MA 222'),
('2022-12-24 11:15:00', '2022-12-24 14:30:00', 480, 9, 'MA 201'),
('2022-12-24 15:45:00', '2022-12-24 19:00:00', 480, 10, 'MA 806'),
('2022-12-24 7:15:00', '2022-12-24 11:10:00', 300, 13, 'MA 691'),
('2022-12-25 12:15:00', '2022-12-26 16:20:00', 300, 13, 'MA 401');

INSERT INTO
AIRPLANE (airplanename, manufacturer, seatcapacity, airplanemodel)
VALUES
('Boeing 737 Next Generation', 'Boeing', 162, '737-800'),
('Boeing 747', 'Boeing', 467, '747-8I'),
('Boeing 77X', 'Boeing', 426, '777-9'),
('Airbus A320', 'Airbus', 150, 'A320-200'),
('Airbus A330', 'Airbus', 277, 'A330-300'),
('Airbus A350', 'Airbus', 325, 'A350-900');

INSERT INTO
AIRPLANE_ROUTE(routeid, airplaneid)
VALUES
(1, 1),
(1, 4),
(1, 5),
(2, 1),
(2, 4),
(2, 5),
(3, 1),
(3, 4),
(3, 5),
(4, 1),
(4, 4),
(4, 5),
(5, 2),
(5, 3),
(5, 6),
(6, 2),
(6, 3),
(6, 6),
(7, 1),
(7, 4),
(7, 5),
(8, 1),
(8, 4),
(8, 5),
(9, 1),
(9, 4),
(9, 5),
(10, 1),
(10, 4),
(10, 5),
(11, 1),
(11, 4),
(11, 5),
(12, 1),
(12, 4),
(12, 5),
(13, 1),
(13, 4),
(13, 5),
(14, 1),
(14, 4),
(14, 5),
(15, 1),
(15, 4),
(15, 5),
(16, 1),
(16, 4),
(16, 5),
(17, 1),
(17, 4),
(17, 5),
(18, 1),
(18, 4),
(18, 5),
(19, 4),
(19, 5),
(20, 4),
(20, 5),
(21, 2),
(22, 3),
(23, 1),
(24, 2),
(25, 6),
(26, 2),
(27, 4),
(28, 1),
(29, 3),
(30, 6),
(31, 2),
(32, 3),
(33, 4),
(34, 5),
(35, 1),
(36, 4),
(37, 5),
(38, 1),
(39, 6),
(40, 2),
(41, 4),
(42, 5),
(43, 3),
(44, 6),
(45, 1),
(46, 4),
(47, 2),
(48, 3);

INSERT INTO
PASSENGER(fname, lname, middleinitial, gender, birthdate)
VALUES
('Mariah', 'Carey', 'A', 'Female', '1969-3-27'),
('Amy', 'Grant', 'D', 'Female', '1982-7-21'),
('Layton', 'Porter', 'J', 'Male', '1976-4-29'),
('Ruben', 'Blevins', 'L', 'Male', '1952-12-2'), # Senior
('Muhammad', 'Hatfield', 'C', 'Male', '1997-4-12'),
('Bernard', 'Poole', 'D', 'Non-binary', '2000-7-21'),
('Inaaya', 'Huff', 'G', 'Female', '1997-11-21'),
('Iqra', 'Suarez', 'Y', 'Female', '2000-8-3'),
('Corey', 'Barker', 'P', 'Male', '1989-7-9'),
('Emily', 'Barker', 'E', 'Female', '1991-1-19'),
('Ted', 'Barker', 'E', 'Male', '2013-9-30'),
('Isabelle', 'Crawford', 'P', 'Female', '1960-7-21'), # Senior
('Emilia', 'Rubio', 'O', 'Female', '1961-3-16'), # Senior
('Aimee', 'Michael', 'O', 'Female', '1981-6-11'),
('Priya', 'Burch', 'L', 'Female', '1978-2-1'),
('Rio', 'Larsen', 'S', 'Male', '1997-10-7'),
('Jenny', 'Larsen', 'S', 'Female', '1982-10-7'),
('Awais', 'Leonard', 'I', 'Male', '1974-7-21'),
('Leyla', 'Hurst', 'V', 'Female', '1992-2-24'),
('Elois', 'Rocha', 'Q', 'Female', '2001-8-16'),
('Alistair', 'Ho', 'C', 'Male', '1994-3-3'),
('Elijah', 'Maldonado', 'K', 'Male', '1976-6-10'),
('Amy', 'Jimenez', 'F', 'Female', '1986-2-6'),
('Tina', 'Macdonald', 'B', 'Female', '1995-12-25');

INSERT INTO
SPASSENGER(spassengerid, seniorcitizenid, discount)
VALUES
(4, 3924270, 0.8),
(12, 7529412, 0.8),
(13, 3040065, 0.8);

INSERT INTO
FLIGHTBOOKING(bookingdate, passengerid) 
VALUES
('2022-11-28', 1),
('2022-11-28', 18),
('2022-11-28', 22),
('2022-11-28', 15),
('2022-11-29', 9),
('2022-11-29', 10),
('2022-11-29', 11),
('2022-11-30', 4),
('2022-11-30', 12),
('2022-11-30', 13);

INSERT INTO
FLIGHT_FBOOKING(flightid, bookingno)
VALUES
(23, 1),
(19, 2),
(24, 3),
(20, 4),
(19, 5),
(19, 6),
(19, 7),
(22, 8),
(21, 9),
(21, 10);

INSERT INTO
ADDITIONALITEM(description, quantity, cost)
VALUES
('Terminal Fees', 1, 5),
('Check-in Luggage (5kg)', 1, 30),
('Check-in Luggage (5kg)', 2, 30),
('Check-in Luggage (10kg)', 1, 50);

INSERT INTO
ITEM_FBOOKING(itemid, bookingno)
VALUES
(1, 1),
(4, 1),
(1, 2),
(1, 3),
(2, 3),
(1, 4),
(1, 5),
(3, 5),
(1, 6),
(1, 7),
(2, 1),
(1, 8),
(1, 9),
(2, 9),
(1, 10);

INSERT INTO
TRAVELHISTORY(generationdate, passengerid)
VALUES
('2022-11-21', 1),
('2022-11-23', 3),
('2022-11-27', 15);

INSERT INTO 
FLIGHT_TRAVELHIST(flightid, travelhistoryid)
VALUES
(1, 1),
(3, 1),
(5, 1),
(8, 1),
(3, 2),
(7, 2),
(12, 2),
(3, 3),
(6, 3),
(17, 3);

INSERT INTO
TICKET_SALES(flightid, soldnumber, periodend)
VALUES
(1, 83, '2021-01-30'),
(2, 21, '1970-01-01'),
(3, 56, '2010-01-01'),
(4, 72, '2010-01-23'),
(5, 61, '2012-01-01'),
(6, 89, '2012-01-31'),
(7, 73, '2012-03-14'),
(8, 54, '2019-01-01'),
(9, 23, '2021-01-30'),
(10, 28, '2021-01-30'),
(11, 46, '2021-01-30'),
(12, 47, '2021-01-30'),
(13, 37, '2021-01-30'),
(14, 76, '2010-01-01'),
(15, 68, '2010-01-01'),
(16, 87, '2010-01-02'),
(17, 91, '2010-01-01'),
(18, 67, '2010-01-02');

INSERT INTO
CREW(fname, lname, middleinitial, role)
VALUES
('Kamil', 'Raymond', 'D', 'Captain'),
('Nicole', 'Quinn', 'O', 'Captain'),
('Denzel', 'Frank', 'F', 'Captain'),
('Sahil', 'Hoffman', 'P', 'First Officer'),
('Raees', 'Francis', 'B', 'First Officer'),
('Farrah', 'Parish', 'L', 'First Officer'),
('Thomas', 'Prince', 'Y', 'Flight Attendant'),
('Clark', 'Reyes', 'S', 'Flight Attendant'),
('Kathleen', 'Garrett', 'M', 'Flight Attendant'),
('Rachel', 'Henderson', 'K', 'Flight Attendant'),
('Karen', 'Nielsen', 'D', 'Flight Attendant'),
('Wendy', 'Smith', 'R', 'Flight Attendant'),
('Iona', 'Wise', 'M', 'Flight Attendant'),
('Shawn', 'Rosario', 'J', 'Flight Attendant'),
('Carrie', 'Winter', 'P', 'Flight Attendant');

INSERT INTO
CREW_ASSIGNMENT(flightid, crewid, dateassigned)
VALUES
(1, 2, '2021-1-15'),
(1, 5, '2021-1-15'),
(1, 10, '2021-1-15'),
(1, 11, '2021-1-15'),
(1, 12, '2021-1-15'),
(3, 1, '2009-12-16'),
(3, 4, '2009-12-16'),
(3, 7, '2009-12-16'),
(3, 8, '2009-12-16'),
(3, 9, '2009-12-16'),
(4, 1, '2010-1-15'),
(4, 4, '2010-1-15'),
(4, 7, '2010-1-15'),
(4, 8, '2010-1-15'),
(4, 9, '2010-1-15'),
(5, 1, '2011-12-16'),
(5, 4, '2011-12-16'),
(5, 7, '2011-12-16'),
(5, 8, '2011-12-16'),
(5, 9, '2011-12-16'),
(6, 1, '2012-1-15'),
(6, 4, '2012-1-15'),
(6, 7, '2012-1-15'),
(6, 8, '2012-1-15'),
(6, 9, '2012-1-15'),
(7, 1, '2012-3-1'),
(7, 4, '2012-3-1'),
(7, 7, '2012-3-1'),
(7, 8, '2012-3-1'),
(7, 9, '2012-3-1'),
(8, 2, '2018-12-16'),
(8, 5, '2018-12-16'),
(8, 10, '2018-12-16'),
(8, 11, '2018-12-16'),
(8, 12, '2018-12-16'),
(9, 2, '2021-1-1'),
(9, 5, '2021-1-1'),
(9, 10, '2021-1-1'),
(9, 11, '2021-1-1'),
(9, 12, '2021-1-1'),
(10, 2, '2021-1-1'),
(10, 5, '2021-1-1'),
(10, 10, '2021-1-1'),
(10, 11, '2021-1-1'),
(10, 12, '2021-1-1'),
(11, 1, '2021-1-1'),
(11, 4, '2021-1-1'),
(11, 7, '2021-1-1'),
(11, 8, '2021-1-1'),
(11, 9, '2021-1-1'),
(12, 3, '2021-1-1'),
(12, 6, '2021-1-1'),
(12, 13, '2021-1-1'),
(12, 14, '2021-1-1'),
(12, 15, '2021-1-1'),
(13, 3, '2021-1-1'),
(13, 6, '2021-1-1'),
(13, 13, '2021-1-1'),
(13, 14, '2021-1-1'),
(13, 15, '2021-1-1'),
(14, 1, '2009-12-16'),
(14, 4, '2009-12-16'),
(14, 7, '2009-12-16'),
(14, 8, '2009-12-16'),
(14, 9, '2009-12-16'),
(15, 1, '2009-12-16'),
(15, 4, '2009-12-16'),
(15, 7, '2009-12-16'),
(15, 8, '2009-12-16'),
(15, 9, '2009-12-16'),
(16, 1, '2009-12-16'),
(16, 4, '2009-12-16'),
(16, 7, '2009-12-16'),
(16, 8, '2009-12-16'),
(16, 9, '2009-12-16'),
(17, 1, '2009-12-16'),
(17, 4, '2009-12-16'),
(17, 7, '2009-12-16'),
(17, 8, '2009-12-16'),
(17, 9, '2009-12-16'),
(18, 1, '2009-12-16'),
(18, 4, '2009-12-16'),
(18, 7, '2009-12-16'),
(18, 8, '2009-12-16'),
(18, 9, '2009-12-16'),
(19, 2, '2022-12-1'),
(19, 5, '2022-12-1'),
(19, 10, '2022-12-1'),
(19, 11, '2022-12-1'),
(19, 12, '2022-12-1'),
(20, 3, '2022-12-1'),
(20, 6, '2022-12-1'),
(20, 13, '2022-12-1'),
(20, 14, '2022-12-1'),
(20, 15, '2022-12-1'),
(21, 2, '2022-12-1'),
(21, 5, '2022-12-1'),
(21, 10, '2022-12-1'),
(21, 11, '2022-12-1'),
(21, 12, '2022-12-1'),
(22, 2, '2022-12-1'),
(22, 5, '2022-12-1'),
(22, 10, '2022-12-1'),
(22, 11, '2022-12-1'),
(22, 12, '2022-12-1'),
(23, 3, '2022-12-1'),
(23, 6, '2022-12-1'),
(23, 13, '2022-12-1'),
(23, 14, '2022-12-1'),
(23, 15, '2022-12-1'),
(24, 3, '2022-12-1'),
(24, 6, '2022-12-1'),
(24, 13, '2022-12-1'),
(24, 14, '2022-12-1'),
(24, 15, '2022-12-1');



