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

#Running Cypress tests at the terminal
yarn cypress run

#Running Cypress tests at the browser
yarn cypress open




