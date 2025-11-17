INSERT INTO users (email, password, first_name, last_name)
VALUES
    ('alice.johnson@example.com', 'alice', 'Alice', 'Johnson'),
    ('michael.smith@example.com', 'michael', 'Michael', 'Smith'),
    ('emily.williams@example.com', 'emily', 'Emily', 'Williams'),
    ('daniel.brown@example.com', 'daniel', 'Daniel', 'Brown'),
    ('olivia.martinez@example.com', 'olivia', 'Olivia', 'Martinez');

INSERT INTO influencers (user_id, display_name, bio, avatar, portfolio)
VALUES
    (1, 'Alice J', 'Lifestyle and travel content creator sharing my adventures and positivity.', 'https://cdn.example.com/avatars/alicej.jpg', 'https://alicejourneys.com'),
    (2, 'MichaelS', 'Tech reviewer and gadget enthusiast exploring the latest innovations.', 'https://cdn.example.com/avatars/michaels.jpg', 'https://michaelsmithtech.com'),
    (3, 'Emily W', 'Beauty and fashion influencer helping you express your unique style.', 'https://cdn.example.com/avatars/emilyw.jpg', 'https://emilyglow.com');

INSERT INTO businesses (user_id, business_name, location, industry, display_image)
VALUES
    (4, 'BrightWave Media', 'New York, NY', 'Digital Marketing', 'brightwave.jpg'),
    (5, 'EcoStyle Apparel', 'Los Angeles, CA', 'Fashion & Retail', 'ecostyle.jpg');

INSERT INTO gig_listings (business_id, title, description, location, budget, requirements, status, application_deadline)
VALUES
    (1, 'Social Media Collaboration - Summer Campaign',
     'Looking for lifestyle influencers to promote our upcoming summer products on Instagram and TikTok.',
     'Remote', 1500.00, 'Minimum 10k followers, active on Instagram and TikTok.', 'Open', '2025-12-01 23:59:00+00'),

    (1, 'Tech Review Video Partnership',
     'Seeking a tech influencer to create an honest YouTube review of our new marketing analytics platform.',
     'Remote', 2000.00, 'Experience in tech or SaaS reviews preferred.', 'Open', '2025-11-25 23:59:00+00'),

    (2, 'Sustainable Fashion Shoot',
     'Collaborate with EcoStyle Apparel for a photoshoot promoting our eco-friendly winter line.',
     'Los Angeles, CA', 2500.00, 'Interest in sustainable fashion; comfortable modeling.', 'Open', '2025-12-10 23:59:00+00');