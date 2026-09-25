# Frontend and API Repository Separation

The Ricardo Portfolio is organized using a polyrepo strategy, with the frontend and backend maintained in independent Git repositories.

## Repositories

### Frontend

Repository: `ricardo-portfolio`

Responsibilities:

- Angular web application.
- Public portfolio user interface.
- Admin user interface.
- Design System implementation.
- Client-side state and interactions.
- Communication with the REST API.
- SSR, SEO and frontend accessibility.
- Frontend testing and deployment.

### Backend

Repository: `ricardo-portfolio-api`

Responsibilities:

- REST API built with Node.js, Express and TypeScript.
- Business logic.
- MongoDB persistence through Mongoose.
- Authentication and authorization.
- Projects and case studies management.
- Technologies and media management.
- Contact functionality.
- API validation, security and error handling.
- Backend testing and deployment.

## Communication

The frontend and backend are independent applications.

The Angular application communicates with the backend through HTTP requests to the REST API.

The frontend does not access MongoDB directly.

```
Angular Frontend
       |
       | HTTP / REST
       v
Node.js + Express API
       |
       | Mongoose
       v
    MongoDB
```

## Independent Lifecycle

Each repository has its own:

- Git history.
- Branches and Pull Requests.
- Dependencies.
- Build process.
- Environment configuration.
- Testing strategy.
- CI/CD pipeline.
- Deployment lifecycle.

This separation allows the frontend and API to evolve and be deployed independently while remaining part of the same Ricardo Portfolio product.

