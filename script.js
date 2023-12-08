const planetsData = [
    { name: 'Mercury', image: 'mercury.jpg', description: 'Mercury is the smallest and closest to the Sun of the eight planets in the Solar System.' },
    { name: 'Venus', image: 'venus.jpg', description: 'Venus is the second planet from the Sun. It is a rocky planet, similar in size and composition to Earth.' },
    { name: 'Earth', image: 'earth.jpg', description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.' },
    { name: 'Mars', image: 'mars.jpg', description: 'Mars is the fourth planet from the Sun and the second smallest planet in the Solar System.' },
    { name: 'Jupiter', image: 'jupiter.jpg', description: 'Jupiter is the largest planet in the Solar System and is known for its Great Red Spot.' },
    { name: 'Saturn', image: 'saturn.jpg', description: 'Saturn is the sixth planet from the Sun and is known for its stunning ring system.' },
    { name: 'Uranus', image: 'uranus.jpg', description: 'Uranus is the seventh planet from the Sun. It is an ice giant and the third-largest planet in the Solar System.' },
    { name: 'Neptune', image: 'neptune.jpg', description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System.' },
  ];
  
  const container = document.getElementById('planet-container');
  const itemsPerPage = 3;
  let currentPage = 1;
  
  function showPlanets(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPlanets = planetsData.slice(startIndex, endIndex);
  
    container.innerHTML = '';
    currentPlanets.forEach(planet => {
      const card = document.createElement('div');
      card.className = 'card';
  
      // Create the image element with alt text
      const image = document.createElement('img');
      image.src = planet.image;
      image.alt = `${planet.name} - ${planet.description}`;
  
      const text = document.createElement('div');
      text.className = 'card-text';
      text.innerHTML = `<p>${planet.description}</p>`;
  
      const button = document.createElement('button');
      button.className = 'show-description';
      button.textContent = 'Show Description';
      button.addEventListener('click', () => {
        text.style.display = text.style.display === 'none' ? 'block' : 'none';
      });
  
      card.appendChild(image);
      card.appendChild(text);
      card.appendChild(button);
      container.appendChild(card);
    });
  
    showPagination();
  }
  
  function showPagination() {
    const totalPages = Math.ceil(planetsData.length / itemsPerPage);
    const paginationContainer = document.createElement('ul');
    paginationContainer.className = 'pagination';
  
    for (let i = 1; i <= totalPages; i++) {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = i;
      link.addEventListener('click', () => {
        currentPage = i;
        showPlanets(currentPage);
      });
  
      if (i === currentPage) {
        link.className = 'active';
      }
  
      listItem.appendChild(link);
      paginationContainer.appendChild(listItem);
    }
  
    container.appendChild(paginationContainer);
  }
  
  showPlanets(currentPage);
  