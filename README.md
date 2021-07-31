# TuringTech - Backend technical test (Intermediate)

This test is a part of our hiring process for [backend positions](https://www.turingtechnologies.org/careers). It should take you between 2 and 4 hours depending on your experience.
Hope you will have as much fun as we did coding this test!

__Feel free to apply! Drop us a line with your Linkedin/Github/Twitter/AnySocialProfileWhereYouAreActive at hr@turingtechnologies.org__

## Summary

The purpose of the test is to reproduce one Aircall feature: __call forwarding__.

Here is the story:

Your company has one main number. This number is an [IVR](https://en.wikipedia.org/wiki/Interactive_voice_response):
- If the caller presses `1`, call is forwarded to another phone number;
- If the caller presses `2`, he is able to leave a voicemail.

It's 9AM in the office and first calls are coming in!

## Instructions

### Code

In order to receive and route calls, you will be creating an interaction with [Twilio](https://twilio.com)'s API.

Please keep the following points in mind:

- The focus of this test is the interaction between your backend server and Twilio - only inbound calls should be handled;
- In order to test the interaction between Twilio and your local environment, you can use tunnels like [ngrok.com](https://ngrok.com);
- Register a test account on [Twilio](https://twilio.com) - contact us if you need help in order to setup one or need extra credits;
- You can add all the models you need specially for Call object;
- Your project must be available online. A simple Heroku Dyno should do the trick;
- Make your code as clear as possible, it should be understandable at a first glance (comments are more than welcome);
- Do not add tests in your submission, except if you have extra time.

#### Note
We recomment using NodeJS with typecript for this test. However, feel free to use whatever backend system you want :)


### Use case

The use case we want to reproduce is the following:

- A customer is calling the main number of your company;
- If the caller presses `1`, the call is redirected on your personal phone\*. You should be able to pickup and talk with the caller.
- If the caller presses `2`, he can drop a voicemail (you would like to hear this message later);
- The call has to be logged in the database;
- An activity feed, listing all calls, should be displayed: status of the call, duration, link to an audio file if the caller dropped a voicemail plus other info you have in mind.

\* **Pro tip:** you can use `+33 1 23 45 67 89` or `+1 555 666 7777`...

### Main steps

Here are some steps to help you start:

- [ ] Create a Twilio account and read carefully the API doc.

- [ ] Buy a Number on Twilio and try to call it.

- [ ] Create an `Application` and Twilio tools you will use for calls.

- [ ] Create the `Call` model in order to store data about calls.

- [ ] Forward incoming calls according to the previous strategies.

Contact us at hr@turingtechnologies.org if you need more details.


## Submission

Fork this repository and send us a pull request. We will review it and get back to you in order to talk about your code!
