 //To show in webpage//

 1. Delete src folder and indexedDB.html from default project folder

 2. Make index.html file in project folder

 3. inside body of index.html make an id, root

   <body>
      <div id="root"></div>
   </body>

4. make a main.jsx file in project folder

5. inside body of index.html add, "<script src="main.jsx" type="module"></script>", the full code becomes,

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <div id="root"></div>
    <script src="main.jsx" type="module"></script>
</body>
</html>



6. make a folder, src, inside project folder

7. make a file, App.jsx inside src folder

8. Make RFCE in App.jsx

9. Type anything inside div, to be displayed in Webpage

10. In main.jsx import the following

      import React from "react";
      import ReactDOM from "react-dom/client";
      import { BrowserRouter } from "react-router-dom";
      import App from "./src/App";


      ReactDOM.createRoot(document.getElementById("root")).render(

         <BrowserRouter>
            <React.StrictMode>
                  <App /> 
            </React.StrictMode>
         </BrowserRouter>

      );



11. install sass using the following command in terminal

   path> npm i sass

12. install react-router-dom

      path> npm i react-router-dom

13. run the server

      path> npm run dev

      //and open the host//