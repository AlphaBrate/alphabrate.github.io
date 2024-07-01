=metadata=
title = Setting Up a Speak Account
date = 2024-07-01
author = AlphaBrate
=metadata=

> In this era of free speech, people are free to share their opinions anywhere. The AlphaBrate Community also supports free speech. However, due to our current financial constraints, we are unable to provide storage services through AlphaBrate. However, we have a solution that might work for you. If you could share your API key with us, we can ensure that only your data is stored there. We appreciate your understanding and cooperation.

## Storage Service Providers

You can get **free** storage from the following service providers and share links with AlphaBrate.

1. Google Firebase
2. Any Other JSON Databases

> Google Firebase has been tested and totally meets the requirements. `NO COOPERATION WITH GOOGLE.`
>
> For other databases, please ensure that it's in JSON `/.json` format and support `GET` / `PUT` / `DELETE` methods. Contact supports when needed.

<hr>

<p>
The following steps will be performed on Google Firebase.
</p>

## Google Firebase

### Create a Firebase Project

1. Go to the [firebase.com](https://firebase.com) and tap `Sign in` with a [Google](https://google.com) Account.

2. Click `Go to console`

3. Click `Create a project`

4. Fill the blanks

5. Click `Continue`

6. We do not recommend enabling Google Analytics.

![GOOGLE ANALYTICS](./assets/google_analytics.png?border-radius=17px&border=1px&bg=transparent&size=small&center=true)

7. Click `Create a project`

8. Wait for it to complete and tap `Continue`

9.  Expand `Build` on the left of the console

10. Click `Realtime Database`

![FIREBASE REALTIME DB 1](./assets/fb_rtdb_1.png?border-radius=17px&border=1px&bg=transparent&size=height-small)

11. Click `Create Database`

12. Select a database location `us-central1` is recommended.

13. Click `Next`

14. Click `Enable`

15. Open `Rules`

![FIREBASE RULES](./assets/fb_rtdb_2.png?border-radius=17px&border=1px&bg=transparent&size=small)

16. Change both `false` into `true` or paste this code:

`
{ "rules": { ".read": true, ".write": true } }
`

17.  Click `Publish`

18. Go back to `Data` and copy the link

![FIREBASE LINK](./assets/fb_rtdb_3.png?border-radius=17px&border=1px&bg=transparent)

19. Login to [AlphaBrate Account Center](https://alphabrate-server.onrender.com/)

20. Paste the link

`Storage` > `User Text Content`: `Add`: `User Text API`

> Please make sure your link ends with `.json`. If it is not, add `/.json` at last of your link.

> EXMAPLE: `https://alphabrate-account-docs-default-rtdb.firebaseio.com` => `https://alphabrate-account-docs-default-rtdb.firebaseio.com/.json`
<hr>

<h2 class="center">Continue Reading</h2>

<a href="" class="center no-margin"><button>We've been working on it.</button></a>

<br>

<div class="space-break dots" data-height="4"></div>

If you have any questions or need further assistance, please don't hesitate to [get support from us](https://alphabrate.github.io/about/support). We're here to help you!
