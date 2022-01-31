const { Deepgram } = require('@deepgram/sdk');

const deepgramApiKey = "58ece56484c8576bc785a4db2f8b5058fb5f7d8b";
const audioUrl = "https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav";

const deepgram = new Deepgram(deepgramApiKey);

deepgram.transcription.preRecorded({
        url: audioUrl
    }, {
        punctuate: true,
        // Put the callback endpoint that you are using in the callback property; in this case,
        // I made my API endpoint live using ngrok so that I may test the callback feature.
        callback: `http://14f7-74-105-42-246.ngrok.io/hook`
    }
).catch(err => {
    console.log(err);
})
