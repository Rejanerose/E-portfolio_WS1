window.alert(" welcome to my Partfolio ");

window.onload= function(){
    console.log("Finished Loading");

    document.getElementById("main").innerText =
        "Welcome to My Portfolio";

        document.getElementById("About").style.backgroundColor = "#fad0ef";
    
        document.getElementById("About").style.color = "#333";
    
        document.getElementById("About").style.fontSize = "20px";
}


function changeTheme() {
    document.body.classList.toggle("dark-mode");
    console.log("Theme changed.");
}

function showInfo() {
    document.getElementById("info").innerHTML =
        "<h3>Personal Information</h3>" +
        "<p><strong>Name:</strong> Rejane Rose V. Teves</p>" +
        "<p><strong>Course:</strong> Bachelor of Science in Information Technology</p>" +
        "<p><strong>Dream Career:</strong> Aspiring Animator</p>";

    console.log("Personal information displayed.");
}