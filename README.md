This is a Streaming App that allows you Create, Read, Update and Delete your Stream and has multiple APIs integrated. The API services used are gapi (Google OAuth), RTMP server(Node Media Server) and json-server for data. Other front-end libraries used are lodash, semantic UI and flv.js

**In order to run this App on your local server you will need to install/configure json-server and node media server.**

###### Get json-server here

- https://github.com/typicode/json-server

###### Get Node Media Server (RTMP server) here

- https://github.com/illuspas/Node-Media-Server#npm-version-recommended

###### Get Google OAuth Key here

- https://console.developers.google.com/apis/

----------------------------------------------------------------------------------------------------------------------------
# Please configure the following to avoid any errors.

- src/apis/stream.js - Change the baseURL to point to the right URL of your json.server

- src/components/streams/StreamShow.js :: line 37 - Change the URL to point to the right URL of your Node Media Server

- src/components/GoogleAuth.js :: line 10 - Insert your GAPI key for Google OAuth.

----------------------------------------------------------------------------------------------------------------------------

## Screenshots
![image](/Screenshots/Screenshot134.png)

**Lastly, You can use OBS to live stream on this app. You can configure OBS settings to match the URL of your Node Media Server and use the Stream ID as your key**

**Feel free to message me if you are having difficulties setting up the App or using it**