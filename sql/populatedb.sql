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
('Beijing Capirtal International Airport', 400, 3, 3),
('Shanghai Pudong International Airport', 650, 3, 4),
('Narita International Airport', 500, 3, 5),
('Los Angeles International Airport', 500, 9, 6),
('John F. Kennedy International Airport', 350, 8, 7),
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
FLIGHT(deptime, arrivetime, duration, cost, routeid)
VALUES
('20:25:00', '23:55:00', '3:30:00', 265, 1),
('00:45:00', '4:00:00', '3:15:00', 265, 2),
('4:15:00', '8:55:00', '4:40:00', 435, 3),
('10:05:00', '14:45:00', '4:40:00', 435, 4),
('6:30:00', '12:30:00', '6:00:00', 450, 7),
('13:40:00', '19:40:00', '6:00:00', 450, 8),
('9:40:00', '14:45:00', '5:05:00', 570, 11),
('15:50:00', '19:55:00', '5:05:00', 570, 12),
('15:30:00', '18:05:00', '2:35:00', 475, 17),
('2:45:00', '15:25:00', '12:40:00', 575, 21),
('6:30:00', '22:15:00', '15:45:00', 500, 30),
('11:05:00', '14:35:00', '3:30:00', 265, 1),
('15:30:00', '18:45:00', '3:15:00', 265, 2),
('15:55:00', '20:35:00', '4:40:00', 435, 3),
('21:35:00', '2:15:00', '4:40:00', 435, 4),
('2:15:00', '5:30:00', '3:15:00', 480, 9),
('6:45:00', '10:00:00', '3:15:00', 480, 10),
('18:00:00', '11:25:00', '17:25:00', 475, 40),
('4:00:00', '10:00:00', '6:00:00', 450, 8),
('20:50:00', '2:50:00', '6:00:00', 450, 7),
('11:15:00', '14:30:00', '3:15:00', 480, 9),
('15:45:00', '19:00:00', '3:15:00', 480, 10),
('7:15:00', '11:10:00', '4:05:00', 300, 13),
('12:15:00', '16:20:00', '4:05:00', 300, 13);

INSERT INTO 
DAYSCHEDULE(date, flightid)
VALUES
('2025-12-21', 1),
('2025-12-21', 2),
('2025-12-21', 3),
('2025-12-21', 4),
('2025-12-21', 5),
('2025-12-21', 6),
('2025-12-21', 7),
('2025-12-21', 8),
('2025-12-21', 9),
('2025-12-21', 10),
('2025-12-21', 11),
('2025-12-22', 12),
('2025-12-22', 13),
('2025-12-22', 14),
('2025-12-22', 15),
('2025-12-22', 16),
('2025-12-22', 17),
('2025-12-22', 18),
('2025-12-23', 19),
('2025-12-23', 20),
('2025-12-23', 21),
('2025-12-23', 22),
('2025-12-23', 23),
('2025-12-23', 24);