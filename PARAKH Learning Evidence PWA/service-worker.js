const CACHE_NAME = 'parakh-app-v1.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './author.jpg'
];

// Install event - cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('PARAKH App: Caching assets for offline use');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// Background sync for evidence uploads
self.addEventListener('sync', event => {
  if (event.tag === 'sync-evidence') {
    event.waitUntil(syncPendingEvidence());
  }
});

async function syncPendingEvidence() {
  console.log('PARAKH App: Background sync triggered');
  // Notify clients that sync is happening
  const clients = await self.clients.matchAll();
  clients.forEach(client => client.postMessage({ type: 'SYNC_START' }));
}

// Push notifications for reminders
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'PARAKH Learning App';
  const options = {
    body: data.body || 'You have pending evidence to capture!',
    icon: './author.jpg',
    badge: './author.jpg',
    data: data
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
