### Welcome to the Advanced Tech

### Here you can see the live website: https://advanced-tech-virid.vercel.app/

##

This is the documentation for the Advanced Tech.

- You can select PC components and build their own PC.

### User

- User can log in with Google and Github.

- User can log out.

- Users can visit the home page, category-wise product page, products page, and product details page without login.

- There is a protected route/page called PC Builder page, User must log in to visit this page.

- In pc builder page users can build their own pc by selecting pc components.

### Technologies used:

- Next.js
- Next Auth
- Next API
- Tailwind with Material Tailwind Components Library
- Mongodb

<!-- HOW TO RUN -->

## Run this repository on your local machine

Please follow the below instructions to run this repository on your local machine:

1. Clone this entire repository

   ```sh
   git clone git-repository-url
   ```

2. Go to the cloned project directory

   ```sh
   cd advanced-tech

   ```

3. Make environment file with the following system

   ```sh
   # For client make .env file accordingly :

   ```

DB_URL=""
BASE_URL=https://advanced-tech-virid.vercel.app

NEXTAUTH_SECRET=""
NEXTAUTH_URL=https://advanced-tech-virid.vercel.app

GITHUB_ID=""

GITHUB_SECRET=""

GOOGLE_ID=""

GOOGLE_SECRET=""

````

4. Install dependencies

```sh
npm i
````

5. Run client (Default Port is 3000)

   ```sh
   # development mode
   npm run dev

   # build mode
   npm run build

   # production mode
   npm run start
   ```

<br>
