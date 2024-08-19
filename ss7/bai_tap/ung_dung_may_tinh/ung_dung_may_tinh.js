function cong() {
    let so1 = +document.getElementById('so1').value;
    let so2 = +document.getElementById('so2').value;
    let ketQua = 0;
    ketQua = Number(so1)+Number(so2);
    document.getElementById('kq').innerHTML='Kết quả là: '+ketQua;
}
function tru() {
    let so1 = +document.getElementById('so1').value;
    let so2 = +document.getElementById('so2').value;
    let ketQua;
    ketQua = Number(so1)-Number(so2);
    document.getElementById('kq').innerHTML='Kết quả là: '+ketQua;
}
function nhan() {
    let so1 = +document.getElementById('so1').value;
    let so2 = +document.getElementById('so2').value;
    let ketQua;
    ketQua = Number(so1)*Number(so2);
    document.getElementById('kq').innerHTML='Kết quả là: '+ketQua;
}
function chia() {
    let so1 = +document.getElementById('so1').value;
    let so2 = +document.getElementById('so2').value;
    let ketQua;
    ketQua = Number(so1)/Number(so2);
    document.getElementById('kq').innerHTML='Kết quả là: '+ketQua;
}