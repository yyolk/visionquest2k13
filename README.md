[visionquest2013](http://visionquest.dinca.org)
===============

Clone this repository or download the zip.

		git clone https://github.com/yyolk/visionquest2k13

        cd visionquest2k13

        npm i

_requires JSON data for each day_

use a MongoDB database and add the JSON files under `events/` for the `Events` collection.

Simply use the json included to create new 'event' entries in the `Events` collection.

After adding entries to the MongoDB and with MongoDB running use

        grunt

to start the server

then open [http://localhost:3000]() in your browser
