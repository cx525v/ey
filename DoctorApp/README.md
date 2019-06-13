Prerequisites:

1. .net core 2.1

2. nodejs v10.15.3

3. VS 2017



Steps to run the application:

1. at Angular\Doctor folder, run command "npm run-script build" or "ng build" to copy compiled typescript code to wwwroot folder

2. at Angular\Doctor\src\app folder, change apiURL value at appsettings.json file, if neccessary

3. go to DoctorApp project folder

4. run command: "dotnet restore"

5. run command: "dotnet run"

6. browse http://localhost:5000
