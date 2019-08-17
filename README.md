# Race-Condition-Demo
![enter image description here](https://defuse.ca/images/racecondition.png)
   
> ตัวอย่างการโจมตีด้วยช่องโหว่ Race Condition
> 
**วิธีการติดตั้ง**
1. ลง [Node.JS](https://nodejs.org/en/download/) ก่อน (สคริปที่ใช้โจมตีเขียนด้วย Node.JS)
2. เปิด cmd แล้ว cd เข้าไปใน folder สั่ง npm install เพื่อลง Package NodeJS
3. สร้าง Database ชื่อว่า race_demo จากนั้น import SQL ได้จากไฟล์ race_demo.sql
4. copy index.php ไปไว้ที่ web server ถ้าใช้ xampp ให้เก็บตามนี้ htcdocs/Race-Condition-Demo/index.php
5. Run Script โจมตีผ่าน cmd ด้วยคำสั่ง node race.js
6. ดูผลลัพธ์ที่เกิดขึ้นบน Console
