![book](./public/images/favicon.ico)
# Minimal Journal

A minimal blog site.

## Modules Used

- express
- ejs
- bootstrap
- mongoDB Atlas

## Functionality

- Display posts
- Add posts
- Remove posts

## Installation

### Clone the repository

```bash
git clone https://github.com/millionhz/minimal-journal.git
```

### Set environment variables

The app requires:
- PORT (port to run the server on)
- DB (database url)
- NODE_ENV

For **development**, nodemon config file can be used to set the environment variables.
Sample `nodemon.json`:

```json
{
    "ext": "js,json",
    "env": {
        "PORT": 3000,
        "DB": "mongodb://127.0.0.1:27017/minimal_blog",
        "NODE_ENV": "development"

    }
}
```

### Install dependencies

```
npm install
```

Note: If NODE_ENV is set to **production**, `npm` will not install devDependencies.

### Run the app

Production:
```
npm start
```

Development:
```
nodemon .
```