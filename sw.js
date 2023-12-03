console.log('hola')
const NombreCache = 'Aklex_24'
const ArchivosCache = [
    '/',
    '/index.html',
    '/src/imagenes/image.psd.png',
    '/src/imagenes/UTNA.png',
    '/src/portafolio/Curriculum.pdf',
    '/scripts/scrollreveal.js',
    '/script.js',
    '/css/styles.css'
]

self.addEventListener("install", e => {
    console.log("el service worker installed successfully " + e)
    e.waitUntil(
        caches.open(NombreCache).then(cache => {
            console.log("cache successfully loaded " + cache)
            cache.addAll(ArchivosCache)
        })
    )
})

self.addEventListener('activate', e => {
    console.log("el service worker activado " + e)
})

self.addEventListener('fetch', e => {
    console.log("fetch " + e)
    e.respondWith(
        caches.match(e.request)
        .then(response => {
            return response || fetch(e.request)
        })
    )
})