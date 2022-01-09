/*
1. Business Expansion
As part of business expansion efforts at a company, your help is needed to find all pairs of customers and agents who have been in contact more than once. For each such pair, display the user id, first name, and last name, and the customer id, name, and the number of their contacts. Order the result by user id ascending.

Schema
There are 3 tables: customer, user_account, contact.

customer
Name				Type				Description
id 					int 				This is a primary key
customer_name		varchar(255)		Name of the customer
city_id				int 				A unique id for the city in which the customer resides
customer_address 	varchar(255)		Customer's address
contact_person		varchar(255)		Person of contact. Can be null.
email				varchar(128)		Email address of the customer
phone				varchar(128)		Phone number for the customer
is_active			int 				Boolean to denote if the customer is active

user_account
Name				Type				Description
id 					int 				This is a primary key
first_name			varchar(64)			First name of the user
last_name			varchar(64)			Last name of the user
user_name 			varchar(128)		user name for the user
password			varchar(255)		password of the account
email				varchar(128)		email address of the user
phone				varchar(128)		contact number for the user. Can be null.
is_active			int 				Boolean to denote if the user_account is active

contact
Name				Type				Description
id   				int 				This is a primary key
user_account_id		int 				Foreign key referencing user_account.id
customer_id 		int 				Foreign key referencing customer.id
contact_type_id 	int 				Type of the contact
contact_outcome_id 	int 				Can be null
additional_comment 	varchar(255) 		Can be null
initiated_by_customer int 				Boolean
initiated_by_user 	int 				Boolean
*/

SELECT 
    c.id, c.customer_name, c.city_id, c.customer_address, c.contact_person, c.email, c.phone, c.is_active, 
    u.id, u.first_name, u.last_name, u.user_name, u.password, u.email, u.phone, u.is_active,
    co.id, co.contact_type_id, co.contact_outcome_id, co.additional_comment, co.initiated_by_customer, co.initiated_by_user
FROM customer c
INNER JOIN user_account u ON c.id = u.customer_id
INNER JOIN contact co ON c.id = co.customer_id
WHERE co.initiated_by_customer = 1 AND co.initiated_by_user = 1
ORDER BY u.id ASC;