
let activated = localStorage.getItem('vod-sw-activated');
const registerServiceWorker = async (resolve) => {
  
  console.log('serviceWorker', 'serviceWorker' in navigator);
  try {
    
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.register(
        './service-worker.js',
      );


      const broadcast = new BroadcastChannel('count-channel');

      // Listen to the response
      broadcast.onmessage = (event) => {
        console.log('message from sw', event.data.payload);
      };

      // Send first request
      broadcast.postMessage({
        type: 'INCREASE_COUNT',
      });

      // navigator.serviceWorker.ready.then((registration) => {
      //   registration.active.postMessage("Hi service worker");
      //   localStorage.setItem('vod-sw-activated', true);
      //   if (!activated) {
      //     window.location.reload();
      //   }
      // });


      // navigator.serviceWorker.addEventListener("message", (event) => {
      //   // event is a MessageEvent object
      // });
    

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




