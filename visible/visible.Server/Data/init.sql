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


CREATE TABLE IF NOT EXISTS businesses (
  business_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id bigint NOT NULL,
  business_name text NOT NULL,
  location text NOT NULL,
  industry text NOT NULL,
  display_image text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT user_id_fkey FOREIGN KEY (user_id) REFERENCES users(user_id)
);

