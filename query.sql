CREATE TABLE admin_login (
 Admin_ID INT(11) PRIMARY KEY,
 Admin_password VARCHAR(25) NOT NULL
);

CREATE TABLE user_table (
 User_ID INT(5) PRIMARY KEY,
 User_Name VARCHAR(20) NOT NULL,
  Contact_No BIGINT(20) PRIMARY KEY,
 Reg_Date DATE NOT NULL,
 Total_Fine INT(11)
); 

CREATE TABLE author (
 Author_ID INT(5) PRIMARY KEY,
 Author_Name VARCHAR(20) NOT NULL,
  NumBooks INT(2)
);

CREATE TABLE category (
 Category_ID INT(5) PRIMARY KEY,
 Category_Name VARCHAR(20) NOT NULL,
 Shelf_Number VARCHAR(2) NOT NULL
); 

CREATE TABLE books (
 Book_ID INT(5) PRIMARY KEY,
 Book_Name VARCHAR(100) NOT NULL,
 Author_ID INT(5) NOT NULL,
 ISBN VARCHAR(30) NOT NULL,
 Book_Status VARCHAR(20) NOT NULL,
 Category_ID INT(5) NOT NULL,
 FOREIGN KEY (Author_ID) REFERENCES author(Author_ID),
 FOREIGN KEY (Category_ID) REFERENCES category(Category_ID)
);

CREATE TABLE issue_book (
 Issue_ID INT(11) PRIMARY KEY,
 Book_ID INT(11) NOT NULL,
 User_ID INT(11) NOT NULL,
 Issue_Date DATE NOT NULL,
 Expected_Return_Date DATE NOT NULL,
 Return_Date DATE,
 Issue_Status VARCHAR(20),
 Fine INT(11),
  FOREIGN KEY (User_ID) REFERENCES user_table(User_ID) on DELETE CASCADE,
 FOREIGN KEY (Book_ID) REFERENCES books(Book_ID) on DELETE CASCADE
);


INSERT INTO admin_login(Admin_ID, AdminPassword) VALUES (23451, 'PasSWoRD1');
INSERT INTO admin_login(Admin_ID, AdminPassword) VALUES (12651, 'PasSW*RD2');
INSERT INTO admin_login(Admin_ID, AdminPassword) VALUES (13551, 'PAsSWORD3');

INSERT INTO user_table(User_id, User_name, Contact_no, Reg_date, Total_fine) 
VALUES (1, 'Amit', '9876543210', '2021-01-01', 0);
INSERT INTO user_table(User_id, User_name, Contact_no, Reg_date, Total_fine)
VALUES (2, 'Rahul', '8765432109', '2021-01-02', 2);
INSERT INTO user_table(User_id, User_name, Contact_no, Reg_date, Total_fine)
VALUES (3, 'Anjali', '7654321098', '2021-01-03', 0);
INSERT INTO user_table(User_id, User_name, Contact_no, Reg_date, Total_fine)
VALUES (4, 'Shreya', '6543210987', '2021-01-04', 4);

INSERT INTO author(author_id, author_name) VALUES (1, 'J.K. Rowling');
INSERT INTO author(author_id, author_name) VALUES (2, 'Stephen King');
INSERT INTO author(author_id, author_name) VALUES (3, 'Agatha Christie');
INSERT INTO author(author_id, author_name) VALUES (4, 'Neil Gaiman')

INSERT INTO category(category_id, category_name, shelf_number) VALUES
(1, 'Fiction', 'A');
INSERT INTO category(category_id, category_name, shelf_number) VALUES
(2, 'Non-fiction', 'B');
INSERT INTO category(category_id, category_name, shelf_number) VALUES
(3, 'Biography', 'C');
INSERT INTO category(category_id, category_name, shelf_number) VALUES
(4, 'History', 'D');

INSERT INTO books(book_id, book_name, author_id, isbn, book_status, category_id) VALUES (1, 'Harry Potter and the Philosopher''s Stone', 1, '9780747532743', 'Available', 1);
INSERT INTO books(book_id, book_name, author_id, isbn, book_status, category_id) VALUES (2, 'The Stand', 2, '9780307743688', 'Available', 1);
INSERT INTO books(book_id, book_name, author_id, isbn, book_status, category_id) VALUES (3, 'Murder on the Orient Express', 3, '9780062693662', 'Available', 7);
INSERT INTO books(book_id, book_name, author_id, isbn, book_status, category_id) VALUES (4, 'American Gods', 4, '9780062572110', 'Not Available', 5);
INSERT INTO books(book_id, book_name, author_id, isbn, book_status, category_id) VALUES (5, 'The Lord of the Rings', 5, '9780544003415', 'Available', 6);


INSERT INTO issue_book (Book_ID, User_ID, Issue_ID, Issue_Date, Expected_Return_Date) VALUES (2, 4, 1, CURDATE( ), DATE_ADD(CURRDATE( ), INTERVAL 14 DAY) );