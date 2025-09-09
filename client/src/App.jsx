import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('analysis');
  const [nmId, setNmId] = useState('12345678');
  const [analysis, setAnalysis] = useState(null);

  const analyzeProduct = () => {
    setAnalysis({
      name: "Платье женское летнее",
      score: 85,
      price: 1990,
      profit: 382,
      returnRate: 24,
      recommendations: [
        "Добавьте в заголовок: 'бесплатная доставка', 'летнее', 'цветочное'",
        "Укажите состав ткани и размерную сетку",
        "Добавьте 3 фото на модели + видео",
        "Оптимизируйте рекламу: добавьте негативные ключи"
      ]
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 WB Seller AI</h1>
      <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        <button onClick={() => setActiveTab('analysis')}>📊 Анализ</button>
        <button onClick={() => setActiveTab('calculator')}>💰 Калькулятор</button>
        <button onClick={() => setActiveTab('strategies')}>🎯 Стратегии</button>
      </div>

      {activeTab === 'analysis' && (
        <div>
          <h2>Анализ карточки товара</h2>
          <input 
            value={nmId} 
            onChange={(e) => setNmId(e.target.value)}
            placeholder="Артикул товара"
            style={{ padding: '10px', margin: '10px 0' }}
          />
          <button onClick={analyzeProduct}>Запустить анализ ИИ</button>
          
          {analysis && (
            <div style={{ marginTop: '20px', padding: '20px', background: '#f0f0f0' }}>
              <h3>{analysis.name}</h3>
              <p>Оценка карточки: {analysis.score}/100</p>
              <p>Цена: {analysis.price} ₽</p>
              <p>Прибыль: {analysis.profit} ₽/шт</p>
              <p>Возвраты: {analysis.returnRate}%</p>
              <h4>Рекомендации ИИ:</h4>
              <ul>
                {analysis.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {activeTab === 'calculator' && (
        <div>
          <h2>Калькулятор прибыли</h2>
          <p>Функция в разработке...</p>
        </div>
      )}

      {activeTab === 'strategies' && (
        <div>
          <h2>Стратегии продаж</h2>
          <p>Функция в разработке...</p>
        </div>
      )}
    </div>
  );
};

export default App;
