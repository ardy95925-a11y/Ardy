// Initial Data (Default content)
const defaultPages = {
    'home': { title: "Game Wiki Home", body: "Welcome to the official wiki! Click the unlock button to start editing." },
    'characters': { title: "Characters", body: "List your game heroes and villains here." },
    'items': { title: "Items & Loot", body: "Swords, potions, and legendary treasures." },
    'world': { title: "The World", body: "Describe the regions and lore of your game." }
};

let pages = JSON.parse(localStorage.getItem('wikiPages')) || defaultPages;
let currentPage = 'home';
let isAdmin = false;

// 1. Password Protection Logic
function toggleAdmin() {
    if (!isAdmin) {
        const pass = prompt("Enter Admin Password:");
        if (pass === "0p0p") {
            isAdmin = true;
            enableEditMode();
        } else {
            alert("Wrong password!");
        }
    } else {
        isAdmin = false;
        disableEditMode();
    }
}

function enableEditMode() {
    document.getElementById('edit-status').innerText = "EDIT MODE ACTIVE";
    document.getElementById('edit-status').style.color = "#2ecc71";
    document.getElementById('auth-btn').innerText = "Lock Wiki";
    document.getElementById('save-btn').style.display = "inline-block";
    document.getElementById('add-page-btn').style.display = "block";
    
    document.getElementById('page-title').contentEditable = "true";
    document.getElementById('page-body').contentEditable = "true";
}

function disableEditMode() {
    document.getElementById('edit-status').innerText = "Viewing Mode";
    document.getElementById('edit-status').style.color = "white";
    document.getElementById('auth-btn').innerText = "Unlock Edit Mode";
    document.getElementById('save-btn').style.display = "none";
    document.getElementById('add-page-btn').style.display = "none";
    
    document.getElementById('page-title').contentEditable = "false";
    document.getElementById('page-body').contentEditable = "false";
}

// 2. Page Navigation
function loadPage(id) {
    currentPage = id;
    const page = pages[id];
    document.getElementById('page-title').innerText = page.title;
    document.getElementById('page-body').innerHTML = page.body;
}

// 3. Save Functionality
function saveContent() {
    const newTitle = document.getElementById('page-title').innerText;
    const newBody = document.getElementById('page-body').innerHTML;
    
    pages[currentPage] = {
        title: newTitle,
        body: newBody
    };
    
    localStorage.setItem('wikiPages', JSON.stringify(pages));
    alert("Page Saved!");
    updateNav();
}

// 4. Create New Page
function createNewPage() {
    const id = prompt("Enter a unique ID for the page (e.g. 'bosses')").toLowerCase().replace(/\s/g, '');
    if (id && !pages[id]) {
        pages[id] = { title: "New Page Title", body: "Type your content here..." };
        updateNav();
        loadPage(id);
    }
}

// Update the sidebar list
function updateNav() {
    const nav = document.getElementById('nav-links');
    nav.innerHTML = '';
    Object.keys(pages).forEach(id => {
        const li = document.createElement('li');
        li.innerText = pages[id].title;
        li.onclick = () => loadPage(id);
        nav.appendChild(li);
    });
}

// Startup
window.onload = () => {
    updateNav();
    loadPage('home');
};
