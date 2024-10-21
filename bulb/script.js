function startProject() {
    const startContainer = document.getElementById('startContainer');
    const inputContainer = document.getElementById('inputContainer');
    
    startContainer.style.display = 'none';
    inputContainer.style.display = 'block';
}

function generateBulbs() {
    const numBulbs = document.getElementById('numBulbs').value;
    const bulbContainer = document.getElementById('bulbContainer');
    bulbContainer.innerHTML = '';  

    if (numBulbs > 0) {
        bulbContainer.style.display = 'flex';  

        
        for (let i = 0; i < numBulbs; i++) {
            const bulbDiv = document.createElement('div');
            bulbDiv.classList.add('bulb');

            const bulbImage = document.createElement('img');
            bulbImage.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';  

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

           
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    bulbImage.src = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png';  
                } else {
                    bulbImage.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';  
                }
            });

            bulbDiv.appendChild(bulbImage);
            bulbDiv.appendChild(checkbox);
            bulbContainer.appendChild(bulbDiv);
        }
    } else {
        alert("Please enter a valid number of bulbs.");
    }
}