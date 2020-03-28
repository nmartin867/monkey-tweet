const T = require('twit')({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
});

const postToStatus = (message) => {
    T.post('statuses/update', { status: message }, function (err, data, response) {
        console.log(data)
    });
};

const postDirectMessage = (userId, message) => {
    const eventData = {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": userId
                },
                "message_data": {
                    "text": message
                }
            }
        }
    };
    T.post('direct_messages/events/new', eventData, function (err, data, response) {
        if(err) return console.error(err);
        console.log(data);
    });
};

// const tweetEvent = (tweet) => {
//     const { user, text } = tweet;
//     const replyName = `@${user.screen_name}`;
//     postToStatus(`Hey ${replyName}! Sup?!`);
// };

// const stream = T.stream('statuses/filter', { track: '@monkeymantech' });

// stream.on('tweet', tweetEvent);

postDirectMessage(16651063, 'I love you!');

