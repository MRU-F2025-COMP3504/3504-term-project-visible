CREATE TABLE IF NOT EXISTS users(
    user_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email text NOT NULL UNIQUE,
    password text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    created_at timestamp with time zone not null default now()
);

CREATE TABLE IF NOT EXISTS influencers(
    influencer_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id int NOT NULL,
    display_name text,
    bio text,
    avatar text,
    portfolio text,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id)
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

CREATE TABLE IF NOT EXISTS gig_listings (
    gig_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    business_id int NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    location text NOT NULL,
    budget numeric NOT NULL,
    requirements text,
    status text NOT NULL,
    application_deadline timestamp with time zone,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT gig_listings_business_id_fkey FOREIGN KEY(business_id) REFERENCES businesses(business_id)
);

