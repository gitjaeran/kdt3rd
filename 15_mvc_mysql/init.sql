CREATE TABLE visitor (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  comment MEDIUMTEXT
);


INSERT INTO visitor (name,comment) VALUES ('홍길동', '내가 왔다.');
INSERT INTO visitor (name,comment) VALUES ('이찬혁', '으라차차');
-- INT는 자동으로 올라가기 때문에 values 추가 안해도 됨!


--DCL
-- mysql 사용자 추가(user 계정)
CREATE USER 'user'@'%' IDENTIFIED BY '비밀번호(1234)';
--user 계정에 db 권한 부여

GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
--현재 사용중인 mysql 캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

--비밀번호 변경?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';
