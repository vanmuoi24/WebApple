function change_pass() {
    let element = document.getElementById('row5');
    element.style.display = 'block';
    element.innerHTML = `
    <div id="row6">
    <label for="pass_o">Nhập mật khẩu cũ :</label>
    <input type="password" name="Old Password" id="pass_o" /><br /><br />
    </div>
    <div id="row7">
    <label for="pass_n">Nhập mật khẩu mới :</label>
    <input type="password" name="New password" id="pass_n" /> <br /><br />
    </div>
    <div id="row8">
    <label for="pass_again">Nhập lại mật khẩu :</label>
    <input type="password" id="pass_again" /><br /><br />
    </div>`;
}
