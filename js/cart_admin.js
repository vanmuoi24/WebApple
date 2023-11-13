function cart_admin() {
    const right_header = document.getElementsByClassName('right_header')[0];
    const left_list = document.querySelectorAll('.left_list li');
    left_list[3].addEventListener('click', () => {
        var cart_list = `
        <div class="cart_header">
                <div class="header_cart_table">
                    <div class="header_select">
                        <select name="" id="">
                            <option value="">Tất cả</option>
                            <option value="">Xử Lí</option>
                            <option value="">Chưa Xử Lí</option>
                        </select>
                    </div>
                    <div class="header_seach">
                        <input type="text" name="" id="" />
                    </div>
                    <div class="date_1">
                        <label for="">Từ</label>
                        <input type="date" />
                    </div>
                    <div class="date_1">
                        <label for="">Đến</label>
                        <input type="date" />
                    </div>
                    <div class="reset">
                        <button>Reset</button>
                    </div>
                </div>
                <div class="table_cart">
                    <table style="width: 75%">
                        <thead>
                            <tr>
                                <td>MÃ ĐƠN</td>
                                <td>KHÁCH HÀNG</td>
                                <td>NGÀY ĐẶT</td>
                                <td>TỔNG TIỀN</td>
                                <td>TRANG THAI</td>
                                <td>THAO TÁC</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#123</td>
                                <td>Vy Van Muoi</td>
                                <td>11-1-2004</td>
                                <td>10000</td>
                                <td><button>Chưa Xử Lý</button></td>
                                <td><button>Xem</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        right_header.innerHTML = cart_list;
    });
}
cart_admin();
