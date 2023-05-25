# Boatapp

This is the boatapp - an app where you can sign up & log in to create, read, update and delete boats. 
If you just want to try it out: [Hosted Demo](https://boatapp.vercel.app/signup) [API docs](https://gentle-gorge-74872.herokuapp.com/swagger-ui/index.html)

### Tools
- Backend: Spring Boot (Version 3, Java 17)
  - PostgreSQL
  - Spring Data JPA
  - Project Lombok
  - Swagger / OpenAPI for API docs
  - JUnit for tests
- Frontend
  - React / NextJS 13 (with App Router)
  - TailwindCSS for styling

### Why NextJS and not basic React?
Even though the requirements suggested using ```create-react-app```, I found NextJS to be less complicated for a small MVP like this. The main reason for this were: 
- File-based routing: React doesn't come with a default routing solution, so most people use and install ```react-router```. NextJS on the other hand has a built-in powerful file-based routing system that also supports different layouts and IMO is way easier to set up in a short time. I also think the file-based system makes it easier for other people trying to understand what's going on in the code / what possible routes there are to take.
- Server components - NextJS makes it easy to use the new React server components to easily fetch data and implement loading states. 
- Easy setup - React is a bit of a pain to configure with babel, webpack, the router etc.; NextJS is quicker for smaller projects like this one.

### Main features
- Sign up / login flow: The application is **fully secured with JWT** (Spring Security). Users can sign up and log in with email + password, and then a JWT will be generated. They can only access their resources (see & delete their boats etc.)
- CRUD - users can create, see a list of, delete and update boats. 
- Minimal & responsive design - even though I'm not a designer, I tried to make it look neat.
- Skeleton loading & some basic animations. 

### Other things
- There are a few integration tests in ```com/manueljenni/boatapp/integration```. For a MVP, basic integration tests should be more than enough - of course I would add more detailed tests & test edge cases for a proper application. 
- You can also run this locally - see below: 

## How do I run it locally?
- Backend
  - Set the spring.datasource.url, spring.datasource.username, spring.datasource.password variables in ```application.properties```
  - Run the app locally with ```mvn spring-boot:run```
  - Run tests with ```mvn test``` **Warning: The tests are using the local database! They will delete your local data.**
  - API docs will be under ```/swagger-ui/index.html```
- Frontend
  - set the NEXT_PUBLIC_API_URL in ```.env``` to the base url of your local instance of the backend
  - run the app with ```npm run dev```
