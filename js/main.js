var date = new Date();
var getDay = date.getDay();

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

  var className  = routine[getDay][0][0];
  var classSir   = routine[getDay][0][1];
  var classRoom  = routine[getDay][0][2];


  document.getElementById('first_class').innerHTML = classSir;
  document.getElementById('second_class').innerHTML = className;
  document.getElementById('third_class').innerHTML = classRoom;

}
