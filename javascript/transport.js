function UpdateOrder(){

    document.getElementById("taxi_type_display").value = document.getElementById("taxitype").value;
    document.getElementById("fuel_type_display").value = document.getElementById("Fueltype").value;
    document.getElementById("distance_display").value = document.getElementById("Distance").value;
    document.getElementById("stay_display").value = document.getElementById("Stay").value;
    document.getElementById("address_display").value = document.getElementById("Startingp").value;

    let taxi = document.getElementById("taxitype");
    taxi= taxi.value;
    
    let taxival=0;

    switch(taxi){
        case "Tuk-Tuk":
            taxival=50;
            break;
        case "Mini-Car":
            taxival= 75;
            break;
        case "Luxury-Car":
            taxival=100;
            break;
        case "Luxury-Van":
            taxival=150;
            break;
        case "Luxury-Bus":
            taxival=200;
            break;
        default:
            alert("wrong input!")
    }

    let fuel = document.getElementById("Fueltype");
    fuel = fuel.value;

    let fuelval=0;

    switch(fuel){
        case "Medium":
            fuelval=1000;
            break;
        case "High":
            fuelval=2000;
            break;
        case "Low":
            fuelval=500;
            break;
        default:
            alert("wrong input");
    }

    let distance= document.getElementById("Distance").value;
    let stay = document.getElementById("Stay").value;

    let stayval=0;

    switch(stay){
        case "One-Way":
            stayval = taxival*distance;
            break;
        case "Two-Way":
            stayval=2*(taxival*distance);
            break;
        case "Overnight":
            stayval=5000+(2*(taxival*distance));
            break;
        default:
            alert("Error")
        
    }
    document.getElementById("currentcost").value = stayval + fuelval;

 }