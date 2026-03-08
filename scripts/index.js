const API_URL = "https://phi-lab-server.vercel.app/api/v1/lab"
let allData = [];

document.getElementById('login-btn').addEventListener('click', () => {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'admin' && pass === 'admin123') {
        document.getElementById('login-page').style.setProperty('display', 'none', 'important');
        document.getElementById('main-page').classList.remove('hidden');
        fetchData()
    } else {
        alert("Invalid Login! Use admin / admin123")
    }
});