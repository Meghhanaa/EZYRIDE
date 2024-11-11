CREATE DATABASE ezyRide;
USE ezyRide;

CREATE TABLE `admin` (
  `a_no` bigint(20) NOT NULL,
  `a_name` varchar(50) NOT NULL,
  `a_email` varchar(50) NOT NULL,
  `a_password` varchar(255) NOT NULL
) ;

INSERT INTO `admin` (`a_no`, `a_name`, `a_email`, `a_password`) VALUES
(6396221558, 'Amit Mondal', 'mondalasp123@gmail.com', 'Amit@1234'),
(8800802298, 'Harstuti', 'harstuti121@gmail.com', 'Harstuti@1234'),
(8878804738, 'Meghana Tamrakar', 'deekshatamrakar15@gmail.com', 'Deeksha@1234'),
(9060729394, 'Anchal Kumari', 'anchal2630@gmail.com', 'Anchal@1234'),
(88173424272, 'anurag sharma', 'anuragmanit04@gmail.com', 'Anurag@1234');

CREATE TABLE `bill` (
  `book_id` int(11) NOT NULL,
  `tran_id` varchar(20) NOT NULL,
  `pay_mode` varchar(20) DEFAULT NULL,
  `bill_time` time DEFAULT NULL,
  `bill_total_pay` decimal(10,2) DEFAULT NULL,
  `bill_date` date DEFAULT NULL,
  `bill_owner_pay` decimal(10,2) DEFAULT NULL
);

INSERT INTO `bill` (`book_id`, `tran_id`, `pay_mode`, `bill_time`, `bill_total_pay`, `bill_date`, `bill_owner_pay`) VALUES
(1, '9876543210', 'Credit Card', '09:30:00', 5500.00, '2024-11-13', 4950.00),
(2, '9876543212', 'Cash', '10:00:00', 5600.00, '2024-11-13', 5040.00),
(3, '9876543213', 'Debit Card', '11:00:00', 5700.00, '2024-11-13', 5130.00),
(4, '9876543216', 'Net Banking', '12:00:00', 5800.00, '2024-11-13', 5220.00),
(5, '9876543217', 'Credit Card', '13:00:00', 5900.00, '2024-11-13', 5310.00),
(6, '9876543218', 'Cash', '14:00:00', 6000.00, '2024-11-13', 5400.00);

CREATE TABLE `booking` (
  `book_id` int(11) NOT NULL,
  `b_location` varchar(50) DEFAULT NULL,
  `c_no` bigint(20) DEFAULT NULL,
  `d_no` bigint(20) DEFAULT NULL,
  `v_insurance` varchar(30) DEFAULT NULL,
  `b_date` date DEFAULT NULL,
  `b_time` time DEFAULT NULL,
  `b_pay` decimal(10,2) DEFAULT NULL,
  `b_return_date` date DEFAULT NULL,
  `b_return_time` time DEFAULT NULL,
  `b_pickup` varchar(50) DEFAULT NULL,
  `b_cancel` tinyint(1) DEFAULT 0,
  `b_payment_status` tinyint(1) DEFAULT 0,
  `b_discount` decimal(6,2) DEFAULT 0.00
);

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`book_id`, `b_location`, `c_no`, `d_no`, `v_insurance`, `b_date`, `b_time`, `b_pay`, `b_return_date`, `b_return_time`, `b_pickup`, `b_cancel`, `b_payment_status`, `b_discount`) VALUES
(1, 'Bhopal', 9988776660, 9876543210, 'INS01234', '2024-11-06', '09:30:00', 5500.00, '2024-11-13', '09:30:00', 'MP NAGAR', 0, 0, 0.00),
(2, 'Bhopal', 9988776660, 9876543212, 'INS12345', '2024-11-06', '10:00:00', 5600.00, '2024-11-13', '10:00:00', 'MP NAGAR', 0, 0, 0.00),
(3, 'Bhopal', 9988776661, 9876543213, 'INS23457', '2024-11-06', '11:00:00', 5700.00, '2024-11-13', '11:00:00', 'MP NAGAR', 0, 0, 0.00),
(4, 'Bhopal', 9988776662, 9876543216, 'INS23476', '2024-11-06', '12:00:00', 5800.00, '2024-11-13', '12:00:00', 'MP NAGAR', 0, 0, 0.00),
(5, 'Bhopal', 9988776663, NULL, 'INS23458', '2024-11-06', '13:00:00', 5900.00, '2024-11-13', '13:00:00', 'MP NAGAR', 0, 0, 0.00),
(6, 'Bhopal', 9988776664, NULL, 'INS12347', '2024-11-06', '14:00:00', 6000.00, '2024-11-13', '14:00:00', 'MANIT', 0, 0, 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `c_image` varchar(255) DEFAULT NULL,
  `c_no` bigint(20) NOT NULL,
  `c_name` varchar(50) NOT NULL,
  `c_lic_no` varchar(20) NOT NULL,
  `c_DOB` date NOT NULL,
  `c_aadhar` varchar(12) NOT NULL,
  `c_email` varchar(50) DEFAULT NULL,
  `c_state` varchar(30) DEFAULT NULL,
  `c_city` varchar(30) DEFAULT NULL,
  `c_street` varchar(50) DEFAULT NULL,
  `c_pin` varchar(6) DEFAULT NULL,
  `c_gender` char(1) NOT NULL,
  `c_password` varchar(255) NOT NULL
) ;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`c_image`, `c_no`, `c_name`, `c_lic_no`, `c_DOB`, `c_aadhar`, `c_email`, `c_state`, `c_city`, `c_street`, `c_pin`, `c_gender`, `c_password`) VALUES
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776660, 'Priya Desai', 'GJ65412321', '1999-02-25', '260952529881', 'priya.desai@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'F', 'Priya@123'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776661, 'Vikas Patel', 'TN43217654', '1992-02-24', '260952529882', 'vikas.patel@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'M', 'Vikas@456'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776662, 'Ananya Sharma', 'DL45678921', '1993-02-25', '260952529821', 'ananya.sharma@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'F', 'Ananya@789'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776663, 'Rahul Mehta', 'KA78934512', '2000-10-10', '260952529884', 'rahul.mehta@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'M', 'Rahul@234'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776664, 'Simran Kaur', 'MH98765432', '2001-02-25', '260952529885', 'simran.kaur@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'F', 'Simran@567'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776665, 'Arjun Reddy', 'RJ34567890', '1994-01-14', '260952529886', 'arjun.reddy@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'M', 'Arjun@678'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776666, 'Tanu Gupta', 'UP65432109', '1995-01-15', '309048593821', 'tanu.gupta@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'F', 'Tanu@890'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776667, 'Karan Singh', 'WB23456789', '1995-01-16', '309048593822', 'karan.singh@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'M', 'Karan@123'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776668, 'Neha Yadav', 'HR98765432', '1995-01-17', '309048593823', 'neha.yadav@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'F', 'Neha@234'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776669, 'Siddharth Jain', 'TN87654321', '1995-01-18', '309048593824', 'siddharth.jain@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'M', 'Siddharth@345'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776670, 'Aman Kumar', 'GJ34567890', '1995-01-19', '309048593825', 'aman.kumar@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'M', 'Aman@456'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776671, 'Richa Verma', 'DL12345678', '1995-01-20', '309048593826', 'richa.verma@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'F', 'Richa@567'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776672, 'Pankaj Gupta', 'MH23456789', '1994-01-21', '309048593827', 'pankaj.gupta@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'M', 'Pankaj@678'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776673, 'Swati Mehra', 'TN34567890', '1994-01-22', '309048593828 ','swati.mehra@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'F', 'Swati@789'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776674, 'Vishal Yadav', 'UP45678901', '1994-01-23', '309048593829', 'vishal.yadav@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'M', 'Vishal@890'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776675, 'Nidhi Sharma', 'RJ56789012', '1994-01-24', '309048593830', 'nidhi.sharma@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'F', 'Nidhi@123'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776676, 'Saurabh Agarwal', 'WB67890123', '1994-01-26', '309048593831', 'saurabh.agarwal@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'M', 'Saurabh@234'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776677, 'Meenal Bhat', 'HR78901234', '1994-01-27', '309048593832', 'meenal.bhat@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'F', 'Meenal@345'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776678, 'Sandeep Chauhan', 'KA89012345', '1992-03-28', '263789476398', 'sandeep.chauhan@example.com', 'Madhya Pradesh', 'Bhopal', 'ARERA HILLS', '462003', 'M', 'Sandeep@456'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776679, 'Neelam Rani', 'TN90123456', '1992-03-29', '263789476392', 'neelam.rani@example.com', 'Madhya Pradesh', 'Bhopal', 'ARERA HILLS', '462003', 'F', 'Neelam@567'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776680, 'Rajeev Singh', 'DL01234567', '1992-04-10', '263789476393', 'rajeeve.singh@example.com', 'Madhya Pradesh', 'Bhopal', 'ARERA HILLS', '462003', 'M', 'Rajeev@678'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776681, 'Tarun Chauhan', 'MH12345678', '1992-04-11', '263789476394', 'tarun.chauhan@example.com', 'Madhya Pradesh', 'Bhopal', 'INDRAPURI', '462003', 'M', 'Tarun@789'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776682, 'Pooja Kumari', 'RJ23456789', '1992-04-12', '263789476395', 'pooja.kumari@example.com', 'Madhya Pradesh', 'Bhopal', 'INDRAPURI', '462003', 'F', 'Pooja@890'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776683, 'Siddhi Ghosh', 'UP34567890', '1992-04-13', '263789476396', 'siddhi.ghosh@example.com', 'Madhya Pradesh', 'Bhopal', 'INDRAPURI', '462003', 'F', 'Siddhi@123'),
('http://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg', 9988776684, 'Ankit Joshi', 'GJ45678901', '1992-04-14', '263789476397', 'ankit.joshi@example.com', 'Madhya Pradesh', 'Bhopal', 'INDRAPURI', '462003', 'M', 'Ankit@234');

-- --------------------------------------------------------

--
-- Table structure for table `customer_complaint`
--

CREATE TABLE `customer_complaint` (
  `comp_id` int(11) NOT NULL,
  `c_no` bigint(20) DEFAULT NULL,
  `c_detail` text DEFAULT NULL
) ;

--
-- Dumping data for table `customer_complaint`
--

INSERT INTO `customer_complaint` (`comp_id`, `c_no`, `c_detail`) VALUES
(1, 9988776660, 'Vehicle pickup was delayed.'),
(2, 9988776661, 'Vehicle did not meet expectations in terms of cleanliness.'),
(3, 9988776662, 'GPS navigation in vehicle was not working.'),
(4, 9988776663, 'Booking process was complicated and time-consuming.'),
(5, 9988776664, 'Incorrect billing amount charged for the vehicle rental.'),
(6, 9988776665, 'Unprofessional behavior from the driver during pickup.'),
(7, 9988776666, 'Vehicle was not available at the promised time.'),
(8, 9988776667, 'Booking confirmation was not sent timely.'),
(9, 9988776668, 'Vehicle was not in good condition, required repairs.'),
(10, 9988776669, 'Car interior was not sanitized properly.'),
(11, 9988776660, 'No proper communication regarding vehicle return location.'),
(12, 9988776660, 'Vehicle was not fueled as per agreement.'),
(13, 9988776660, 'Poor customer service at the pickup location.'),
(14, 9988776661, 'Confusion regarding payment details and extra charges.'),
(15, 9988776662, 'Driver was rude and uncooperative.');

-- --------------------------------------------------------

--
-- Table structure for table `customer_feedback`
--

CREATE TABLE `customer_feedback` (
  `feed_id` int(11) NOT NULL,
  `c_no` bigint(20) DEFAULT NULL,
  `f_detail` text DEFAULT NULL
);

--
-- Dumping data for table `customer_feedback`
--

-- INSERT INTO `customer_feedback` (`feed_id`, `c_no`, `f_detail`) VALUES
-- (1, 9988776660, 'The vehicle was clean and well-maintained.'),
-- (2, 9988776661, 'Had some issues with the return timing but overall good.'),
-- (3, 9988776662, 'Very professional and courteous staff.'),
-- (4, 9988776663, 'Smooth process from booking to delivery.'),
-- (5, 9988776664, 'Quick service but vehicle could have been more comfortable.'),
-- (6, 998877666, 'Excellent customer support and timely service.'),
-- (7, 9988776660, 'Great booking experience but late delivery.'),
-- (8, 9988776660, 'The vehicle was as described, but service could improve.'),
-- (9, 9988776660, 'No issues, had a smooth rental experience.'),
-- (10, 9988776660, 'A bit expensive, but the vehicle was worth the price.'),
-- (11, 9988776660, 'Fantastic experience, would rent again.'),
-- (12, 9988776660, 'There were issues with the booking app, but service was fine.'),
-- (13, 9988776660, 'Vehicle was clean but had some mechanical issues.'),
-- (14, 9988776660, 'The return process was easy, but pickup could be faster.'),
-- (15, 9988776660, 'Very satisfied with the overall service.'),
-- (16, 9988776660, 'Loved the vehicle but had issues with GPS functionality.');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `d_image` varchar(255) DEFAULT NULL,
  `d_no` bigint(20) NOT NULL,
  `o_no` bigint(20) DEFAULT NULL,
  `d_name` varchar(50) NOT NULL,
  `d_lic_no` varchar(20) NOT NULL,
  `d_DOB` date NOT NULL,
  `d_aadhar` varchar(12) NOT NULL,
  `d_email` varchar(50) DEFAULT NULL,
  `d_state` varchar(30) DEFAULT NULL,
  `d_city` varchar(30) DEFAULT NULL,
  `d_street` varchar(50) DEFAULT NULL,
  `d_pin` varchar(6) DEFAULT NULL,
  `d_gender` char(1) NOT NULL,
  `d_password` varchar(255) NOT NULL,
  `d_booked` tinyint(4) DEFAULT 0,
  `d_role` varchar(20) DEFAULT NULL
) ;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`d_image`, `d_no`, `o_no`, `d_name`, `d_lic_no`, `d_DOB`, `d_aadhar`, `d_email`, `d_state`, `d_city`, `d_street`, `d_pin`, `d_gender`, `d_password`, `d_booked`, `d_role`) VALUES
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543210, 9888776655, 'Rajesh Singh', 'UP987654321', '2000-10-10', '382763567892', 'rajesh.singh@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'M', 'rajesh.singh@1234', 1, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543212, 9888776655, 'Ravi Kumar', 'MP123456789', '2000-10-10', '382763567893', 'ravi.kumar@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'M', 'ravi.kumar@1234', 1, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543213, 9888776656, 'Manoj Yadav', 'DL234567890', '1990-11-10', '382763567894', 'manoj.yadav@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'M', 'manoj.yadav@1234', 1, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543216, 9888776658, 'Suraj Patel', 'GJ456789012', '1990-11-11', '382763567895', 'suraj.patel@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'M', 'suraj.patel@1234', 1, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543217, 9888776658, 'Anil Joshi', 'UP567890123', '1990-11-12', '382763567896', 'anil.joshi@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'M', 'anil.joshi@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543218, 9888776659, 'Arun Mehta', 'RJ678901234', '1990-11-13', '382763567897', 'arun.mehta@example.com', 'Madhya Pradesh', 'Bhopal', 'INDRAPURI', '462003', 'M', 'arun.mehta@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543219, 9888776659, 'Deepak Chaudhary', 'HR789012345', '1990-11-14', '382763567898', 'deepak.chaudhary@example.com', 'Madhya Pradesh', 'Bhopal', 'INDRAPURI', '462003', 'M', 'deepak.chaudhary@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543220, 9888776659, 'Nitin Verma', 'UP890123456', '1990-11-15', '382763567899', 'nitin.verma@example.com', 'Madhya Pradesh', 'Bhopal', 'INDRAPURI', '462003', 'M', 'nitin.verma@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543221, 9888776660, 'Pradeep Kumar', 'BR901234567', '1990-11-16', '382763567192', 'pradeep.kumar@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'M', 'pradeep.kumar@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543222, 9888776660, 'Kumar Saurav', 'WB012345678', '1990-11-17', '382763567817', 'kumar.saurav@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'M', 'kumar.saurav@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543223, 9888776660, 'Jitendra Singh', 'UP123456789', '1990-11-18', '482763567892', 'jitendra.singh@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'M', 'jitendra.singh@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543224, 9888776661, 'Satish Kumar', 'PB234567890', '1990-11-19', '582763567892', 'satish.kumar@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'M', 'satish.kumar@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543225, 9888776662, 'Vishal Rajput', 'UP345678901', '1988-12-15', '682763567892', 'vishal.rajput@example.com', 'Madhya Pradesh', 'Bhopal', 'ARERA HILLS', '462003', 'M', 'vishal.rajput@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543226, 9888776663, 'Vikas Tiwari', 'TN456789012', '1988-12-16', '782763567892', 'vikas.tiwari@example.com', 'Madhya Pradesh', 'Bhopal', 'ARERA HILLS', '462003', 'M', 'vikas.tiwari@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543228, 9888776664, 'Naveen Choudhary', 'HR678901234', '1988-12-17', '882763567892', 'naveen.choudhary@example.com', 'Madhya Pradesh', 'Bhopal', 'ARERA HILLS', '462003', 'M', 'naveen.choudhary@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876543229, 9888776664, 'Shivendra Gupta', 'JK789012345', '1988-12-18', '982763567892', 'shivendra.gupta@example.com', 'Madhya Pradesh', 'Bhopal', 'ARERA HILLS', '462003', 'M', 'shivendra.gupta@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876573214, 9888776656, 'Sandeep Sharma', 'HR234567891', '1988-12-19', '332763567892', 'sandeep.sharma@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'M', 'sandeep.sharma@1234', 0, 'driver'),
('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg', 9876583215, 9888776657, 'Vikram Reddy', 'TS345678901', '1988-12-20', '382563567892', 'vikram.reddy@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'M', 'vikram.reddy@1234', 0, 'driver');

-- --------------------------------------------------------

--
-- Table structure for table `maintenance`
--

CREATE TABLE `maintenance` (
  `main_id` int(11) NOT NULL,
  `v_insurance` varchar(30) DEFAULT NULL,
  `main_date` date DEFAULT NULL,
  `main_time` time DEFAULT NULL,
  `main_type` varchar(50) DEFAULT NULL
);

--
-- Dumping data for table `maintenance`
--

INSERT INTO `maintenance` (`main_id`, `v_insurance`, `main_date`, `main_time`, `main_type`) VALUES
(1, NULL, '2024-09-28', '09:00:00', 'Brake pads replacement'),
(2, NULL, '2024-09-29', '10:00:00', 'Battery replacement'),
(3, NULL, '2024-09-30', '11:00:00', 'Oil change'),
(4, NULL, '2024-10-01', '12:00:00', 'Tire replacement'),
(5, NULL, '2024-10-02', '13:00:00', 'Engine check'),
(6, NULL, '2024-10-03', '14:00:00', 'Brake pads replacement'),
(7, NULL, '2024-10-04', '15:00:00', 'Battery replacement'),
(8, NULL, '2024-10-05', '16:00:00', 'Oil change'),
(9, NULL, '2024-10-06', '17:00:00', 'Tire replacement'),
(10, NULL, '2024-10-07', '18:00:00', 'Engine check'),
(11, NULL, '2024-10-08', '09:00:00', 'Brake pads replacement'),
(12, NULL, '2024-10-09', '10:00:00', 'Battery replacement'),
(13, NULL, '2024-10-10', '11:00:00', 'Oil change'),
(14, NULL, '2024-10-11', '12:00:00', 'Tire replacement'),
(15, NULL, '2024-10-12', '13:00:00', 'Engine check'),
(16, NULL, '2024-10-13', '14:00:00', 'Brake pads replacement'),
(17, NULL, '2024-10-14', '15:00:00', 'Battery replacement'),
(18, NULL, '2024-10-15', '16:00:00', 'Oil change'),
(19, NULL, '2024-10-16', '17:00:00', 'Tire replacement'),
(20, NULL, '2024-10-17', '18:00:00', 'Engine check'),
(21, NULL, '2024-10-18', '09:00:00', 'Brake pads replacement'),
(22, NULL, '2024-10-19', '10:00:00', 'Battery replacement'),
(23, NULL, '2024-10-20', '11:00:00', 'Oil change'),
(24, NULL, '2024-10-21', '12:00:00', 'Tire replacement'),
(25, NULL, '2024-10-22', '13:00:00', 'Engine check'),
(26, NULL, '2024-10-23', '14:00:00', 'Brake pads replacement');

-- --------------------------------------------------------

--
-- Table structure for table `owner`
--

CREATE TABLE `owner` (
  `o_image` varchar(255) DEFAULT NULL,
  `o_no` bigint(20) NOT NULL,
  `o_name` varchar(50) NOT NULL,
  `o_DOB` date NOT NULL,
  `o_aadhar` varchar(12) NOT NULL,
  `o_email` varchar(50) NOT NULL,
  `o_state` varchar(30) DEFAULT NULL,
  `o_city` varchar(30) DEFAULT NULL,
  `o_street` varchar(50) DEFAULT NULL,
  `o_pin` varchar(6) DEFAULT NULL,
  `o_gender` char(1) NOT NULL,
  `o_password` varchar(255) NOT NULL,
  `o_role` varchar(20) DEFAULT NULL,
  `o_driver_count` int(11) NOT NULL DEFAULT 0
) ;

--
-- Dumping data for table `owner`
--

INSERT INTO `owner` (`o_image`, `o_no`, `o_name`, `o_DOB`, `o_aadhar`, `o_email`, `o_state`, `o_city`, `o_street`, `o_pin`, `o_gender`, `o_password`, `o_role`, `o_driver_count`) VALUES
('https://img.freepik.com/premium-photo/portrait-male-business-owner-showing-happy-smiling-face-as-he-has-successfully-invested-his-business-using-computers-financial-budget-documents-work_49553-2403.jpg', 9888776655, 'Rajesh Kumar', '1985-05-11', '762543562712', 'rajesh.kumar@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'M', 'Rajesh@123', 'owner', 2),
('https://blog.tapoly.com/wp-content/uploads/2018/11/Happy-small-business-owner.jpg', 9888776656, 'Anjali Verma', '1985-06-11', '282763567892', 'anjali.verma@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'F', 'Anjali@234', 'owner', 2),
('https://blog.tapoly.com/wp-content/uploads/2018/11/Happy-small-business-owner.jpg', 9888776657, 'Ravi Yadav', '1985-06-12', '382763567892', 'ravi.yadav@example.com', 'Madhya Pradesh', 'Bhopal', 'MP NAGAR', '462003', 'M', 'Ravi@345', 'owner', 1),
('https://blog.tapoly.com/wp-content/uploads/2018/11/Happy-small-business-owner.jpg', 9888776658, 'Pooja Sharma', '1985-06-13', '482763567892', 'pooja.sharma@example.com', 'Madhya Pradesh', 'Bhopal', 'INDRAPURI', '462003', 'F', 'Pooja@456', 'owner', 2),
('https://blog.tapoly.com/wp-content/uploads/2018/11/Happy-small-business-owner.jpg', 9888776659, 'Amit Gupta', '1986-06-14', '582763567892', 'amit.gupta@example.com', 'Madhya Pradesh', 'Bhopal', 'INDRAPURI', '462003', 'M', 'Amit@567', 'owner', 3),
('https://blog.tapoly.com/wp-content/uploads/2018/11/Happy-small-business-owner.jpg', 9888776660, 'Neha Agarwal', '1987-06-11', '682763567892', 'neha.agarwal@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'F', 'Neha@678', 'owner', 3),
('https://blog.tapoly.com/wp-content/uploads/2018/11/Happy-small-business-owner.jpg', 9888776661, 'Vikas Patel', '1988-06-11', '782763567892', 'vikas.patel@example.com', 'Madhya Pradesh', 'Bhopal', 'MANIT', '462003', 'M', 'Vikas@789', 'owner', 1),
('https://blog.tapoly.com/wp-content/uploads/2018/11/Happy-small-business-owner.jpg', 9888776662, 'Sunita Devi', '1983-06-11', '312763567892', 'sunita.devi@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'F', 'Sunita@890', 'owner', 1),
('https://blog.tapoly.com/wp-content/uploads/2018/11/Happy-small-business-owner.jpg', 9888776663, 'Manoj Sharma', '1999-06-11', '322763567892', 'manoj.sharma@example.com', 'Madhya Pradesh', 'Bhopal', 'KOLAR', '462003', 'M', 'Manoj@901', 'owner', 1),
('https://blog.tapoly.com/wp-content/uploads/2018/11/Happy-small-business-owner.jpg', 9888776664, 'Sarita Singh', '1995-06-11', '332763567892', 'sarita.singh@example.com', 'Madhya Pradesh', 'Bhopal', 'ARERA HILLS', '462003', 'F', 'Sarita@012', 'owner', 2),
('https://blog.tapoly.com/wp-content/uploads/2018/11/Happy-small-business-owner.jpg', 9888776665, 'Gaurav Mehta', '1997-06-11', '342763567892', 'gaurav.mehta@example.com', 'Madhya Pradesh', 'Bhopal', 'ARERA HILLS', '462003', 'M', 'Gaurav@123', 'owner', 0);

-- --------------------------------------------------------

--
-- Table structure for table `owner_complaint`
--

CREATE TABLE `owner_complaint` (
  `comp_id` int(11) NOT NULL,
  `o_no` bigint(20) DEFAULT NULL,
  `c_detail` text DEFAULT NULL
);

--
-- Dumping data for table `owner_complaint`
--

-- INSERT INTO `owner_complaint` (`comp_id`, `o_no`, `c_detail`) VALUES
-- (1, 9888776656, 'Vehicle maintenance was not performed on time.'),
-- (2, 9888776657, 'Miscommunication about booking details.'),
-- (3, 9888776658, 'Issues with vehicle cleanliness upon return.'),
-- (4, 9888776659, 'Incorrect billing amount.'),
-- (5, 9888776650, 'Vehicle registration issues.'),
-- (6, 9888776651, 'Vehicle was returned with damages that were not caused by the renter.'),
-- (7, 9888776652, 'Delay in payment processing for vehicle rent.'),
-- (8, 9888776653, 'Problems with customer service response times.'),
-- (9, 9888776654, 'Issues with vehicle insurance coverage during the rental period.'),
-- (10, 9888776655, 'Rented vehicle was not in the promised condition.'),
-- (11, 9888776656, 'Driver was unprofessional and caused delays.'),
-- (12, 9888776657, 'Confusion regarding rental rates and hidden charges.'),
-- (13, 9888776658, 'Miscommunication regarding vehicle pick-up location.'),
-- (14, 9888776659, 'Lack of support for vehicle breakdowns during the rental period.'),
-- (15, 9888776651, 'Unsatisfactory cleanliness of the vehicle upon delivery.'),
-- (16, 9888776652, 'Late return of the vehicle without prior notification.'),
-- (17, 9888776653, 'Problems with the GPS system in the vehicle.'),
-- (18, 9888776654, 'Vehicle was not fully fueled upon delivery.'),
-- (19, 9888776656, 'Issues with vehicle mileage and fuel consumption during the rental.');

-- --------------------------------------------------------

--
-- Table structure for table `owner_feedback`
--

CREATE TABLE `owner_feedback` (
  `feed_id` int(11) NOT NULL,
  `o_no` bigint(20) DEFAULT NULL,
  `f_detail` text DEFAULT NULL
) ;

--
-- Dumping data for table `owner_feedback`
--

-- INSERT INTO `owner_feedback` (`feed_id`, `o_no`, `f_detail`) VALUES
-- (1, NULL, 'Great responsiveness and vehicle quality.'),
-- (2, NULL, 'Very professional and helpful staff.'),
-- (3, NULL, 'Impressed with the maintenance of the vehicles.'),
-- (4, NULL, 'Service was efficient and booking process was smooth.'),
-- (5, NULL, 'Prompt and reliable service, will recommend to others.'),
-- (6, NULL, 'Quick and reliable service, will definitely use again.'),
-- (7, NULL, 'Excellent service and well-maintained vehicles.'),
-- (8, NULL, 'Professional staff, but had issues with vehicle cleanliness.'),
-- (9, NULL, 'Good overall experience, but could improve on delivery times.'),
-- (10, NULL, 'Very satisfied with the vehicle quality and service.'),
-- (11, NULL, 'Great value for money and good customer support.'),
-- (12, NULL, 'Smooth booking process, but had issues with vehicle return.'),
-- (13, NULL, 'The vehicle was excellent, but delivery was delayed.'),
-- (14, NULL, 'Professional service, would love to rent again.'),
-- (15, NULL, 'Good vehicle quality, but better pickup timing would be appreciated.'),
-- (16, NULL, 'Overall a good experience but vehicle could have been more fuel-efficient.'),
-- (17, NULL, 'Had a positive experience, but the vehicle could have been cleaner.'),
-- (18, NULL, 'Good service but had an issue with the vehicle’s air conditioning.'),
-- (19, NULL, 'Service was satisfactory, but improvement needed in delivery speed.'),
-- (20, NULL, 'No major complaints, happy with the service.');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `v_image` varchar(255) DEFAULT NULL,
  `v_insurance` varchar(30) NOT NULL,
  `v_name` varchar(50) NOT NULL,
  `v_type` varchar(20) DEFAULT NULL,
  `v_desp` text DEFAULT NULL,
  `v_rto` varchar(20) NOT NULL,
  `v_color` varchar(20) DEFAULT NULL,
  `v_mileage` decimal(6,2) DEFAULT NULL,
  `v_engine_type` varchar(20) DEFAULT NULL,
  `o_no` bigint(20) DEFAULT NULL,
  `v_pay` decimal(6,2) DEFAULT NULL,
  `v_booked` tinyint(1) DEFAULT 0
) ;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`v_image`, `v_insurance`, `v_name`, `v_type`, `v_desp`, `v_rto`, `v_color`, `v_mileage`, `v_engine_type`, `o_no`, `v_pay`, `v_booked`) VALUES
('https://tse3.mm.bing.net/th?id=OIP.A03ZP_keHMlExaJ0ZOhAOgHaEr&pid=Api&P=0&h=180', 'INS01234', 'Suzuki Intruder', 'Bike', 'Cruiser bike with relaxed riding position and high torque engine.', 'DL08H', 'Black', 40.00, 'Petrol', 9888776655, 1200.00, 1),
('https://tse4.mm.bing.net/th?id=OIP.GnVuJbytpP0oX9vYeoRcpwHaFd&pid=Api&P=0&h=180', 'INS01235', 'Suzuki Gixxer 250', 'Bike', 'Powerful 250cc bike with excellent handling and performance.', 'KA03R', 'Black', 35.00, 'Petrol', 9888776655, 1400.00, 0),
('https://tse3.mm.bing.net/th?id=OIP.D3Lvf1PR7nB4Hc6juBHwcAHaEH&pid=Api&P=0&h=180', 'INS04235', 'Maruti Suzuki SX4', 'Car', 'Mid-size sedan with great performance and practicality.', 'HR19C', 'Blue', 19.00, 'Diesel', 9888776655, 1500.00, 1),
('https://media.zigcdn.com/media/model/2022/Apr/front-left-view-796743640_930x620.jpg', 'INS12345', 'Honda SP 125', 'Bike', 'Stylish bike with great fuel efficiency and smooth performance.', 'KA01', 'Red', 65.00, 'Petrol', 9888776655, 800.00, 0),
('https://tse3.mm.bing.net/th?id=OIP.INhpeB-iueQRAJEB4tXL3wHaFj&pid=Api&P=0&h=180', 'INS12346', 'Yamaha R15 V3', 'Bike', 'Sportbike with great handling and performance on city roads.', 'MH06I', 'Blue', 40.00, 'Petrol', 9888776656, 1300.00, 0),
('https://tse2.mm.bing.net/th?id=OIP.aE4ucNAHYqMzUbKdy8r-fwHaFS&pid=Api&P=0&h=180', 'INS12347', 'TVS Apache RTR 160', 'Bike', 'Sporty bike with aggressive looks and superb handling.', 'TN08S', 'Red', 55.00, 'Petrol', 9888776656, 900.00, 1),
('https://tse2.mm.bing.net/th?id=OIP.4Wfl8oeKvzsdbGEHhlPHgAHaFK&pid=Api&P=0&h=180', 'INS12357', 'Skoda Octavia', 'Car', 'Luxurious sedan with great features and performance.', 'UP56D', 'Blue', 12.00, 'Diesel', 9888776656, 1800.00, 0),
('https://img.indianautosblog.com/2014/04/Yamaha-FZ16-press-shot-Black.jpg', 'INS23456', 'Yamaha FZ', 'Bike', 'Sporty bike with excellent handling and great power delivery.', 'MH03', 'Black', 50.00, 'Petrol', 9888776657, 900.00, 1),
('https://tse4.mm.bing.net/th?id=OIP.RoVDA9Fc-TqDbovyBcD5LwHaEj&pid=Api&P=0&h=180', 'INS23457', 'Bajaj Aviator', 'Scooty', 'Stylish scooter with good mileage and comfortable ride.', 'UP34J', 'Red', 55.00, 'Petrol', 9888776658, 550.00, 1),
('https://dealers-bd.heromotocorp.com/images/new-products-detail/splendor-plus2.PNG', 'INS23458', 'Hero Splendor Plus', 'Bike', 'Affordable and fuel-efficient commuter bike.', 'WB09T', 'Red', 70.00, 'Petrol', 9888776659, 600.00, 0),
('https://www.motortrend.com/uploads/sites/10/2015/11/2014-audi-a4-2-tdi-sedan-angular-front.png', 'INS23468', 'Audi A4', 'Car', 'Luxury sedan with premium features and smooth driving experience.', 'DL03E', 'Blue', 12.00, 'Diesel', 9888776660, 3500.00, 1),
('https://tse2.mm.bing.net/th?id=OIP.od_6GBkvI49h709Vq8iP8AHaE6&pid=Api&P=0&h=180', 'INS23469', 'BMW 3 Series', 'Car', 'Sporty sedan with powerful engine and great handling.', 'KA03F', 'White', 10.00, 'Diesel', 9888776661, 4000.00, 0),
('https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/3772c22c-ef4a-4def-8e67-1130f3361540/abcd1984-99c7-4858-975e-925dfe9f62e4.png', 'INS23470', 'Mercedes Benz C-Class', 'Car', 'Premium sedan with elegant styling and luxurious features.', 'TN02G', 'White', 11.00, 'Diesel', 9888776662, 4500.00, 1),
('https://tse3.mm.bing.net/th?id=OIP.4hvnrLyFnxQ_bT-lB60sxQHaEb&pid=Api&P=0&h=180', 'INS23471', 'Honda City', 'Car', 'Reliable sedan with good mileage and spacious interiors.', 'MH04H', 'White', 16.00, 'Petrol', 9888776663, 1500.00, 0),
('https://tse4.mm.bing.net/th?id=OIP.zuSE76qYQ15NK4rmQGIlxgHaDU&pid=Api&P=0&h=180', 'INS23472', 'Toyota Corolla Altis', 'Car', 'Comfortable sedan with excellent fuel efficiency and features.', 'DL05I', 'White', 18.00, 'Petrol', 9888776664, 2000.00, 1),
('https://www.pngmart.com/files/22/Ford-Endeavour-PNG-Transparent.png', 'INS23473', 'Ford Endeavour', 'Car', 'Luxury SUV with powerful engine and off-road capabilities.', 'KA09J', 'White', 14.00, 'Diesel', 9888776665, 3000.00, 0),
('https://www.pngarts.com/files/11/SUV-Kia-Seltos-Free-PNG-Image.png', 'INS23474', 'Kia Seltos', 'Car', 'Compact SUV with modern features and stylish design.', 'MH10K', 'White', 16.00, 'Petrol', 9888776665, 2500.00, 1),
('https://tse3.mm.bing.net/th?id=OIP.IARJxLnv7ffxjWkr9sQPNAHaFX&pid=Api&P=0&h=180', 'INS23476', 'Nissan Terrano', 'Car', 'Compact SUV with reliable performance and rugged design.', 'UP05M', 'Black', 15.00, 'Diesel', 9888776658, 2000.00, 1);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_category`
--

CREATE TABLE `vehicle_category` (
  `v_type` varchar(20) NOT NULL,
  `v_capacity` int(11) DEFAULT NULL,
  `v_fuel_type` varchar(20) DEFAULT NULL
);

--
-- Dumping data for table `vehicle_category`
--

INSERT INTO `vehicle_category` (`v_type`, `v_capacity`, `v_fuel_type`) VALUES
('Bike', 18, 'Petrol'),
('Car', 29, 'Petrol'),
('Scooty', 9, 'Petrol');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`a_no`);

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`tran_id`),
  ADD UNIQUE KEY `unique_tran_id` (`tran_id`),
  ADD KEY `b_id` (`book_id`),
  ADD KEY `b_id_2` (`book_id`),
  ADD KEY `b_id_3` (`book_id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `d_no` (`d_no`),
  ADD KEY `idx_customer_no` (`c_no`),
  ADD KEY `idx_vehicle_insurance` (`v_insurance`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`c_no`);

--
-- Indexes for table `customer_complaint`
--
ALTER TABLE `customer_complaint`
  ADD PRIMARY KEY (`comp_id`),
  ADD KEY `c_no` (`c_no`);

--
-- Indexes for table `customer_feedback`
--
ALTER TABLE `customer_feedback`
  ADD PRIMARY KEY (`feed_id`),
  ADD KEY `c_no` (`c_no`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`d_no`),
  ADD KEY `o_no` (`o_no`);

--
-- Indexes for table `maintenance`
--
ALTER TABLE `maintenance`
  ADD PRIMARY KEY (`main_id`),
  ADD KEY `v_insurance` (`v_insurance`);

--
-- Indexes for table `owner`
--
ALTER TABLE `owner`
  ADD PRIMARY KEY (`o_no`);

--
-- Indexes for table `owner_complaint`
--
ALTER TABLE `owner_complaint`
  ADD PRIMARY KEY (`comp_id`),
  ADD KEY `o_no` (`o_no`);

--
-- Indexes for table `owner_feedback`
--
ALTER TABLE `owner_feedback`
  ADD PRIMARY KEY (`feed_id`),
  ADD KEY `o_no` (`o_no`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`v_insurance`),
  ADD UNIQUE KEY `v_rto` (`v_rto`),
  ADD KEY `o_no` (`o_no`),
  ADD KEY `v_type` (`v_type`);

--
-- Indexes for table `vehicle_category`
--
ALTER TABLE `vehicle_category`
  ADD PRIMARY KEY (`v_type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `customer_complaint`
--
ALTER TABLE `customer_complaint`
  MODIFY `comp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `customer_feedback`
--
ALTER TABLE `customer_feedback`
  MODIFY `feed_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `maintenance`
--
ALTER TABLE `maintenance`
  MODIFY `main_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `owner_complaint`
--
ALTER TABLE `owner_complaint`
  MODIFY `comp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `owner_feedback`
--
ALTER TABLE `owner_feedback`
  MODIFY `feed_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`c_no`) REFERENCES `customer` (`c_no`) ON DELETE SET NULL,
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`v_insurance`) REFERENCES `vehicle` (`v_insurance`) ON DELETE SET NULL,
  ADD CONSTRAINT `booking_ibfk_3` FOREIGN KEY (`d_no`) REFERENCES `driver` (`d_no`) ON DELETE SET NULL;

--
-- Constraints for table `customer_complaint`
--
ALTER TABLE `customer_complaint`
  ADD CONSTRAINT `customer_complaint_ibfk_1` FOREIGN KEY (`c_no`) REFERENCES `customer` (`c_no`) ON DELETE SET NULL;

--
-- Constraints for table `customer_feedback`
--
ALTER TABLE `customer_feedback`
  ADD CONSTRAINT `customer_feedback_ibfk_1` FOREIGN KEY (`c_no`) REFERENCES `customer` (`c_no`) ON DELETE SET NULL;

--
-- Constraints for table `driver`
--
ALTER TABLE `driver`
  ADD CONSTRAINT `driver_ibfk_1` FOREIGN KEY (`o_no`) REFERENCES `owner` (`o_no`) ON DELETE SET NULL;

--
-- Constraints for table `maintenance`
--
ALTER TABLE `maintenance`
  ADD CONSTRAINT `maintenance_ibfk_1` FOREIGN KEY (`v_insurance`) REFERENCES `vehicle` (`v_insurance`) ON DELETE SET NULL;

--
-- Constraints for table `owner_complaint`
--
ALTER TABLE `owner_complaint`
  ADD CONSTRAINT `owner_complaint_ibfk_1` FOREIGN KEY (`o_no`) REFERENCES `owner` (`o_no`) ON DELETE SET NULL;

--
-- Constraints for table `owner_feedback`
--
ALTER TABLE `owner_feedback`
  ADD CONSTRAINT `owner_feedback_ibfk_1` FOREIGN KEY (`o_no`) REFERENCES `owner` (`o_no`) ON DELETE SET NULL;

--
-- Constraints for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`o_no`) REFERENCES `owner` (`o_no`) ON DELETE SET NULL,
  ADD CONSTRAINT `vehicle_ibfk_2` FOREIGN KEY (`v_type`) REFERENCES `vehicle_category` (`v_type`) ON DELETE SET NULL;
COMMIT;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
