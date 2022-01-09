--A business is analyzing data by country. For each country, display the country name, 
-- total number of invoices, and their average amount. Format the average as a floating-point 
-- number with 6 decimal places. Return only those countries where their average invoice amount 
-- is greater than the average invoice amount over all invoices.
-- There are 4 tables: country, city, customer, invoice.

SELECT 
    c.country_name,
    COUNT(i.id) AS total_invoices,
    AVG(i.total_amount) AS average_amount
FROM country c
INNER JOIN city ci ON c.id = ci.country_id
INNER JOIN customer cu ON ci.id = cu.city_id
INNER JOIN invoice i ON cu.id = i.customer_id
GROUP BY c.country_name
HAVING AVG(i.total_amount) > (SELECT AVG(amount) FROM invoice)
ORDER BY c.country_name ASC;
