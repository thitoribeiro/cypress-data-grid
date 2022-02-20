# cypress-data-grid

#Starting the Jenkins CLI
1-Execute the command "java -jar jenkins.war -httpPort=8080 --enable-future-java" in your terminal;

2-Access "http://localhost:8080/" in your browser;

3-Username: jenkins;

4-password: pass123;


#Running tests by Jenkins 

1-Choose the project;

2-Click in "Build with parameters" (Construir com parâmetros);

3-Choose the script option that you want;
  Example: "cy:prod";

4-Click in build number;

5-Click in "Console output" (Saída do console);

6-If in step 3 you chose the option "cy:run-dashboard:dev" or
"cy:run-dashboard:prod", use this link to access the Cypress Dashboard Cloud "https://dashboard.cypress.io/invitation/f72a3230-3329-46b4-be3f-bd1893815765" or access the link sent for your email address;


#Running Cypress tests at the terminal

yarn cypress run


#Running Cypress tests at the browser

yarn cypress open




