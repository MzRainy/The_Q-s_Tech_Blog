# The_Q-s_Tech_Blog

## Technologies Used
![GitHub top language](https://img.shields.io/github/languages/top/eSTee3/E-Commerce-Back-End?color=green&logo=github&logoColor=green)
![GitHub language count](https://img.shields.io/github/languages/count/eSTee3/E-Commerce-Back-End?color=green&logo=github&logoColor=green)

## Coding Badges
![alt text](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![alt text](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![alt text](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![alt text](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![alt text](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![alt text](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

![alt text](https://img.shields.io/badge/bcrypt-package-red)
![alt text](https://img.shields.io/badge/dotenv-package-red)
![alt text](https://img.shields.io/badge/Connect_Session_Sequelize-package-red)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)
- [Questions](#questions)

## Installation

1. Download or clone this repo to your local machine
2. Create a `.env` file in the root of the directory 
 - Copy/paste the following code into the .env file you created, changing the password to be your MySQL root password:
 ```
  DB_NAME = 'tech_blog_db'
  DB_USER = 'root'
  DB_PW = 'password'
 ```
3. Update the `'password'`  to your MySQL root password
4. Launch a terminal from the root of the same folder
5. Log into MySQL by entering `mysql -u root -p`, followed by entering your password
6. Enter `source db/schema.sql` to source the Database to your MySQL instance
7. Enter `use tech_blog_db` to change the in-use Database to "ecommerce_db"
8. Enter `exit` to go back to the standard terminal prompt
9. Enter `npm install` to install all required packages and wait for them to complete
10. Enter `npm start` to initialize and launch the server.
11. Navigate to [http://localhost:3001](http://localhost:3001) in your internet browser of choice and enjoy!

## usage

A Blog site where fellow developers can blog about projects, life as a developers and continued education. A casual resource for both front and backend developers.

## Demo



## License

MIT License

Copyright (c) 2023 Rainy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

Check out my [GitHub](https://github.com/MzRainy/The_Q-s_Tech_Blog.git).
 Any questions regarding this project can be sent to IQ@gmail.com.