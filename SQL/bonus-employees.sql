-- On the basis of merit, a company decides to promote some of its employee in its HR division at the end of the quarter because of their high performance. Write a query to find the employee IDs along with the names of all its employees who work in the HR department who earned a bonus of 5000 dollars or more in the last quarter.
-- There are two tables in the database: employee_information and last_quarter_bonus. Their primary keys are employee_ID.

SELECT ie.employee_ID, ie.name 
FROM employee_information ie
INNER JOIN last_quarter_bonus lqb ON ie.employee_ID = lqb.employee_ID
WHERE lqb.bonus >= 5000;