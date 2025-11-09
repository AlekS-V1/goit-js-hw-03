const slugf = funcion (title) {

    const slug = title.toLowerCase().split(" ");

    return slug.join("_");
}


console.log(slugf("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugf("English for developer")); // "english-for-developer"
console.log(slugf("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugf("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
