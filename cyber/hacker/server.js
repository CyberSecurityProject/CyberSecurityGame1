$( document ).ready( function() {
      //var d= new Date();

        $('#wterm').wterm( {  PS1: '>', WIDTH: '100%', HEIGHT: '100%', WELCOME_MESSAGE: 'Welcome Hacker<br>====================<br> web server you need to hack is "hackmeifyoucan!.com"<br>Type \'help\' to begin ',AUTOCOMPLETE:false });
      });


       var command_directory = {
         
       
         
        
         'cls': function( tokens ) {
      $('.undefined').html('');
    },
         'r': function( tokens ) {
      window.location.reload(); 
    },
        
      };


      for( var j in command_directory ) {
        $.register_command( j, command_directory[j] );
      }

      $.register_command( 'help', function() {
        return '<pre>Please use the following commands:<br>  man             Shows how to use a command <br>  nmap            Scans the web server to find the running services <br>  vulnerability   Searches for the vulnerabilities in a service from internet<br>  eSearch         Searches for the exploit of a vulnerability from internet<br>  use_exploit     Sets the exploit to be used for hacking the web server<br>  set_target      Sets the web server which is to be hacked <br>  set_port        Sets the port on which the exploit will be used <br>  exploit         Uses the vulnerability to gain the system access<br>  change          Changes the service you want to hack<br>  cls             Clears the screen<br> '

      });
