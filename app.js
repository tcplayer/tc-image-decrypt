
let activated = localStorage.getItem('vod-sw-activated');
const registerServiceWorker = async (resolve) => {
  
  try {
    if ('serviceWorker' in navigator) { 
      const registration = await navigator.serviceWorker.register(
        './service-worker.js',
      );


      navigator.serviceWorker.ready.then(() => {
        localStorage.setItem('vod-sw-activated', true);
        if (!activated) {
          window.location.reload();
        }
      });

      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        
        console.log('Service worker active');
      }
  
      
    }
    
  } catch (error) {
    console.error(`Registration failed with ${error}`);
  }

};

registerServiceWorker();




