# mono-luck-back
mono-luck-back


### Router path

<font color="#FF0000">
case insensitive
</font>

* GET /
  * render home.html
* GET /home
  * render home.html
* GET /docs
  * give docs title list
  * return json type
* GET /docs/:id
  * give specific docs
  * return json type
* GET /registerPage
  * render registerPage.html
* GET /searchPage
  * render searchPage.html
* GET /searchPage/:phone
  * if phone number is not found in USER,
  * if phone number is not found in REGISTRATION,
  * if phone number is found but not yet lottery,
  * if phone number is found and lottery,
* POST /lockerRegister
  * post {data: type}
  * return 