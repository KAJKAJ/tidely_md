'use strict';

 angular.module("env", [])

.constant("GOOGLE_API_URI", "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAR3-1YSkP2LM-HuJshMivhOZuai9L5htM")

.constant("ENV", {
	"FIREBASE_URI": "https://tidely-beta.firebaseio.com/",
	"HOST": "http://tidely.net",
	"MEMORIAL_KEY": "-JlDcsmo7xawmpWaYPDE",
	"APP_VERSION": {
		"MAJOR": 1,
		"MINOR": 0,
		"DETAIL": 2
	}
})

;