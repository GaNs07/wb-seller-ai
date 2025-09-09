// Инициализация графика
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
     {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
        datasets: [{
            label: 'Продажи (шт.)',
             [125, 180, 210, 195, 230, 287],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            tension: 0.3,
            fill: true
        }, {
            label: 'Возвраты (шт.)',
            data: [15, 22, 28, 25, 32, 69],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: true,
                text: 'Динамика продаж и возвратов',
                color: 'white'
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    color: 'white'
                }
            }
        }
    }
});

// Функции для табов
function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    const tabs = document.querySelectorAll('.tab');
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].textContent.includes(tabName === 'analysis' ? 'Анализ' : 
                                       tabName === 'calculator' ? 'Калькулятор' : 
                                       tabName === 'sales' ? 'Продажи' : 
                                       tabName === 'strategies' ? 'Стратегии' : 'Telegram')) {
            tabs[i].classList.add('active');
            break;
        }
    }
}

// Анализ продукта
function analyzeProduct() {
    const nmId = document.getElementById('nmId').value;
    const resultDiv = document.getElementById('analysisResult');
    
    resultDiv.innerHTML = '<div class="loading">ИИ анализирует карточку товара... 🤖</div>';
    
    setTimeout(() => {
        resultDiv.innerHTML = `
            <h3>📦 Платье женское летнее</h3>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value">85/100</div>
                    <div class="stat-label">Оценка карточки</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">1990 ₽</div>
                    <div class="stat-label">Текущая цена</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">382 ₽</div>
                    <div class="stat-label">Прибыль/шт</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">24%</div>
                    <div class="stat-label">Возвраты</div>
                </div>
            </div>
            
            <h4>🎯 Рекомендации ИИ:</h4>
            <div class="recommendation">
                <p>• Добавьте в заголовок: "бесплатная доставка", "летнее", "цветочное"</p>
                <p>• Укажите состав ткани и размерную сетку</p>
                <p>• Добавьте 3 фото на модели + видео</p>
                <p>• Оптимизируйте рекламу: добавьте негативные ключи</p>
            </div>
        `;
    }, 2000);
}

// Калькулятор прибыли
function calculateProfit() {
    const costPrice = parseFloat(document.getElementById('costPrice').value) || 0;
    const logistics = parseFloat(document.getElementById('logistics').value) || 0;
    const storage = parseFloat(document.getElementById('storage').value) || 0;
    const adBudget = parseFloat(document.getElementById('adBudget').value) || 0;
    const returnRate = parseFloat(document.getElementById('returnRate').value) || 0;
    const salePrice = parseFloat(document.getElementById('salePrice').value) || 0;
    const cpc = parseFloat(document.getElementById('cpc').value) || 0;
    const ctr = parseFloat(document.getElementById('ctr').value) || 0;
    
    const resultDiv = document.getElementById('profitResult');
    
    resultDiv.innerHTML = '<div class="loading">ИИ считает прибыль... 🧮</div>';
    
    setTimeout(() => {
        const commission = salePrice * 0.12;
        const storageCost = storage * 5;
        const adCostPerUnit = adBudget / ((salePrice * (ctr/100) * 100) || 1);
        const returnCost = salePrice * (returnRate/100) * 0.12;
        
        const totalCosts = commission + logistics + storageCost + adCostPerUnit + returnCost;
        const profit = salePrice - costPrice - totalCosts;
        const margin = (profit / salePrice) * 100;
        
        resultDiv.innerHTML = `
            <div class="profit-result">
                <div class="profit-value">${profit.toFixed(0)} ₽</div>
                <div>Чистая прибыль с единицы товара</div>
                <div>Маржинальность: ${margin.toFixed(1)}%</div>
            </div>
        `;
    }, 2000);
}

// Применение стратегии
function applyStrategy(strategyName) {
    alert(`✅ Стратегия "${strategyName}" успешно применена!`);
}

// Telegram-бот
function sendTelegramMessage() {
    const input = document.getElementById('telegramInput');
    const message = input.value.trim();
    const chat = document.getElementById('telegramChat');
    
    if (!message) return;
    
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerHTML = `<div class="message-text">${message}</div>`;
    chat.appendChild(userMessage);
    
    input.value = '';
    chat.scrollTop = chat.scrollHeight;
    
    setTimeout(() => {
        let botResponse = '';
        
        if (message.includes('/analyze')) {
            botResponse = '🔍 Анализирую товар...\n\n✅ Товар: Платье женское летнее\n💰 Текущая цена: 1990 ₽\n📈 Прибыль: 382 ₽/шт\n📉 Возвраты: 24%';
        } else if (message.includes('/report')) {
            botResponse = '📊 Отчёт за вчера:\n\n💰 Выручка: 57 400 ₽\n📦 Продано: 28 шт.\n↩️ Возвраты: 7 шт.\n📈 Прибыль: 10 696 ₽';
        } else {
            botResponse = '🤔 Я не понял команду. Используйте /help для списка команд.';
        }
        
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerHTML = `<div class="message-text">${botResponse}</div>`;
        chat.appendChild(botMessage);
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
}

function handleTelegramInput(event) {
    if (event.key === 'Enter') {
        sendTelegramMessage();
    }
}

function showDemo() {
    document.getElementById('nmId').value = '12345678';
    analyzeProduct();
    openTab('analysis');
}

window.onload = function() {
    setTimeout(showDemo, 1000);
}