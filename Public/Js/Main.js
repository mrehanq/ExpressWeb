const submitbtn= document.getElementById("submitbtn");
const cityname= document.getElementById("cityname");
const city_name= document.getElementById("city_name");
const temp_deg=document.getElementById("temp_deg");
const temp_status=document.getElementById("temp_status");

const data_hide = document.querySelector('.middle_layer');


const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal= cityname.value;
    if(cityVal==""){
        city_name.innerText=`Please write city name before search`;
        data_hide.classList.add('data_hide');
    }else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=2429aa6fee1962b47b12b3fa518723aa`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
        //    const temp_deg =arrData[0].main.temp;
        //    const temp_status =arrData[0].weather[0].main;
        //    const city_name=`${arrData[0].name}, ${arrData[0].sys.country}`;
        //    console.log(temp_deg);
        //    console.log(temp_status);
        //    console.log(city_name);
            temp_deg.innerText =arrData[0].main.temp;
            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;

            const tempType=arrData[0].weather[0].main;
            // condition  to check sunny or cloudy
            if(tempType=='clear'){
                temp_status.innerHTML= 
                    '<i class="fas fa-sun" style="color:#eccc68;"></i>';
                }else if(tempType=='Clouds'){
                    temp_status.innerHTML= 
                    '<i class="fas fa-cloud" style="color:#f1f2f6;"></i>';
                }else if(tempType=='Rain'){
                    temp_status.innerHTML= 
                    '<i class="fas fa-rain" style="color:#a4b0be;"></i>';
                }else{
                    temp_status.innerHTML= 
                    '<i class="fas fa-sun" style="color:#eccc68;"></i>';
                }
                data_hide.classList.remove('data_hide');

          }catch{
                city_name.innerText=`Please write city name properly`;
                data_hide.classList.add('data_hide');

            
           }
        }
    
}

submitbtn.addEventListener('click',getInfo);
