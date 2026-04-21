// LocalStorage:
// Stores data with no expiration
// Data remains even after browser/tab is closed
// Only cleared manually
// Around 5MB storage limit
// Accessible only from browser JavaScript

localStorage.setItem("name", "Arun");
const name = localStorage.getItem("name");
console.log(name);
localStorage.removeItem("name"); // this is to remove the item
localStorage.clear(); // this clear everything

// Localstorage stores only the string
localStorage.setItem(
  "user",
  JSON.stringify({
    name: "Arun",
    age: 25,
  }),
);
const user = JSON.parse(localStorage.getItem("user"));
// Because LocalStorage stores only strings.

// SessionStorage
// Same API as LocalStorage
// Data exists only for current tab session
// Closing tab removes data
// Different tabs have different sessionStorage
sessionStorage.setItem("theme", "dark");

// Use cases:
// Multi-step forms
// Temporary login state
// Wizard flows

// Cookies
// Small pieces of data stored in browser
// Sent automatically with every HTTP request
// Much smaller storage (~4KB)
// Can have expiration date
// Used for auth/session/token tracking

document.cookie = "username=Arun";
document.cookie = "theme=dark; expires=Fri, 31 Dec 2027 12:00:00 UTC"; // cookies with expiry

// Important:
// Cookies are automatically sent to server.
// LocalStorage and SessionStorage are not.

// CORS
// CORS stands for Cross-Origin Resource Sharing. Browser blocks requests from one origin to another unless server allows it.
// Access-Control-Allow-Origin: http://localhost:3000
// app.use(cors());

// Important:
// CORS is browser security feature.
// Postman does not care about CORS.

// defer
<script src="app.js" defer></script>;

// Behavior:
// Browser downloads script in parallel
// HTML parsing continues
// Script executes after HTML parsing completes
// Multiple deferred scripts execute in order

// Best for:
// Most app scripts
// DOM-dependent scripts

// async
<script src="app.js" async></script>;

// Behavior:
// Browser downloads script in parallel
// HTML parsing continues
// Script executes immediately when downloaded
// Order is not guaranteed

// Best for:
// Analytics
// Ads
// Third-party widgets

// Important Difference
// defer preserves order
// async does not preserve order
// defer waits for HTML parsing
// async can interrupt HTML parsing

// requestAnimationFrame
// requestAnimationFrame is used for smooth animations.

function animate() {
  console.log("Animating");
  requestAnimationFrame(animate);
}

// requestAnimationFrame(animate);
// Why use it instead of setInterval?
// Because browser optimizes it for repaint cycle.

// Benefits:
// Smoother animations
// Better performance
// Pauses in inactive tabs
// Syncs with screen refresh rate
// Usually around 60 FPS.

// Intersection Observer
// Intersection Observer tells when an element enters or leaves viewport.

// Useful for:
// Lazy loading images
// Infinite scroll
// Triggering animations
// Tracking visible sections

// Important:
// Better than scroll event because browser optimizes it.

// Garbage Collection
// Garbage collection means JavaScript automatically removes unused memory.
let user1 = {
  name: "Arun",
};

user = null;

// Now object has no reference.
// So garbage collector can remove it.

// Important rule:
// If something still has reference, it cannot be garbage collected.

// Even if obj = null, object still exists because ref points to it.

// Memory Leaks
// Memory leak means memory is no longer needed but still cannot be removed.

// Common causes:
// Unremoved event listeners
// Closures holding large data
// setInterval not cleared
// Detached DOM nodes
// Global variables
// Large caches

// Prevent Memory Leaks
// button.removeEventListener(...);
// clearInterval(timer);
// obj = null;

// WeakMap
// WeakMap is like Map but keys must be objects.

// Important:
// If key object is garbage collected, entry is automatically removed.

const weakMap = new WeakMap();

let user3 = {
  name: "Arun",
};

weakMap.set(user, "Developer");

// if user3=null
// weakMap is automatically garbage collected
// Why?
// Because WeakMap does not strongly hold object reference.

// Use cases:
// Private data
// Cache tied to object lifecycle
// Avoid memory leaks

// FAANG-Level Things You Must Know
// Difference between LocalStorage, SessionStorage, Cookies
// Why cookies are used for auth
// Why LocalStorage is unsafe for sensitive tokens
// Why CORS happens only in browser
// Difference between defer and async
// Why requestAnimationFrame is better than setInterval for animation
// Why Intersection Observer is better than scroll listener
// How garbage collection works with references
// Common memory leak patterns
// Why WeakMap helps avoid memory leaks
// Why WeakMap keys must be objects
// Why WeakMap is not iterable
