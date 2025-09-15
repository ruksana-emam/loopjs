const weatherData = [
  { district: "Thrissur", temp: 32 },
  { district: "Thiruvananthapuram", temp: 33 },
  { district: "Kozhikode", temp: 31 },
  { district: "Thrissur", temp: 28 },
  { district: "Kozhikode", temp: 27 },
  { district: "Ernakulam", temp: 26 },
  { district: "Ernakulam", temp: 30 },
  { district: "Thiruvananthapuram", temp: 29 },
];

// print district with its highest temperature
let output={}
weatherData.forEach((eachData)=>{
   let districtName=eachData.district
   let  temp=eachData.temp
if(output.hasOwnProperty(districtName)){
    if(temp>output[districtName]){
        output[districtName]=temp;
    }
    else{
        //create a  new key value pair of districtName:temp
        output[districtName]=temp;
    }
}})


