

CREATE TABLE member (
  id VARCHAR(20) NOT NULL PRIMARY KEY,
  name VARCHAR(5) NOT NULL,
  age INT(2),
  gender VARCHAR(2) NOT NULL,
  email VARCHAR(50),
  promotion VARCHAR(2) NOT NULL DEFAULT 'x'
);

DESC member;


ALTER TABLE member MODIFY id VARCHAR(10);

ALTER TABLE member DROP age;

ALTER TABLE member ADD interest VARCHAR(100);

ALTER TABLE member MODIFY promotion VARCHAR(2) DEFAULT 'x';

DESC member;
