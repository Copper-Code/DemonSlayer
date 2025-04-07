


const cardDemon = document.getElementById('cardDemon')
//async/await 
//await = รอให้ดึงข้อมุลให้ครบก่อนค่อยแสดงผล


async function getCharacter(){
    try{
         //2.โหลด character.json

        const res = await fetch("character.json");
        const json = await res.json();
        if(!res.ok) throw new Error("โหลดข้อมูลไม่สำเร็จ");       
        let showBox ="";
        //3.แสดงข้อมูลหน้ารวมการ์ด
    json.character.forEach(item => {
        console.log("Loop item Start");
        showBox+=`
             <div class="content-card" data-id="${item.id}">
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

    //เลือกการ์ดทุกใบที่สร้างขึ้นในหน้ารวม //จับเหตุการณ์ว่าแต่ละการ์ดมีการคลิกหรือไม่
        const cardAll = document.querySelectorAll(".content-card")
        cardAll.forEach(cardClick=>{
            cardClick.addEventListener("click",()=>{
                //เก็บid ของการ์ด
                //เมื่อคลิกการ์ด จะดึงค่าจาก attribute ชื่อ data-id ของการ์ดใบนั้น (เช่น data-id="a12") แล้วเก็บไว้ในตัวแปร charmainId
                const charmainId = cardClick.getAttribute("data-id")
              
                //ใช้ .find() เพื่อค้นหา object ที่ item.id ตรงกับ charmainId (คือ ID ของการ์ด)\
                // ถ้าเจอตัวละคร จะเก็บไว้ในตัวแปร characterFind
                const characterDetail= json.character.find(item=>item.id==charmainId);
                if(!characterDetail){
                   // console.log("ไม่พบ charmainId ที่ : "+charmainId); // 
                    document.getElementById("detailChar").innerHTML =`<h2> ไม่พบตัวละคร ERROR character3.js</h2>`
                    return;
                }
                let showDetail = `
                 <img src="${characterDetail.img}" alt="${characterDetail.name}">
                <h2>${characterDetail.name}</h2>
                <p>บทบาท :${characterDetail.role}</p>
                <p>พลัง : ${characterDetail.magic}</p>   
                <p>วันเกิด : ${characterDetail.birthday}</p>
                <p>น้ำหนัก : ${characterDetail.weight}</p>
                <p>ส่วนสูง : ${characterDetail.height}</p>
                <p>ประวัติย่อ : ${characterDetail.history}</p> `;
                //localstorage
                localStorage.setItem('characterDetail',showDetail);
                //เปลี่ยนหน้าไป dataCharacter.html
                window.location.href="dataCharacter3.html"
               //  document.getElementById("detailChar").innerHTML=showDetail;
               //window.location.href = `dataCharacter.html?id=${charmainId}`;
               

    
                    
            });
            });
} catch(error){
    console.error("เกิดข้อผิดพลาด : ", error);
    cardDemon.innerHTML ="<h1>ชะอุ๊ย เกิดข้อผิดพลาดไม่คาดฝัน 🐕‍🦺 </h1>"
}
}

document.addEventListener("DOMContentLoaded",getCharacter);

/* ตัวอย่างการใช้
const clickCard = document.getElementById('testClick');
clickCard.addEventListener('click',()=>{
    window.location.href = 'song.html';

}); */




/*const clickCard = document.getElementById('testClick');
clickCard.addEventListener('click',()=>{
    window.location.href = 'song.html';

});*/
/*
  //4. กรณีเมื่อคลิกการ์ดให้แสดงข้อมูลการ์ดนั้น

    //4.1 หา object ที่  id = id
    const detailCard = DataTransfer.character.find(c=>c.id === id);

    //4.2 แสดงข้อมูลการ์ดนั้น

    /*cardAll = การเลือกการ์ดทุกใบที่สร้างขึ้นใน DOM*/ 
   // const cardAll = document.querySelectorAll(".content-card")
    /*จับเหตุการณ์ การคลิกแต่ละการ์ด*/
   // cardAll.forEach(cardDemon=>{
         /** function click*/
     //   cardDemon.addEventListener("click",()=>{
     //   const id = item.id;    
     //   const name = item.name;
     //   const skill = item.magic;   
        /**click ส่ง id ไปยัง dataCharacter.html */

       // window.location.href =`dataCharacter.html?id=${item.id}`;
        /*ดึง id จาก url*/
      /*  const params = new URLSearchParams(window.location.search);
        const name = params.get("name");*/

       // });
   // });
    /*
    cardAll.forEach(cardDemon=>{
        cardDemon.querySelector("click",()=>{

            alert("click จ้า");
        });
    });
        */