# Modular Web Portal POC
## Installation / Startup
1. `yarn app:install`
2. `yarn app:start`
3. Navigate browser to http://localhost:7099

## What's this all about?
This app is a suite of front-end sub-applications that are built and depoyed completely independently from each other. Because of this stucture, each application can (and probably should) be contained within it's own source control repository. You can see this in action by running one of the sub-applications directly without the container app: http://localhost:7103.
Another benefit of this structure is the ability to support a scalable plug-in application architecture. This allows features to be "bolted on" by dynamically enabling individual stand-alone appications.