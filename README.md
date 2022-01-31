# NodeJS Callback Handler for Deepgram

At Deepgram, many of our customers use the callback_url feature as a convenient and cost-efficient alternative to waiting (and keeping the connection open) for processing transcripts for longer audio. 

For this reason, I have created a simple webhook consumer for callback handling using NodeJS and ngrok! :smile:

To get this example working, please do the following:
1. Clone the repository onto your computer in your selected directory.
2. Navigate to this project's folder in your terminal and type in `npm install` or `npm i` for short. This should
download all of the packages in package.json.
3. Replace the API_Endpoint in callback_test.js with the callback URL that you would like our webhook to send the POST request to. Since in this case we are using our own local server, we must expose the port index.js is running on to the internet. To do this, I used ngrok.
    * You may use another tool if you so wish, but I will continue to use ngrok in this example. Please see [here](https://ngrok.com/download) to see how to get ngrok installed.
4. In one terminal window, expose the appropriate port using the following command in your terminal: `ngrok http ${PORT_SERVER_IS_RUNNING_ON}`. You should get something that resembles the following screenshot: ![terminal once it is running ngrok](/running_ngrok.png)
5. Run index.js using the following command `npm start`.
6. In callback_test.js, we are using Deepgram's Node SDK with a prerecorded remote audio file. To get it working, replace the `${API_ENDPOINT}` with the URL that ngrok has forwarded our local port (in this case port 3000) to. Remaining consistent with the image above, your ngrok callback example should look like this: `http://c73a-74-105-42-246.ngrok.io/hook`. We must add on `/hook` since this is our path for the POST request that our server will be receiving.
7. Run an instance of callback_test.js in a separate terminal window with this command: `node callback_test.js`.
8. Once you have run it, you should see the request data posted to the `http://c73a-74-105-42-246.ngrok.io/hook` URL path logged in the server's terminal window. See below:
![Results of running Node SDK file](/results.png)

