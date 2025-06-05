'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "e2f74db0bc2fac942b325c76e84f72cb",
"assets/AssetManifest.bin": "b750f0526635c3244be71ce09795b74d",
"assets/AssetManifest.bin.json": "5bacd43e050be4b806db3da5db5f2800",
"assets/AssetManifest.json": "c430c865e22b2f7c1809863a9113c729",
"assets/assets/images/Git%2520and%2520GitHub%2520101.png": "b51135de6389a8832e4e08e4bc0efc1a",
"assets/assets/images/Git_Learning_Session.png": "beb1bb2862b8e26a901a88abdfe8ea88",
"assets/assets/images/icons8-github-120.png": "3922fd50e5eec805439f869f0e1ea7d9",
"assets/assets/images/icons8-github-23.png": "619820a0dfa32ca67dde9517943d6551",
"assets/assets/images/icons8-github-30-2.png": "122154f9bb6ce49302279356075151d2",
"assets/assets/images/icons8-github-30.png": "122154f9bb6ce49302279356075151d2",
"assets/assets/images/icons8-github-45.png": "e1824ff2df7e957e5e727af366f29012",
"assets/assets/images/icons8-github-60-2.png": "0db63e50ae6e4506ada8befa45da4639",
"assets/assets/images/icons8-github-60.png": "0db63e50ae6e4506ada8befa45da4639",
"assets/assets/images/icons8-github-90.png": "db49200b113877e80d3ce2d1932a62c9",
"assets/assets/images/Python_Blog_Introduction.png": "ab61e5f7ad95a74e72dbc4597634a17e",
"assets/assets/images/Python_Learning_Session.png": "ba69389df8a7d6b98b0f027c1a1b849c",
"assets/assets/images/Robot%2520Logo_remix.png": "304c05dabc863e6147be61e79ea7dbe3",
"assets/assets/images/VohuCode%2520Favicon.png": "26314d59095ae9458f65041d0f7f351a",
"assets/assets/images/VohuCode_Mobile_ContactUsPage_Design.png": "c960599c67d1fd5eb0e4fabbcd6c8d67",
"assets/assets/images/VohuCode_Mobile_Homepage_Design.png": "e8a71385b6e4f729cfaa4774be4b5c34",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "58ae44c7e7b84d677e901e7d2ca178d5",
"assets/NOTICES": "3e8c210c89d92cf2cf53e55860acdbba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "4e5a7a103a1992734dcaa8716f2b9015",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "16f61c829ad356f365f895b0759fc1bc",
"icons/android-icon-144x144.png": "45c3ec6d2da396a480fa84b8f008471a",
"icons/android-icon-192x192.png": "f20da137a4480edfbb8ba8432ee3a647",
"icons/android-icon-36x36.png": "d3c04a923a5f58c5751e66ebc69d51db",
"icons/android-icon-48x48.png": "157c5c9990e6411570fc48f006da9f6b",
"icons/android-icon-72x72.png": "3347643fc562afa91551d71563ce34a8",
"icons/android-icon-96x96.png": "81a151462390bc5a27a12db5bda78ba4",
"icons/apple-icon-114x114.png": "9af7bb17619747e8708a8936c5828be0",
"icons/apple-icon-120x120.png": "0c5aabb21edfebcb8c147e3df3d2214c",
"icons/apple-icon-144x144.png": "45c3ec6d2da396a480fa84b8f008471a",
"icons/apple-icon-152x152.png": "ba887716983f6c90e4bb4160774b1b34",
"icons/apple-icon-180x180.png": "388b4624a1f1ec1ad3602409f98d8ff8",
"icons/apple-icon-57x57.png": "5d80a3497931501d5139d59a7094bfff",
"icons/apple-icon-60x60.png": "1f464ef9862fdf65557ae767a52fe117",
"icons/apple-icon-72x72.png": "3347643fc562afa91551d71563ce34a8",
"icons/apple-icon-76x76.png": "49f792deb5b65aef9e99409115cd93a0",
"icons/apple-icon-precomposed.png": "e39f6e4db3e7ecb4701f6a3efbbb2f7f",
"icons/apple-icon.png": "e39f6e4db3e7ecb4701f6a3efbbb2f7f",
"icons/favicon-16x16.png": "cb3cc2b78281404838154290c6743a0c",
"icons/favicon-32x32.png": "806cb5a8c71331afa1d8a3e9b99e18a7",
"icons/favicon-96x96.png": "81a151462390bc5a27a12db5bda78ba4",
"icons/ms-icon-144x144.png": "45c3ec6d2da396a480fa84b8f008471a",
"icons/ms-icon-150x150.png": "76d48f60ef66e86b6e6eca3570db5c9a",
"icons/ms-icon-310x310.png": "db97ed9748064893924f99a35bd647a4",
"icons/ms-icon-70x70.png": "63f220c9468e3a42e840cb2851188891",
"index.html": "768be84e0fb2bb3c5987e3ff32846423",
"/": "768be84e0fb2bb3c5987e3ff32846423",
"main.dart.js": "2ca3037b3f45c7a7b366337060e01075",
"main.dart.mjs": "7f490185cb19fcccf798d8a816b947ad",
"main.dart.wasm": "7ac68181acb9e6290168c9d288aae32e",
"main.dart.wasm.map": "2300664084c0356f3ece2fc915d3117f",
"manifest.json": "724abb5b2964349c3f583987620b981b",
"routes.json": "1e7f127a7c5df59082cab5c8a4c8cdb3",
"version.json": "57d855f3d101820652d92f016cf0e1a5",
"_headers": "410548775991cb64e01003c48875354a",
"_redirects": "d38a2b58df330c85e0029eecf71d7c26",
"_routes.json": "f9d8d1c7cfa441e60089a8435c894fc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
