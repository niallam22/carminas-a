# Casting Carmina

A portfolio website for an actor, writer and coach.

### Link to project: https://carmina.cyclic.app/
![Setting up a meeting](carminas-a-readme.gif?raw=true "Booking a meeting")

## About this project

This project is a fullstack MERN web application with the following features: 

- JWT user authentication
- Dynamically generated blog
- Integrated text editor
- Pagination enabled blog navigation 
- CRUD APIs and user authenticated endpoints to manage blog access
- Cloud hosted image content
- Animated and interactive UI
- Gallery modal
- Integrated meeting booking system
- SMTP connected forms
- Responsive and mobile friendly design

## Optimisations and future work

1. Code splitting to decrease load time
2. Host all images via cloud to reduce build size (currently only blog and gallery images are in cloud storage)
3. Implement static-site-generation to content not subject to changes (i.e. home page) to improve SEO and download speed
4. Implement server-side-generation to dynamic blog routes to improve SEO and download speed e.g using Next.js to pre-render the dynamic routes

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
