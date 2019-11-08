import React from 'react';

import 'Scss/page/options';

const startDate = new Date(2019, 1, 1).getTime();
const endDate = new Date(2019, 10, 1).getTime();
const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum dictum nunc, in hendrerit odio commodo non. Nulla velit urna, mollis in venenatis nec, suscipit quis velit. Pellentesque suscipit augue a auctor euismod. Nam non lectus ut nunc hendrerit porttitor. Praesent eu massa nisi. Etiam sagittis sed arcu non tincidunt. Maecenas consectetur est vel ante volutpat, non ornare ipsum aliquam. Aliquam pharetra non ante in finibus. Duis quis elit at urna dignissim imperdiet eget et odio. Proin id vestibulum lorem. Donec porta tortor at lorem mollis dictum. Vestibulum efficitur est ex, non iaculis lorem suscipit tincidunt. Duis facilisis bibendum lectus. Vivamus eget risus placerat, tincidunt risus et, fringilla dui.';
const longStringLength = longString.length;

const randInt = (min, max) => Math.floor((Math.random() * (max-min)) + min);

const getRandAvatar = () => randInt(1, 5);
const getRandString = (length=10) => {
    const start = Math.floor((Math.random() * (longStringLength - length)) + length);
    return longString.substr(start, length);
};

const Options = () => {
    const numUsers = 5;
    const users = [];
    for(let i=0; i<numUsers; i++)
    {
        const user = {
            id: (i+1),
            gender: i % 2,
            avatar: getRandAvatar(),
            name: {
                first: getRandString(),
                last: getRandString(),
                display: getRandString().toLowerCase().replace(/\W+/g, '_'),
            },
        };
        users.push(user);
    }

    const numMessages = 20;
    const messages = [];
    for(let i=0; i<numMessages; i++)
    {
        const message = {
            id: (i+1),
            user: randInt(1, numUsers),
            date: Math.floor(randInt(startDate, endDate) * .001),
            message: getRandString( randInt(3, 200) ),
        };
        messages.push(message);
    }

    return (
        <main className='options'>
            <h2>Randomly generated users</h2>
            <pre>{JSON.stringify(users)}</pre>

            <h2>Randomly generated messages</h2>
            <pre>{JSON.stringify(messages)}</pre>
        </main>
    );
};

export default Options;
