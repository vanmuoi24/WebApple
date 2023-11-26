function change_pass() {
    let element_1 = document.getElementById('row5');
    element_1.style.display = 'block';
    element_1.innerHTML = `  
    <div id="row6">
    <label for="pass_o">Nhập mật khẩu cũ:</label>
    <input type="password" name="Old Password" id="pass_o" class = "form_pass" required /><br/><br/>
    </div>
    <div id="row7">
    <label for="pass_n">Nhập mật khẩu mới:</label>
    <input type="password" name="New password" id="pass_n" class = "form_pass" required /> <br /><br />
    </div>
    <div id="row8">
    <label for="pass_again">Nhập lại mật khẩu:</label>
    <input type="password" id="pass_again" class = "form_pass" required /><br /><br />
    </div>`;
}

const check_admin = JSON.parse(localStorage.getItem('check_admin'));
if (check_admin) var userAccounts = JSON.parse(localStorage.getItem('admin'));
else var userAccounts = JSON.parse(localStorage.getItem('user'));
const vitri = JSON.parse(localStorage.getItem('index_login'));
///Đổ dữ liệu vào thẻ input
function getInForMation() {
    const myName = document.getElementById('change_name');
    const myNumberPhone = document.getElementById('change_phone');
    const myAddress = document.getElementById('change_address');
    const myEmail = document.getElementById('change_email');
    document.getElementById('name_account').textContent = userAccounts[vitri].name;
    myName.value = userAccounts[vitri].name;
    myNumberPhone.value = userAccounts[vitri].phone;
    myAddress.value = userAccounts[vitri].address;
    myEmail.value = userAccounts[vitri].email;
}
getInForMation();

function check_change(event) {
    event.preventDefault();
    //check name
    let name = document.getElementById('change_name').value;
    if (!isNaN(Number(name))) {
        showMessage_error('Họ tên không hợp lệ !');
        return false;
    }
    if (name.length < 8) {
        showMessage_error('Họ tên phải từ 8 chữ cái trở lên');
        return false;
    }
    //check phone number
    let sdt = document.getElementById('change_phone').value;
    //check địa chỉ
    let address = document.getElementById('change_address').value;
    if (address.length < 8) {
        showMessage_error('Địa chỉ phải từ 8 chữ cái trở lên');
        return false;
    }
    //check email
    let email = document.getElementById('change_email').value;
    function isValidEmail(email) {
        // Biểu thức chính quy để kiểm tra địa chỉ email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    // Sử dụng hàm isValidEmail để kiểm tra địa chỉ email
    if (!isValidEmail(email)) {
        showMessage_error('Địa chỉ email không hợp lệ');
        return false;
    }
    //checkk pass
    let pass = document.getElementById('pass_o');
    let pass_n = '';
    let pass_a = '';
    let pass_o = '';
    if (pass !== null && pass_n !== '' && pass_a !== '' && pass_o !== '') {
        pass_o = document.getElementById('pass_o').value;
        if (pass_o !== userAccounts[vitri].password) {
            showMessage_error('Nhập không đúng mật khẩu cũ');
            return false;
        }
        //check nhập lại password
        function validPassword(password) {
            let passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
            return passwordPattern.test(password);
        }
        pass_n = document.getElementById('pass_n').value;
        if (!validPassword(pass_n)) {
            showMessage_error('Mật khẩu phải từ 8 kí tự trở lên, có ít nhất một chữ hoa, kí tự đặc biệt, chữ số');
            return false;
        }
        if (pass_n === pass_o) {
            showMessage_error('Mật khẩu mới trùng mật khẩu cũ');
            return false;
        }
        //check nhập lại mật khẩu
        pass_a = document.getElementById('pass_again').value;
        if (pass_a !== pass_n) {
            showMessage_error('Nhập lại mật khẩu không trùng mật khẩu mới');
            return false;
        }
    }
    if (
        name === userAccounts[vitri].name &&
        sdt === userAccounts[vitri].phone &&
        address === userAccounts[vitri].address &&
        email === userAccounts[vitri].email
    ) {
        showMessage_error('Bạn chưa nhập gì để thay đổi');
        return false;
    }
    //Đổi dự liệu mới vào local
    let alert_accept = confirm('Xác nhận đổi thông tin!');
    if (alert_accept === true) {
        if (name !== userAccounts[vitri].name) {
            userAccounts[vitri].name = name;
        }
        if (sdt !== userAccounts[vitri].phone) {
            userAccounts[vitri].phone = sdt;
        }
        if (address !== userAccounts[vitri].address) {
            userAccounts[vitri].address = address;
        }
        if (email !== userAccounts[vitri].email) {
            userAccounts[vitri].email = email;
        }
        if (pass_n !== '') userAccounts[vitri].password = pass_n;
        localStorage.setItem('user', JSON.stringify(userAccounts));
        getInForMation();
        showMessage('Thay đổi thông tin thành công');
    } else if (alert_accept === false) {
        alert('Dừng việc thay đổi thông tin thành công');
    }
    return true;
}
//Hiển thị thông tin tài khoản
function clickTTTK() {
    document.getElementById('in4_donhang').style.display = 'none';
    document.getElementById('in4_caNhan').style.display = 'flex';
}
// Hiển thị đơn hàng
function clickQLDH() {
    document.getElementById('in4_donhang').style.display = 'flex';
    document.getElementById('in4_caNhan').style.display = 'none';
}
var orders = JSON.parse(localStorage.getItem('orders'));
var index_U = localStorage.getItem('index_login');
var user = JSON.parse(localStorage.getItem('user'));
var body_order = document.getElementById('body-order');
var list = ' ';
for (var i = 0; i < orders.length; i++) {
    if (user[index_U].phone === orders[i].user.phone) {
        list += `<tr>
                    <td class="order-info1">
                        <p>${orders[i].madon}</p>
                    </td>
                    <td class="order-info2">
                        <p>${formatNumberWithCommas(orders[i].Tongtien)}đ</p>
                    </td>
                    <td class="order-info3">
                        <!-- <p>iPhone 15 Pro - Black - 256GB - SL: 2</p> -->
                        ${getProductHTML(orders[i].Sanpham)}
                    </td>
                    <td class="order-info4">${orders[i].Ngaydat}</td>
                    <td class="order-info5">${orders[i].Trangthai}</td>
                </tr>`;
    }
}
if (list === ' ') {
    var noorder = `<p>Không có đơn hàng</p>`;
    document.getElementById('noOrder').innerHTML = noorder;
}
body_order.innerHTML = list;

function getProductHTML(product) {
    var productListHTML = '';
    product.forEach((productt) => {
        productListHTML += `<p>${productt.tensp} - ${productt.mau} - ${productt.luutru} - SL:${productt.soluong}</p>`;
    });
    return productListHTML;
}

// Biến số thành chuỗi có phân đơn vị
function formatNumberWithCommas(number) {
    // Chuyển số thành chuỗi
    var numberString = number.toString();
    // Tìm vị trí của dấu chấm thập phân (nếu có)
    var decimalIndex = numberString.indexOf('.');
    // Nếu không có dấu chấm thập phân, thì mặc định là cuối chuỗi
    if (decimalIndex === -1) {
        decimalIndex = numberString.length;
    }
    // Thêm dấu chấm vào mỗi 3 chữ số từ cuối lên đầu
    for (var i = decimalIndex - 3; i > 0; i -= 3) {
        numberString = numberString.slice(0, i) + '.' + numberString.slice(i);
    }
    // Hiển thị chuỗi đã được định dạng
    return numberString;
}
