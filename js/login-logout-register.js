// Khởi tạo ban đầu
createAdmin();
createUser();
createIndex();
login();
// reset lại dữ liệu
function reset() {
    var date = new Date();
    var d = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    var Adminaccounts = [];
    var user = {
        name: 'admin',
        password: 'admin@123',
        phone: '0123456789',
        address: '',
        email: '',
        date: d,
    };
    Adminaccounts.push(user);
    localStorage.setItem('admin', JSON.stringify(Adminaccounts));
    var check_admin = false;
    localStorage.setItem('check_admin', check_admin);
    var Useraccounts = [
        {
            name: 'Trần Gia Nguyễn',
            password: '12345678',
            phone: '0938412412',
            address: '159 Bùi Đình Túy, Phường 24, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            email: 'trangianguyen.com@gmail.com',
            date: d,
        },
        {
            name: 'Lê Thế Minh',
            password: 'Mingey@123',
            phone: '0550550555',
            address: '',
            email: '',
            date: d,
        },
    ];
    localStorage.setItem('user', JSON.stringify(Useraccounts));
    var index_login = -1;
    localStorage.setItem('index_login', index_login);
}
// Tắt mở form login form register
function open_login() {
    document.getElementById('phone').value = '';
    document.getElementById('password').value = '';
    close_register();
    document.getElementById('form_login_total').style.display = 'flex';
}
function close_login() {
    document.getElementById('form_login_total').style.display = 'none';
}
function open_register() {
    document.getElementById('register_name').value = '';
    document.getElementById('register_phone').value = '';
    document.getElementById('register_address').value = '';
    document.getElementById('register_email').value = '';
    document.getElementById('register_password').value = '';
    document.getElementById('register_password_again').value = '';
    close_login();
    document.getElementById('form_register_total').style.display = 'flex';
}
function close_register() {
    document.getElementById('form_register_total').style.display = 'none';
}
// Các hàm khởi tạo
function createIndex() {
    if (localStorage.getItem('index_login') === null) {
        index_login = -1;
        localStorage.setItem('index_login', index_login);
    }
}
function createAdmin() {
    if (localStorage.getItem('admin') === null) {
        var date = new Date();
        var d = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        var Adminaccounts = [];
        var user = {
            name: 'admin',
            password: 'admin@123',
            phone: '0123456789',
            address: '',
            email: '',
            date: d,
        };
        Adminaccounts.push(user);
        localStorage.setItem('admin', JSON.stringify(Adminaccounts));
    }
    if (localStorage.getItem('check_admin') === null) {
        var check_admin = false;
        localStorage.setItem('check_admin', check_admin);
    }
}
function createUser() {
    if (localStorage.getItem('user') === null) {
        var date = new Date();
        var d = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        var Useraccounts = [
            {
                name: 'Trần Gia Nguyễn',
                password: '12345678',
                phone: '0938412412',
                address: '159 Bùi Đình Túy, Phường 24, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
                email: 'trangianguyen.com@gmail.com',
                date: d,
            },
            {
                name: 'Lê Thế Minh',
                password: 'Mingey@123',
                phone: '0550550555',
                address: '',
                email: '',
                date: d,
            },
        ];
        localStorage.setItem('user', JSON.stringify(Useraccounts));
    }
}
// Hiện thị phần thông tin tài khoản, đăng xuất,... của người dùng
function showContent() {
    document.getElementById('div_logout').style.display = 'flex';
}

function hideContent() {
    document.getElementById('div_logout').style.display = 'none';
}
// Hiển thị thông báo
function showMessage(messages) {
    var customObject = document.createElement('div');
    customObject.classList.add('custom-object');
    customObject.innerHTML =
        '<p style="z-index: 999; display: none; position: fixed; top: 10px; left:0; background-color: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 10px; margin: 20px;border-radius: 5px;" id="message"></p>';
    document.body.appendChild(customObject);
    var Message = document.getElementById('message');
    Message.style.display = 'flex';
    Message.textContent = messages;
    setTimeout(function () {
        customObject.remove();
    }, 2000);
}
function showMessage_error(messages) {
    var customObject = document.createElement('div');
    customObject.classList.add('custom-object');
    customObject.innerHTML =
        '<p style="z-index: 999; display: none; position: fixed; top: 10px; left:0; background-color: #ffe6e6; border: 1px solid #ff0000; color: #ff0000; padding: 10px; margin: 20px;border-radius: 5px;" id="message"></p>';
    document.body.appendChild(customObject);
    var Message = document.getElementById('message');
    Message.style.display = 'flex';
    Message.textContent = messages;
    setTimeout(function () {
        customObject.remove();
    }, 2000);
}
// Hiển thị thông báo lỗi
function login_error(error) {
    var login_notify = document.getElementById('login_notify');
    login_notify.style.backgroundColor = '#ffe6e6';
    login_notify.style.border = '2px solid #ff0000';
    login_notify.textContent = error;
    setTimeout(function () {
        login_notify.style.backgroundColor = 'transparent';
        login_notify.style.border = 'none';
        login_notify.textContent = '';
    }, 1000);
}
// Kích hoạt chức năng khi đã đăng nhập
function login_activated(check_login) {
    var div_login = document.getElementById('div_login');
    if (check_login === true) {
        document.getElementById('change_logout').textContent = 'Trang chủ Admin';
        document.getElementById('change_logout').href = '../html/admin.html';
    } else {
        document.getElementById('change_logout').textContent = 'Đơn hàng của tôi';
        document.getElementById('change_logout').href = '../html/infor_account.html';
    }
    div_login.onclick = null;
    div_login.onmouseover = function () {
        showContent();
    };
    div_login.onmouseout = function () {
        hideContent();
    };
    close_login();
    showMessage('Đăng nhập thành công!');
}
// Kiểm tra tài khoản
function check_login(event) {
    event.preventDefault();
    // Lấy giá trị từ form
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var login_text = document.getElementById('login_text');
    var Adminaccounts = JSON.parse(localStorage.getItem('admin'));
    var Useraccounts = JSON.parse(localStorage.getItem('user'));
    var index_login = -1;
    var check_admin = false;
    // Kiểm tra giá trị nhập
    if (isNaN(Number(phone)) || Number(phone) < 100000000 || Number(phone) > 999999999) {
        login_error('Số điện thoại không hợp lệ');
        return false;
    }
    if (password.length < 8) {
        login_error('Mật khẩu phải có 8 kí tự trở lên');
        return false;
    }
    // Kiểm tra tài khoản và mật khẩu
    Adminaccounts.forEach(function (Adminaccounts, i) {
        if (Adminaccounts.phone === phone && Adminaccounts.password === password) {
            check_admin = true;
            index_login = i;
        }
    });
    Useraccounts.forEach(function (Useraccounts, i) {
        if (Useraccounts.phone === phone && Useraccounts.password === password) {
            index_login = i;
        }
    });
    localStorage.setItem('check_admin', check_admin);
    localStorage.setItem('index_login', index_login);
    if (check_admin) {
        login_text.innerHTML = 'Xin chào,<br>' + Adminaccounts[index_login].name;
        login_activated(true);
        return true;
    } else if (index_login != -1) {
        login_text.innerHTML = 'Xin chào,<br>' + Useraccounts[index_login].name;
        login_activated(false);
        return true;
    } else {
        login_error('Sai số điện thoại hoặc mật khẩu');
        return false;
    }
}
// Hiển thị thông báo lỗi
function register_error(error) {
    register_notify.style.backgroundColor = '#ffe6e6';
    register_notify.style.border = '2px solid red';
    register_notify.textContent = error;
    setTimeout(function () {
        register_notify.style.backgroundColor = 'transparent';
        register_notify.textContent = '';
        register_notify.style.border = 'none';
    }, 1000);
}
// Kiểm tra giá trị khi đăng kí
function check_register(event) {
    event.preventDefault();
    // Lấy giá trị từ form
    var name = document.getElementById('register_name').value;
    var phone = document.getElementById('register_phone').value;
    var address = document.getElementById('register_address').value;
    var email = document.getElementById('register_email').value;
    var password = document.getElementById('register_password').value;
    var password_again = document.getElementById('register_password_again').value;
    // Kiểm tra các giá trị nhập
    if (!isNaN(Number(name))) {
        register_error('Họ tên không hợp lệ');
        return false;
    }
    if (name.length < 8) {
        register_error('Họ tên phải từ 8 chữ cái trở lên');
        return false;
    }
    if (isNaN(Number(phone)) || Number(phone) < 100000000 || Number(phone) > 999999999) {
        register_error('Số điện thoại không hợp lệ');
        return false;
    }
    var Useraccounts = JSON.parse(localStorage.getItem('user'));
    var isDifference = Useraccounts.some(function (Useraccounts) {
        return Useraccounts.phone === phone;
    });
    if (isDifference) {
        register_error('Số điện thoại đã được đăng kí');
        return false;
    }
    if (address.length < 8) {
        register_error('Địa chỉ phải từ 8 chữ cái trở lên');
        return false;
    }
    function isValidEmail(email) {
        // Biểu thức chính quy để kiểm tra địa chỉ email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    // Sử dụng hàm isValidEmail để kiểm tra địa chỉ email
    if (!isValidEmail(email)) {
        register_error('Địa chỉ email không hợp lệ');
        return false;
    }
    isDifference = Useraccounts.some(function (Useraccounts) {
        return Useraccounts.email === email;
    });
    if (isDifference) {
        register_error('Email đã được đăng kí');
        return false;
    }
    function isValidPassword(password) {
        // Kiểm tra độ dài tối thiểu là 8, phải chứa ít nhất 1 chữ hoa, 1 kí tự đặc biệt, và 1 số
        let passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return passwordPattern.test(password);
    }
    // Sử dụng hàm isValidPassword để kiểm tra mật khẩu
    if (!isValidPassword(password)) {
        register_error('Mật khẩu phải từ 8 kí tự trở lên, có ít nhất một chữ hoa, kí tự đặc biệt, chữ số');
        return false;
    }
    if (password !== password_again) {
        register_error('Mật khẩu không trùng nhau');
        return false;
    }
    var date = new Date();
    var d = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    var add = { name: name, password: password, phone: phone, address: address, email: email, date: d };
    Useraccounts.push(add);
    localStorage.setItem('user', JSON.stringify(Useraccounts));
    close_register();
    showMessage('Đăng kí thành công!');
    return true;
}
// Check login khi reset trang từ Local Storage
function login() {
    if (localStorage.getItem('check_admin') !== null && localStorage.getItem('index_login') !== null) {
        var check_admin = JSON.parse(localStorage.getItem('check_admin'));
        var index_login = JSON.parse(localStorage.getItem('index_login'));
        var div_login = document.getElementById('div_login');
        if (check_admin) {
            var accounts = JSON.parse(localStorage.getItem('admin'));
            document.getElementById('change_logout').textContent = 'Trang chủ Admin';
            document.getElementById('change_logout').href = '../html/admin.html';
        } else {
            var accounts = JSON.parse(localStorage.getItem('user'));
            document.getElementById('change_logout').textContent = 'Đơn hàng của tôi';
            document.getElementById('change_logout').href = '../html/infor_account.html';
        }
        if (index_login !== -1) {
            login_text.innerHTML = 'Xin chào,<br>' + accounts[index_login].name;
            div_login.onclick = null;
            div_login.onmouseover = function () {
                showContent();
            };
            div_login.onmouseout = function () {
                hideContent();
            };
            close_login();
        }
    }
}
// Đăng xuất
function logout() {
    var index_login = -1;
    localStorage.setItem('index_login', index_login);
    var check_admin = false;
    localStorage.setItem('check_admin', check_admin);
    window.location.href = '../html/homepage.html';
}
