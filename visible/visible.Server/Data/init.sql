CREATE TABLE IF NOT EXISTS gigs
(
    id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author VARCHAR(50),
    description VARCHAR(50),
    budget int NOT NULL
);

CREATE TABLE IF NOT EXISTS users(
    user_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email text NOT NULL UNIQUE,
    password text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    created_at timestamp with time zone not null default now()                                    
);
