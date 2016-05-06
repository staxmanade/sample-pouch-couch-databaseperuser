# What is this?

This was a prototype that I put together to prove out what it would be like to use CouchDB and PouchDB as the front/backend database stores for a simple application.

What I wanted was something where each and every single user who **registered** would acquire their own database.

# Project breakdown

1. [Some ToDos](#some-todos)
- [The Tech](#the-tech)
- [The Server](#the-server)
  - [What it does](#what-it-does)
  - [Server Setup](#server-setup)
- [The Client](#the-client)
  - [Client Setup](#client-setup)


<a name="#some-todos"></a>
# Some Todos

- [ ] Modify the databaseperuser couch plugin to not add users as admins and instead as members.
- [ ] Find a solution to password recovery (for the registered user).
- [ ] Show how to deploy this to [Digital Ocean](https://www.digitalocean.com/?refcode=451940554550)
- [ ] Finish filling out docs

<a name="#the-tech"></a>
# The Tech

This project was pieced together with an assortment of the following tech.

- Server
  - [CouchDB](http://couchdb.apache.org)
  - [Docker](https://www.docker.com)

- Client
  - [PouchDB](https://pouchdb.com)
  - [JSPM/SystemJS](http://jspm.io)
  - [React](https://facebook.github.io/react)
  - [Babel](https://babeljs.io)


<a name="#the-server"></a>
# The Server

<a name="#what-it-does"></a>
## What it Does

TODO...

<a name="#server-setup"></a>
## Server Setup

You can see some simple docker commands in the [server readme](./server/README.md).

<a name="#the-client"></a>
# The Client

TODO...

<a name="#client-setup"></a>
## Client Setup

The client is a simple static site. To get it running

1. `cd client`
2. `jspm install` (If you don't have jspm installed install it with `npm install -g jspm@latest`
3. Run the site in a simple static file server. (EX: [nws](https://www.npmjs.com/package/nws) `nws -o index.html`)
