const { faker } = require("@faker-js/faker");
const fs = require("fs");

// Set locale to use Vietnamese
faker.locale = "vi";

// Function to generate a random list of menus
const randomMenuList = (n) => {
    if (n <= 0) return [];
    const menuList = [];

    Array.from(new Array(n)).forEach(() => {
        const menu = {
            id: faker.datatype.uuid(), // Generate a unique ID
            nameEn: faker.commerce.department(), // Random English department name
            nameVn: faker.commerce.productName(), // Random Vietnamese product name
            image: faker.image.imageUrl(), // Random image URL
            location: faker.commerce.department(), // Random department for location
            type: Math.floor(Math.random() * 2) + 1, // Random type (1 or 2)
            typeLink: 2, // Static typeLink value
            link: faker.internet.url(), // Random URL
        };
        menuList.push(menu); // Add menu to the list
    });
    return menuList;
};

// IIFE
(() => {
    const db = { data: randomMenuList(5) }; // Bọc dữ liệu mảng trong một object
    // Write the db object to db.json
    fs.writeFileSync("db.json", JSON.stringify(db, null, 2)); // Synchronously write data to file
    console.log("Generate data successfully");
  })();
  