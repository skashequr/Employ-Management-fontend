#### Employ Management 


#### To see the website Employ Management 
# Development Site: https://employ-management-20d5c.web.app/


# Employ Management -  Users and Authentication

 Users should be able to toggle between Login and Registration view.
 The password  is less than 6 characters
- don't have a capital letter
- don't have a special character
- On the Login page, display errors when:
- The password doesn't match
- email doesn't match
  As you’ve guessed, the roles of the users of this website will be…
- Employee
- HR
- Admin
Make sure you create a collection named user or people in your database to keep track of
the role of the users. Also, you may need other fields such as
● bank_account_no
● salary
● designation
● photo
Use image upload for User’s photo (imgbb)

#### Dashboard:
#### For HR (Human Resource Executive) [Private] [HR only]
#### employee-list
This page will show all the employee information in a table. Use an appropriate package for
creating this table. In this table, each row will contain
- Name
- Email
- Verified
- Bank Account
- Salary
- Pay
- Details
● By default, each employee’s verified status will be false. In this verified column,
it will show a ❌ (cross) button indicating that the employee is not verified yet. The
HR can click this ❌button to toggle it to ✅ , indicate that the employee has been
verified. Or vice-versa. Also, don’t forget to toggle this status in DB too
Clicking the pay button will pop up a modal, In this modal, the salary of the employee
in the row will be already written, and two input fields for Month and Year. Clicking the
pay button will pay the employee that amount of money. HR can pay Verified
employees only. The unverified employees’ pay button will be disabled (won’t work if
clicked).
### Progress 
On this page, HR can see all the rows from all the employees on the /work-sheet page.
It’s an amalgamation of all the work submitted by employees. Now, he can filter the table
data by selecting the employee’s name from a drop-down. Select Month from a drop-down to
filter submitted work done in that month. If no employee name is selected, then simply show
all the employee’s submitted work for that month
#### For Employee [Private] [Employee Only]:
/payment-history
The monthly history of salary paid by HR will be shown in the table. This table will be sorted
by default. The earliest month's payment will be in the first row. The rest of the rows will have
payment info in the past months.
- Month
- Amount
- Transaction Id
You may use pagination or infinite scrolling if it has more than 5 rows.
/work-sheet
There will be a form and a table on this page. This form could fit in a single row horizontally.
The form will have the following fields
● Tasks (DropDown menu). The dropdown will have these options
○ Sales
○ Support
○ Content
○ Paper-work
○ (You may add more if you like)
● Hours Worked (numeric)
● Date (Use DatePicker component)
● Add / Submit button
Clicking the Add / Submit button will add the newest done work to the table at the start
(without reloading the page) and store the information in the DB as well.

#### For Admin [Private] [Admin only]
all-employee-list
Admin can see all the verified employees in a table. (including HRs)
- Name
- Designation
- Make HR
- Fire
Yes, you guessed it, Admin can fire an employee or HR. After Firing someone, he won’t be
able to log in using his account anymore. The Fire column will have a button or icon.
Clicking that button will pop up a modal for confirmation. After firing someone, the button or
icon will be replaced by the text “Fired”.

Admin can make an employee HR. After making an employee HR, he can visit the
HR-specific routes. And all the stuff he can do. But he won’t be able to access his routes as
an employee anymore. In the Make HR column, conditionally render a button or icon if the
row indicates an employee but not HR.

#### Contact Us
This page will have a dummy address of the company and a nice form, which takes the
email, and a message field. So that any visitor can send their opinions.
##### Make the payment operation using a Payment Gateway
# Frontend Frameworks and Libraries:
1. **React**: A popular JavaScript library for building user interfaces.
2. **@material-tailwind/react**: Provides ready-to-use UI components based on Tailwind CSS for building modern web applications.
3. **@reduxjs/toolkit**: A powerful toolset for managing state in React applications, including actions, reducers, and the Redux store.
4. **@tanstack/react-query**: A data-fetching library for React that simplifies asynchronous data fetching and caching.
5. **Recharts**: A composable charting library for building interactive charts in React applications.

### UI Components and Animation:
6. **@anatoliygatt/heart-switch**: Provides a customizable heart-shaped toggle switch component for user interaction.
7. **@smastrom/react-rating**: Allows users to rate items using customizable star rating components.
8. **framer-motion**: A library for creating fluid animations and interactive UI components in React applications.

### Data Management and Communication:
9. **axios**: A promise-based HTTP client for making asynchronous requests to APIs.
10. **firebase**: A platform for building web and mobile applications, providing various services like authentication, real-time database, and cloud storage.

### Additional Utilities and Enhancements:
11. **react-minimal-pie-chart**: Enables the creation of simple and lightweight pie charts in React applications.
12. **react-toastify**: Provides customizable toast notifications for displaying messages or alerts to users.
13. **react-router-dom**: A routing library for React that enables navigation and routing within the application.
14. **socket.io-client**: Allows real-time, bidirectional communication between web clients and servers using WebSockets.

### Styling and Animation:
15. **@emotion/react** and **@emotion/styled**: Provides CSS-in-JS solutions for styling React components with enhanced performance and developer experience.
16. **aos**: A library for animating elements as they scroll into view, enhancing the visual appeal of the web pages.

### Testing and Development:
17. **jest**: A testing framework for JavaScript code, used for writing and running unit tests in the project.
18. **eslint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, ensuring code consistency and best practices.
19. **babel**: A JavaScript compiler that transforms modern JavaScript code into backwards-compatible versions, ensuring compatibility across different browsers.
20. **vite**: A fast and modern build tool for front-end development, providing features like hot module replacement and optimized builds.

These packages collectively contribute to the functionality, user experience, styling, and development workflow of the "ecosmart-bins-client-side" web project.

# Run the project Process

## Guidelines

1. **Clone the Repository:** Clone the project repository to your local development environment using the following command:
   ```
   git clone https://github.com/skashequr/Employ-Management-fontend
   ```
2. **Run the command:** Open your termonal and run this command:
   ```
   npm i -f
   ```
   or
   ```
   yarn
   ```
3. **Run the project:** For run this project need to run this command
    ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```
Admin email: assingmenttestingadmin@gmail.com
Admin password: ?26b_6)Si}uKaZ-
Front-end Live Site Link:https://employ-management-20d5c.web.app/
Client Side Github Repository Link:
Server Side Github Repository Link:
<!-- ------------------DEVELOPED BY Sheikh Ashequr Rahman------------------- -->

Thanks again!


