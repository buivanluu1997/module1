function cong() {
    let so1 = +document.getElementById('so1').value;
    let so2 = +document.getElementById('so2').value;
    let ketqua;
    ketqua = Number(so1)+Number(so2)
    document.getElementById('kq').innerHTML='Kết quả là: '+ketqua;
}
function tru() {
    let so1 = +document.getElementById('so1').value;
    let so2 = +document.getElementById('so2').value;
    let ketqua;
    ketqua = Number(so1)-Number(so2)
    document.getElementById('kq').innerHTML='Kết quả là: '+ketqua;
}
function nhan() {
    let so1 = +document.getElementById('so1').value;
    let so2 = +document.getElementById('so2').value;
    let ketqua;
    ketqua = Number(so1)*Number(so2)
    document.getElementById('kq').innerHTML='Kết quả là: '+ketqua;
}
function chia() {
    let so1 = +document.getElementById('so1').value;
    let so2 = +document.getElementById('so2').value;
    let ketqua;
    ketqua = Number(so1)/Number(so2)
    document.getElementById('kq').innerHTML='Kết quả là: '+ketqua;
}