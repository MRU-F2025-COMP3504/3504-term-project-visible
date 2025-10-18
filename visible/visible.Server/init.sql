CREATE TABLE IF NOT EXISTS gigs
(
    id          int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author      VARCHAR(50),
    description VARCHAR(50),
    budget      int NOT NULL
);

INSERT INTO gigs (author, description, budget)
VALUES ('Canela', 'New Product Launch', 750),
       ('Euphoria', 'Open Mic Night', 300);