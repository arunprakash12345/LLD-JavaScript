# LLD & Frontend Machine Coding in Vanilla JavaScript

This repository is a collection of UI components, interactive widgets, utility functions, and core JavaScript polyfills built completely from scratch using raw DOM manipulation, HTML, and CSS. 

The goal is to master low-level design (LLD), event-driven programming, and performance optimization patterns commonly tested in senior frontend interviews.

---

## What's Inside

### 1. UI Components
Vanilla implementations focusing on accessibility, clean DOM structure, and styling.
* **[Accordian](./Accordian%20)** - Collapsible panels with transition handling.
* **[Caruosel Component](./Caruosel%20Component)** - Image/content slider.
* **[Modal Component](./Modal%20Component)** - Overlay dialogs with keyboard accessibility (Escape key, focus traps).
* **[Nested Comment](./Nested%20Comment)** - Multi-level nested comment threads (like Reddit).
* **[OTP Component](./OTP%20Component)** - Auto-focus shifting numeric OTP verification input.
* **[Pagination Component](./Pagination%20Component)** - Dynamic page control logic.
* **[Progress bar](./Progress%20bar)** - Smooth animating and controllable progress indicator.
* **[Star Component](./Star%20Component)** - Interactive rating component with hover states.
* **[Tab Component](./Tab%20Component)** - Tabbed interfaces with active state toggles.
* **[Table Column](./Table%20Column)** - Dynamically customizable/interactive table columns.
* **[Timer Component](./Timer%20Component)** - Countdown timers with pause, reset, and start hooks.
* **[Toast Notification](./Toast%20Notification)** - Non-blocking overlay notifications with auto-dismiss options.
* **[Tooltip component](./Tooltip%20component)** - Contextual hover tooltips dynamically positioned.

### 2. Core JS Concepts & Polyfills
Writing standard Javascript methods manually to understand engines under the hood.
* **[Call apply bind](./Call%20apply%20bind)** - Custom `myCall`, `myApply`, and `myBind` implementations.
* **[Class and Constructor](./Class%20and%20Constructor)** - Deep dive into constructor functions, execution context, and instances.
* **[Prototype](./Prototype)** - Prototypal inheritance and chain lookup mechanics.
* **[Debounce Search](./Debounce%20Search) & [Type Head - debounce](./Type%20Head%20-%20debounce)** - Delaying expensive operations (like API calls) until user typing pauses.
* **[Throttle](./Throttle)** - Limiting execution rate of highly frequent events (like scroll or resize).

### 3. Advanced DOM & Interactions
More complex grid manipulation, virtual/asynchronous lists, and APIs.
* **[Chess Board - Bishop](./Chess%20Board%20-%20Bishop)** - Dynamic grid rendering and calculating/highlighting bishop diagonal movement paths on hover.
* **[Infinite Scroll](./Infinite%20Scroll)** - Asynchronously loading data on scroll using the Intersection Observer API.
* **[Typeahead - Online](./Typeahead%20-%20Online)** - Real-time suggestion bar using dynamic endpoints.

---

## Tech Stack
* **Logic:** Vanilla JavaScript (ES6+)
* **Structure:** HTML5 Semantic elements
* **Presentation:** CSS3 variables, transitions, and layouts (Flexbox / Grid)

## Getting Started
To run any of the components locally:
1. Clone this repository:
   ```bash
   git clone https://github.com/arunprakash12345/LLD-JavaScript.git
   ```
2. Navigate to the desired folder.
3. Open its `index.html` directly in the browser, or run a local development server:
   ```bash
   npx serve .
   ```
