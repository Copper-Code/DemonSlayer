
//const mytable = document.getElementById('mytable')
//const seasonsH = document.getElementById('seasonsH')
//async/await 
//await = รอให้ดึงข้อมุลให้ครบก่อนค่อยแสดงผล

const showSeasonhtml = document.getElementById('season-demon');

async function showStory(){
    try{
        const res = await fetch("story.json");
        const json = await res.json();
        if(!res.ok) throw new Error("โหลดข้อมูลไม่สำเร็จ");       
        //let trHTML = ''; // สร้างตัวแปรเพื่อเก็บ HTML ของแถวข้อมูลในตาราง
        //let ssH = '';
        //let objSeason = '';
   
           json.seasons.forEach(seasons=>{
            //สร้าง h2 แสดงชื่อซีซั่น
            const seasonName = document.createElement("h2");
            seasonName.classList.add("style_seasonName");
            //ตั้งค่าข้อความใน h 2
            seasonName.textContent = `${seasons.name}`;
            //เพิ่ม seasonName ลงไปใน showSeason
            showSeasonhtml.appendChild(seasonName);
            //ดึงค่า ep แต่ละซีซั่น
            seasons.episodes.forEach(loop_ep=>{
            //สร้างแท็ก p สำหรับแสดงชื่อตอน 
             const show_ep = document.createElement("p");
             //
             show_ep.classList.add("style_show_ep");
    
             show_ep.textContent = `ตอนที่ ${"       "} ${loop_ep.ep_no} : ${loop_ep.title}`;
         
          
             showSeasonhtml.appendChild(show_ep);
                   
            });
          }); 
            
         //  ssH +=seasons.name
         //  console.log(ssH)
           // seasonsH.innerHTML+=`${seasons.name} `
                    //  ssH +=`<h2>${seasons.name}</h2>` 
  
          // document.getElementById("seasons").innerHTML=json.seasons.name;
        //   seasons.episodes.forEach((ep)=> {
           //     console.log("Loop item Start");
          //      ssH = seasons.name
         //
           //     trHTML+=`
                      
             //           <tr>
               //            <td scope="row">${ep.ep_no}</td>
                 //          <td>${ep.title}</td>
                   //     </tr>
              
                 // ` ;
             
                 
    //        });
     
        
            
     // });
  
     

     // mytable.innerHTML=trHTML;   
     // seasonsH.innerHTML=ssH;  
    //  mytable.innerHTML=trHTML
      //seasonsH.innerHTML=ssH;
        //mytable.innerHTML=trHTML;
        

      
            
} catch(error){
    console.error("เกิดข้อผิดพลาด : ", error);
    showStory.innerHTML ="<h1>ชะอุ๊ย เกิดข้อผิดพลาดไม่คาดฝัน 🐕‍🦺 </h1>"
}
}

document.addEventListener("DOMContentLoaded",showStory);







/**--------------------------------------------------------------------------------------------------------------- 



<h2>Demon Slayer</h2>

<p>A Collapsible:</p>
<button class="collapsible">Open Collapsible</button>
<div class="content">
  <p>loading...</p>
</div>

<p>season loading...:</p>
<button class="collapsible">season loading...</button>
<div class="content">
  <p>loading...</p>
</div>
<button class="collapsible">season loading...</button>
<div class="content">
   <p>loading...</p>
</div>
<button class="collapsible">season loading...</button>
<div class="content">
   <p>loading...</p>
</div>

<script>
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

*/
