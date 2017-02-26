![img]()

TMood is a Pebble smartwatch app developed during Bitcamp (a hackathon hosted by University of Maryland) in a team of four. The goal of this app is to provide people some idea about the mood around them when coming to a new place. We decided to make a watch app. It's our first time trying to make a watch app, however, with the help of Pebble.js and CloudPebble (online pebble IDE and simulator), the development was very smooth and enjoyable.

#### What it does
When you open this app, tMood will gather tweets in your area and analyze their sentiment level and display the data using a matrix of emojis. Smiley face representing tweets with positive sentiment; sad face representing tweets with negative sentiment. There is neutral face as well. User can navigate using the side buttons of the Pebble and select to read one of the tweets or shake the watch to get a random tweet.
![img]()


#### How we built it
We used Javascript for the UI and Python for backend server. Pebble is connected to phone for networking. In the front-end, tMood retrieves the current location using geolocation api from the phone and then passes the latitude and longitude to Foursquare api to find out the name of the current location. The name is then sent to the backend server, in which Twitter api and Alchemy api are used to fetch the tweets as well as their sentiments. Server will organize the data in a nicely formatted Json file and sent back to the watch for displaying.
We tried to separate the task into client side request and server side request, because for a Pebble app to make web request, it need to talk to its connected phone first using bluetooth. This will slow down the performance a lot since we are using multiple api's. Secondly, the memory on a pebble watch is very limited, we want the Pebble to store only the most essential information.

#### Does it work
To be honest, this app is more of an experiment than a usable app. There are some of the technical problems that we need to address before sending it to the market. First, the Geolocation api is not 100% accurate. I can detect the general location but cannot be more specific. So it would work if you are in a stadium, but if you are in a small cafe, the app might confuse it with a neighboring store.


Secondly, there needs to be enough tweets with location enabled to get enough information. That means, if the place is not popular, or most people going to the place don't use Twitter, we can't get very useful data.