CREATE DATABASE  IF NOT EXISTS `SalaryDB` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `SalaryDB`;
-- MySQL dump 10.13  Distrib 5.6.44, for Linux (x86_64)
--
-- Host: localhost    Database: SalaryDB
-- ------------------------------------------------------
-- Server version	5.6.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Bonuses`
--

DROP TABLE IF EXISTS `Bonuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bonuses` (
  `bonus_id` int(11) NOT NULL,
  `bonus_name` varchar(45) DEFAULT NULL,
  `bonus_amount` int(11) DEFAULT NULL,
  `bonus_description` varchar(200) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`bonus_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bonuses`
--

LOCK TABLES `Bonuses` WRITE;
/*!40000 ALTER TABLE `Bonuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `Bonuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Designation`
--

DROP TABLE IF EXISTS `Designation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Designation` (
  `designation_id` int(11) NOT NULL AUTO_INCREMENT,
  `designation_name` varchar(45) NOT NULL,
  PRIMARY KEY (`designation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Designation`
--

LOCK TABLES `Designation` WRITE;
/*!40000 ALTER TABLE `Designation` DISABLE KEYS */;
/*!40000 ALTER TABLE `Designation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employee`
--

DROP TABLE IF EXISTS `Employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Employee` (
  `row_id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_id` varchar(50) NOT NULL,
  `emp_name` varchar(100) DEFAULT NULL,
  `emp_dob` datetime DEFAULT '0000-00-00 00:00:00',
  `emp_designation` varchar(45) NOT NULL DEFAULT 'NA',
  `emp_email` varchar(45) NOT NULL,
  `emp_ctc_current` int(11) NOT NULL,
  `emp_total_experience` int(11) DEFAULT '0',
  `emp_in_comp_experience` int(11) DEFAULT '0',
  `emp_joining_date` datetime NOT NULL,
  `emp_relieving_date` datetime DEFAULT '0000-00-00 00:00:00',
  `emp_mobile` int(11) NOT NULL,
  `emp_residence_address` varchar(1000) DEFAULT NULL,
  `emp_permanent_address` varchar(1000) NOT NULL,
  `emp_pan` varchar(45) DEFAULT 'NA',
  `emp_aadhar` int(11) NOT NULL,
  `emp_father_name` varchar(45) NOT NULL,
  `emp_mother_name` varchar(45) NOT NULL,
  `emp_siblings` int(11) DEFAULT '0',
  `emp_religion` varchar(45) DEFAULT 'NA',
  `emp_current_project` varchar(45) DEFAULT NULL,
  `emp_bonus_list` int(11) NOT NULL,
  `emp_account_bank` int(11) NOT NULL,
  `emp_account_pf` int(11) NOT NULL,
  `modification_date` datetime NOT NULL,
  PRIMARY KEY (`row_id`,`emp_id`),
  UNIQUE KEY `emp_mobile_UNIQUE` (`emp_mobile`),
  UNIQUE KEY `emp_aadhar_UNIQUE` (`emp_aadhar`),
  UNIQUE KEY `emp_account_bank_UNIQUE` (`emp_account_bank`),
  UNIQUE KEY `emp_account_pf_UNIQUE` (`emp_account_pf`),
  UNIQUE KEY `emp_id_UNIQUE` (`emp_id`),
  UNIQUE KEY `row_id_UNIQUE` (`row_id`),
  UNIQUE KEY `emp_bonus_list_UNIQUE` (`emp_bonus_list`),
  CONSTRAINT `bonus_idB` FOREIGN KEY (`emp_bonus_list`) REFERENCES `Bonuses` (`bonus_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employee`
--

LOCK TABLES `Employee` WRITE;
/*!40000 ALTER TABLE `Employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `Employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmployeeHistory`
--

DROP TABLE IF EXISTS `EmployeeHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EmployeeHistory` (
  `row_id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_id` varchar(45) NOT NULL,
  `emp_name` varchar(100) NOT NULL,
  `emp_dob` datetime NOT NULL,
  `emp_designation` varchar(45) NOT NULL,
  `emp_email` varchar(45) NOT NULL,
  `emp_ctc_current` int(11) NOT NULL,
  `emp_total_experience` int(11) NOT NULL DEFAULT '0',
  `emp_in_comp_experience` int(11) NOT NULL,
  `emp_joining_date` datetime NOT NULL,
  `emp_relieving_date` datetime DEFAULT '0000-00-00 00:00:00',
  `emp_mobile` int(11) NOT NULL,
  `emp_reidence_address` varchar(1000) NOT NULL,
  `emp_permanent_address` varchar(1000) NOT NULL,
  `emp_pan` varchar(45) DEFAULT 'NA',
  `emp_aadhar` int(11) NOT NULL,
  `emp_father_name` varchar(100) DEFAULT 'NA',
  `emp_mother_name` varchar(100) DEFAULT NULL,
  `emp_religion` varchar(45) DEFAULT 'NA',
  `emp_siblings` int(11) DEFAULT '0',
  `emp_current_project` varchar(45) DEFAULT NULL,
  `emp_bonus_list` varchar(100) DEFAULT NULL,
  `emp_account_bank` int(11) NOT NULL,
  `emp_account_pf` int(11) NOT NULL,
  `modification_date` datetime NOT NULL,
  PRIMARY KEY (`row_id`,`emp_id`),
  UNIQUE KEY `emp_email_UNIQUE` (`emp_email`),
  UNIQUE KEY `emp_mobile_UNIQUE` (`emp_mobile`),
  UNIQUE KEY `emp_aadhar_UNIQUE` (`emp_aadhar`),
  UNIQUE KEY `emp_account_bank_UNIQUE` (`emp_account_bank`),
  UNIQUE KEY `emp_account_pf_UNIQUE` (`emp_account_pf`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmployeeHistory`
--

LOCK TABLES `EmployeeHistory` WRITE;
/*!40000 ALTER TABLE `EmployeeHistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `EmployeeHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmployeeSalary`
--

DROP TABLE IF EXISTS `EmployeeSalary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EmployeeSalary` (
  `emp_id` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `month` varchar(20) NOT NULL,
  `year` int(11) NOT NULL,
  `salary` double NOT NULL,
  `hra` double DEFAULT NULL,
  `basic_salary` double NOT NULL,
  `tax_deducted` double DEFAULT NULL,
  `bonus_amount` int(11) DEFAULT NULL,
  `emp_ctc` int(11) NOT NULL,
  `pf_deducted` double NOT NULL,
  `medical_insurance` double NOT NULL,
  PRIMARY KEY (`emp_id`),
  CONSTRAINT `emp_idS` FOREIGN KEY (`emp_id`) REFERENCES `Employee` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmployeeSalary`
--

LOCK TABLES `EmployeeSalary` WRITE;
/*!40000 ALTER TABLE `EmployeeSalary` DISABLE KEYS */;
/*!40000 ALTER TABLE `EmployeeSalary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmployeeSavings`
--

DROP TABLE IF EXISTS `EmployeeSavings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EmployeeSavings` (
  `emp_id` varchar(50) NOT NULL,
  `doc_id` int(11) DEFAULT NULL,
  `savings_amount` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  CONSTRAINT `emp_idSa` FOREIGN KEY (`emp_id`) REFERENCES `Employee` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmployeeSavings`
--

LOCK TABLES `EmployeeSavings` WRITE;
/*!40000 ALTER TABLE `EmployeeSavings` DISABLE KEYS */;
/*!40000 ALTER TABLE `EmployeeSavings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LateLeaveDetails`
--

DROP TABLE IF EXISTS `LateLeaveDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LateLeaveDetails` (
  `emp_id` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `month` varchar(10) NOT NULL,
  `year` int(11) NOT NULL,
  `late` int(11) DEFAULT '0',
  `leave` double DEFAULT NULL,
  `total_leaves` int(11) DEFAULT NULL,
  `availed_leaves` double DEFAULT NULL,
  `remaining_leaves` double DEFAULT NULL,
  `wfh` varchar(45) DEFAULT NULL,
  UNIQUE KEY `emp_id_UNIQUE` (`emp_id`),
  CONSTRAINT `emp_idL` FOREIGN KEY (`emp_id`) REFERENCES `Employee` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LateLeaveDetails`
--

LOCK TABLES `LateLeaveDetails` WRITE;
/*!40000 ALTER TABLE `LateLeaveDetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `LateLeaveDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Login`
--

DROP TABLE IF EXISTS `Login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Login` (
  `row_id` int(11) NOT NULL AUTO_INCREMENT,
  `login_id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `login_type` varchar(22) NOT NULL,
  PRIMARY KEY (`row_id`),
  UNIQUE KEY `row_id_UNIQUE` (`row_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Login`
--

LOCK TABLES `Login` WRITE;
/*!40000 ALTER TABLE `Login` DISABLE KEYS */;
INSERT INTO `Login` VALUES (1,'001','ggg','admin'),(2,'002','gfg','hr'),(3,'002','gfg','hr'),(4,'','',''),(5,'','',''),(6,'','','');
/*!40000 ALTER TABLE `Login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NonEmployee`
--

DROP TABLE IF EXISTS `NonEmployee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NonEmployee` (
  `row_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `relation_with_company` varchar(50) NOT NULL,
  `user_mobile` int(11) NOT NULL,
  `user_designation` varchar(50) DEFAULT 'NA',
  `user_company_name` varchar(50) DEFAULT 'Null',
  `user_email` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `row_id_UNIQUE` (`row_id`),
  UNIQUE KEY `user_mobile_UNIQUE` (`user_mobile`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NonEmployee`
--

LOCK TABLES `NonEmployee` WRITE;
/*!40000 ALTER TABLE `NonEmployee` DISABLE KEYS */;
/*!40000 ALTER TABLE `NonEmployee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reportee`
--

DROP TABLE IF EXISTS `Reportee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reportee` (
  `row_id` int(11) NOT NULL,
  `emp_id` varchar(50) NOT NULL,
  `reporting_to` varchar(45) NOT NULL,
  KEY `emp_id_idx` (`emp_id`,`reporting_to`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reportee`
--

LOCK TABLES `Reportee` WRITE;
/*!40000 ALTER TABLE `Reportee` DISABLE KEYS */;
/*!40000 ALTER TABLE `Reportee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SavingsDocument`
--

DROP TABLE IF EXISTS `SavingsDocument`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SavingsDocument` (
  `doc_id` int(11) NOT NULL AUTO_INCREMENT,
  `doc_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`doc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SavingsDocument`
--

LOCK TABLES `SavingsDocument` WRITE;
/*!40000 ALTER TABLE `SavingsDocument` DISABLE KEYS */;
/*!40000 ALTER TABLE `SavingsDocument` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TaxSlabs`
--

DROP TABLE IF EXISTS `TaxSlabs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TaxSlabs` (
  `row_id` int(11) NOT NULL AUTO_INCREMENT,
  `from_salary` int(11) NOT NULL,
  `to_salary` int(11) NOT NULL,
  `tax_in_percent` int(11) NOT NULL,
  `sur_plus_in_percent` int(11) NOT NULL,
  `start_year` int(11) NOT NULL,
  `end_year` int(11) NOT NULL,
  PRIMARY KEY (`row_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TaxSlabs`
--

LOCK TABLES `TaxSlabs` WRITE;
/*!40000 ALTER TABLE `TaxSlabs` DISABLE KEYS */;
/*!40000 ALTER TABLE `TaxSlabs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salaryStructure`
--

DROP TABLE IF EXISTS `salaryStructure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `salaryStructure` (
  `row_id` int(11) NOT NULL AUTO_INCREMENT,
  `from_salary` int(11) NOT NULL,
  `to_salary` int(11) NOT NULL,
  `tax_in_percent` int(11) NOT NULL,
  `sur_plus_in_percent` int(11) NOT NULL,
  `start_year` int(11) NOT NULL,
  `end_year` int(11) NOT NULL,
  PRIMARY KEY (`row_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salaryStructure`
--

LOCK TABLES `salaryStructure` WRITE;
/*!40000 ALTER TABLE `salaryStructure` DISABLE KEYS */;
/*!40000 ALTER TABLE `salaryStructure` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-06  7:51:22
