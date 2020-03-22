<!DOCTYPE html>
<html lang="en">
<head>
	<title>Lockbox</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->

<!--===============================================================================================-->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<!--===============================================================================================-->



</head>
<body>
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
					<span class="login100-form-title">
						Sign Up 
                    </span>
                    

                    <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                            <input class="input100" type="text" name="name" placeholder="First Name" id="firstName" onkeyup="Validate(this)" required>
                            <span class="focus-input100"></span>
                        </div>
                    <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
						<input class="input100" type="text" name="name" placeholder="Last Name" id="lastName" onkeyup="Validate(this)" required>
						<span class="focus-input100"></span>
                    </div>
                    
                    <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                            <input class="input100" required type="text" name="email" placeholder="Email" id="email" onchange="email_validate(this.value);">
                            <span class="focus-input100"></span>
                    </div>
<!--                    <div class="status" id="status"></div>-->

					<div class="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
						<input class="input100 " minlength="4" maxlength="16" type="password" name="pass" placeholder="Password" id="pass" >
						<span class="focus-input100"></span>
                    </div>
                    <span class="status" id="status"></span>
                    
                    <div class="wrap-input100 validate-input" data-validate = "Please enter password">
                        <input class="input100 " minlength="4" maxlength="16" type="password" name="repass" placeholder="Re Enter Password" id="repass" onkeyup="checkPass(); return false;">
                        <span class="focus-input100"></span>
                    </div>
                    <span id="confirmMessage" class="confirmMessage"></span>
					

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" type="button" onclick="signUp()">
							Sign Up
						</button>
                    </div>
                    
                    <div class="text-right p-t-13 p-b-23">
							<span class="txt1">
								Have an account!
							</span>

					<a href="index.html" class="txt2">
							Login
						</a>
					</div>

					<div class="flex-col-c p-t-50 p-b-40">
                        
					</div>
				</form>
			</div>
		</div>
	</div>
	
	
<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
<!--===============================================================================================-->
	<script src="js/main.js"></script>
	<script src="js/signup.js"></script>

    <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.6.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
</body>
</html>
