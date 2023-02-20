var array=[];
var signInfo={};
localStorage.setItem('array',JSON.stringify(array));
var storage=JSON.parse(localStorage.getItem('array'));
console.log(storage);
var userBtn=document.getElementById("get");
var urClick=document.getElementById("create");
var goForgot=document.getElementById("tochange");
var addNew=document.getElementById("forgot");
var undo=document.getElementById("logout");
var logImg=document.getElementById("log_img");
var home=document.getElementById("combaine");
var click=document.getElementById("clear");
var userEmail=document.getElementById("loginmail");
var userPass=document.getElementById("loginpassword");
var onePass=document.getElementById("forgot_pass");
var secondPass=document.getElementById("forgot_confirm");
var header=document.getElementById("headlogo");
var headerCont=document.getElementById("headcont");
var wel=document.getElementById("welcome");
var okPass=document.getElementById("for_change");

userBtn.addEventListener("click",function() {
	var mail=userEmail.value;
	var usrPassword=userPass.value;
	if(array.length>0) {
		for(var i in array){
			if(mail===array[0].url&&usrPassword===array[0].urPass){
				click.style.display="none";
				header.style.display="none";
				headerCont.style.display="none";
				wel.style.display="none";
				home.style.display="block";
		    }
			else if(mail!==array[0].url){
				alert("your email is wrong?");
				userEmail.value="";
			}
			else if(usrPassword!==array[0].urPass){
				alert("your password is wrong?.please change the password in forgot password");
				userPass.value="";
				goForgot.addEventListener("click",function() {
					click.style.display="none";
					addNew.style.display="block";
			    });
				okPass.addEventListener("click",function() {
					var firstForPass=onePass.value;
					var secondForPass=secondPass.value;
					if(firstForPass===secondForPass) {
						array[0].urPass = firstForPass;
						array[0].urConPass = secondForPass;
						click.style.display="block";
						addNew.style.display="none";
					}
					else{
						alert("confirm password is wrong?");
						secondPass.value="";
					}
				});
			}
		}
	}
	else {
		alert("please sign up your account");
		userEmail.value="";
		userPass.value="";
		urClick.style.display="block";
		urClick.addEventListener("click",function() {
		click.style.display="none";
		openClick.style.display="block";
		});
	}
});
var userSignUpBtn=document.getElementById("got");
var openClick=document.getElementById("sign-up");
var inputClear=document.getElementById("remove");
var userFname=document.getElementById("Fname");
var userLname=document.getElementById("Lname");
var userMail=document.getElementById("email");
var userSignUpPass=document.getElementById("password");
var userSignUpConPass=document.getElementById("conpass");
var userGenders=document.querySelectorAll('input[name="gender"]');
var rates = document.getElementsByName('rate');
var userDob=document.getElementById("date");
var number=document.getElementById("phone");
var exchange=document.getElementById("swap");
userSignUpBtn.addEventListener("click",function() {
	var firstName=userFname.value;
	var lastName=userLname.value;
	var url=userMail.value;
	var urPass=userSignUpPass.value;
	var urConPass=userSignUpConPass.value;
		for (var userGender of userGenders) {
			if (userGender.checked) {
				var urGender=userGender.value;
				break;
			}
		}
	var urBirth=userDob.value;
	var mNum=number.value;
	if(urPass===urConPass){
			signInfo["firstName"]=firstName;
			signInfo["lastName"]=lastName;
			signInfo["url"]=url;
			signInfo["urPass"]=urPass;
			signInfo["urConPass"]=urConPass;
			signInfo["urGender"]=urGender;
			signInfo["urBirth"]=urBirth;
			signInfo["mNum"]=mNum;
			array.push(signInfo);
			console.log(array);	
			openClick.style.display="none";	
			click.style.display="block";
			urClick.style.display="none";
			/* document.getElementById('apply').innerHTML=firstName+""+""+lastName; */
		}
		else{
			alert("confirm password is wrong?");
			userSignUpConPass.value="";
		}
});
inputClear.addEventListener("click",function() {
	userFname.value="";
	userLname.value="";
	userMail.value="";
	userSignUpPass.value="";
	userSignUpConPass.value="";
	userGender.value="";
	userDob.value="";
	number.value="";
});
undo.addEventListener("click",function() {
	click.style.display="block";
	headerCont.style.display="block";
    wel.style.display="block";
	urClick.style.display="block";
	home.style.display="none";
	userEmail.value="";
	userPass.value="";
});
exchange.addEventListener("click",function() {
	    alert("Sing in form is infornt of you in display");
		click.style.display="none";
		openClick.style.display="block";
});
/*-------- home-page --------*/
var taskInfo=document.getElementById("task");
var info=[
	{
		id: 'person01',
		picture: 'image/testimonials-1.jpg',
		name: 'arjun',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '7,121 followers',
		btn: 'follow'
	},
	{
		id: 'person02',
		picture: 'image/testimonials-2.jpg',
		name: 'sithesh',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '4,208 followers',
		btn: 'follow'
	},
	{
		id: 'person03',
		picture: 'image/testimonials-3.jpg',
		name: 'jayasuriya',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '5,124 followers',
		btn: 'follow'
	},
	{
		id: 'person04',
		picture: 'image/testimonials-4.jpg',
		name: 'dharumaraj',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '2,344 followers',
		btn: 'follow'
	},
	{
		id: 'person05',
		picture: 'image/testimonials-5.jpg',
		name: 'mugilan',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '3,506 followers',
		btn: 'follow'
	},
	{
		id: 'person06',
		picture: 'image/testimonials-6.jpg',
		name: 'jeeva',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '1,233 followers',
		btn: 'follow'
	}
]

info.forEach(function(obj){
	var tableItem=document.createElement("div");
	var tableItem1=document.createElement("div");
	var cancelBack=document.createElement("div");
	var cancel=document.createElement("div");
	var tableItem2=document.createElement("div");
	var picTag=document.createElement("img");
	var tableItem3=document.createElement("div");
	var nmTag=document.createElement("h3");
	var bthTag=document.createElement("h4");
	var bchTag=document.createElement("h4");
	var flrTag=document.createElement("h6");
	var buttonTag=document.createElement("button");
	
	tableItem.setAttribute("class","box");
	tableItem1.setAttribute("class","back-img");
	cancelBack.setAttribute("class","back");
	cancel.setAttribute("class","cancel");
	tableItem2.setAttribute("class","box-img");
	tableItem3.setAttribute("class","box-cont");
	tableItem.setAttribute("id",obj.id);
	
	picTag.src=obj.picture;
	nmTag.innerText=obj.name;
	bthTag.innerText=obj.batch;
	bchTag.innerText=obj.branch;
	flrTag.innerText=obj.follower;
	buttonTag.innerText=obj.btn;
	
	tableItem2.appendChild(picTag);
	tableItem3.append(nmTag,bthTag,bchTag,flrTag,buttonTag);
	cancelBack.appendChild(cancel);
	tableItem1.appendChild(cancelBack);
	tableItem.append(tableItem1,tableItem2,tableItem3);
	taskInfo.appendChild(tableItem);
});
