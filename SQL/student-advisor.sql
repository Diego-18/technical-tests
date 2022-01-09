-- A university has started a student-advisor plan which assigns a professor as an advisor to each student for academic guidance. Write a query to find the roll number and names of students who either have a male advisor with a salary of more than 15,000 or a female advisor with a salary of more than 20,000.
-- There are two tables in the database: student_information and faculty_information. The primary key of student_information is roll_number whereas that of faculty_information is employee_ID.  

SELECT  si.name, si.roll_number 
FROM student_information AS si
INNER JOIN faculty_information AS fi 
    ON si.advisor = fi.employee_ID
WHERE fi.salary > 15000 OR fi.salary > 20000