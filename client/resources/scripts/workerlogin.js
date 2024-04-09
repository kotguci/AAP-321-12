function handleOnLoad() {
    signInDisplay();
}

function signInDisplay() {
    let html = `
    <div class="wrapper">
        <form action="">
            <h1>Employee Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" required>
                <box-icon type='solid' name='user'></box-icon>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" required>
                <box-icon name='lock-alt' type='solid'></box-icon>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox">Remember Me</label>
            </div>

            <button type="submit" class="btn btn-danger">Login</button>
        </form>
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}