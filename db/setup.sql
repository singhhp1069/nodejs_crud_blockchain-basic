CREATE TABLE projects(
   id SERIAL UNIQUE PRIMARY KEY NOT NULL,
   category TEXT,
   title TEXT,
   description TEXT,
   project_start DATE,
   project_end DATE,
   funding_goal INT,
   funding_start DATE,
   funding_end DATE
);
