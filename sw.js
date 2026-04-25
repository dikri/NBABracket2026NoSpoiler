var CACHE='nba2026-v1';
var URLS=['./index.html','./manifest.json'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(URLS)}))});
self.addEventListener('fetch',function(e){
  e.respondWith(
    fetch(e.request).then(function(r){
      if(r&&r.status===200){var rc=r.clone();caches.open(CACHE).then(function(c){c.put(e.request,rc)})}
      return r;
    }).catch(function(){return caches.match(e.request)})
  );
});