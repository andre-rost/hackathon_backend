// USERS

CREATE TABLE "users" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (255),
    avatar VARCHAR (255),
    date_joined DATE
)

INSERT INTO users (id, username, avatar, date_joined) VALUES
    (1,'Homer','homer.png','2021-03-20'),
    (2,'Marge','marge.png','2021-03-16'),
    (3,'Bart','bart.png','2021-03-19'),
    (4,'Lisa','lisa.png','2021-03-11'),
    (5,'Maggie','maggie.png','2021-03-14')



// MESSAGES

CREATE TABLE "messages" (
    id SERIAL PRIMARY KEY,
    text VARCHAR (500),
    image VARCHAR (255),
    date_posted DATE,
    posted_by VARCHAR
)

INSERT INTO messages (id, text, avatar, date_posted, posted_by) VALUES
    ()