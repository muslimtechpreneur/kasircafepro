self.addEventListener('install', e => {
    console.log('Service Worker: Installed');
    e.waitUntil(
      caches.open('pwa-cache-v1').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './style.css',
          './app.js',
          './icons/icon-192x192.png',
          './icons/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(res => res || fetch(e.request))
    );
  });
  