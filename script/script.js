let cities=["Faisalabad", "Karachi", "Lahore", "Burewala", "Layyah","Islamabad","Kashmir"]
for(let i=0; i<cities.length; i++)
{
let num=i+1
    document.getElementById('citiesname').innerHTML += num +')' + cities[i] + '&emsp;';
}
document.getElementById('btn1').onclick=function(){
alert("Hello 'How are you.'")
}
document.getElementById('btn3').onclick=function(){
    for(let i=0; i<cities.length; i++)
    {
    let num=i+1
        document.getElementById('output').innerHTML += num +')' + cities[i] + '&emsp;';
}}
document.getElementById('btn').onclick=function(){
    let name=document.getElementById('display').value
    if(name==="")
    {
        alert('please enter your name')
    }
    else{
        document.getElementById('output').innerHTML=name;
    }
}
document.getElementById('btn4').onclick=function(){
    let city=document.getElementById('display').value
    if(city==="")
    {
        alert('please enter your city name')
    }
    else{
        cities.push(city);
         document.getElementById('output').innerHTML='<span style="font-size:20px color:red;">" '+ city +' "</span> has been successfully added city';
    }
}
document.getElementById('btn5').onclick=function(){
    let num=document.getElementById('display').value
    if(num==="")
    {
        alert('please enter number')
    }
    else{
        let table=+prompt('please enter number')
        for(let i=0; i<table; i++)
        {

            let j =i+1
            let k=num*j
            document.getElementById('output').innerHTML+=num + '*' + j + '='+ k + '<br>';
        }
    }
}
document.getElementById('org').onclick=function(){
    document.getElementById('output').innerHTML=" "
}
document.getElementById('clear').onclick=function(){
    document.getElementById('display').value=" "
}