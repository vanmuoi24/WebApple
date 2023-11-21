function cart_admin() {
    const right_header = document.getElementsByClassName('right_header')[0];
    const left_list = document.querySelectorAll('.left_list li');

    left_list[3].addEventListener('click', () => {
        var cart_list = `
        <div class="cart_header">
                <div class="header_cart_table">
                    <div class="header_select">
                        <select name="" id="select_userall">
                            <option value="Tất cả">Tất cả</option>
                            <option value="Đã xử lý" >Xử Lí</option>
                            <option value="Chưa xử lý">Chưa Xử Lý</option>
                        </select>
                    </div>
                    <div class="header_seach">
                        <input type="text" name="" id="" placeholder="Tìm Kiếm Mã Đơn Hàng"/>
                    </div>
                    <div class="date_1">
                        <label for="startDate">Từ</label>
                        <input type="date" id="startDate" />
                    </div>
                    <div class="date_1">
                        <label for="endDate">Đến</label>
                        <input type="date" id="endDate" />
                    </div>
                    <button onclick="searchByDate()">Tìm kiếm</button>
                    <div class="reset">
                    </div>
                </div>
                <div class="table_cart">
                    <table style="width: 75%">
                        <thead>
                            <tr>
                                <td>Mã Đơn Hàng</td>
                                <td>KHÁCH HÀNG</td>
                                <td>NGÀY ĐẶT</td>
                                <td>TỔNG TIỀN</td>
                                <td>TRANG THAI</td>
                                <td>THAO TÁC</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="cart_order">
                            <div class="product_order">
                                <div class="ptoduct_title">
                                    <h1>Chi Tiết Đơn Hàng</h1>
                                </div>
                                <div class="closs_order" onclick="closs_order()" ><i class="fa-regular fa-circle-xmark"></i></div>
                                <div class="item_product">
                                    <div class="cart_product">
                                        <div class="cart_item">
                                            
                                        </div>
                                        
                                    </div>

                                    <div class="user_product">
                                        <table>
                                            <thead id="thead">
                                            
                                            </thead>
                                        </table>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
        `;

        right_header.innerHTML = cart_list;
        oder_user();
        pregnancy_status();
        idproduct();
    });
}
cart_admin();

function oder_user() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    let tbody = document.getElementsByTagName('tbody')[0];
    console.log(tbody);
    var table_user = '';
    var giaTienChinhThuc = '';
    orders.forEach((list, index) => {
        giaTienChinhThuc = list.Tongtien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

        var indexall = index;
        index++;
        table_user += `
        <tr>
            <td>${list.madon}</td>
            <td>${list.user.name}</td>
            <td>${list.Ngaydat}</td>
            <td>${giaTienChinhThuc}</td>
            <td><button class=" btn_user">${list.Trangthai}</button></td>
            <td><button  class="btn_view" onclick="order_view(${indexall})">Xem</button></td>
        </tr>
        `;
        tbody.innerHTML = table_user;

        let btn_users = document.getElementsByClassName('btn_user');
        Array.from(btn_users).forEach((btn_user) => {
            if (btn_user.textContent === 'Đã xử lý') {
                btn_user.style.background = '#0083d6';
                btn_user.style.color = 'white';
            }
        });
    });
}
function order_view(id) {
    view();
    const orders = JSON.parse(localStorage.getItem('orders'));
    let cart_item = document.getElementsByClassName('cart_item')[0];
    console.log(orders[id].Sanpham);

    var list_product_cart = '';
    var giaTienChinhThuc = '';
    for (var i = 0; i < orders[id].Sanpham.length; i++) {
        var giaTienChinhThuc = orders[id].Sanpham[i].gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        list_product_cart += `
       <div class="class_cart">
       <div class="img"><img src="${orders[id].Sanpham[i].hinhanhitem}" alt="" /></div>
       <div class="content_product_all">
           <h4>${orders[id].Sanpham[i].tensp}</h4>
           <p>Không có ghi chú</p>
           <h4>SL:${orders[id].Sanpham[i].soluong}</h4>
       </div>
       <div class="product_total">
           <h4>${giaTienChinhThuc}</h4>
       </div>
       </div>
       `;
        cart_item.innerHTML = list_product_cart;
    }

    var table_threed = document.getElementById('thead');
    var giaTienChinhThuc = orders[id].Tongtien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    var user_table = `
        <tr>
            <td>
             <div>
                 <i class="fa-solid fa-user"></i>
                 <h4>Người Nhận :</h4>
             </div>
            
            </td>
            <td>${orders[id].user.name}</td>
        </tr>
        <tr>
            <td>
                <div>
                   <i class="fa-solid fa-phone"></i>
                   <h4>Số Điên Thoại :</h4>
                </div>
            </td>
            <td>${orders[id].user.phone}</td>
        </tr>
        <tr>
            <td>
                <div>
                    <i class="fa-solid fa-clock"></i>
                    <h4>Thời Gian Đặt :</h4>
                </div>
            </td>
            <td>${orders[id].Ngaydat}</td>
        </tr>
        <tr>
            <td>
            
            <div>
            <i class="fa-solid fa-location-dot"></i>
            <h4>Địa Chỉ :</h4>            
            </div>
            
            </td>
            <td>${orders[id].user.address}</td>
        </tr>
        <tr>
            <td>
                <div> 
                <i class="fa-solid fa-truck"></i>
                    <h4>Tổng Đơn :</h4>
                </div>
            </td>
            <td style="color:red">${giaTienChinhThuc}</td>
        
        </tr>
       <tr>
       <button id="btn_handle">${orders[id].Trangthai}</button>
       <button onclick="reset(${id})">ok</button>
       </tr>
        
        `;
    table_threed.innerHTML = user_table;
    document.getElementById('btn_handle').addEventListener('click', () => {
        if (orders[id].Trangthai === 'Đã xử lý') {
            return;
        }

        let handle = confirm('Bạn Có Chắc Xử Lý Không ?');
        if (handle) {
            var btn_handle = document.getElementById('btn_handle');
            btn_handle.textContent = 'Đã xử lý';
            orders[id].Trangthai = btn_handle.textContent;
            btn_handle.style.background = '#0083d6';
            btn_handle.style.color = 'white';
            localStorage.setItem('orders', JSON.stringify(orders));
            oder_user();
        }
    });
    if (orders[id].Trangthai === 'Đã xử lý') {
        btn_handle.style.background = '#0083d6';
        btn_handle.style.color = 'white';
    }
}

//selec product
function pregnancy_status() {
    let select_user = document.getElementById('select_userall');
    select_user.addEventListener('change', () => {
        if (select_user.value === 'Tất cả') {
            oder_user();
        } else {
            oder_userByStatus(select_user.value);
            console.log(select_user.value);
        }
    });
}

function oder_userByStatus(status) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    let tbody = document.getElementsByTagName('tbody')[0];
    let table_user = '';
    orders.forEach((list, index) => {
        if (list.Trangthai === status) {
            let row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${list.user.name}</td>
                    <td>${list.Ngaydat}</td>
                    <td>${list.Tongtien}</td>
                    <td><button class="btn_user">${list.Trangthai}</button></td>
                    <td><button class="btn_view" onclick="order_view(${index})">Xem</button>
                   
                    </td>
                    
                </tr>
            `;
            table_user += row;
        }
    });
    tbody.innerHTML = table_user;
    let btn_users = document.getElementsByClassName('btn_user');
    Array.from(btn_users).forEach((btn_user) => {
        if (btn_user.textContent === 'Đã xử lý') {
            btn_user.style.background = '#0083d6';
            btn_user.style.color = 'white';
        }
    });
}
function searchByDate() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const orders = JSON.parse(localStorage.getItem('orders'));
    let tbody = document.getElementsByTagName('tbody')[0];

    var a = endDate.getDate();
    var b = endDate.getFullYear();
    var c = endDate.getMonth() + 1;
    let sumenDate = a + b + c;
    var d = startDate.getDate();
    var e = startDate.getFullYear();
    var f = startDate.getMonth() + 1;
    let sumstartDate = d + e + f;
    var tong = 0;
    let table_user = '';
    orders.map((list, index) => {
        var listdate = list.Ngaydat.split('/');
        const day = parseInt(listdate[0], 10);
        const month = parseInt(listdate[1], 10);
        const year = parseInt(listdate[2], 10);
        const sum = day + month + year;
        if (sumstartDate <= sum && sumenDate >= sum) {
            let row = `
            <tr>
                <td>${index + 1}</td>
                <td>${list.user.name}</td>
                <td>${list.Ngaydat}</td>
                <td>${list.Tongtien}</td>
                <td><button class="btn_user">${list.Trangthai}</button></td>
                <td><button class="btn_view" onclick="order_view(${index})">Xem</button>
               
                </td>
            </tr>
        `;
            table_user += row;
        }
    });
    tbody.innerHTML = table_user;
}

// Tìm Kiếm Mã Đơn Hàng
function idproduct() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    let header_seach = document.querySelectorAll('.header_seach input')[0];
    let tbody = document.getElementsByTagName('tbody')[0];
    header_seach.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            let table_user = '';
            let found = false;
            orders.forEach((list, index) => {
                let orderid = list.madon.toUpperCase();
                let value_input = header_seach.value.toUpperCase();
                if (orderid === value_input) {
                    found = true;
                    let row = `
                        <tr>
                            <td>${list.madon}</td>
                            <td>${list.user.name}</td>
                            <td>${list.Ngaydat}</td>
                            <td>${list.Tongtien}</td>
                            <td><button class="btn_user">${list.Trangthai}</button></td>
                            <td><button class="btn_view" onclick="order_view(${index})">Xem</button></td>
                        </tr>
                    `;
                    table_user += row;
                }
            });
            if (!found) {
                table_user = `<tr><td colspan="6">Không Tìm Thấy Đơn Hàng Nào Cả</td></tr>`;
            }

            tbody.innerHTML = table_user;
            let btn_users = document.getElementsByClassName('btn_user');
            Array.from(btn_users).forEach((btn_user) => {
                if (btn_user.textContent === 'Đã xử lý') {
                    btn_user.style.background = '#0083d6';
                    btn_user.style.color = 'white';
                }
            });
        }
    });
}

function closs_order() {
    let cart_order = document.getElementsByClassName('cart_order')[0];
    cart_order.classList.remove('top');
    const elements = document.querySelectorAll(
        '.table_cart  , .logo, .left_list, .list_product, .selection_food, .pagination-buttons,.header_cart_table',
    );
    elements.forEach((element) => {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    });
}

function view() {
    let cart_order = document.getElementsByClassName('cart_order')[0];
    cart_order.classList.add('top');
    setOpacityAndDisableEvents();
}
function setOpacityAndDisableEvents() {
    const elements = document.querySelectorAll(
        '.table_cart  , .logo, .left_list, .list_product, .selection_food, .pagination-buttons,.header_cart_table',
    );
    elements.forEach((element) => {
        element.style.opacity = '0.5';
        element.style.pointerEvents = 'none';
    });
}

///file word
function reset(id) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders && orders[id]) {
        const { madon, tenNguoiNhan, soDienThoai, diaChi, tenSanPham, gia, ngayDat } = orders[id];

        const doc = new window.docx.Document();

        const titleStyle = {
            paragraph: {
                alignment: window.docx.AlignmentType.CENTER,
                spacing: {
                    before: 200,
                    after: 200,
                },
            },
            run: {
                bold: true,
                size: 28,
                color: '2F5496',
            },
        };

        const contentStyle = {
            paragraph: {
                spacing: {
                    before: 100,
                    after: 200,
                },
            },
            run: {
                size: 24,
                color: '000000',
            },
        };

        doc.addSection({
            children: [
                new window.docx.Paragraph('Chi tiết Đơn Hàng', titleStyle),
                new window.docx.Paragraph('Mã Đơn: ' + madon, contentStyle),
                new window.docx.Paragraph('Tên Người Nhận: ' + tenNguoiNhan, contentStyle),
                new window.docx.Paragraph('Số Điện Thoại: ' + soDienThoai, contentStyle),
                new window.docx.Paragraph('Địa Chỉ: ' + diaChi, contentStyle),
                new window.docx.Paragraph('Đơn Hàng: ' + tenSanPham, contentStyle),
                new window.docx.Paragraph('Giá: ' + gia + ' vnd', contentStyle),
                new window.docx.Paragraph('Ngày Đặt: ' + ngayDat, contentStyle),
            ],
        });

        window.docx.Packer.toBlob(doc).then((blob) => {
            window.saveAs(blob, 'chi_tiet_don_hang.docx');
        });
    } else {
        console.error(`Không tìm thấy dữ liệu cho ID: ${id}`);
    }
}
