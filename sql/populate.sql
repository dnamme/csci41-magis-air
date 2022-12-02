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
