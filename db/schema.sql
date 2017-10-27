-- Create the database burgers and specified it for use.
CREATE DATABASE burgers_db;

-- Switch or use burgers_db
USE burgers_db;

-- Create the table actors.
CREATE TABLE burgers_table (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN NOT NULL,
  date TIMESTAMP,
);
