SELECT id, email, name
	FROM public."User";

SELECT *
	FROM public."Post";

SELECT * FROM public."User"
WHERE email like '%prisma.io%'


INSERT INTO public."Post"(
 id, title, content, published, "authorId")
VALUES (5, 'Content 11', 'Description number two xD', True, 2);