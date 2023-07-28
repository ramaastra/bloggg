# How to Run 'Bloggg' Locally

### Steps

1. Clone the repository

```sh
git clone https://github.com/ramaastra/bloggg.git
```

2. Go to the project directory
```sh
cd bloggg/
```

3. Install all project dependencies

```sh
npm install
```

4. Apply database migration

```sh
npx prisma migrate dev
```

5. Run the project

```sh
npm run dev
```

### Note

You can either login as the admin with
- username: bloggg.admin
- Password: z

or login as a user using seed account with
- username: johndoe_ / janesmith_ /davidjohnson_
- password: a

or register a new one, of course.