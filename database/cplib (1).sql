-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 05, 2017 at 04:25 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cplib`
--

-- --------------------------------------------------------

--
-- Table structure for table `book_main`
--

CREATE TABLE `book_main` (
  `bid` int(11) NOT NULL,
  `bname` varchar(128) NOT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book_main`
--

INSERT INTO `book_main` (`bid`, `bname`, `available`) VALUES
(3, 'DEF', 0),
(4, 'ABC', 0),
(5, 'HIJ', 0),
(6, 'BJ', 1),
(7, 'ABC', 1),
(8, 'abc', 1),
(9, 'bcd', 1),
(10, 'cde', 1),
(11, 'cdf', 1),
(12, 'dfg', 1),
(13, 'hij', 1),
(14, 'klm', 1),
(15, 'NJK', 1),
(16, 'NJK', 1),
(17, 'The Black B', 1),
(18, 'The Black Book For Advance Java Applications', 1),
(19, 'NJK', 1),
(20, 'NJK', 1),
(21, 'NJK', 1),
(22, 'NJK', 1),
(23, 'NJK', 1),
(24, 'NJK', 1),
(25, 'NJK', 1),
(26, 'NJK', 1),
(27, 'NJK', 1),
(28, 'NJK', 1),
(29, 'NJK', 1),
(30, 'NJK', 1),
(31, 'NJK', 1),
(32, 'NJK', 1),
(33, 'NJK', 1),
(34, 'NJK', 1),
(35, 'NJK', 1),
(36, 'NJK', 1),
(37, 'NJK2', 1),
(38, 'NJK2', 1),
(39, 'NJK2', 1),
(40, 'NJK2', 1),
(41, 'NJK3', 1),
(42, 'NJK3', 1),
(43, 'NJK3', 1),
(44, 'NJK3', 1),
(45, 'NJK3', 1),
(46, 'NJK3', 1),
(47, 'NJK3', 1),
(48, 'NJK3', 1),
(49, 'NJK3', 1),
(50, 'NJK3', 1),
(51, 'NJK5', 1),
(52, 'NJK5', 1),
(53, 'NJK5', 1),
(54, 'NJK5', 1),
(55, 'NJK5', 1),
(56, 'NJK5', 1),
(57, 'NJK5', 1),
(58, 'NJK5', 1),
(59, 'NJK5', 1),
(60, 'NJK5', 1),
(61, 'NJK5', 1),
(62, 'NJK5', 1),
(63, 'NJK5', 1),
(64, 'N', 1),
(65, 'N', 1),
(66, 'N', 1),
(67, 'N', 1),
(68, 'N', 1),
(69, 'NJK', 1),
(70, 'NJK', 1),
(71, 'NJK', 1),
(72, 'NJK', 1),
(73, 'NJK', 1),
(74, 'NJK', 1),
(75, 'NJK', 1),
(76, 'NJK', 1),
(77, 'NJK', 1),
(78, 'NJK', 1),
(79, 'ABC', 1),
(80, 'ABC', 1),
(81, 'ABC', 1),
(82, 'ABC', 1),
(83, 'ABC', 1),
(84, 'ABC', 1),
(85, 'ABC', 1),
(86, 'ABC', 1);

-- --------------------------------------------------------

--
-- Table structure for table `borrower`
--

CREATE TABLE `borrower` (
  `id` varchar(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `issue_date` date NOT NULL,
  `renewed_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `borrower`
--

INSERT INTO `borrower` (`id`, `bid`, `issue_date`, `renewed_date`) VALUES
('student4', 3, '2017-02-23', '2017-04-16'),
('student4', 4, '2017-02-23', '2017-04-06'),
('student4', 5, '2017-02-23', '2017-02-23');

-- --------------------------------------------------------

--
-- Table structure for table `student_login`
--

CREATE TABLE `student_login` (
  `id` varchar(11) NOT NULL,
  `password` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_login`
--

INSERT INTO `student_login` (`id`, `password`) VALUES
('student1', 'password'),
('student2', 'pass'),
('student3', 'password3'),
('student4', 'password4');

-- --------------------------------------------------------

--
-- Table structure for table `student_main`
--

CREATE TABLE `student_main` (
  `id` varchar(11) NOT NULL,
  `fname` varchar(11) NOT NULL,
  `lname` varchar(11) NOT NULL,
  `email` varchar(11) NOT NULL,
  `phone_no` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_main`
--

INSERT INTO `student_main` (`id`, `fname`, `lname`, `email`, `phone_no`) VALUES
('student1', 'aaa', 'aaa', 'aaa', '123'),
('student2', 'aaa', 'aaa', 'aaaa', '111'),
('student3', 'aaa', 'aaa', 'aaaa', '111'),
('student4', 'aaa', 'aaa', 'aaa', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book_main`
--
ALTER TABLE `book_main`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `borrower`
--
ALTER TABLE `borrower`
  ADD KEY `bid` (`bid`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `student_login`
--
ALTER TABLE `student_login`
  ADD KEY `id` (`id`);

--
-- Indexes for table `student_main`
--
ALTER TABLE `student_main`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book_main`
--
ALTER TABLE `book_main`
  MODIFY `bid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `borrower`
--
ALTER TABLE `borrower`
  ADD CONSTRAINT `borrower_ibfk_1` FOREIGN KEY (`bid`) REFERENCES `book_main` (`bid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `borrower_ibfk_2` FOREIGN KEY (`id`) REFERENCES `student_main` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_login`
--
ALTER TABLE `student_login`
  ADD CONSTRAINT `student_login_ibfk_1` FOREIGN KEY (`id`) REFERENCES `student_main` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
