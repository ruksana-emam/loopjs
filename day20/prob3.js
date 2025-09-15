const salesData = [
    { city: "NewYork", sales: 5000 },
    { city: "LosAngeles", sales: 7000 },
    { city: "Chicago", sales: 6000 },
    { city: "NewYork", sales: 8000 },
    { city: "LosAngeles", sales: 6500 },
    { city: "Chicago", sales: 9000 },
    { city: "Houston", sales: 4000 },
    { city: "Houston", sales: 5500 },
];
//print location with highest sales
 //{newYork:8000,LosAngeles:7000,..etc}

 output = {};
 salesData.forEach((eachData)=>{

    let cityName=eachData.city;
    let currentSales=eachData.sales;
    if(output.hasOwnProperty(cityName)){
        //compare and update
    if(currentSales>output[cityName]){
        output[cityName]=currentSales;
    }
    }
    else{
        //add the city name
      
        output[cityName]=currentSales;
    
    }
})
    console.log(output)

 






