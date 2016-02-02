var date = new Date();
var getDay = date.getDay();
var getHours = date.getHours();

var data = {

    routine: function (getDay) {

      if (getDay < 5) {

        var routine = [
              [
                ['EEE 102 (9:35 - 10:35 )','MMF sir','Room Number 404'],
                ['EEE 102 (10:40 - 11:40 )','MMF sir','Room Number 404'],
                ['EEE 102 (11:45 - 12:45 )','MMF sir','Room Number 404']
              ],
              [
                ['CSE 102 (11:45 - 12:45) ','MMRF sir','Room Number 408'],
                ['CSE 102 (1:15 - 2:15 )','MMRF sir','Room Number 408'],
                ['CSE 102 (2:20 - 2:20 )','MMRF sir','Room Number 408']
              ],
              [
                ['ENG 111 (1:15 - 2:15 )','AAA','Room Number 318'],
                ['CSE 111 (2:20 - 3:20)','MMRF','Room Number 318'],
                ['MAT 111 (3:25 - 4:25)','MKI','Room Number 318']
              ],
              [
                ['EEE 101 (8:30 - 9:30)','MMF sir','Room Number 404'],
                ['CSE 111 (9:35 - 10:35)','MMRF sir','Room Number 404'],
                ['MAT 111 (10:40 - 10:40)','MKI sir','Room Number 404']
              ],
              [
                ['ENG 111 (11:45 - 12:45)','AAA','Room Number 318'],
                ['CSE 111 (1:15 - 2:15 )','MMRF sir','Room Number 318'],
                ['EEE 101 (2:20 - 2:20 )','MMF sir','Room Number 318']
              ]
        ];

        var today = routine[getDay];
        var output     = '';

          for ( i = 0; i < today.length; i++ ) {

              output += "<div class=\"portfolioOneItemWrapper\"><div class=\"portfolioOneItemInfoWrapper\"> <h4 class=\"portfolioOneItemTitle\" id=\"first_class\"> Subject: "+ today[i][0] +"</h4> <p id=\"first_class_p\"> Teacher Name : "+ today[i][1] + " <br> " +today[i][2] + "</p></div></div>";
              }

        document.getElementById('allStuff').innerHTML = output;

      } else {

           document.getElementById('allStuff').innerHTML = '<center><h1>Sorry Today is You Holiday!!</h1></center>';
      }

    }

}

var newRoutine = Object.create(data);

if (getHours < 19) {
    newRoutine.routine(getDay);
} else {
    newRoutine.routine(--getDay);
}
