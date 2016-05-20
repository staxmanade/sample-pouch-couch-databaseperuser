## Reason for being:

This prototype came out of my personal need to play with [PouchDB](https://pouchdb.com) and [CouchDB](http://couchdb.apache.org) where I wanted to explore what it would take to allow each and every single user who **registered** with the applicaiton to acquire their own database (some bucket to store and syncronize their data across devices). A place where each user (and only that user) has permission to their data in the database (except of course the server-admin user).

This model fits nicely with many types of applications where we want data to be syncronized across devices for a user and the PouchDB/CouchDB combination seemed like it'd be a good fit. So I spent some time organizing this prototype to prove it out and see where I could take it.

I think this concept and infrastructure can be used in may other types of apps and I hope you find it useful as a reference. The current end goal of this prototype is to take my learnings from it and use in a [side project](http://staxmanade.com/apps/xbox-one-podcast/development/) or other app ideas I have cooking.

This example is of-course very simplified (or at least I tried), but it shows a real-world client/server configuration with some interesting technologies.

If you discover any potential security holes or other points of interest that you think would make this tutorial/sample easier to learn/work with, please open a [github issue](https://github.com/staxmanade/sample-pouch-couch-databaseperuser/issues) or even better a pull request.

# What they don't tell you about CouchDB...


# Project breakdown

1. [Some ToDos](#some-todos)
- [Get The Codes](#the-codes)
- [The Tech](#the-tech)
- [The Server](#the-server)
  - [What it does](#what-it-does)
  - [What's Different with the CouchDB Configuration](#what-about-couchdb-config-changes)
  - [Server Setup](#server-setup)
- [The Client](#the-client)
  - [Client Setup](#client-setup)


<a name="#some-todos"></a>
# Some Todos

While the prototype is currently working, there are some interesting TODO's that I'd like to accomplish (including here instead of in the github issues for visibility).

- [ ] Build in support for password recovery. Find a solution to password recovery (for the registered user). This may require a separate web/app/server where the server has admin rights. Possibly send email with token, if link clicked then (gather new password from user) and use admin account to reset password in db.
- [ ] Show how to deploy this to [Digital Ocean](https://www.digitalocean.com/?refcode=451940554550)


<a name="#the-tech"></a>
# The Tech

This project was pieced together with an assortment of the following tech.

- Server
  - [CouchDB](http://couchdb.apache.org) (The back-end database)
  - [Docker](https://www.docker.com) (Some dev-opsey thing)
  - [Superlogin](https://github.com/colinskow/superlogin) (Auth api's)

- Client
  - [PouchDB](https://pouchdb.com) (The front-end database)
  - [superlogin-client](https://github.com/micky2be/superlogin-client) (front-end api to [superlogin](https://github.com/colinskow/superlogin))
  - [JSPM/SystemJS](http://jspm.io) (Browser Package Management)
  - [React](https://facebook.github.io/react) (U.I. Framework)
  - [Babel](https://babeljs.io) (Let's use the newer-cooler javascript)

<a name="#the-codes"></a>
# Get the Codes

To get the code submodule run

1. Clone the repo `git clone https://github.com/staxmanade/sample-pouch-couch-databaseperuser.git`
2. CD into `cd sample-pouch-couch-databaseperuser`
3. `cd ./server/test && npm install`
4.
5. Once you follow the docker build steps below, you can update the test file to point to you're local couchdb instance and run `npm test` which will run some unit tests against the couch database.

<a name="#the-server"></a>
# The Server

<a name="#what-it-does"></a>
## What it Does

In this case the `server` is primarily a simple [CouchDB](http://couchdb.apache.org) with some specific configuration tweaks.
Checkout below the configuration tweaks

<a name="#what-about-couchdb-config-changes"></a>
## What's Different with the CouchDB Configuration

This may be specific to "my" use-case, but I made certain changes to the default couchdb configuration
`server/config/couchdb/local.ini` which help to enable this scenario work (and be secure).

1. Security
  - Only admins should be able to access the system databases. So `http://YOUR_COUCH_IP:5984/_users/_all_docs` should return:

      ````
      {
        "error": "forbidden",
        "reason": "Only admins can access _all_docs of system databases."
      }
      ```

  - Turned off `basic` authentication handler. This is less a security thing than a - I don't want my users to be prompted
  with the ugly browser auth dialog... You may want to turn this back on by modifying the `authentication_handlers` configuration property.

2. Enabled CORS.

  > To allow the site to work we need to enable the proper [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).
  The `server/config/couchdb/local.ini` file has already been updated. This configuration was changed by
  [pouchdb/add-cors-to-couchdb](https://github.com/pouchdb/add-cors-to-couchdb) so you can review how this tool work to see
  what changes it makes to the default config to enable CORS support.

<a name="#server-setup"></a>
## Server Setup

:warning::warning::warning: CHANGE THE PASSWORD STRATEGY `config/couchdb/local.ini` :warning::warning::warning:

> I may update this sample project some time to be more secure with regards to the CouchDB admin password, but if you
want to see one example of how others handle this with a docker container, take a look at [tutumcloud/couchdb](https://github.com/tutumcloud/couchdb)

## docker build

`docker build -t couchdbperuser .`

## docker run

`docker run -d -p 5984:5984 --name couchdbperuser -v $(pwd)/couchdb-data:/usr/local/var/lib/couchdb couchdbperuser`

## Test that it's running

`curl http://$(docker-machine ip default):5984 -v`

### Make sure an un-authenticated user can't see system database info

`curl -v http://$(docker-machine ip default):5984/_users/_all_docs`

> Should return `{"error":"forbidden","reason":"Only admins can access _all_docs of system databases."}`

The whole thing (for easier container/config changes)

```
docker stop couchdbperuser; \
docker rm couchdbperuser; \
docker build -t couchdbperuser . && \
docker run -d -p 5984:5984 --name couchdbperuser -v $(pwd)/couchdb-data:/usr/local/var/lib/couchdb couchdbperuser && \
docker ps && \
sleep 2 &&
curl http://$(docker-machine ip default):5984
```

Snoop around inside the container: `docker exec -i -t couchdbperuser /bin/bash`

<a name="#the-client"></a>
# The Client

<a name="#client-setup"></a>
## Client Setup

The client is a simple static site. To get it running (but there are a few steps):

Pre-recs:

1. Get the latest version of [JSPM](http://jspm.io) `npm install -g jspm@beta`

Now setup the client project.

1. `cd client` (you must be in the `client` folder to run the next command(s))
2. `jspm install`
3. Once you have the [Server Setup](#server-setup), get the ip of the server (EX: `docker-machine ip default`)
and update `client/src/config.js` with the correct path to the PouchDB server.
4. Run the site in a simple static file server. (`npm start`)
5. Open this url in the browser [http://localhost:1337/index.html](http://localhost:1337/index.html)

> ## But the sample is slow to load...
>
> For better local dev performance, if you want JSPM to bundle the JS and load faster
> try running
>
> `jspm bundle app -wid` (and keep it running)
>
> This will watch for changes, rebuild the `build.js` file whenever you make changes to the project. When you reload
> the page it's much faster...
