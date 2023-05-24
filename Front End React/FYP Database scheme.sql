use users;

CREATE TABLE courses(
course_id Int PRIMARY KEY auto_increment NOT NULL,
course_name VARCHAR(255) NOT NULL,
course_desc VARCHAR(255) NOT NULL,
student_registered INT,
number_of_videos INT NOT NULL
);

CREATE TABLE user(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
username VARCHAR(60) UNIQUE NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
role VARCHAR(10) NOT NULL 
);

CREATE TABLE registered_in(
user_id INT,
course_id INT,
PRIMARY KEY (user_id, course_id),
FOREIGN KEY (user_id) REFERENCES user(id),
FOREIGN KEY (course_id) REFERENCES courses(course_id)
);