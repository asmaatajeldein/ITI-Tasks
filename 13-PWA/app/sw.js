const filesToCache = [
  "/",
  "styles/index.css",
  "index.html",
  "js/main.js",
  "pages/offline.html",
  "pages/404.html"
];

const staticCacheName = "Pages-v1";

self.addEventListener("install", (event) => {
  console.log("service worker installing...");
  //   self.skipWaiting()
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("service worker activated...");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      console.log("fetching....", event.request.url);
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        console.log("found:-", event.request.url, "in cache");
        return cachedResponse;
      } else if (!cachedResponse && !navigator.onLine) {
        return caches.match("pages/offline.html");
      }

      console.log("Network request: ", event.request.url);

      try {
        const fetchResponse = await fetch(event.request);
        if (fetchResponse.status === 404) {
          return await caches.match("pages/404.html");
        }
        const cache = await caches.open(staticCacheName);
        await cache.put(event.request.url, fetchResponse.clone());
        return fetchResponse;
      } catch (err) {
        if (err.message == "Failed to fetch") {
          //   console.log(err.message);
          return caches.match("pages/offline.html");
        }
      }
    })()
  );
});
