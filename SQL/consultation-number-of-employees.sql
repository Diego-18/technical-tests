-- Data on the number of employees in several famous IT companies are kept in the COMPANY table. 
-- Write a query to print the IDs of companies that have more than 10000 employees, 
-- in ascending order of ID .

SELECT id
FROM company
WHERE number_of_employees > 10000
ORDER BY id ASC;