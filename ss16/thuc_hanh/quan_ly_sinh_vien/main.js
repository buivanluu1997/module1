// tao object từ class Student
const student1 = new Student("Sv01", "Nguyen Van Nam", "nguyenvannam@gmail.com", "033885757", "C72401");
const student2 = new Student("Sv02", "Nguyen Van An", "nguyenvannam@gmail.com", "033885758", "C72401");
document.write(student1.displayInfo());
document.write("<br>");
document.write(student2.displayInfo() + "<br>");


// tao 1 mang chua danh sach sinh vien
let arrSV = [];
for (let i = 0; i < 10; i++) {
    let sinhvien = new Student(`SV${i}`, `Nguyen Van ${i}`, `sv${i}@gmail.com`, `0338852754`, `C0724 `);
    arrSV.push(sinhvien);
}
document.write("so luong sinh vien " + arrSV.length +"<br>" );
for (let i = 0; i < arrSV.length; i++) {
    document.write("<br>" + arrSV[i].displayInfo());
}
