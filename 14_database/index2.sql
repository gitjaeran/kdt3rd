-- # database 심화 - (PK,FK 연결) (일대 다 관계) (JOIN 조인 / JOIN WHERE)
SHOW databases;
USE kdt;
SHOW tables;

--######################
-- ******[PK, FK 연결하기]******
-- 1. 기본 키 제약조건 : 고객 테이블의 기본키(PK)를 설정함

--고객(customer) 테이블 생성
CREATE TABLE customer (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  birthday DATE NOT NULL
);

--고객 테이블에 데이터 추가
INSERT INTO customer (id, name, birthday) VALUES ('aaa', '김이현', '1990-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '최지율', '1992-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이혜진', '1993-05-31');


SELECT * FROM customer;



-- 2. 외래키(FK) 제약조건 : 두 테이블 사이의 관계를 만들어줌
-- 다른 테이블의 기본키(PK)를 현재 테이블의 외래키(FK)로 연결함
-- 기준 테이블: 기본키가 있는 테이블 / 참조 테이블 : 외래키가 있는 테이블
-- ****형식: FOREIGN KEY(열_이름) REFERENCES 기준_테이블(열_이름)***
-- PK가 있는 테이블과 FK가 있는 테이블 중에 삭제해야 한다면 FK 테이블이 먼저 삭제되어야 한다.

-- ON UPDATE CASCADE: 기준 테이블의 데이터가 변경되면 참조테이블의 데이터도 변경됨
-- ON DELETE CASCADE:기준 테이블의 데이터가 삭제되면 참조테이블의 데이터도 삭제됨


--주문목록(orderlist) 테이블 만들기
CREATE TABLE orderlist (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  customer_id VARCHAR(20) NOT NULL,
  product_name VARCHAR(20) NOT NULL,
  quantity INT,
  FOREIGN KEY(customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', '1');
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', '31');
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', '3');
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', '5');
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', '1');

SELECT * FROM orderlist;


-- #####################################
-- ***********[JOIN, 조인]***********
-- : 두 테이블을 묶어서 하나의 테이블을 만듦
-- 두 테이블을 엮어서 원하는 형태를 보고 싶을 때
-- ex.
-- customer(id, name, birthday) / orderlist(id, customer_id, product_name, quantity)
-- 하나의 큰 테이블(customer_id, product_name, quantity, name, birthday)

-- *일대 다 관계 (one to many)
-- (1) A 테이블에는 하나의 값만 존재
-- (2) B 테이블에는 여러 개의 값이 존재
-- ex. 한 회원(A)은 여러 개의 주문(B) 정보를 가질 수 있음
-- -> 즉, 회원은 한 명(one)이지만 구매를 여러 번(many) 가능
-- ex. 한 서버 안에 다수의 유저/ 한 개의 카카오 계정으로 여러개 프로필 생성 가능 / 여러개의 카톡방 존재


/*
SELECT 열_목록
FROM tableA
    INNER JOIN tableB
    ON 조인_조건
[WHERE 검색_조건]
*/

SELECT * FROM customer;
SELECT * FROM orderlist;

-- 유저아이디를 기준으로 customer와 orderlist 조인 (모든 컬럼에 대해 모든 행 보기)
SELECT *
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id;
    
-- 유저아이디를 기준으로 customer와 orderlist 조인 (모든 컬럼에 대해 where절 만족하는 행만 보기)
SELECT *
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id
WHERE quantity >= 5;

-- 유저아이디를 기준으로 customer와 orderlist 조인 (일부 컬럼에 대해 모든 행 보기)
SELECT customer.id, customer.name, orderlist.product_name, orderlist.quantity
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id;
    
-- 유저아이디를 기준으로 customer와 orderlist 조인 (일부 컬럼 이름에 별명을 붙여 모든 행 보기)
SELECT orderlist.id as order_id, customer.id as user_id, orderlist.product_name, orderlist.quantity
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id;
    
-- 유저아이디를 기준으로 customer와 orderlist 조인 (일부 컬럼 이름에 별명을 붙여 조건을 만족하는 행 보기)
SELECT orderlist.id as order_id, customer.id as user_id, orderlist.product_name, orderlist.quantity
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id
WHERE orderlist.id = 3;
