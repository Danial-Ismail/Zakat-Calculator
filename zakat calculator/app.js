function calculateZakat(){
    var gold=document.getElementById("gold").value;
    var silver=document.getElementById("silver").value;
    var cash=document.getElementById("cash").value;

    var totalWealth=parseFloat(gold)+parseFloat(silver)+parseFloat(cash);

    var zakat=0.025*totalWealth;

    document.getElementById("result").innerHTML="Your Zakat is:  " + zakat.toFixed(2)+" "+"in your currency";
}