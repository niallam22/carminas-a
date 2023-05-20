# Carminas app

A portfolio website for an actor, writer and coach.

### Link to project: https://carminas.up.railway.app/
![Setting up a meeting](carminas-a-readme.gif?raw=true "Booking a meeting")

## About this project

This project is a fullstack MERN web application with the following features: 

- JWT user authentication
- Dynamically generated blog
- Integrated text editor
- Pagination
- CRUD APIs and middleware to manage blog access
- Cloud hosted content
- Animated and interactive UI
- Gallery modal
- Integrated booking system
- SMTP connected forms
- Responsive and mobile friendly design

## Optimisations

1. Code splitting to decrease load time
2. Host all images via cloud to reduce build size (currently only blog and gallery images are in cloud storage)
3. Implement static-site-generation to content not subject to changes (i.e. home page) to improve SEO and download speed
4. Implement server-side-generation to blog content to improve SEO and download speed

## Running Locally

1. Install dependencies using npm:

```sh
npm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env
```

3. Start the development server:

```sh
npm run dev
```