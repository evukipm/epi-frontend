# ?

## Description

? is a social platform where you can post a question and users reply you with a step by step answer.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **500:** As an anon/user I can see a 500 page if occurs and error so that I know it's not my fault
- **Read:** As an anon/user I can access the main page and read the posts
- **Sort:** As an anon/user I can sort posts from newest to oldest and by rating.
- **Signup:** As an anon I can signup so that can I start posting, voting and replying.
- **Login:** As a user I can see and edit my profile, see other users profiles.
- **Logout:** As a user I can logout from the platform so no one else can use it.
- **Post:** As a user I can open a thread with my step by step about a random topic.
- **Vote:** As a user I can vote any step singly.
- **Reply:** As a user I can reply any step singly with my preference in that step.

## Backlog

User profile:
- **Followers:** Follow anothers users.
- **Rank:** Rank by posts and rating.
- **Email:** Validation email, and newsletter email.
- **Delete:** Delete profile without deleting posts.

  
# Client

## Routes

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /post/create - form to create
- /post/detail - detail of post
- /profile - profile view
- /profile/edit - form to edit
- 404
- 500

## Pages

- Home Page 
- Sign in Page 
- Log in Page 
- Create post Page
- Detail post Page 
- Profile Page
- Edit profile Page
- 404 Page 
- 500 Page

## Components

- Navbar
- Post main
    - Post Header
- Post Detail view
    - Post Header view
    - Post step view
    - Post step create


## IO


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Post Service
  - post.list()
  - post.create(data)
  - post.detail(id)
- Profile Service
  - profile view
  - profile edit
  - profile delete

# Server

## Models

User model

```
username - String // required & unique
email - String // required & unique
password - String // required
avatar - String
description: String

```

Post model

```
owner: (<ObjectId> 'User')
title: String,
date: String,
text: String,
steps: (<ObjectId> 'Steps')

```

Step model

```

index: Number,
text: String,
votes: {positive: Number, negative: Number}

```

## API Endpoints/Backend Routes

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Post Service
  - post.list()
  - post.create(data)
  - post.detail(id)
- Profile Service
  - profile view
  - profile edit
  - profile delete

- GET /auth/me
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- GET /post/
- POST /post/new
  - body:
    - userid
    - post text
    - array de steps
- GET /post/:id
- GET /profile/:id
- PUT /profile/:id
  - body:
    - description
    - email
    - password
    - avatar

  

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)

