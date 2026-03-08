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


async function fetchData() {
    toggleLoader(true);
    try {
        const res = await fetch(`${API_URL}/issues`);
        const json = await res.json();
        allData = json.data;
        displayData(allData);
    } catch (err) {
        console.error("Fetch Error:", err)
    } finally {
        toggleLoader(false);
    }
}

function displayData(items) {
    const grid = document.getElementById('issues-grid');
    document.getElementById('total-count').innerText = `${items.length} issues`;
    grid.innerHTML = '';

    items.forEach((item, index) => {
        const isOpen = (item.status && item.status.toLowerCase() === 'open') ||
            (item.category && item.category.toLowerCase() === 'open');

        const topBorder = isOpen ? 'border-t-green-500' : 'border-t-purple-500';

        const statusBadge = isOpen
            ? `<span style="background:#dcfce7; color:#15803d; border:1px solid #86efac;
                    padding:2px 10px; border-radius:999px; font-size:10px; font-weight:bold;">Open</span>`
            : `<span style="background:#f3e8ff; color:#7e22ce; border:1px solid #d8b4fe;
                    padding:2px 10px; border-radius:999px; font-size:10px; font-weight:bold;">Closed</span>`;

        const card = document.createElement('div');
        card.className = `card bg-white border border-gray-200 border-t-4 ${topBorder} shadow-sm hover:shadow-md transition cursor-pointer`;
        card.onclick = () => showModal(item.id);

        card.innerHTML = `
        <div class="card-body p-5">
                <div class="flex justify-between items-center mb-3">
                    ${statusBadge}
                    <span class="badge badge-outline text-[10px] font-bold uppercase py-2">${item.priority}</span>
                </div>
                <h2 class="card-title text-sm font-bold line-clamp-2 text-gray-800">${item.title}</h2>
                <p class="text-xs text-gray-500 line-clamp-2 my-3">${item.description}</p>
                <div class="flex flex-wrap gap-1 mb-4">
                    ${renderYellowTags(item.labels)}
                </div>
                <div class="flex justify-between text-[10px] text-gray-400 mt-auto pt-3 border-t">
                    <span class="font-medium">#${index + 1} by ${item.author}</span>
                    <span>${item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}</span>
                </div>
            </div>
            `;
            grid.appendChild(card);
    });
}

function renderYellowTags(labelsData) {
    if (!labelsData) return '';
    let tags = Array.isArray(labelsData) ? labelsData : labelsData.split(',');
    let html = '';
    tags.forEach(tag => {
        let cleanTag = tag.trim().toUpperCase();
        if (cleanTag) {
            html += `<span style="background-color:#facc15; color:#000; padding:2px 8px;
                        border-radius:6px; font-size:9px; font-weight:bold;">${cleanTag}</span>`;
        }
    });
    return html;
}