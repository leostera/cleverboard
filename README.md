# cleverboard
### the first project using ng-board and transporter.io

### Setup
```
npm run-script setup
```

### Proposed Specs (absolutely debatable):

It will growl me when/if:
* I'm mentioned somewhere.
* A ticket of mine gets third party action.
* A build of a project I'm in FAILED in Jenkins
* I've worked more than 8 hours

In the Today Dashboard I will see:
* Number of hours I've worked today (hook it up with Toggl?)
* Amount of tickets I have and their status
* My standups for the day

In the Overall Dashboard I will see:
* Number of hours I've worked in total and per project
* Number of projects I'm on
* Realtime Stream from the projects I'm on
* Number of Tickets I have worked on

### Server Specs (less debatable, depends on the above):

* Implement OAuth for Assembla to get the data
* Find a nice way to pull data from assembla as fast as possible

### Credits
Built with :heart: by @leostera, @simonwjackson and @danielyoung
