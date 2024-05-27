const broj_1 = document.getElementById("broj1");
const broj_2 = document.getElementById("broj2");

const godina = document.getElementById("godine");
const currentYear = new Date().getFullYear();
godina.textContent = currentYear;


function provjera(){

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };


}

function veciBroj(){
    if(broj_1 > broj_2){
        alert("Broj 1 je veći od broja 2!")
    }
    else{
        alert("Broj 2 je veći od broja 1!");
    }
}

