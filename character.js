



//const list = document.getElementById("list")
/*let output=''*/
/*const imgDemon = document.getElementById('imgDemon') 
const statusDemon = document.getElementById('statusDemon')
const skillDemon = document.getElementById('skillDemon')
const nameDemon = document.getElementById('nameDemon')
async function getCharacter() {
    const res = await fetch("character.json")
    const json = await res.json()
    const character = json.character[0];
    //const character = json.character;
    // const characterDemon = json.data;
    //imgDemon.src = characterDemon.imgDemon;
    /*imgDemon.src = character.img;
    statusDemon.textContent = character.role;
    skillDemon.textContent = character.magic;
    nameDemon.textContent = character.name;*/
    // อัปเดตข้อความใน cardDemon ถ้ามี
   /* const cardDemon = document.getElementById("cardDemon");
    if (cardDemon) {
        cardDemon.innerHTML = imgDemon.src = character.img;
        statusDemon.innerHTML = character.role;
        skillDemon.innerHTML = character.magic;
        nameDemon.innerHTML = character.name;
    }

} */
   



//getCharacter()
 /*   json.character.forEach(item=>{
        output+=       `
        <li>ภาพ: <img src="${item.img}" alt="${item.name}"></li>
        <li>ชื่อ: ${item.name}</li>
        <li>บทบาท: ${item.rol}</li>
        <li>เวทมนตร์: ${item.magic}</li>
        <li>วันเกิด: ${item.birthday}</li>
        <li>ความสูง: ${item.height}</li>
        <li>น้ำหนัก: ${item.weight}</li>
        <li>ประวัติ: ${item.history}</li>
       
    `;
});*/
 //   imgDemon.innerHTML=output
  //  list.innerHTML=output
//}
//getCharacter()

//ความต้องการดึงค่าจาก json ทั้งหมดมาเก็บไว้แล้วไปแสดงในหน้า html 






//showDataCard


/*
const imgDemon = document.getElementById('imgDemon') 
const statusDemon = document.getElementById('statusDemon')
const skillDemon = document.getElementById('skillDemon')
const nameDemon = document.getElementById('nameDemon')
async function getCharacter() {
    const res = await fetch("character.json")
    const json = await res.json()
    const character = json.character[0];
    //const character = json.character;
    // const characterDemon = json.data;
    //imgDemon.src = characterDemon.imgDemon;
    /*imgDemon.src = character.img;
    statusDemon.textContent = character.role;
    skillDemon.textContent = character.magic;
    nameDemon.textContent = character.name;*/
    // อัปเดตข้อความใน cardDemon ถ้ามี*/
   /* const cardDemon = document.getElementById("cardDemon");
    if (cardDemon) {
        cardDemon.innerHTML = imgDemon.src = character.img;
        statusDemon.innerHTML = character.role;
        skillDemon.innerHTML = character.magic;
        nameDemon.innerHTML = character.name;
    }

} */

//ดึงข้อมูลจากไฟล์ users.json ไปแสดงผล
//ถ้าดึงสำเร็จไปที่บล็อก then ถ้าไม่สำเร็จจะวิ่งไปบล็อกแคช
/*const imgDemon = document.getElementById('imgDemon') 
const statusDemon = document.getElementById('statusDemon')
const skillDemon = document.getElementById('skillDemon')
const nameDemon = document.getElementById('nameDemon')
const cardDemon = document.getElementById('cardDemon')*/
const cardDemon = document.getElementById('cardDemon')
//async/await 
//await = รอให้ดึงข้อมุลให้ครบก่อนค่อยแสดงผล
async function getCharacter(){
    try{
        const res = await fetch("character.json");
        if(!res.ok) throw new Error("โหลดข้อมูลไม่สำเร็จ");
       
        const json = await res.json();
        let showBox ="";
   
    json.character.forEach(item => {
        console.log("Loop item Start");
        showBox+=`
                <div class="content-card">  
                
                    <div class="img">
                        <img src="${item.img}" alt="${item.name}">
                    </div>
                    <div class="content-data">
                        <strong> ROLE : </strong><span>${item.role}</span><br>
                        <strong> SKILL : </strong><span>${item.magic}</strong>
                    </div>

                    <div class="name-demon">
                            <strong>${item.name}</strong>
                    </div>
                </div>
                    ` ;
    });
    cardDemon.innerHTML=showBox;
} catch(error){
    console.error("เกิดข้อผิดพลาด : ", error);
    cardDemon.innerHTML ="<h1>ชะอุ๊ย เกิดข้อผิดพลาดไม่คาดฝัน 🐕‍🦺 </h1>"
}
}
document.addEventListener("DOMContentLoaded",getCharacter);
/*  imgDemon.scr = item.img
                     statusDemon.textContent = item.role
                     skillDemon.textContent = item.magic,
                     nameDemon.textContent = item.nameDemon*/