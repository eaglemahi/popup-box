
               //Building Popup

    const button = document.querySelector('button');
    const popup = document.querySelector('.popup-window');
    const close = document.querySelector('.close-menu');
    
          button.addEventListener('click', () => {
            popup.style.display = 'block';
            // popup.classList.add('animate');
          });

          close.addEventListener('click', () => {
            popup.style.display = 'none';
            // popup.classList.add('animate');
          });

          popup.addEventListener('dblclick', () => {
            popup.style.display = 'none';
            // popup.classList.add('animate');
          });
