-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2017 at 09:14 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demosite`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `ID` int(11) NOT NULL,
  `HEADING` varchar(255) NOT NULL,
  `ACTIVE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`ID`, `HEADING`, `ACTIVE`) VALUES
(1, 'fddd1111', 0),
(2, 'fdsa22', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sitepages`
--

DROP TABLE IF EXISTS `sitepages`;
CREATE TABLE `sitepages` (
  `ID` int(11) NOT NULL,
  `TITLE` varchar(255) DEFAULT NULL,
  `BODY` text,
  `SLUG` varchar(255) NOT NULL,
  `CREATEDBY` int(11) DEFAULT NULL,
  `MODIFIEDBY` int(11) DEFAULT NULL,
  `CATID` int(11) NOT NULL,
  `ACTIVE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sitepages`
--

INSERT INTO `sitepages` (`ID`, `TITLE`, `BODY`, `SLUG`, `CREATEDBY`, `MODIFIEDBY`, `CATID`, `ACTIVE`) VALUES
(1, 'fdsa', '<div><br></div><div><br></div><div>fffgfff</div>', 'fdsa', 0, 0, 1, 1),
(2, 'fda', '<div><span style="font-family: monospace;">fdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsfdsaafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafd</span></div>', 'f', 0, 0, 2, 0),
(3, 'give it a title f', '<div>so emptynot anymoref</div>', 'slug', 0, 0, 0, 0),
(4, 'give it a title', '<div><br></div><div>&nbsp; &nbsp; }</div><div>&nbsp; &nbsp;&nbsp;</div><div><br></div><div><br></div><div>&nbsp; &nbsp; componentDidMount(){</div><div>&nbsp; &nbsp; this.makeGrid.setAttribute("uk-grid" , "");</div><div>&nbsp; &nbsp; var closure = this;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var promise = $.ajax({</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url: this.props.url,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; method: "GET",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; promise.done(function(data){</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var mappedData = data.map(function(page){</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return [page.ID, page.TITLE, page.SLUG, page.CREATEDBY, page.MODIFIEDBY];</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //implement immutable</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; closure.setState({data : mappedData});</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; promise.fail(function(){</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //fetch table headers bas</div><div>&nbsp; &nbsp; }</div><div>&nbsp; &nbsp; onFilterChange(event){</div>', 'slug', 0, 0, 0, 0),
(5, 'fdsa', '<div>fdsafda</div>', 'fdsa', 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Stand-in structure for view `site_pages_with_category_heading`
--
DROP VIEW IF EXISTS `site_pages_with_category_heading`;
CREATE TABLE `site_pages_with_category_heading` (
`ID` int(11)
,`TITLE` varchar(255)
,`BODY` text
,`SLUG` varchar(255)
,`CREATEDBY` int(11)
,`MODIFIEDBY` int(11)
,`HEADING` varchar(255)
,`ACTIVE` int(11)
);

-- --------------------------------------------------------

--
-- Structure for view `site_pages_with_category_heading`
--
DROP TABLE IF EXISTS `site_pages_with_category_heading`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `site_pages_with_category_heading`  AS  select `sitepages`.`ID` AS `ID`,`sitepages`.`TITLE` AS `TITLE`,`sitepages`.`BODY` AS `BODY`,`sitepages`.`SLUG` AS `SLUG`,`sitepages`.`CREATEDBY` AS `CREATEDBY`,`sitepages`.`MODIFIEDBY` AS `MODIFIEDBY`,`categories`.`HEADING` AS `HEADING`,`sitepages`.`ACTIVE` AS `ACTIVE` from (`sitepages` left join `categories` on((`categories`.`ID` = `sitepages`.`CATID`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `sitepages`
--
ALTER TABLE `sitepages`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `sitepages`
--
ALTER TABLE `sitepages`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
