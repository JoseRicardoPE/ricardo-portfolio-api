# Media Storage Architecture

## 1. Overview

Ricardo Portfolio uses **Cloudinary** as its media storage provider.

The application follows a polyrepo architecture, with an Angular frontend and a Node.js, Express, and TypeScript REST API maintained in separate repositories.

Media files are stored outside MongoDB. The database stores references and metadata required to associate media resources with portfolio content.

## 2. Objectives

The media storage architecture aims to:

- Centralize media management through the Admin application.
- Avoid storing image binaries in MongoDB.
- Support project thumbnails and case study images.
- Provide optimized images for responsive interfaces.
- Maintain a clear separation between media storage, business logic, and presentation.
- Support secure media operations through the backend API.

## 3. Technology Decisions

| Component | Technology |
|---|---|
| Public frontend | Angular |
| Admin frontend | Angular |
| Backend API | Node.js, Express, TypeScript |
| Database | MongoDB with Mongoose |
| Media storage | Cloudinary |
| API communication | HTTP / REST |

**Cloudinary** was selected over Amazon S3 because its built-in image transformations and optimization capabilities better match the project's current requirements and reduce the need for additional image-processing infrastructure.

## 4. Responsibilities

### Angular Admin

The Admin application will provide authenticated interfaces to:

- Upload images.
- Replace existing images.
- Delete images.
- Associate images with projects and case studies.
- Preview and manage existing media resources.

### Backend API

The Express API will be responsible for:

- Authenticating and authorizing media management operations.
- Validating uploaded files.
- Integrating with Cloudinary.
- Managing media references and metadata.
- Maintaining associations between media resources and portfolio content.
- Handling errors during media operations.

### Cloudinary

Cloudinary will be responsible for:

- Storing image files.
- Providing public delivery URLs for approved media.
- Supporting image transformations and optimization.
- Managing stored media resources through its API.

### MongoDB

MongoDB will store media references and metadata, not image binaries.

Depending on the requirements of the Media module, persisted information may include:

- Cloudinary resource identifier (`public_id`).
- Image delivery URL.
- Associated project or case study.
- Relevant media metadata.

The final Media schema will be defined during the implementation of the corresponding module.

### Public Portfolio

The public Angular application will:

- Retrieve media references through the REST API.
- Render images using the URLs provided by the backend.
- Display responsive and optimized media resources.

The public application will not upload, replace, or delete media.

## 5. Media Upload Workflow

The planned upload workflow is:

1. An authenticated administrator selects an image.
2. Angular sends the upload request to the Express API.
3. The API validates authorization and file requirements.
4. The API uploads the image to Cloudinary.
5. Cloudinary returns the resource identifier and delivery URL.
6. The API persists the required references and metadata in MongoDB.
7. The Admin receives the operation result.

## 6. Media Replacement and Deletion

Media replacement and deletion will be managed exclusively through authenticated Admin operations.

The backend must coordinate changes between Cloudinary and MongoDB to avoid broken references and unnecessary stored resources.

The exact replacement, deletion, and failure-recovery strategies will be defined during Media module implementation.

## 7. Security Requirements

The Media module must enforce:

- Authentication and authorization for management operations.
- Server-side validation of allowed file formats and file sizes.
- Secure storage of Cloudinary credentials.
- Appropriate restrictions on upload operations.
- Error handling without exposing sensitive configuration.

Cloudinary API credentials must never be exposed in the public Angular application.

## 8. Project Integration

The existing Projects API includes a `thumbnail` field containing a media URL.

Example:

```json
{
  "title": "Kaboom Bogotá",
  "slug": "kaboom-bogota",
  "thumbnail": "https://res.cloudinary.com/example/image/upload/kaboom-bogota.webp"
}
```

The URL above is illustrative and is not an existing uploaded resource.

The public frontend maps the field to the ProjectCard component:

```html
<app-project-card
    [imageSrc]="project.thumbnail"
    [imageAlt]="project.title"
></app-project-card>
```

The frontend is not responsible for uploading or storing the image.

## 9. Implementation Scope

### Current Scope — Public Portfolio

- Define and document the media storage architecture.
- Configure Cloudinary for initial project images.
- Store valid image URLs in existing project records.
- Validate image rendering in the public portfolio.

### Future Scope — Admin and Media Module

- Implement authenticated media upload operations.
- Implement image replacement and deletion.
- Define media persistence schemas and API contracts.
- Integrate media management with Projects and Case Studies.
- Implement the Admin media management interface.
- Add security, validation, and automated tests.

## 10. Architecture Principles

- Media binaries are not stored in MongoDB.
- The backend owns media management operations.
- Cloudinary provides media storage and delivery.
- MongoDB stores media references and metadata.
- The public frontend only consumes media.
- The Admin controls media management.
- The frontend never accesses MongoDB directly.
- The frontend and backend maintain independent deployment lifecycles.

## 11. Status

**Architecture decision:** Approved.

**Media provider:** Cloudinary.

**Implementation status:** Pending.

Initial Cloudinary configuration and project thumbnail validation will be performed during public portfolio development.

Full media management functionality will be implemented during the corresponding Admin and Media development work.