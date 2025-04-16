
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
           json.seasons.forEach(seasons=>{
              //button Seasons
              const seasonName = document.createElement("button"); //สร้าง h2 แสดงชื่อซีซั่น
              seasonName.classList.add("collapsible-season"); 
              seasonName.textContent = seasons.name;//ตั้งค่าข้อความใน h 

              //เพิ่ม seasonName ลงไปใน showSeason
              showSeasonhtml.appendChild(seasonName);
              
              //สร้าง div หุ้มตอน
                const contentSeason = document.createElement("div");    //สร้าง div หุ้มตอน
                contentSeason.classList.add("content-season"); //contentSeason.style.maxHeight = null;//เริ่มต้นพับ
              
              //ดึงค่าแต่ละ ep ของ season
                    seasons.episodes.forEach(loop_ep=>{ //ดึงค่า ep แต่ละซีซั่น
                          const show_ep = document.createElement("p"); //สร้างแท็ก p สำหรับแสดงชื่อตอน  
                          show_ep.textContent = `ตอนที่  ${loop_ep.ep_no} : ${loop_ep.title}`; // show_ep.classList.add("content-season");
                          contentSeason.appendChild(show_ep); //ยัดshow_ep เก็บเป็นคลาสลูก contentSeason เพื่อจัดกลุ่มตอนแต่ละ ss
                          
            }); //ปิด loop_ep

              showSeasonhtml.appendChild(contentSeason);  //ยัด contentSeason เก็บไว้ในส showSeasonhtml เพื่อแสดงผล
          });  //ปิด loop name season

          
          var coll = document.getElementsByClassName("collapsible-season");
          var i;
          
          for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
              this.classList.toggle("active-season");
              var content = this.nextElementSibling;
              if (content.style.maxHeight){
                content.style.maxHeight = null;
              } else {
                content.style.maxHeight = content.scrollHeight + "px";
              } 
            });
          } 
            
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
