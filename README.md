# ૮・ﻌ・ა Cookies Heart ₊‧°𐐪♡𐑂°‧₊
## Table Of Contents
Thank you for stopping by! Here's a peek into what you can expect in this README ദ്ദി◝ ⩊ ◜\):

[1. Project Introduction](#project-intro)

[2. Project Overview and Features](#project-overview)

[3. Tech Stack, APIs, and Other Resources](#tech-stack)

[4. Getting Started: Setup](#getting-started)

<a name="project-intro"></a>
## 1. Project Introduction ପ(๑•ᴗ•๑)ଓ ♡
My partner and I (Devon <3) adopted the cutest dog plush and named him "Cookie" ૮⍝• ᴥ •⍝ა. He has a tear in his stomach seam, probably from when he got stuffed? Before sewing my poor baby up, I decided to put an NFC tag inside him - this website is what I wanted to load up when you scan his heart, therefore this project is "Cookie's Heart"!

Note: This project was forked from [RutujaGurav07's Repository](https://github.com/RutujaGurav07/ContainerzedWebApp) - Thank you for providing starter code for a containerised web app!

<a name="project-overview"></a>
## 2. Project Overview and Features ♡‧₊˚
### Overview

### Features
- **User Authentication System**: Login and dashboard view
- **Containerised Architecture**: All components (Frontend, Backend, Database) run in separate Docker containers
- **Django REST API**: Backend API for user authentication and management
- **React Frontend**: Modern UI built with React and Vite
- **PostgreSQL Database**: Persistent data storage
- **pgAdmin**: Managing of the database
- **Docker Compose**: Easy orchestration of all services

<a name="tech-stack"></a>
## 3. Tech Stack, APIs, and Other Resources ˶ˊᜊˋ˶
### Tech Stack
- **React**: JavaScript library for building interactive and reusable user interfaces.
- **Django**: High-level Python web framework that makes it easier to build web apps quickly with less code, designed for rapid development.
- **PostgreSQL**: Free and open-source relational database management system emphasizing extensibility and SQL compliance

### API Endpoints
The backend provides these API endpoints:
- POST /api/auth/register/: Register a new user
- POST /api/auth/login/: Authenticate a user
- POST /api/auth/logout/: Log out the current user
- GET /api/auth/user/: Get information about the current user

### Docker Compose
All components in this tech stack are run in separate containers, use Docker Compose to use them. Here are common commands:
- Start all services: `docker-compose up -d`
- Stop all services: `docker-compose down -v`

### Django
Run Django migrations: `docker-compose exec backend python manage.py migrate`

<a name="getting-started"></a>
## 4. Geting Started: Setup ♡₊ ⊹
### Prerequisites
Before you begin, ensure you have the following installed:
- Docker
- Docker Compose

### Setup
**1. Clone the repository**
```git
git clone https://github.com/RutujaGurav07/ContainerzedWebApp.git
cd ContainerzedWebApp
```

**2. Edit the ports as needed inside `source-code/docker-compose.yml`**

**3. Start the containers**
```git
docker-compose build
docker-compose up -d
```

**4. Access the applications**

If you use the same ports as me in `source-code/docker-compose.yml`:
- Frontend: http://localhost:5174
- Backend API: http://localhost:8001
- Django Admin: http://localhost:8001/admin
- Postfres DB: localhost:5433
- pgAdmin: http://localhost:5051

**5. Create a Django Superuser**\
Create a Django superuser: `docker-compose exec backend python manage.py createsuperuser`

**6. Create a New Server in pgAdmin**\
Use the pgAdmin default credentials defined in your `source-code/docker-compose.yml` to log in. In my case it's:
- Email: `admin@admin.com`
- Password: `admin`

Add your PostgreSQL server using the connection details as defined in your `source-code/docker-compose.yml`. In my case it's:
- Name: Anything you want, I chose `cookies-heart`
- Host name/address: `db`
- Post: `5432`
- Maintenance DB: `cookiesheartdb`
- Username: `postgres`
- Password: `postgres`

It's fine to leave everything else unchanged/blank.