let color
//กำหนดตัวแปร color [global] ถูกใช้เก็บค่าโค้ดสี hex (#RRGGBB)
function getRandomColor(){
//ประกาศฟังก์ชัน getRandomColor
    const letters = "0123456789ABCDEF"
    //ตัวแปร letters [string] เก็บตัวเลข ตัวอักษรโค้ดสี hex
    color = "#"
    //color # เป็นโค้ดสี hex
    for (var i = 0; i < 6; i++) {
    // loop for ทำงาน 6 รอบ สร้างตัวเลขหรือตัวอักษรอีก 6 ท้าย #
        color += letters[Math.floor(Math.random() * 16)] 
        //Math.random() จะสุ่มค่าระหว่าง 0 (รวม) ถึง 1 (ไม่รวม)
        //Math.random() * 16 เลข 0 ถึง 16 (ไม่รวม 16)
        //Math.floor() จะปัดเศษค่าที่ได้จากการคูณเพื่อให้เป็นจำนวนเต็มจาก 0 ถึง 15
        //ซึ่งจะเป็นการสุ่มเลือกดัชนี (index) ของตัวอักษรในตัวแปร letters
    }
    document.getElementById('color').innerText = color
    // id เป็น 'color' และกำหนด innerText ของ element นั้นให้เท่ากับโค้ดสีที่สุ่มได้ ซึ่งจะแสดงโค้ดสี hex บนหน้าเว็บ
    document.body.style.backgroundColor = color
}
getRandomColor()