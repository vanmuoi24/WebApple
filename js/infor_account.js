function change_pass() {
    let element_1 = document.getElementById('row5');
    element_1.style.display = 'block';
    element_1.innerHTML = `  
    <div id="row6">
    <label for="pass_o">Nhập mật khẩu cũ :</label>
    <input type="password" name="Old Password" id="pass_o" class = "form_pass" required />
    <br/><br/>
    <div class = "error-message"></div>
    </div>
    <div id="row7">
    <label for="pass_n">Nhập mật khẩu mới :</label>
    <input type="password" name="New password" id="pass_n" class = "form_pass" required /> <br /><br />
    <div class = "error-message"></div>
    </div>
    <div id="row8">
    <label for="pass_again">Nhập lại mật khẩu :</label>
    <input type="password" id="pass_again" class = "form_pass" required /><br /><br />
    </div>
    <div class = "error-message"></div>`;
    let element_2 = document.getElementById('change_in4_main_body_click');
    element_2.innerHTML = `<input type="submit" value="Thay đổi mật khẩu" id="sub_change_pass" onclick="check_change(event)" />`;
}

const userAccounts = JSON.parse(localStorage.getItem('user'));
const adminAccounts = JSON.parse(localStorage.getItem('admin'));
const check_admin = JSON.parse(localStorage.getItem('check_admin'));
const vitri = JSON.parse(localStorage.getItem('index_login'));
///Đổ dữ liệu vào thẻ input
function getInForMation() {
    const myName = document.getElementById('hoten');
    const myNumberPhone = document.getElementById('sdt');
    const myAddress = document.getElementById('address');
    const myEmail = document.getElementById('email');
    if (check_admin) {
        document.getElementById('name_account').textContent = adminAccounts[vitri].name;
        myName.value = adminAccounts[vitri].name;
        myNumberPhone.value = adminAccounts[vitri].phone;
        myAddress.value = adminAccounts[vitri].address;
        myEmail.value = adminAccounts[vitri].email;
    } else {
        document.getElementById('name_account').textContent = userAccounts[vitri].name;
        myName.value = userAccounts[vitri].name;
        myNumberPhone.value = userAccounts[vitri].phone;
        myAddress.value = userAccounts[vitri].address;
        myEmail.value = userAccounts[vitri].email;
    }
}
getInForMation();

function change_error(error) {
    change_notify.style.backgroundColor = '#ffe6e6';
    change_notify.style.border = '2px solid red';
    change_notify.textContent = error;
    setTimeout(function () {
        change_notify.style.backgroundColor = 'transparent';
        change_notify.style.border = 'none';
        change_notify.textContent = '';
    }, 2000);
}
function check_change(event) {
    event.preventDefault();
    ///////check name
    let name = document.getElementById('hoten').value;
    if (!isNaN(Number(name))) {
        change_error('Họ tên không hợp lệ !');
        return false;
    }
    if (name.length < 8) {
        change_error('Họ tên phải từ 8 chữ cái trở lên');
        return false;
    }
    //check phone number
    let sdt = document.getElementById('sdt').value;
    if (isNaN(Number(sdt)) || Number(sdt) < 100000000 || Number(sdt) > 999999999) {
        change_error('Số điện thoại không hợp lệ');
        return false;
    }
    //check địa chỉ
    let address = document.getElementById('address').value;
    if (address.length < 8) {
        register_error('Địa chỉ phải từ 8 chữ cái trở lên');
        return false;
    }
    //check email
    let email = document.getElementById('email').value;
    function isValidEmail(email) {
        // Biểu thức chính quy để kiểm tra địa chỉ email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    // Sử dụng hàm isValidEmail để kiểm tra địa chỉ email
    if (!isValidEmail(email)) {
        change_error('Địa chỉ email không hợp lệ');
        return false;
    }
    //checkk pass
    let pass = document.getElementById('pass_o');
    if (pass !== null) {
        let pass_o = document.getElementById('pass_o').value;
        if (check_admin) {
            if (pass_o !== adminAccounts[vitri].password) {
                change_error('Không giống mật khẩu cũ !');
                return false;
            }
        } else if (pass_o !== userAccounts[vitri].password) {
            change_error('Không giống mật khẩu cũ');
            return false;
        }
        //check nhập lại password
        let pass_n = document.getElementById('pass_n').value;
        function validPassword(password) {
            let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return passwordPattern.test(password);
        }
        if (!validPassword(pass_n)) {
            change_error('Mật khẩu mới phải từ 8 kí tự trở lên, có ít nhất một chữ hoa, chữ thường, chữ số');
            return false;
        }
        if (pass_n === pass_o) {
            change_error('Mật khẩu mới trùng mật khẩu cũ');
            return false;
        }
        //check nhập lại mật khẩu
        let pass_a = document.getElementById('pass_again').value;
        if (pass_a !== pass_n) {
            change_error('Nhập lại mật khẩu không trùng mật khẩu mới');
            return false;
        }
        if (check_admin) {
            adminAccounts[vitri].password = pass_n;
            localStorage.setItem('admin', JSON.stringify(adminAccounts));
        } else {
            userAccounts[vitri].password = pass_n;
            localStorage.setItem('user', JSON.stringify(userAccounts));
        }
    }
    //Đổi dự liệu mới vào local
    let alert_accept = confirm('Xác nhận đổi mật khẩu !');
    if (alert_accept === true) {
        if (check_admin) {
            if (
                name === adminAccounts[vitri].name &&
                sdt === adminAccounts[vitri].phone &&
                address === adminAccounts[vitri].address &&
                email === adminAccounts[vitri].email
            ) {
                change_error('Bạn chưa nhập gì để thay đổi');
                return false;
            } else {
                if (name !== adminAccounts[vitri].name) {
                    adminAccounts[vitri].name = name;
                }
                if (sdt !== adminAccounts[vitri].phone) {
                    adminAccounts[vitri].phone = sdt;
                }
                if (address !== adminAccounts[vitri].address) {
                    adminAccounts[vitri].address = address;
                }
                if (email !== adminAccounts[vitri].email) {
                    adminAccounts[vitri].email = email;
                }
                localStorage.setItem('admin', JSON.stringify(adminAccounts));
                // showMessage('Thay đổi thông tin thành công');
            }
        } else {
            if (
                name === userAccounts[vitri].name &&
                sdt === userAccounts[vitri].phone &&
                address === userAccounts[vitri].address &&
                email === userAccounts[vitri].email
            ) {
                if (pass === null) {
                    change_error('Bạn chưa nhập gì để thay đổi');
                    return false;
                }
            } else {
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
                localStorage.setItem('user', JSON.stringify(userAccounts));
                // showMessage('Thay đổi thông tin thành công');
            }
        }
    } else if (alert_accept === false) {
        alert('Dừng việc đổi mật khẩu thành công');
    }
    getInForMation();
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
var waitting_buy = JSON.parse(localStorage.getItem('orders'));
var index_U = localStorage.getItem('index_login');
var user = JSON.parse(localStorage.getItem('user'));
var body_order = document.getElementById('body-order');
var list = ' ';
for (var i = 0; i < waitting_buy.length; i++) {
    if (user[index_U].phone === waitting_buy[i].user.phone) {
        list += `<tr>
                    <td class="order-info1">
                        <p>${waitting_buy[i].madon}</p>
                    </td>
                    <td class="order-info2">
                        <p>${formatNumberWithCommas(waitting_buy[i].Tongtien)}đ</p>
                    </td>
                    <td class="order-info3">
                        <!-- <p>iPhone 15 Pro - Black - 256GB - SL: 2</p> -->
                        ${getProductHTML(waitting_buy[i].Sanpham)}
                    </td>
                    <td class="order-info4">${waitting_buy[i].Ngaydat}</td>
                    <td class="order-info5">${waitting_buy[i].Trangthai}</td>
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
