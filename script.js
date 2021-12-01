             var emailArray=[];
             var passwordArray=[];
             var loginBox = document.getElementById("login");
             var regBox = document.getElementById("register");
             var loginTab = document.getElementById("lt");
             var regTab = document.getElementById("rt");

            function loginTabFun()
            {
                regBox.style.visibility="hidden";
                loginBox.style.visibility="visible";
                
                loginTab.style.backgroundColor="#f5f5f5";
                regTab.style.backgroundColor="#ddd";
            }
    
            function regTabFun()
            {
                regBox.style.visibility="visible";
                loginBox.style.visibility="hidden";
              
                regTab.style.backgroundColor="#f5f5f5";
                loginTab.style.backgroundColor="#ddd";
             }

            function register(){

                var email = document.getElementById("re").value;
                var password = document.getElementById("rp").value;
                var passwordRetype = document.getElementById("rrp").value;
                var regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                var lowerCaseLetters = /[a-z]/g;
                var upperCaseLetters = /[A-Z]/g;
                var numbers = /[0-9]/g;

                if(email.length == 0){
                    alert('Please Enter Email');               
                }
                 else if ((!email.match(regExp)))                
                {
                    alert('Invalid Email');
                }

                else if(password.length == 0){
                    alert('Please Enter Password');                                   

                }
                else if((password.length < 4) || (password.length > 15)){                
                    alert('Mini 4 Char & Max 15 Char');

                }
                else if(!password.match(numbers)){
                    alert('please add atleast 1 Digit into password');                     

                }
                else if(!password.match(upperCaseLetters)){
                    alert('please add atleast 1 Uppercase letter into password');          
                    

                }
                else if(!password.match(lowerCaseLetters)){
                    alert('please add atleast 1 Lowercase letter into password');           

                }
                else if (passwordRetype == ""){
                alert("Re Write Password required.");                                      
                }

                else if ( password != passwordRetype){
                alert("Password don't match retype your Password.");                                 
                }

                else if(emailArray.indexOf(email) == -1)
                {
                    emailArray.push(email);
                    passwordArray.push(password);

                    alert(email + "  Thanks for registration. Try to login Now");

                    document.getElementById("re").value ="";
                    document.getElementById("rp").value="";
                    document.getElementById("rrp").value="";
                }

                else{
                    alert(email + "it is already register make New register.");
                return ;
                }
        }

                    function login(){
                    var msg = document.getElementById('msg');
                    var email = document.getElementById("se").value;
                    var password = document.getElementById("sp").value;
                    var i = emailArray.indexOf(email);
                    if(emailArray.indexOf(email) == -1){
                        if (email == ""){
                            alert("Email required.");
                            return ;
                        }
                        alert("Email does not exist.");
                        return ;
                    }
                    else if(passwordArray[i] != password){
                        if (password == ""){
                            alert("Password required.");
                            return ;
                        }
                        alert("Password does not match.");
                        return ;
                    }
                    else {
                        alert(email + " you are Successfully logined Now \n Welcome to our website.");

                        document.getElementById("se").value ="";
                        document.getElementById("sp").value="";
                        return ;
                    }

                }

                    function showPass() {
                              var x = document.getElementById("sp");
                              if (x.type === "password") {
                                x.type = "text";
                              } else {
                                x.type = "password";
                              }
                            }



                  
        

   
