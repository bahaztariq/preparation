/**
 * API Service for handling asynchronous data (ES6 Classes, Fetch API) 
 */
class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async fetchData(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
}

/**
 * UI Controller for DOM Manipulation
 */
class UIController {
    constructor() {
        this.listElement = document.getElementById('item-list');
        this.formElement = document.getElementById('data-form');
        this.statusElement = document.getElementById('status-message');
    }

    renderItems(items) {
        if (!this.listElement) return;
        
        this.listElement.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'item-card';
            li.innerHTML = `
                <h3>${this.escapeHTML(item.title)}</h3>
                <p>${this.escapeHTML(item.body)}</p>
                <button class="delete-btn" data-id="${item.id}">Delete</button>
            `;
            this.listElement.appendChild(li);
        });
    }

    showStatus(message, isError = false) {
        if (!this.statusElement) return;
        this.statusElement.textContent = message;
        this.statusElement.style.color = isError ? 'red' : 'green';
        
        // Auto-hide message after 3 seconds
        setTimeout(() => {
            this.statusElement.textContent = '';
        }, 3000);
    }

    escapeHTML(str) {
        const p = document.createElement('p');
        p.textContent = str;
        return p.innerHTML;
    }
}

/**
 * Main Application Logic
 */
document.addEventListener('DOMContentLoaded', () => {
    const api = new ApiService('https://jsonplaceholder.typicode.com');
    const ui = new UIController();

    // Event Delegation Patterns
    if (ui.listElement) {
        ui.listElement.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const id = e.target.getAttribute('data-id');
                console.log(`Deleting item ${id}...`);
                e.target.closest('.item-card').remove();
                ui.showStatus(`Item ${id} removed locally.`);
            }
        });
    }

    // async initialization
    async function initApp() {
        ui.showStatus('Loading data...');
        try {
            const posts = await api.fetchData('/posts?_limit=5');
            ui.renderItems(posts);
            ui.showStatus('Data loaded successfully.');
        } catch (error) {
            ui.showStatus('Failed to load data.', true);
        }
    }

    initApp();
});
