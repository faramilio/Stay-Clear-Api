-- MySQL dump 10.16  Distrib 10.1.38-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: stayclear
-- ------------------------------------------------------
-- Server version	10.1.38-MariaDB

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `telephone` varchar(45) NOT NULL,
  `photo` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Anderson Giovani Faramilio','zumturbinado@hotmail.com','123456','Tecnico de informatica','Estudante','99784485','documents/imagens/photo.png','2019-10-16 14:48:06','2019-10-16 14:48:06'),(2,'','','','','professor','','','2019-10-17 11:53:30','2019-10-17 11:53:30'),(3,'','','','','professor','','','2019-10-17 12:24:41','2019-10-17 12:24:41'),(4,'','','','','professor','','','2019-10-17 12:25:15','2019-10-17 12:25:15'),(5,'','','','','professor','','','2019-10-17 12:25:18','2019-10-17 12:25:18'),(6,'','','','','professor','','','2019-10-17 12:25:57','2019-10-17 12:25:57'),(7,'','','','','professor','','','2019-10-17 12:28:35','2019-10-17 12:28:35'),(8,'','','','','professor','','','2019-10-17 12:34:53','2019-10-17 12:34:53'),(9,'','','','','professor','','','2019-10-17 12:39:44','2019-10-17 12:39:44'),(10,'Anderson Giovani Faramilio','zumturbinado@hotmail.com','123456','Tecnico de informatica','Estudante','99784485','documents/imagens/photo.png','2019-10-17 14:36:24','2019-10-17 14:36:24'),(11,'Juninho','juninho@hotmail.com','123456789','Estudante','Ola Baby','99784486','documents/imagens/photo.png','2019-10-22 12:42:05','2019-10-22 12:42:05');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-22 11:30:58
