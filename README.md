# DevConnector

> Social network API for developers

# Quick Start 🚀

### Add a .env file in the root of the project with the following

```
MONGOURI=<your_mongoDB_Atlas_uri_with_credentials>
JWTSECRET=secret
GITHUBTOKEN=<yoursecrectaccesstoken>
```

### Install dependencies

```bash
npm install
```

### Run

```bash
npm run server
```

Check in browser on [http://localhost:3335/](http://localhost:3335/)

### Deploy to Heroku

If you followed the sensible advice above and included .env in your .gitignore file, then pushing to Heroku will omit your config files from the push.  
However, Heroku needs these files for a successful build.  
So how to get them to Heroku without commiting them to GitHub?

What I suggest you do is create Config Vars in the Settings tap of heroku application.

And then follow the heroku instructions to deploy the app.

## App Info

### Author

Helena Oliveira
[Casal Dev](http://www.casaldev.com.br)

### Version

2.0.0

### License

This project is licensed under the MIT License
