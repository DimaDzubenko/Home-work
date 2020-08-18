USE `bank`;
/*1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.*/
SELECT * FROM bank.client WHERE LENGTH(FirstName) < 6; 

/*2. +Вибрати львівські відділення банку.+*/
SELECT * FROM bank.department WHERE DepartmentCity = 'Lviv';

/*3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.*/
SELECT * FROM bank.client WHERE Education = 'high' order by LastName;

/*4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.*/
SELECT * FROM application ORDER BY idApplication DESC LIMIT 5;

/*5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.*/
SELECT * FROM client WHERE LastName = '%ov' OR LastName = '%ova';

/*6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.*/
SELECT * FROM client WHERE Department_idDepartment = '1' or Department_idDepartment = '4';

/*7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.*/
SELECT FirstName, Passport FROM client ORDER BY FirstName;

/*8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.*/
SELECT * FROM client
JOIN application ON client.idClient = application.Client_idClient
WHERE application.Sum > 5000;

/*9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.*/
select count(idClient) from client;
select count(idClient) from client where Department_idDepartment = '2' or Department_idDepartment = '5'

/*10. Знайти кредити, які мають найбільшу сумму для кожного клієнта окремо.*/
select max(Sum), c.FirstName, c.LastName from application a
join client c on c.idClient = a.Client_idClient
group by idClient;

/*11. Визначити кількість заявок на кредит для кожного клієнта.*/
select count(idApplication), c.FirstName, c.LastName from application a
join client c on c.idClient = a.Client_idClient
group by idClient;

/*12. Визначити найбільший та найменший кредити.*/
select max(Sum) from application;
select min(Sum) from application;

/*13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.*/
select count(idApplication) from application a
join client c on a.Client_idClient = c.idClient
where c.Education = 'high';

/*14. Вивести дані про клієнта, в якого середня сума кредитів найвища.*/
select *, avg(application.Sum) as AVGSUM from client
join application on client.idClient = application.Client_idClient
group by client.idClient
order by AVGSUM desc
limit 1;

/*select c.idClient, 
c.FirstName, c.LastName, 
c.Education, c.Passport, 
c.City, c.Age 
from bank.client c
join bank.application a
on c.idClient = a.Client_idClient
group by a.Client_idClient
HAVING avg(a.Sum) = (
  SELECT max(avg_sum) 
    from (
    SELECT avg(Sum) as avg_sum, 
    Client_idClient 
    from bank.application 
    group by Client_idClient) as T
);*/

/*15. Вивести відділення, яке видало в кредити найбільше грошей*/
select idDepartment, DepartmentCity, sum(application.Sum) as SUMSUM from department
join client on department.idDepartment = client.Department_idDepartment
join application on client.idClient = application.Client_idClient
group by department.idDepartment
order by SUMSUM desc
limit 1;

/*16. Вивести відділення, яке видало найбільший кредит.*/
select max(Sum) as maxCredi, d.idDepartment, d.DepartmentCity from application a
join client c on a.Client_idClient = c.idClient
join department d on c.Department_idDepartment = d.idDepartment;

/*17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.*/
update application
join client on application.Client_idClient = client.idClient
set application.Sum = '6000', application.Currency = 'грн'
where client.Education = 'high';

/*18. Усіх клієнтів київських відділень пересилити до Києва.*/
update client c
join department d on c.Department_idDepartment = d.idDepartment
set City = 'Kyiv'
where d.DepartmentCity = 'Kyiv';

/*19. Видалити усі кредити, які є повернені.*/
delete from application 
where CreditState = 'Returned';

/*20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.*/
delete a from application a
join client c on a.Client_idClient = c.idClient
where c.LastName like '_a%' 
or c.LastName like '_e%' 
or c.LastName like '_i%' 
or c.LastName like '_o%' 
or c.LastName like '_u%';

/*Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000*/


/*Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000*/


/* Знайти максимальний неповернений кредит.*/


/*Знайти клієнта, сума кредиту якого найменша*/


/*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/


/*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/


/*#місто чувака який набрав найбільше кредитів*/


/*set sql_safe_updates = 0;*/
/*set sql_safe_updates = 1;*/