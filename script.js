window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    /* Her har vi sat width til 500px fordi menuen skal gå helt ud til kanten på mobilsiden*/
    function openNav() {
        document.getElementById("mySidenav").style.width = "500px";
    }

    /* Her har vi sat width på side naven til 0 når den skal lukke igen*/
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
