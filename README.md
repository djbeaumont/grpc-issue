# Reproducing grpc dns lookup issue

* Install packages: `yarn`
* Amend your project name and keyfile path in `server.js`
* Amend your topic name and subscription name in `server.js`
* Run locally with `npm start` to check that works
* Build the docker image: `docker build .`
* Run the docker image and get a shell: `docker run -it CONTAINER_ID_HERE bash`
* Reinstall the packages: `rm -rf node_modules && npm install`
* Run the app: `GRPC_VERBOSITY=DEBUG npm start`

Nb: hack of reinstalling the packages on the container avoids the packages having been built
for the host operating system (e.g. mac os x) and being incompatible with the container.
