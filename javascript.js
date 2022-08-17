function clear()
{
  document.getElementById('one').style.backgroundColor="#89B5AF";
  document.getElementById('two').style.backgroundColor="#89B5AF";
  document.getElementById('three').style.backgroundColor="#89B5AF";
  document.getElementById('four').style.backgroundColor="#89B5AF";
}
function displayTable(bmi)
{
  clear();
  var element;
  if(bmi<18.5)
  {
    element=document.getElementById('one');
    element.style.backgroundColor="orange";
  }
  else if(bmi>=18.5&&bmi<25)
  {
    element=document.getElementById('two');
    element.style.backgroundColor="green";
  }
  else if(bmi>=25&&bmi<30)
  {
    element=document.getElementById('three');
    element.style.backgroundColor="red";
  }
  else
  {
    element=document.getElementById('four');
    element.style.backgroundColor="red";
  }
}
function calculate()
{
  var w = document.getElementById("weight").value;
  var h= document.getElementById("height").value;
  if(w <= 0)
  {
    alert("Weight Can Take Natural Numbers Only (weight>0)")
  }
  else if(h<=0)
  {
    alert("Height Can Take Natural Numbers Only (height>0)")
  }
  else
  {
    var heightInMeter=(h/100);
    var bmi=(w/Math.pow(heightInMeter, 2)).toFixed(2);
    alert("Your Body Mass Index Is: " + bmi);
    displayTable(bmi);
  }
}
