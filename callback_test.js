const { Deepgram } = require("@deepgram/sdk");

const deepgramApiKey = "58ece56484c8576bc785a4db2f8b5058fb5f7d8b";
const audioUrl = "https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav";

const deepgram = new Deepgram(deepgramApiKey);

deepgram.transcription.preRecorded({
        url: audioUrl
    }, {
        punctuate: true,
        // Enter the API endpoint that you are using in the callback property.
        callback: `${API_ENDPOINT}`
    }
).catch(err => {
    console.log(err);
})
