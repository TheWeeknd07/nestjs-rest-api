# NestJS REST API Course - Project Readme

This project is a **CRUD REST API** built with **NestJS**, as taught in the "NestJS Course for Beginners" by Vladimir. The purpose of the project is to help beginners learn the fundamentals of building scalable and production-ready web applications with NestJS and TypeScript.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete resources.
- **Authentication**: Implements user authentication using JSON Web Tokens (JWT).
- **Database Integration**: Uses PostgreSQL as a relational database, managed with Prisma ORM.
- **Validation**: Includes request validation using NestJS Pipes.
- **Testing**: Covers unit testing, integration testing, and end-to-end testing.
- **Docker Support**: Configured with Docker Compose for easy setup and deployment.
- **Clean Architecture**: Modular design for maintainability and scalability.

## Technologies Used

- **NestJS**: Framework for building Node.js applications.
- **TypeScript**: Strongly-typed JavaScript for safer and more reliable code.
- **PostgreSQL**: Relational database management system.
- **Prisma ORM**: Modern ORM for database operations.
- **JWT**: Secure authentication and session management.
- **Insomnia/Postman**: HTTP client for testing APIs.
- **Docker**: Containerization platform for deploying the application.

## Project Structure

```plaintext
src/
├── auth/          # Authentication module
├── users/         # User module
├── prisma/        # Prisma service and schema
├── main.ts        # Application entry point
├── app.module.ts  # Root application module
```

## Prerequisites

- Node.js (v14+)
- Yarn or npm
- Docker
- PostgreSQL

## Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd nestjs-rest-api
```

### 2. Install dependencies
```bash
yarn install
# or
npm install
```

### 3. Set up environment variables
Create a `.env` file and define the necessary configuration variables:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/database
JWT_SECRET=your_jwt_secret
```

### 4. Start the database
Using Docker Compose:
```bash
yarn db:start
# or
npm run db:start
```

### 5. Run the application
```bash
yarn start:dev
# or
npm run start:dev
```

### 6. Test the API
- Use **Insomnia** or **Postman** to send HTTP requests.
- API Base URL: `http://localhost:3000`

## Scripts

- **Start Development Server**: `yarn start:dev` or `npm run start:dev`
- **Restart Database**: `yarn db:restart` or `npm run db:restart`
- **Run Tests**: `yarn test` or `npm test`

## API Endpoints

### Authentication
- **POST /auth/signup**: Create a new user.
- **POST /auth/signin**: Authenticate a user and return a JWT.

### Users
- **GET /users/me**: Get current user information.

## Testing

- **Unit Tests**: Tests individual modules and services.
- **Integration Tests**: Tests interactions between multiple modules.
- **End-to-End Tests**: Simulates real-world API usage scenarios.

Run tests:
```bash
yarn test
# or
npm test
```

## Contribution

Feel free to fork the repository and submit pull requests. For significant changes, please open an issue to discuss your ideas first.

## Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Docker Documentation](https://docs.docker.com/)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Happy coding! 😊
