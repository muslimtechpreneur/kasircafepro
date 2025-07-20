// Daftarkan service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('SW berhasil:', reg))
    .catch(err => console.error('SW gagal:', err));
}
