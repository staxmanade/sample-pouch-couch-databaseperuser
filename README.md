## Reason for being:

This prototype came out of my personal need to play with [PouchDB](https://pouchdb.com) and [CouchDB](http://couchdb.apache.org) where I wanted to explore what it would take to allow each and every single user who **registered** with the applicaiton to acquire their own database (some bucket to store and syncronize their data across devices). A place where each user (and only that user) has permission to their data in the database (except of course the server-admin user).

This model fits nicely with many types of applications where we want data to be syncronized across devices for a user and the PouchDB/CouchDB combination seemed like it'd be a good fit. So I spent some time organizing this prototype to prove it out and see where I could take it.

I think this concept and infrastructure can be used in may other types of apps and I hope you find it useful as a reference. The current end goal of this prototype is to take my learnings from it and use in a [side project](http://staxmanade.com/apps/xbox-one-podcast/development/) or other app ideas I have cooking.

This example is of-course very simplified (or at least I tried), but it shows a real-world client/server configuration with some interesting technologies.

If you discover any potential security holes or other points of interest that you think would make this tutorial/sample easier to learn/work with, please open a [github issue](https://github.com/staxmanade/sample-pouch-couch-databaseperuser/issues) or even better a pull request.

# What they don't tell you about CouchDB...


# Project breakdown

1. [Pre-recs](#pre-recs)
- [Quick Start](#quick-start)
- [Some ToDos](#some-todos)
- [The Tech](#the-tech)
- [Get The Codes](#the-codes)
- [The Server](#the-server)
  - [What it does](#what-it-does)
  - [What's Different with the CouchDB Configuration](#what-about-couchdb-config-changes)
  - [Server Setup](#server-setup)
- [The Front-End Client](#the-client)
  - [Client Setup](#client-setup)

<a name="#pre-recs"></a>
# Pre-recs

You'll need to have some 3rd party applicaitons installed to play with this sample.

1. [Docker](https://www.docker.com)
2. [NodeJS/NPM](https://nodejs.org/)

<a name="#quick-start"></a>
# Quick Start

```bash
git clone https://github.com/staxmanade/sample-pouch-couch-databaseperuser.git
cd sample-pouch-couch-databaseperuser/server/app
npm install
cd ../
```
> NOTE: the `./servers/app/package.json` contains a `postinstall` script that also uses `jspm install` in the `./servers/app/client/` folder to install client app dependencies.

Then edit the `./server/.env` file with necessary configuration - such as `COUCHDB_USER` and `COUCHDB_PASSWORD`. You can learn more about [passing environment variables into docker on my blog](http://staxmanade.com/2016/05/how-to-get-environment-variables-passed-through-docker-compose-to-the-containers/).

Also update the `./server/couchdb/local.ini` and look for `TODO:` comments - update accordingly.

Once it's configured, then you can:

```
docker-compose up
```

Read the rest of this Readme to get a better idea of all the components in here...

<a name="#some-todos"></a>
# Some Todos

While the prototype is currently working, there are some interesting TODO's that I'd like to accomplish (including here instead of in the github issues for visibility).

- [ ] Show how to deploy this to [Digital Ocean](https://www.digitalocean.com/?refcode=451940554550)

<a name="#the-tech"></a>
# The Tech

This project was pieced together with an assortment of the following tech.

- Server
  - [CouchDB](http://couchdb.apache.org) (The back-end database)
  - [Docker](https://www.docker.com) (Some dev-opsey thing)
  - [Superlogin](https://github.com/colinskow/superlogin) (Auth api's)
  - [Redis](http://redis.io/) (superlogin session store to handle server reboots and not loose people's session)

- Client
  - [PouchDB](https://pouchdb.com) (The front-end database)
  - [superlogin-client](https://github.com/micky2be/superlogin-client) (front-end api to [superlogin](https://github.com/colinskow/superlogin))
  - [JSPM/SystemJS](http://jspm.io) (Browser Package Management)
  - [React](https://facebook.github.io/react) (U.I. Framework)
  - [Babel](https://babeljs.io) (Let's use the newer-cooler javascript)

<a name="#the-codes"></a>
# Get the Codes

1. Clone the repo `git clone https://github.com/staxmanade/sample-pouch-couch-databaseperuser.git`
2. CD into `cd sample-pouch-couch-databaseperuser`
3. `cd ./servers/app && npm install`

> NOTE: the `./servers/app/package.json` contains a `postinstall` script that also uses `jspm install` in the `./servers/app/client/` folder so to also install client app dependencies.

4. `cd ../` (into the `./servers/` folder) where the `docker-compose.yml`
5. `docker-compose up`
6. In the web browser hit you're docker instance on port `3000` ex: `http://localhost:3000` should show you a basic test page that has the register/login form elements. Note use

<a name="#the-server"></a>
# The Server

<a name="#what-it-does"></a>
## What it Does

In this case the `server` is several docker instances.

1. The node web app running that has [Superlogin](https://github.com/colinskow/superlogin) auth routes and renders the React U.I. built in the `./servers/app/client` folder.
2. [CouchDB](http://couchdb.apache.org) is run another docker instance
3. Redis is also run in a docker instance which handles superlogin auth session state.

<a name="#what-about-couchdb-config-changes"></a>
## What's Different with the CouchDB Configuration

This may be specific to "my" use-case, but I made certain changes to the default couchdb configuration
`server/config/couchdb/local.ini` which help to enable this scenario work (and be secure).

1. Security: set `require_valid_user = true` which doesn't allow any access to the couchdb database without a valid auth token. Auth tokens are granted through the `superlogin` portion of the node webapp.
2. Enabled CORS.

  > To allow the site to work we need to enable the proper [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).
  The `server/config/couchdb/local.ini` file has already been updated. This configuration was changed by
  [pouchdb/add-cors-to-couchdb](https://github.com/pouchdb/add-cors-to-couchdb) so you can review how this tool work to see
  what changes it makes to the default config to enable CORS support.

<a name="#server-setup"></a>
## Server Setup

The server is composed of 3 docker containers.

1. The nodejs web app. This is is serving two purposes.

  1) To host the static client reactjs front-end client which uses the
  2) Superlogin auth api's to complete user registration/login/etc



2. The second is the CouchDB server itself. Once a user has registered and logged in with SuperLogin they can then use the auth token to access their couchdb database...

3. The third is a Redis database that the SuperLogin uses inside the node/web app to maintain user sessions.

### DEBUG:

If you need to snoop around inside the container `docker-compose ps` to list the images running and then you can use `docker exec -i -t <docker container name> /bin/bash` to get into a container and snoop around.

<a name="#the-client"></a>
# The Client

<a name="#client-setup"></a>
## Client Setup

The client is a simple static site. To get it running (but there are a few steps):

Pre-recs:

1. Get the latest version of [JSPM](http://jspm.io) `npm install -g jspm@beta`

Now setup the client project.

1. Once you have the [Server Setup](#server-setup)
2. Update you're hosts file so that `couchdb` will resolve to the IP address of the docker machine hosting couchdb. If you're using `docker-machine` try this `docker-machine ip default`

Then edit you're hosts file (on linux/mac edit the `/etc/hosts` file to include the following

> ## But the sample is slow to load...
>
> For better local dev performance, if you want JSPM to bundle the JS and load faster
> try running
>
> `cd ./server/app/client && jspm bundle app -wid` (and keep it running)
>
> This will watch for changes to the client js, rebuild the `build.js` file whenever you make changes to the project.
> When you reload the page it's much faster...

I ran into an issue where the redis database could not write to the `./server/data/redis/` folder which wouldn't allow sessions to be stored across server reboots.

From the root of the project try running these commands to allow the container to write to the mapped docker volume defined in [docker-compose.yaml](./server/docker-compose.yaml).

```
mkdir -p ./server/data/redis
chmod a+x ./server/data/redis
```
