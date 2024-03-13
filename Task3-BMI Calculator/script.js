function calculateBMI() 
{
    // parseFloat converts a string into a floating point
    const weight = parseFloat(document.getElementById("weight").value);
    const feet = parseFloat(document.getElementById("heightFeet").value);
    const inches = parseFloat(document.getElementById("heightInches").value);
    const errorMessage = document.getElementById("error");
    console.log(weight);
    console.log( feet);
    console.log(inches);
    //checks if any of the user input values (weight,feet,inches) is not a valid number (text/empty input fields)
    if (isNaN(weight) || isNaN(feet) || isNaN(inches)|| weight === 0 || feet === 0)
     {
        errorMessage.textContent="Please enter all fields with avalid number";
        return;
    }

// Remove 'bold-italic' class from all chart elements
document.getElementById("yellow").classList.remove("bold-italic");
document.getElementById("lightgreen").classList.remove("bold-italic");
document.getElementById("orange").classList.remove("bold-italic");
document.getElementById("orangered").classList.remove("bold-italic");

    // 1 foot is equal to 0.3048 meters
    //1 inch is equal to 0.0254 meters
    const heightMeters = (feet * 0.3048) + (inches * 0.0254);
    const bmi = weight / (heightMeters ** 2);

    // initiallizing status
    let status = "";
 
    // clear error message
    errorMessage.textContent="";

    if (bmi <= 18.4) 
    {
        status="UnderWeight";
    document.getElementById("yellow").classList.add("bold-italic");
    document.getElementById("result").style.backgroundColor="yellow";
    } 
     else
    if (bmi >= 18.5 && bmi <= 24.9) 
     {
        status ="Normal";
        document.getElementById("lightgreen").classList.add("bold-italic");
        document.getElementById("result").style.backgroundColor="lightgreen";
    } 
    else
    if (bmi >= 25 && bmi <= 39.9) 
    {
        status ="Overweight";
        document.getElementById("orange").classList.add("bold-italic");
        document.getElementById("result").style.backgroundColor="orange";
    } 
    if (bmi >= 40)
     {
        status = "Obese"; 
        document.getElementById("orangered").classList.add("bold-italic");
        document.getElementById("result").style.backgroundColor="orangered";
        

    } 
    // toFixed(1) method is used to format the BMI to two decimal places, ensuring it's displayed with one digit after the decimal point.

    document.getElementById("result").innerHTML = `Your BMI is:(${bmi.toFixed(1)})  .This is considerd as ${status}.`;
}