


// an object that store the my bio so i can use it alter
var bio = {
	"name" : "Mohammed Bamhraz",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "650-55-55-55-55",
		"email" : "mohmedbamhrz@jemail.com",
		"github" : "https://github.com/MohammedBm/",
		"twitter" : "https://twitter.com/",
		"linkedin" : "https://www.linkedin.com/in/mohammed-bmahraz-485146144/",
		"location" : "Vancouver"
	},
	"welcomeMessage" : "Welcome to my  Javascript-created Résumé ",
	"skills" : ["Javascript","Ruby", "C/C++", "Postgresql", "Ruby on Rails",  "awesomeness"],
	"bioPic" : "https://d30y9cdsu7xlg0.cloudfront.net/png/1836-200.png"
};

//here we will use .disply to show my info from the bio
bio.display = function() {
  //here i'll show my name
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
  //the line below will show the role
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  //the line below will prepend my role
	$("#header").prepend(formattedRole);
  //the line below will prepend my name
	$("#header").prepend(formattedName);

  //this line will use HTMLmobile hepler to format my phone number and append it to the page
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

//this line will use HTMLemail to format my eamil and apeend it to the page
	var formattedEmail = addHyperLink(HTMLemail,bio.contacts.email,bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

  //this line will format github and send to the html
	var formattedGitHub = addHyperLink(HTMLgithub,bio.contacts.github,"MohammedBm");
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);
  //this line will format twitter and send it to html
	var formattedTwitter = addHyperLink(HTMLtwitter,bio.contacts.twitter, "@mohmedbamhrz");
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

  //this line will format linkedin and send it to html
	var formattedLinkedIn = addHyperLink(HTMLlinkedIn,bio.contacts.linkedin, "Mohammed Bamhraz LinkedIn");
	$("#topContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedLinkedIn);

  //this line will format location and send it to html
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

//this line will format  picture and send it to html
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

//this line will format  welcome maessage and send it to html
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);


//this steatment will check the array of skill i hve and then append them to the section designed for that
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}


//The object below will store the work experiences

var work = {
	"jobs": [
	],
	display() {
		if (work.jobs.length > 0) {
			for (job in work.jobs) {
				//Div para work experiences
				$("#workExperience").append(HTMLworkStart);
				//Unir el employer y el nombre del trabajo
				var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
				var concattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(concattedEmployerTitle);

				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);

				var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	}
}

//The object below will store the projects

var projects = {
	"projects": [
		{
			"title" : "Color Game",
			"dates" : "2017",
			"description" : "Colr game is a game that give 6 option of colors and you choose the correct color between them",
			"url" : "https://codepen.io/MohmedBm/details/GWaovp/",
			"images" : ""
		},
		{
			"title" : "Amazon-app",
			"dates" : "2017",
			"description" : "Website created with ruby on rails and Postgresql, you can create product, sing up, write reviews and deleted them or edit them.",
			"url" : "https://amazon-app-mohammed.herokuapp.com/",
			"images" : ""
		},
		{
			"title" : "Bytes-Me",
			"dates" : "2017",
			"description" : "This is a multiple choice quiz testing the user's coding knowledge which my group and I. Built under 72 hours at CodeCore developer Bootcamp.",
			"url" : "https://github.com/ozgecokyasar/Bytes_me",
			"images" : ""
		},
		{
			"title" : "DevUp",
			"dates" : "2017",
			"description" : "DevUp is a application for team mangment. In this website other developer who are looking to do projects, work and help other developer. In the application the user can create rooms, in this rooms there will be deatils about the project what languages are used. This application is the perfect platform for developers who wants to communicate with other new developers.",
			"url" : "https://github.com/MohammedBm/DevUp",
			"images" : ""
		}
	],
	display() {
		if (projects.projects.length > 0) {
			for (project in projects.projects) {
				$("#projects").append(HTMLprojectStart);

				//var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				var formattedTitle = addHyperLink(HTMLprojectTitle, projects.projects[project].url, projects.projects[project].title)
				$(".project-entry:last").append(formattedTitle);

				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);

				if (projects.projects[project].images.length > 0) {
					for (image in projects.projects[project].images) {
						var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}
			}
		}
	}
}

//The object below will store the education

var education = {
	"schools": [
		{
			"name" : "CodeCore",
			"location" : "Vancouver",
			"degree" : "Full Stack Web Developer",
			"majors" : "Full Stack Web Developer",
			"dates" : 2017,
			"url" : 'http://codecore.ca/'
		},


	],
	"onlineCourses": [
		{
			"title" : "Software Development Process",
			"school" : "Udacity",
			"dates" : 2017,
			"url" : "https://classroom.udacity.com/courses/ud805"
		},
		{
			"title" : "Programming Foundations with Python",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "https://classroom.udacity.com/courses/ud036"
		},
		{
			"title" : "How to use Git and Github",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "https://www.udacity.com/course/ud775"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : 2017,
			"url" : "http://www.udacity.com/course/ud804"
		},
    {
      "title" : "The Web Developer Bootcamp",
      "school" : "Udemy",
      "dates" : 2017,
      "url" : "https://www.udemy.com/the-web-developer-bootcamp/learn/v4/overview"
		},
    {
      "title" : "Web Development By Doing: HTML / CSS From Scratch",
      "school" : "Udemy",
      "dates" : 2016,
      "url" : "https://www.udemy.com/the-web-developer-bootcamp/learn/v4/overview"
    }
	],
	display() {
    //the line below will write the school name in the html page
		if (education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);

      //the code below will show the school and append them by the object email
			for (school in education.schools) {
				if (!education.schools[school].url) {
					var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				}else{
					var formattedName = addHyperLink(HTMLschoolName,education.schools[school].url,education.schools[school].name);
				}
				$(".education-entry:last").append(formattedName);

				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);

				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append(formattedDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedDates);

				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajor);
			}
		}

    //this if statment will show the online courses
		if (education.onlineCourses.length > 0) {
			$('#education').append(HTMLonlineClasses);

      //this line will show the elemnts of the object education
			for (onlineCourse in education.onlineCourses) {
				$('#education').append(HTMLschoolStart);

        //this line will format the title for the onlineCours
				var formattedOnlineTitle = addHyperLink(HTMLonlineTitle,education.onlineCourses[onlineCourse].url, education.onlineCourses[onlineCourse].title);
				$('.education-entry:last').append(formattedOnlineTitle);

        //this line will will format the school name and send it
				var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
				$('.education-entry:last').append(formattedonlineSchool);

        //this line will show the date that the course was finished on
				var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
				$('.education-entry:last').append(formattedonlineDates);

			}
		}
	}
}


bio.display();
work.display();
projects.display();
education.display();


function addHyperLink(html,url,text){
    if (!text) {
    	text = url;
    }

    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);

    return formattedURL;
}

function inName() {
  var name = bio.name.trim().split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
            name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
