function submitjj(){
document.getElementById("mmm");
}
function changecontent(){
    document.getElementById("example").innerHTML="<strong>this is changed using innerHTML!</strong>";
}
function changecolor(){
    try{
        const element=document.getElementById("myDiv");
        if(!element){
            throw new Error("element not found");

        }
        element.style.backgroundColor="lightblue";

    }catch(error){
        console.error("Error changing background:", error.message);
    }
}
function changecolor(){
    document.getElementById("body").style.backgroundColor="lightblue";
}
document.getElementById("try").addEventListener("click", function () {
        document.getElementById("text").innerText = "its me arjyoh";
    });
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");
    error.innerText = "";
    if (name === "") {
    error.innerText = "Name is required";
    return false;
    }
    if (!email.includes("@")) {
    error.innerText = "Enter a valid email";
    return false;
    }

    alert("Form submitted successfully!");
    return true;
}