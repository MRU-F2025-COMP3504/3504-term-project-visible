-- =========================
-- Users
-- =========================
INSERT INTO users (email, password, first_name, last_name) VALUES
-- Influencer users
('emma.johnson@example.com','password123','Emma','Johnson'),
('liam.smith@example.com','password123','Liam','Smith'),
('olivia.brown@example.com','password123','Olivia','Brown'),
('noah.jones@example.com','password123','Noah','Jones'),
('ava.miller@example.com','password123','Ava','Miller'),
('ethan.davis@example.com','password123','Ethan','Davis'),
('sophia.wilson@example.com','password123','Sophia','Wilson'),
('mason.moore@example.com','password123','Mason','Moore'),
('isabella.taylor@example.com','password123','Isabella','Taylor'),
('logan.anderson@example.com','password123','Logan','Anderson'),
('mia.thomas@example.com','password123','Mia','Thomas'),
('lucas.jackson@example.com','password123','Lucas','Jackson'),
('charlotte.white@example.com','password123','Charlotte','White'),
('jack.harris@example.com','password123','Jack','Harris'),
('amelia.martin@example.com','password123','Amelia','Martin'),
('logan.thompson@example.com','password123','Logan','Thompson'),
('harper.garcia@example.com','password123','Harper','Garcia'),
('alexander.martinez@example.com','password123','Alexander','Martinez'),
('ella.robinson@example.com','password123','Ella','Robinson'),
('michael.clark@example.com','password123','Michael','Clark'),
('grace.lewis@example.com','password123','Grace','Lewis'),
('daniel.walker@example.com','password123','Daniel','Walker'),
('chloe.hall@example.com','password123','Chloe','Hall'),
('benjamin.allen@example.com','password123','Benjamin','Allen'),
('sophia.young@example.com','password123','Sophia','Young'),

-- Business users
('wildpeak.admin@example.com','password123','Connor','Reed'),
('urbanstyle.admin@example.com','password123','Maya','Cook'),
('mapletech.admin@example.com','password123','Evan','Ward'),
('greenleaf.admin@example.com','password123','Zoe','Watson'),
('summitfitness.admin@example.com','password123','Caleb','Brooks'),
('rockytrails.admin@example.com','password123','Lily','Gray'),
('albertabites.admin@example.com','password123','Owen','Price'),
('mountainglow.admin@example.com','password123','Ella','Cox'),
('prairiehome.admin@example.com','password123','Henry','Ward'),
('northerntech.admin@example.com','password123','Sophie','Reid'),
('sunsetcafe.admin@example.com','password123','Jack','Bell'),
('maplewood.admin@example.com','password123','Chloe','Murphy'),
('albertawellness.admin@example.com','password123','Lucas','Howard'),
('prairiegardens.admin@example.com','password123','Ava','Carter'),
('rockyview.admin@example.com','password123','Ethan','Foster'),
('sunshinestudios.admin@example.com','password123','Lily','Graham'),
('albertabrew.admin@example.com','password123','Mason','Ward'),
('reddeercreative.admin@example.com','password123','Grace','Hughes'),
('banfflodge.admin@example.com','password123','Noah','Perry'),
('canmoreadventures.admin@example.com','password123','Sophia','Price'),
('edmontontech.admin@example.com','password123','Jack','Foster'),
('calgaryconsulting.admin@example.com','password123','Mia','Cole'),
('lethbridgefitness.admin@example.com','password123','Ethan','Bailey'),
('fortmcinnovation.admin@example.com','password123','Ava','Reed'),
('albertaculinarycollective.admin@example.com','password123','Dan','Smith');

-- =========================
-- Updated Influencers with Realistic Social Media Display Names
-- =========================
INSERT INTO influencers (user_id, display_name, bio, avatar, portfolio) VALUES
(1, 'Emma Johnson Fit', 'Calgary-based fitness influencer sharing HIIT workouts and nutrition tips.', 'https://example.com/avatars/emma.jpg', 'https://emmafitportfolio.com'),
(2, 'Adventures with Liam', 'Edmonton influencer exploring Alberta''s national parks and trails, with travel guides.', 'https://example.com/avatars/liam.jpg', 'https://liamtravel.com'),
(3, 'Olivia''s Beauty Bar', 'Red Deer influencer focusing on sustainable beauty products and makeup tutorials.', 'https://example.com/avatars/olivia.jpg', 'https://oliviabeauty.com'),
(4, 'Ready Player Noah', 'Calgary gamer influencer streaming strategy and RPG gameplay.', 'https://example.com/avatars/noah.jpg', 'https://noahgaming.com'),
(5, 'Ava Eats', 'Calgary influencer sharing gourmet recipes and cooking tips.', 'https://example.com/avatars/ava.jpg', 'https://avaculinary.com'),
(6, 'Ethan Davis Tech', 'Edmonton-based tech influencer reviewing the latest gadgets and software.', 'https://example.com/avatars/ethan.jpg', 'https://ethantech.com'),
(7, 'Styled by Sophia', 'Calgary influencer showing outfit ideas and fashion trends.', 'https://example.com/avatars/sophia.jpg', 'https://sophiafashion.com'),
(8, 'Mason Moore Fitness', 'Red Deer influencer posting workout routines and healthy lifestyle tips.', 'https://example.com/avatars/mason.jpg', 'https://masonfit.com'),
(9, 'Isabella Taylor Travels', 'Edmonton-based influencer sharing travel experiences across Alberta.', 'https://example.com/avatars/isabella.jpg', 'https://isabellatravel.com'),
(10, 'Logan Anderson Gaming', 'Calgary gamer influencer streaming FPS and strategy games.', 'https://example.com/avatars/logan.jpg', 'https://logangaming.com'),
(11, 'Mia Is a Foodie', 'Red Deer foodie influencer creating recipes and restaurant reviews.', 'https://example.com/avatars/mia.jpg', 'https://miafood.com'),
(12, 'Lucas in the Outdoors', 'Edmonton influencer filming outdoor adventures and Alberta travel vlogs.', 'https://example.com/avatars/lucas.jpg', 'https://lucasadventure.com'),
(13, 'Charlotte''s Glow', 'Calgary influencer focusing on skincare routines and product reviews.', 'https://example.com/avatars/charlotte.jpg', 'https://charlottebeauty.com'),
(14, 'Jack the Strength Coach', 'Edmonton fitness influencer providing weight training and wellness tips.', 'https://example.com/avatars/jack.jpg', 'https://jackfit.com'),
(15, 'World Class Wanderlust', 'Red Deer-based influencer sharing Alberta travel itineraries and guides.', 'https://example.com/avatars/amelia.jpg', 'https://ameliatravel.com'),
(16, 'TechTalk with Logan', 'Calgary tech influencer reviewing software, apps, and gadgets.', 'https://example.com/avatars/loganT.jpg', 'https://logantech.com'),
(17, 'Finding Threads', 'Edmonton fashion influencer sharing seasonal outfit ideas.', 'https://example.com/avatars/harper.jpg', 'https://harperfashion.com'),
(18, 'Alexander Martinez Games', 'Calgary gamer influencer streaming multiplayer and RPG games.', 'https://example.com/avatars/alexander.jpg', 'https://alexgamings.com'),
(19, 'In the Kitchen with Ella', 'Red Deer culinary influencer sharing recipes and cooking techniques.', 'https://example.com/avatars/ella.jpg', 'https://ellaculinary.com'),
(20, 'Michael Goes Outdoors', 'Edmonton influencer focusing on hiking, camping, and outdoor adventures.', 'https://example.com/avatars/michael.jpg', 'https://michaeloutdoor.com'),
(21, 'Gracefully FitLife', 'Calgary-based influencer posting fitness routines and health tips.', 'https://example.com/avatars/grace.jpg', 'https://gracefit.com'),
(22, 'Daniel Walker Photo', 'Red Deer influencer sharing Alberta landscapes and photography tips.', 'https://example.com/avatars/daniel.jpg', 'https://danieltravel.com'),
(23, 'Chloe Hall Glam', 'Edmonton influencer focusing on makeup tutorials and product reviews.', 'https://example.com/avatars/chloe.jpg', 'https://chloebeauty.com'),
(24, 'Ben the Gadget Guy', 'Calgary tech influencer sharing gadget reviews and tutorials.', 'https://example.com/avatars/benjamin.jpg', 'https://benjamintalk.com'),
(25, 'Eating with Sophia', 'Red Deer foodie influencer exploring Alberta''s local cuisine.', 'https://example.com/avatars/sophiaY.jpg', 'https://sophiafood.com');

-- =========================

-- =========================
-- Businesses (25 users)
-- =========================
INSERT INTO businesses (user_id, business_name, location, industry, display_image) VALUES
(26, 'WildPeak Adventures', 'Canmore, AB', 'Tourism & Outdoor Experiences', 'https://example.com/business/wildpeak.jpg'),
(27, 'UrbanStyle Apparel', 'Calgary, AB', 'Fashion Retail', 'https://example.com/business/urbanstyle.jpg'),
(28, 'MapleTech Solutions', 'Edmonton, AB', 'IT Services', 'https://example.com/business/mapletech.jpg'),
(29, 'GreenLeaf Organic Market', 'Red Deer, AB', 'Retail & Grocery', 'https://example.com/business/greenleaf.jpg'),
(30, 'Summit Fitness Clubs', 'Edmonton, AB', 'Health & Fitness', 'https://example.com/business/summitfitness.jpg'),
(31, 'RockyTrails Outfitters', 'Banff, AB', 'Tourism & Outdoor Experiences', 'https://example.com/business/rockytrails.jpg'),
(32, 'Alberta Bites Cafe', 'Calgary, AB', 'Food & Beverage', 'https://example.com/business/albertabites.jpg'),
(33, 'Mountain Glow Spa', 'Canmore, AB', 'Health & Wellness', 'https://example.com/business/mountainglow.jpg'),
(34, 'Prairie Home Decor', 'Red Deer, AB', 'Home & Lifestyle', 'https://example.com/business/prairiehome.jpg'),
(35, 'Northern Tech Solutions', 'Edmonton, AB', 'IT & Services', 'https://example.com/business/northerntech.jpg'),
(36, 'Sunset Cafe', 'Calgary, AB', 'Food & Beverage', 'https://example.com/business/sunsetcafe.jpg'),
(37, 'Maplewood Studios', 'Red Deer, AB', 'Photography & Media', 'https://example.com/business/maplewood.jpg'),
(38, 'Alberta Wellness Center', 'Edmonton, AB', 'Health & Fitness', 'https://example.com/business/albertawellness.jpg'),
(39, 'Prairie Gardens', 'Calgary, AB', 'Landscaping & Gardening', 'https://example.com/business/prairiegardens.jpg'),
(40, 'RockyView Consulting', 'Red Deer, AB', 'Business Consulting', 'https://example.com/business/rockyview.jpg'),
(41, 'Sunshine Studios', 'Edmonton, AB', 'Photography & Media', 'https://example.com/business/sunshinestudios.jpg'),
(42, 'Alberta Brew Co.', 'Calgary, AB', 'Food & Beverage', 'https://example.com/business/albertabrew.jpg'),
(43, 'Red Deer Creative', 'Red Deer, AB', 'Marketing & Advertising', 'https://example.com/business/reddeercreative.jpg'),
(44, 'Banff Lodge & Spa', 'Banff, AB', 'Hospitality', 'https://example.com/business/banfflodge.jpg'),
(45, 'Canmore Adventures', 'Canmore, AB', 'Tourism & Outdoor Experiences', 'https://example.com/business/canmoreadventures.jpg'),
(46, 'Edmonton Tech Hub', 'Edmonton, AB', 'IT & Services', 'https://example.com/business/edmontontech.jpg'),
(47, 'Calgary Consulting Group', 'Calgary, AB', 'Business Consulting', 'https://example.com/business/calgaryconsulting.jpg'),
(48, 'Lethbridge Fitness Center', 'Lethbridge, AB', 'Health & Fitness', 'https://example.com/business/lethbridgefitness.jpg'),
(49, 'Fort McInnovation Lab', 'Fort McMurray, AB', 'IT & Services', 'https://example.com/business/fortmcinnovation.jpg'),
(50, 'Alberta Culinary Collective', 'Calgary, AB', 'Food & Beverage', 'https://example.com/business/albertaculinary.jpg');


-- =========================
-- Gig Listings (50 gigs, 2 per business)
-- =========================
INSERT INTO gig_listings (business_id, title, description, location, budget, requirements, status, application_deadline) VALUES
-- WildPeak Adventures (Canmore)
(1, 'Mountain Hiking Guide', 'Lead guided hikes in Banff and Canmore for tourists, ensuring safety and engagement.', 'Canmore, AB', 350.00, 'Must be experienced hiker with CPR certification', 'Open', '2025-12-31 23:59:00+00'),
(1, 'Social Media Content Creator', 'Create photography and video content showcasing our outdoor experiences.', 'Canmore, AB', 400.00, 'Photography skills required, portfolio preferred', 'Open', '2025-12-31 23:59:00+00'),

-- UrbanStyle Apparel (Calgary)
(2, 'Fashion Model', 'Participate in photoshoots showcasing seasonal clothing lines.', 'Calgary, AB', 300.00, 'Experience preferred, must be comfortable in front of camera', 'Open', '2025-12-20 23:59:00+00'),
(2, 'Social Media Stylist', 'Collaborate on Instagram and TikTok campaigns promoting our apparel.', 'Calgary, AB', 350.00, 'Knowledge of social media trends required', 'Open', '2025-12-20 23:59:00+00'),

-- MapleTech Solutions (Edmonton)
(3, 'Software Demo Presenter', 'Conduct live demos of our software to potential clients.', 'Edmonton, AB', 450.00, 'Strong communication skills, tech-savvy', 'Open', '2025-12-25 23:59:00+00'),
(3, 'Tech Blog Writer', 'Write engaging blog posts about IT solutions and technology trends.', 'Edmonton, AB', 400.00, 'Experience in tech writing preferred', 'Open', '2025-12-25 23:59:00+00'),

-- GreenLeaf Organic Market (Red Deer)
(4, 'Product Photographer', 'Photograph organic products for website and social media.', 'Red Deer, AB', 300.00, 'Photography skills required', 'Open', '2025-12-28 23:59:00+00'),
(4, 'Nutrition Blogger', 'Write informative blog posts about organic food and healthy eating.', 'Red Deer, AB', 350.00, 'Knowledge of nutrition and food writing', 'Open', '2025-12-28 23:59:00+00'),

-- Summit Fitness Clubs (Edmonton)
(5, 'Fitness Class Instructor', 'Lead group classes such as spin, yoga, or HIIT.', 'Edmonton, AB', 400.00, 'Certification required', 'Open', '2025-12-30 23:59:00+00'),
(5, 'Wellness Social Media Coordinator', 'Create engaging content to promote fitness programs.', 'Edmonton, AB', 350.00, 'Experience with social media content', 'Open', '2025-12-30 23:59:00+00'),

-- RockyTrails Outfitters (Banff)
(6, 'Rock Climbing Guide', 'Lead safe and engaging rock climbing excursions.', 'Banff, AB', 375.00, 'Climbing certification required', 'Open', '2025-12-31 23:59:00+00'),
(6, 'Adventure Videographer', 'Capture footage of clients on outdoor adventures for marketing.', 'Banff, AB', 400.00, 'Videography skills required', 'Open', '2025-12-31 23:59:00+00'),

-- Alberta Bites Cafe (Calgary)
(7, 'Barista & Social Media Content Creator', 'Prepare coffee and create Instagram content for promotions.', 'Calgary, AB', 300.00, 'Experience preferred', 'Open', '2025-12-22 23:59:00+00'),
(7, 'Food Photographer', 'Photograph cafe dishes for menu and social media.', 'Calgary, AB', 350.00, 'Photography skills required', 'Open', '2025-12-22 23:59:00+00'),

-- Mountain Glow Spa (Canmore)
(8, 'Massage Therapist', 'Provide professional massage therapy to clients.', 'Canmore, AB', 400.00, 'Certification required', 'Open', '2025-12-29 23:59:00+00'),
(8, 'Spa Marketing Coordinator', 'Develop social media campaigns to promote spa services.', 'Canmore, AB', 350.00, 'Marketing experience preferred', 'Open', '2025-12-29 23:59:00+00'),

-- Prairie Home Decor (Red Deer)
(9, 'Interior Styling Assistant', 'Assist with photo shoots for home decor setups.', 'Red Deer, AB', 325.00, 'Experience in styling or photography preferred', 'Open', '2025-12-27 23:59:00+00'),
(9, 'Lifestyle Blogger', 'Write content about home styling, decor trends, and tips.', 'Red Deer, AB', 350.00, 'Blogging experience preferred', 'Open', '2025-12-27 23:59:00+00'),

-- Northern Tech Solutions (Edmonton)
(10, 'IT Support Specialist', 'Provide client support for software and hardware issues.', 'Edmonton, AB', 400.00, 'IT experience required', 'Open', '2025-12-26 23:59:00+00'),
(10, 'Tech Content Creator', 'Produce videos and blogs about software solutions.', 'Edmonton, AB', 375.00, 'Tech writing or video experience required', 'Open', '2025-12-26 23:59:00+00'),

-- Sunset Cafe (Calgary)
(11, 'Cafe Barista', 'Prepare coffee and beverages for customers.', 'Calgary, AB', 300.00, 'Experience preferred', 'Open', '2025-12-23 23:59:00+00'),
(11, 'Cafe Social Media Promoter', 'Create Instagram/TikTok content to promote cafe.', 'Calgary, AB', 325.00, 'Social media skills required', 'Open', '2025-12-23 23:59:00+00'),

-- Maplewood Studios (Red Deer)
(12, 'Photography Assistant', 'Assist in photoshoots for clients.', 'Red Deer, AB', 350.00, 'Photography knowledge preferred', 'Open', '2025-12-24 23:59:00+00'),
(12, 'Video Editor', 'Edit client videos for marketing campaigns.', 'Red Deer, AB', 375.00, 'Video editing experience required', 'Open', '2025-12-24 23:59:00+00'),

-- Alberta Wellness Center (Edmonton)
(13, 'Yoga Instructor', 'Lead yoga classes for all levels.', 'Edmonton, AB', 400.00, 'Certification required', 'Open', '2025-12-31 23:59:00+00'),
(13, 'Health Blogger', 'Write wellness content for blog and social media.', 'Edmonton, AB', 350.00, 'Experience in wellness writing preferred', 'Open', '2025-12-31 23:59:00+00'),

-- Prairie Gardens (Calgary)
(14, 'Gardening Assistant', 'Assist with landscaping projects and plant care.', 'Calgary, AB', 325.00, 'Experience preferred', 'Open', '2025-12-28 23:59:00+00'),
(14, 'Garden Content Creator', 'Create social media content showcasing gardening projects.', 'Calgary, AB', 350.00, 'Photography/videography skills', 'Open', '2025-12-28 23:59:00+00'),

-- RockyView Consulting (Red Deer)
(15, 'Business Research Analyst', 'Conduct market research and prepare reports for clients.', 'Red Deer, AB', 400.00, 'Research experience preferred', 'Open', '2025-12-29 23:59:00+00'),
(15, 'Consulting Social Media Coordinator', 'Promote services and client success stories online.', 'Red Deer, AB', 350.00, 'Marketing experience preferred', 'Open', '2025-12-29 23:59:00+00'),

-- Sunshine Studios (Edmonton)
(16, 'Photography Assistant', 'Support professional photoshoots and set preparation.', 'Edmonton, AB', 350.00, 'Photography experience preferred', 'Open', '2025-12-30 23:59:00+00'),
(16, 'Video Content Creator', 'Produce videos for client marketing campaigns.', 'Edmonton, AB', 375.00, 'Video editing or filming skills', 'Open', '2025-12-30 23:59:00+00'),

-- Alberta Brew Co. (Calgary)
(17, 'Brew Assistant', 'Assist in brewing and tasting sessions.', 'Calgary, AB', 325.00, 'Interest in brewing required', 'Open', '2025-12-31 23:59:00+00'),
(17, 'Social Media Brewing Content', 'Create posts highlighting new brews and events.', 'Calgary, AB', 350.00, 'Social media content skills required', 'Open', '2025-12-31 23:59:00+00'),

-- Red Deer Creative (Red Deer)
(18, 'Graphic Design Assistant', 'Assist in designing marketing materials.', 'Red Deer, AB', 350.00, 'Graphic design experience preferred', 'Open', '2025-12-25 23:59:00+00'),
(18, 'Marketing Content Creator', 'Develop social media content for client campaigns.', 'Red Deer, AB', 375.00, 'Marketing experience preferred', 'Open', '2025-12-25 23:59:00+00'),

-- Banff Lodge & Spa (Banff)
(19, 'Front Desk Assistant', 'Provide excellent customer service and bookings assistance.', 'Banff, AB', 300.00, 'Hospitality experience preferred', 'Open', '2025-12-30 23:59:00+00'),
(19, 'Event Photographer', 'Photograph lodge events and spa promotions.', 'Banff, AB', 375.00, 'Photography skills required', 'Open', '2025-12-30 23:59:00+00'),

-- Canmore Adventures (Canmore)
(20, 'Adventure Guide', 'Lead outdoor adventures like hiking, biking, and kayaking.', 'Canmore, AB', 375.00, 'Experience required', 'Open', '2025-12-31 23:59:00+00'),
(20, 'Adventure Social Media Creator', 'Capture content for Instagram/TikTok campaigns.', 'Canmore, AB', 350.00, 'Photography/videography skills', 'Open', '2025-12-31 23:59:00+00'),

-- Edmonton Tech Hub (Edmonton)
(21, 'Software Trainer', 'Conduct training sessions for clients on software usage.', 'Edmonton, AB', 400.00, 'Teaching or software experience required', 'Open', '2025-12-28 23:59:00+00'),
(21, 'Tech Video Producer', 'Create video tutorials highlighting software features.', 'Edmonton, AB', 375.00, 'Video editing and tech knowledge required', 'Open', '2025-12-28 23:59:00+00'),

-- Calgary Consulting Group (Calgary)
(22, 'Business Analyst', 'Perform market analysis and generate client reports.', 'Calgary, AB', 400.00, 'Experience preferred', 'Open', '2025-12-26 23:59:00+00'),
(22, 'Consulting Content Creator', 'Develop marketing materials and social media posts for the firm.', 'Calgary, AB', 350.00, 'Marketing or content experience preferred', 'Open', '2025-12-26 23:59:00+00'),

-- Lethbridge Fitness Center (Lethbridge)
(23, 'Personal Trainer', 'Provide one-on-one fitness coaching.', 'Lethbridge, AB', 375.00, 'Certification required', 'Open', '2025-12-27 23:59:00+00'),
(23, 'Fitness Marketing Assistant', 'Create content to promote classes and events.', 'Lethbridge, AB', 325.00, 'Social media experience', 'Open', '2025-12-27 23:59:00+00'),

-- Fort McInnovation Lab (Fort McMurray)
(24, 'Tech Lab Assistant', 'Assist with software testing and lab experiments.', 'Fort McMurray, AB', 375.00, 'Technical experience preferred', 'Open', '2025-12-29 23:59:00+00'),
(24, 'Innovation Content Creator', 'Document lab projects and create social media content.', 'Fort McMurray, AB', 350.00, 'Photography/videography skills required', 'Open', '2025-12-29 23:59:00+00'),

-- Alberta Culinary Collective (Calgary)
(25, 'Recipe Developer', 'Develop and test new recipes for blog and social media content.', 'Calgary, AB', 400.00, 'Culinary experience required', 'Open', '2025-12-31 23:59:00+00'),
(25, 'Food Photographer', 'Photograph dishes for marketing campaigns and social media.', 'Calgary, AB', 375.00, 'Photography experience required', 'Open', '2025-12-31 23:59:00+00');


-- =========================
-- Complete Applications for all 50 gigs (gig_id 1-50)
-- =========================
INSERT INTO applications (gig_id, applicant_id, application_text, status) VALUES

-- Gigs 1–2: Fitness / outdoor adventures
(1, 1, 'Certified fitness instructor and experienced hiker, ready to lead tours safely.', 'Pending'),
(1, 2, 'Outdoor travel content creator with extensive hiking experience in Alberta.', 'Pending'),
(2, 7, 'Fashion influencer with photography experience, able to promote your outdoor apparel line.', 'Pending'),
(2, 2, 'Travel content creator skilled in creating social media videos for adventures.', 'Pending'),

-- Gigs 3–4: Fashion / apparel
(3, 7, 'Fashion content creator experienced in seasonal campaigns and styling.', 'Pending'),
(3, 17, 'Social media fashion influencer, can boost your Instagram and TikTok engagement.', 'Pending'),
(4, 3, 'Beauty influencer with style expertise, happy to promote apparel.', 'Pending'),
(4, 7, 'Creative fashion content creator ready to participate in shoots.', 'Pending'),

-- Gigs 5–6: Tech / software
(5, 6, 'Tech reviewer experienced in software and gadgets, ideal for demos.', 'Pending'),
(5, 16, 'Tech content creator able to write and present engaging software tutorials.', 'Pending'),
(6, 24, 'Gadget influencer ready to contribute reviews and insights for your products.', 'Pending'),
(6, 16, 'Experienced in creating tech tutorials and online demos.', 'Pending'),

-- Gigs 7–8: Culinary / food
(7, 5, 'Culinary influencer with photography experience, can highlight products.', 'Pending'),
(7, 11, 'Food blogger and reviewer, perfect for creating engaging content.', 'Pending'),
(8, 25, 'Foodie influencer exploring local cuisine and sharing social media content.', 'Pending'),
(8, 5, 'Experienced in recipe creation and food content, ready to help.', 'Pending'),

-- Gigs 9–10: Fitness classes
(9, 1, 'Certified fitness coach with group class experience.', 'Pending'),
(9, 8, 'Health and fitness influencer, perfect for leading classes.', 'Pending'),
(10, 21, 'Wellness content creator, able to design engaging fitness classes.', 'Pending'),
(10, 1, 'Experienced in group HIIT and wellness sessions.', 'Pending'),

-- Gigs 11–12: Outdoor adventure / climbing
(11, 2, 'Experienced travel influencer ready to guide outdoor adventures.', 'Pending'),
(11, 12, 'Adventure vlogger skilled in filming outdoor activities.', 'Pending'),
(12, 2, 'Outdoor enthusiast capable of documenting trips for social media.', 'Pending'),
(12, 12, 'Adventure content creator experienced in leading excursions.', 'Pending'),

-- Gigs 13–14: Cafe / culinary
(13, 5, 'Food content creator ready to showcase dishes for social media.', 'Pending'),
(13, 11, 'Food blogger skilled in photography and content creation.', 'Pending'),
(14, 25, 'Culinary influencer documenting food experiences.', 'Pending'),
(14, 5, 'Recipe developer and photographer for social media content.', 'Pending'),

-- Gigs 15–16: Spa / wellness
(15, 1, 'Wellness influencer experienced in relaxation and spa promotions.', 'Pending'),
(15, 21, 'Fitness and wellness content creator, ideal for spa campaigns.', 'Pending'),
(16, 1, 'Wellness and fitness influencer able to promote spa treatments.', 'Pending'),
(16, 21, 'Experienced in creating engaging wellness content for social media.', 'Pending'),

-- Gigs 17–18: Home decor / photography
(17, 25, 'Lifestyle influencer skilled in photography and home styling content.', 'Pending'),
(17, 12, 'Content creator able to assist with marketing shoots.', 'Pending'),
(18, 25, 'Social media content creator for home decor campaigns.', 'Pending'),
(18, 12, 'Photography and video influencer ready to assist.', 'Pending'),

-- Gigs 19–20: Tech / IT
(19, 6, 'Tech influencer experienced in software support and tutorials.', 'Pending'),
(19, 16, 'Tech content creator ready to produce videos for IT solutions.', 'Pending'),
(20, 24, 'Gadget reviewer able to contribute insights for tech campaigns.', 'Pending'),
(20, 16, 'Content creator skilled in technical video tutorials.', 'Pending'),

-- Gigs 21–22: Cafe / social media
(21, 5, 'Culinary influencer creating engaging cafe content.', 'Pending'),
(21, 11, 'Food blogger documenting menu items and beverages.', 'Pending'),
(22, 25, 'Foodie influencer for Instagram and TikTok promotion.', 'Pending'),
(22, 5, 'Recipe developer experienced in creating cafe content.', 'Pending'),

-- Gigs 23–24: Photography / video
(23, 12, 'Experienced photographer and videographer ready to assist.', 'Pending'),
(23, 25, 'Content creator skilled in video and photography for marketing.', 'Pending'),
(24, 12, 'Videography influencer able to produce high-quality promotional content.', 'Pending'),
(24, 16, 'Tech and video influencer skilled in creating professional media.', 'Pending'),

-- Gigs 25–26: Yoga / wellness
(25, 1, 'Fitness and wellness influencer capable of leading yoga sessions.', 'Pending'),
(25, 21, 'Wellness content creator with experience promoting healthy lifestyles.', 'Pending'),
(26, 1, 'Certified fitness instructor ready to conduct wellness classes.', 'Pending'),
(26, 21, 'Content creator specializing in wellness campaigns.', 'Pending'),

-- Gigs 27–28: Gardening / lifestyle
(27, 25, 'Lifestyle influencer with gardening experience creating content.', 'Pending'),
(27, 12, 'Outdoor content creator able to capture garden projects visually.', 'Pending'),
(28, 25, 'Influencer skilled in promoting gardening and landscaping projects.', 'Pending'),
(28, 12, 'Experienced in photography for lifestyle campaigns.', 'Pending'),

-- Gigs 29–30: Business / consulting
(29, 12, 'Content creator able to document business insights and campaigns.', 'Pending'),
(29, 24, 'Tech influencer skilled in producing marketing content.', 'Pending'),
(30, 12, 'Influencer with experience in content creation for business projects.', 'Pending'),
(30, 24, 'Tech reviewer ready to produce social media marketing materials.', 'Pending'),

-- Gigs 31–32: Brew / culinary
(31, 5, 'Culinary influencer documenting brewing processes for content.', 'Pending'),
(31, 11, 'Food blogger ready to create engaging content for brewery campaigns.', 'Pending'),
(32, 25, 'Foodie influencer documenting beverages and events.', 'Pending'),
(32, 5, 'Culinary influencer able to capture professional food photos.', 'Pending'),

-- Gigs 33–34: Hospitality / spa
(33, 1, 'Wellness influencer experienced in hospitality promotions.', 'Pending'),
(33, 21, 'Fitness and wellness content creator ready for spa campaigns.', 'Pending'),
(34, 1, 'Influencer experienced in wellness and hospitality marketing.', 'Pending'),
(34, 21, 'Content creator specializing in wellness projects.', 'Pending'),

-- Gigs 35–36: Outdoor adventures
(35, 2, 'Travel and adventure content creator, perfect for guiding clients.', 'Pending'),
(35, 12, 'Outdoor influencer skilled in documenting adventures.', 'Pending'),
(36, 2, 'Experienced in adventure content creation and guided tours.', 'Pending'),
(36, 12, 'Outdoor influencer able to lead and document activities.', 'Pending'),

-- Gigs 37–38: Tech / software
(37, 6, 'Tech reviewer able to provide tutorials and training.', 'Pending'),
(37, 16, 'Content creator skilled in tech video production.', 'Pending'),
(38, 24, 'Gadget influencer able to create tech instructional content.', 'Pending'),
(38, 16, 'Tech content creator able to produce professional guides.', 'Pending'),

-- Gigs 39–40: Culinary / food
(39, 5, 'Culinary influencer able to develop recipes and photo content.', 'Pending'),
(39, 11, 'Food blogger and photographer documenting dishes.', 'Pending'),
(40, 25, 'Foodie influencer creating social media content for recipes.', 'Pending'),
(40, 5, 'Recipe developer and food content creator ready to contribute.', 'Pending'),

-- Gigs 41–42: Gaming / tech
(41, 4, 'Gamer and streamer ready to engage audiences.', 'Pending'),
(41, 10, 'Experienced in multiplayer and strategy streaming, able to promote gaming.', 'Pending'),
(42, 6, 'Tech reviewer skilled in creating engaging content for software.', 'Pending'),
(42, 16, 'Content creator producing professional tech and gaming tutorials.', 'Pending'),

-- Gigs 43–44: Photography / video
(43, 12, 'Experienced in photography and videography for creative campaigns.', 'Pending'),
(43, 25, 'Lifestyle influencer skilled in social media content creation.', 'Pending'),
(44, 12, 'Content creator able to photograph and produce marketing materials.', 'Pending'),
(44, 16, 'Tech/video influencer capable of professional media production.', 'Pending'),

-- Gigs 45–46: Outdoor / adventure
(45, 2, 'Outdoor influencer ready to lead and document adventures.', 'Pending'),
(45, 12, 'Adventure content creator experienced with social media promotion.', 'Pending'),
(46, 2, 'Travel influencer able to promote adventure activities.', 'Pending'),
(46, 12, 'Outdoor content creator capturing engaging experiences.', 'Pending'),

-- Gigs 47–48: Consulting / business
(47, 12, 'Content creator experienced in consulting campaigns.', 'Pending'),
(47, 24, 'Tech influencer ready to produce marketing content.', 'Pending'),
(48, 12, 'Influencer capable of supporting consulting projects online.', 'Pending'),
(48, 24, 'Tech reviewer able to create marketing and content campaigns.', 'Pending'),

-- Gigs 49–50: Culinary / tech
(49, 6, 'Tech influencer documenting lab and software projects.', 'Pending'),
(49, 16, 'Content creator skilled in technical and educational media.', 'Pending'),
(50, 5, 'Culinary influencer developing recipes for social media.', 'Pending'),
(50, 11, 'Food blogger and photographer ready to produce culinary content.', 'Pending'),
(50, 25, 'Foodie influencer documenting recipes and cooking techniques.', 'Pending');
