-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 10-Mar-2025 às 20:05
-- Versão do servidor: 9.1.0
-- versão do PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `liderancabarbers`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cad_ip`
--

DROP TABLE IF EXISTS `cad_ip`;
CREATE TABLE IF NOT EXISTS `cad_ip` (
  `id_ip` int NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) NOT NULL,
  `localizacao` varchar(255) NOT NULL,
  `politica_de_privacidade` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'Não Aceitou',
  `data_primeiro_acesso` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ip`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cad_usuario`
--

DROP TABLE IF EXISTS `cad_usuario`;
CREATE TABLE IF NOT EXISTS `cad_usuario` (
  `id_usuario` int NOT NULL,
  `usuario` varchar(60) NOT NULL,
  `senha` varchar(500) NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `nivel` int NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cad_usuario`
--

INSERT INTO `cad_usuario` (`id_usuario`, `usuario`, `senha`, `status`, `data_cadastro`, `nivel`) VALUES
(1, 'admin', '374ab16a8362ccdaffd5e0f23c890cc13baa919b', 1, '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `leads_email`
--

DROP TABLE IF EXISTS `leads_email`;
CREATE TABLE IF NOT EXISTS `leads_email` (
  `id_leads_email` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id_leads_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- --------------------------------------------------------

--
-- Estrutura da tabela `rel_ip_pages`
--

DROP TABLE IF EXISTS `rel_ip_pages`;
CREATE TABLE IF NOT EXISTS `rel_ip_pages` (
  `id_ip_pages` int NOT NULL AUTO_INCREMENT,
  `id_ip` varchar(255) NOT NULL,
  `page` varchar(255) NOT NULL,
  `data_hora_acesso` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ip_pages`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
