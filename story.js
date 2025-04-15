
const mytable = document.getElementById('mytable')
const seasonsH = document.getElementById('seasonsH')
//async/await 
//await = รอให้ดึงข้อมุลให้ครบก่อนค่อยแสดงผล


async function loadstoryTable(){
    try{
        const res = await fetch("story.json");
        const json = await res.json();
        if(!res.ok) throw new Error("โหลดข้อมูลไม่สำเร็จ");       
        let trHTML = ''; // สร้างตัวแปรเพื่อเก็บ HTML ของแถวข้อมูลในตาราง
        let ssH = '';

        
   
           json.seasons.forEach((seasons)=>{
         //  ssH +=seasons.name
         //  console.log(ssH)
           // seasonsH.innerHTML+=`${seasons.name} `
                    //  ssH +=`<h2>${seasons.name}</h2>` 
  
          // document.getElementById("seasons").innerHTML=json.seasons.name;
           seasons.episodes.forEach((ep)=> {
           //     console.log("Loop item Start");
         
                trHTML+=`
                      
                        <tr>
                           <td scope="row">${ep.ep_no}</td>
                           <td>${ep.title}</td>
                        </tr>
              
                  ` ;
             
                 
            });
     
        
            
      });
  
     

      mytable.innerHTML=trHTML;   
      seasonsH.innerHTML=ssH;  
    //  mytable.innerHTML=trHTML
      //seasonsH.innerHTML=ssH;
        //mytable.innerHTML=trHTML;
        

      
            
} catch(error){
    console.error("เกิดข้อผิดพลาด : ", error);
    mytable.innerHTML ="<h1>ชะอุ๊ย เกิดข้อผิดพลาดไม่คาดฝัน 🐕‍🦺 </h1>"
}
}

document.addEventListener("DOMContentLoaded",loadstoryTable);

