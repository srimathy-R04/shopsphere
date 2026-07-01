const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")=="dark"){
    document.body.classList.add("dark-mode");
    toggle.innerHTML="☀️";
}

toggle.onclick=function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
        toggle.innerHTML="☀️";
    }else{
        localStorage.setItem("theme","light");
        toggle.innerHTML="🌙";
    }

}