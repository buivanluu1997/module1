function checkTriangle(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        if (x + y > z && x + z > y && z + y > x) {
            if ((Math.pow(x, 2) === Math.pow(y, 2) + Math.pow(z, 2)) || (Math.pow(y, 2) === Math.pow(x, 2) + Math.pow(z, 2)) || (Math.pow(z, 2) === Math.pow(x, 2) + Math.pow(y, 2))) {
            alert("la 3 canh cua 1 tam giac vuong");
            } else {
                alert("chi la 3 canh cua 1 tam giac");
            }
        } else {
            alert("k phai la canh cua tam giac");
        }
    } else {
        alert("k phai la canh cua tam giac");
    }
}
let x = +prompt("nhap canh cua tam giac");
let y = +prompt("nhap canh cua tam giac");
let z = +prompt("nhap canh cua tam giac");
checkTriangle(x,y,z);


