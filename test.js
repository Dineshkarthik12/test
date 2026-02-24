document.getElementById('searchBtn').addEventListener('click', searchFood);

document.getElementById('foodInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchFood();
    }
});

function searchFood() {
    const foodInput = document.getElementById('foodInput').value;
    if (foodInput.trim() === '') {
        alert('Please enter a food item');
        return;
    }
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>Searching...</p>';
    
    // Mock data for demonstration
    const mockData = [
        { name: 'Apple', calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
        { name: 'Banana', calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
        { name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
        { name: 'Broccoli', calories: 55, protein: 3.7, carbs: 11, fat: 0.6 }
    ];
    
    const results = mockData.filter(item => 
        item.name.toLowerCase().includes(foodInput.toLowerCase())
    );
    
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found</p>';
        return;
    }
    
    resultsDiv.innerHTML = results.map(item => 
        `<div class="food-item" onclick="showNutrition('${item.name}')">${item.name}</div>`
    ).join('');
}

function showNutrition(foodName) {
    const mockData = [
        { name: 'Apple', calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
        { name: 'Banana', calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
        { name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
        { name: 'Broccoli', calories: 55, protein: 3.7, carbs: 11, fat: 0.6 }
    ];
    
    const food = mockData.find(item => item.name === foodName);
    if (!food) return;
    
    const nutritionDetails = document.getElementById('nutritionDetails');
    nutritionDetails.innerHTML = `
        <div class="nutrition-card">
            <h3>${food.name}</h3>
            <p><strong>Calories:</strong> ${food.calories}</p>
            <p><strong>Protein:</strong> ${food.protein}g</p>
            <p><strong>Carbs:</strong> ${food.carbs}g</p>
            <p><strong>Fat:</strong> ${food.fat}g</p>
        </div>
    `;
}