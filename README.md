
# Yamm

Yamm Dashboard is a web application designed to manage refund orders. The application features a navigation sidebar and a table displaying a list of refund orders. Each order record includes details such as ID, reason, store name, store logo, store URL, amount, active status, and decision. The table also includes actions for changing the order decision, toggling the record status, and navigating to an order page with detailed order items.

## Features

- Reusable table component with configurable columns, data types, and custom actions.
- Support for varying numbers of columns and data types.
- Immediate reflection of actions taken on the table without page reload.
- Notification toaster for actions taken.
- Paginated table data with a maximum of 15 records per page.
- Data fetching from a RESTful API with loading and error handling states.
- Mocked APIs using JSON Server or similar solution.


## Installation

Install yamm

```bash
  git clone https://github.com/ossamaabdein/yamm-task.git
  cd yamm-task
```

Run the project

```bash
  npm install
  npm start
``` 

Make sure you have json-server installed on your machine
If not, install it.

```bash
  npm i json-server
``` 
Run the json-server (I have already added its script in package.json)

```bash
  npm run json-server
``` 
## Usage/Examples

- Navigate to the application: http://localhost:3000
- Use the navigation sidebar to access different pages
- Interact with the table to perform actions (change decision, toggle status, navigate to order page)

