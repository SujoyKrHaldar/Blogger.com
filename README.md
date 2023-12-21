# Blogger.com
A multiuser blogging platform just like Medium, Hashnode.

## Tech Stack
**Client:** React, Redux-toolkit, TailwindCSS
**Server:** Appwrite

## Protected Routes
1. **Public Routes:** /, /login, /signup, /feed, /search,
   /author/username, /blog/blog-slug
   Accessable by Any ( Guests or Authenticated Users )

2. **Guest Routes:** /, /login, /signup
   Accessable by only Guests ( authStatus = F )
   if authStatus = T => Redirected to => /feed

3. **Semi-Protected Routes** : /setup
   Accessable by only Authenticated Users with profile Activation False
   ( authStatus = T && isActivated = F)
   if authStatus = F => redirected to => /login
   if authStatus = T & isActivated = T => redirected to => /dashboard

4. **Private Routes:** /dashboard, /create-post, /update-post
   Accessable by only Authenticated Users
   ( authStatus = T && isActivated = T)
   if authStatus = F => redirected to => /login
   if authStatus = T & isActivated = F => redirected to => /create
   if authStatus = T & isActivated = T => redirected to => /dashboard

<!-- https://undraw.co/search for UI illustrations #36B91C -->
