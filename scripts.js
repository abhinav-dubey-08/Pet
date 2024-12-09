document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('petModal');
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalAge = document.getElementById('modalAge');
    const modalBreed = document.getElementById('modalBreed');
    const modalAdoption = document.getElementById('modalAdoption');
    const closeBtn = document.querySelector('.close');
  
    document.querySelectorAll('.pet').forEach(pet => {
      pet.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = pet.querySelector('img').src;
        modalName.textContent = pet.getAttribute('data-name');
        modalAge.textContent = `Age: ${pet.getAttribute('data-age')}`;
        modalBreed.textContent = `Breed Details: ${pet.getAttribute('data-breed')}`;
        modalAdoption.textContent = `Adoption Details: ${pet.getAttribute('data-adoption')}`;
      });
    });
  
    // Close button functionality
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('petModal');
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalAge = document.getElementById('modalAge');
    const modalBreed = document.getElementById('modalBreed');
    const modalAdoption = document.getElementById('modalAdoption');
    const closeBtn = document.querySelector('.close');
  
    document.querySelectorAll('.pet').forEach(pet => {
      pet.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = pet.querySelector('img').src;
        modalName.textContent = pet.getAttribute('data-name');
        modalAge.textContent = `Age: ${pet.getAttribute('data-age')}`;
        modalBreed.textContent = `Breed Details: ${pet.getAttribute('data-breed')}`;
        modalAdoption.textContent = `Adoption Details: ${pet.getAttribute('data-adoption')}`;
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  