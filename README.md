# thegreatfrontenders.github.io
Practicing React with One Piece and likely other things 


## 📘 JavaScript Study Guide: Reimplementing Array Methods Using the One Piece API

---

### 🔰 Overview

This guide is designed to help you reinforce core JavaScript skills by reimplementing commonly used array methods using real-world data from the [One Piece API](https://api.api-onepiece.com/v2/characters/en). You'll also get practice with async/await and fetch calls.

---

### 1. 🧭 Goal

- Recreate foundational JavaScript methods (`forEach`, `map`, `filter`, `reduce`, etc.) from scratch.
- Use character data from the One Piece API to test your implementations.
- Strengthen your mental model for async operations and working with real API data.

---

### 2. 🌊 Fetching the Data

**Task**:

- Write a function to fetch character data from the One Piece API.
- Handle loading, success, and error states.
- Store the data in a usable array format for testing your custom methods.

API Endpoint & Documentation:

```
https://www.freepublicapis.com/one-piece-api
https://api.api-onepiece.com/v2/characters/en
```

---

### 3. 🔁 Reimplement JavaScript Array Methods

> ❗ Do not use the built-in versions (e.g. Array.prototype.map) when writing your custom methods.
> 

### `myForEach`

- Should loop over each character.
- Should invoke a callback with each item, its index, and the full array.

---

### `myMap`

- Should transform each character into a new value (e.g. just their names or aliases).
- Return a new array.

---

### `myFilter`

- Should return a subset of characters (e.g. only those from the Straw Hat Pirates).

---

### `myReduce`

- Should reduce all character data into a single value (e.g. a count of characters by affiliation).

---

### (Bonus) `myFind`, `mySome`, `myEvery`

- Challenge yourself to create additional versions of these based on real use cases from the API response.

---

### 4. 🧪 Apply Your Methods to One Piece Data

**Challenge Ideas**:

- Use `myMap` to create an array of all character names.
- Use `myFilter` to find all characters affiliated with “Marine”.
- Use `myReduce` to tally how many characters exist per occupation.
- Use `myForEach` to print character names and bounty values to the console.

---

### 5. 🧠 Reflection

After implementing each method:

- What edge cases did you need to handle?
- How does your method compare to the native one?
- What do you now better understand about how JavaScript handles iteration and callbacks?

# Stories: 

- as a user I can see information about my favorite one piece characters 
- as a user I can play a game to guess the devil fruit of a random character 
- as a user I can .....