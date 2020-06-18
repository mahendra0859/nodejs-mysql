# Tutorial | Building CRUD App with Node.js Express and MySQL

[Click here for video tutorial](https://www.youtube.com/watch?v=xn9ef5pod18)

[Click MySQL - Github Gist](https://gist.github.com/mahendra0859/cceeec57b9f6e52d55a1e46d6a2bca37)

[Click here for W3Schools Link](https://www.w3schools.com/nodejs/nodejs_mysql.asp)

- Intsall MySQL Community Server and MySQL Work Bench and create a DB(Schema) called 'nodejs_mysql'.

- Run this commands in workbench before starting the node server;

```
$ ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

$ flush privileges;


$ CREATE SCHEMA `nodejs_mysql` ;

$ CREATE TABLE `nodejs_mysql`.`people` (
  `name` VARCHAR(200) NOT NULL,
  `age` VARCHAR(45) NULL,
  PRIMARY KEY (`name`));

```

[Click here for postman documentaion](https://documenter.getpostman.com/view/3782712/Szzkcctr)
