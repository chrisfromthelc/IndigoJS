# IndigoJS
A rudimentary Javascript/jQuery Indigo monitor and control interface.

Indigo is a [home automation server](http://www.indigodomo.com) package that runs on OSX. While Indigo's REST API is still somewhat in it's infancy, there are some functions that can be accessed and/or controlled.

This package primarily uses jQuery, along with a couple of jQuery plugins to connect to Indigo using the JSON feed available.

To get started, simply clone/download the package, and edit the settings in the ```js/connection.js``` file.

This interface does not (yet) make use of any authentication, so it should only be used on your own internal network, or as a starting point for your own implementation. This is a learning project for me; code comments are practically non-existant, and if something's broken, I hope you're able to fix it! :D

In the almost certain case that you're a better developer than me, open up a pull request; IndigoJS will only get better with more contributors.
