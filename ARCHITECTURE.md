# Smart Cemetery Navigation and Digital Plot Management System
## System Architecture Documentation

---

## 1. System Overview

This system is a GIS-enabled web application for managing cemetery plots, burial records, and providing navigation assistance through QR code integration. It follows a **three-tier architecture** with clear separation of concerns.

### 1.1 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        PRESENTATION LAYER                        │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    React Frontend (SPA)                      ││
│  │  • Authentication Pages  • Dashboard  • Map View             ││
│  │  • Burial Management     • Plot Management  • QR Generation  ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                              │ REST API (JSON)
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        APPLICATION LAYER                         │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                   Laravel Backend (API)                      ││
│  │  • AuthController      • BurialRecordController              ││
│  │  • PlotController      • QRCodeController                    ││
│  │  • Role-based Middleware                                     ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                              │ Eloquent ORM
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                          DATA LAYER                              │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                     MySQL Database                           ││
│  │  • users  • plots  • burial_records  • qr_codes              ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Database Schema

### 2.1 Entity Relationship Diagram

```
┌──────────────┐       ┌──────────────────┐       ┌──────────────┐
│    users     │       │  burial_records  │       │   qr_codes   │
├──────────────┤       ├──────────────────┤       ├──────────────┤
│ id (PK)      │       │ id (PK)          │◄──────│ id (PK)      │
│ name         │       │ plot_id (FK)     │       │ burial_id(FK)│
│ email        │       │ deceased_name    │       │ code (UUID)  │
│ password     │       │ birth_date       │       │ url          │
│ role         │       │ death_date       │       │ created_at   │
│ created_at   │       │ burial_date      │       └──────────────┘
│ updated_at   │       │ notes            │
└──────────────┘       │ photo_url        │
                       │ created_at       │
┌──────────────┐       │ updated_at       │
│    plots     │       └──────────────────┘
├──────────────┤              │
│ id (PK)      │◄─────────────┘
│ plot_number  │
│ section      │
│ row_number   │
│ column_number│
│ latitude     │
│ longitude    │
│ status       │
│ created_at   │
│ updated_at   │
└──────────────┘
```

### 2.2 Table Definitions

| Table | Purpose |
|-------|---------|
| `users` | Stores Admin and Staff credentials with role-based access |
| `plots` | Cemetery plot locations with GPS coordinates |
| `burial_records` | Deceased person information linked to plots |
| `qr_codes` | Generated QR codes linking to public grave profiles |

---

## 3. API Endpoint Specification

### 3.1 Authentication Endpoints

| Method | Endpoint | Purpose | Access |
|--------|----------|---------|--------|
| POST | `/api/login` | Authenticate user and return token | Public |
| POST | `/api/logout` | Invalidate user session | Auth |
| GET | `/api/user` | Get current authenticated user | Auth |

### 3.2 Plot Management Endpoints

| Method | Endpoint | Purpose | Access |
|--------|----------|---------|--------|
| GET | `/api/plots` | List all plots with pagination | Auth |
| POST | `/api/plots` | Create new plot | Admin |
| GET | `/api/plots/{id}` | Get single plot details | Auth |
| PUT | `/api/plots/{id}` | Update plot information | Admin/Staff |
| DELETE | `/api/plots/{id}` | Delete plot (soft delete) | Admin |
| GET | `/api/plots/available` | List available plots | Auth |

### 3.3 Burial Record Endpoints

| Method | Endpoint | Purpose | Access |
|--------|----------|---------|--------|
| GET | `/api/burial-records` | List all burial records | Auth |
| POST | `/api/burial-records` | Create new burial record | Admin/Staff |
| GET | `/api/burial-records/{id}` | Get burial record details | Auth |
| PUT | `/api/burial-records/{id}` | Update burial record | Admin/Staff |
| DELETE | `/api/burial-records/{id}` | Delete burial record | Admin |
| GET | `/api/burial-records/search` | Search burial records | Auth |

### 3.4 QR Code Endpoints

| Method | Endpoint | Purpose | Access |
|--------|----------|---------|--------|
| POST | `/api/qr-codes/generate/{burial_id}` | Generate QR for burial record | Auth |
| GET | `/api/qr-codes/{code}` | Get QR code details | Auth |

### 3.5 Public Endpoints

| Method | Endpoint | Purpose | Access |
|--------|----------|---------|--------|
| GET | `/api/public/grave/{code}` | Public grave profile view | Public |

### 3.6 Map Data Endpoints

| Method | Endpoint | Purpose | Access |
|--------|----------|---------|--------|
| GET | `/api/map/markers` | Get all grave markers for map | Auth |
| GET | `/api/map/marker/{plot_id}` | Get specific marker details | Auth |

---

## 4. React Frontend Structure

### 4.1 Component Hierarchy

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ProtectedRoute.jsx
│   ├── burial/
│   │   ├── BurialForm.jsx
│   │   ├── BurialList.jsx
│   │   └── BurialDetails.jsx
│   ├── plot/
│   │   ├── PlotForm.jsx
│   │   ├── PlotList.jsx
│   │   └── PlotDetails.jsx
│   ├── map/
│   │   ├── CemeteryMap.jsx
│   │   └── GraveMarker.jsx
│   └── qr/
│       ├── QRGenerator.jsx
│       └── QRDisplay.jsx
├── pages/
│   ├── LoginPage.jsx
│   ├── DashboardPage.jsx
│   ├── BurialRecordsPage.jsx
│   ├── PlotsPage.jsx
│   ├── MapPage.jsx
│   └── PublicGravePage.jsx
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── burialService.js
│   ├── plotService.js
│   └── qrService.js
├── context/
│   └── AuthContext.jsx
├── hooks/
│   ├── useAuth.js
│   └── useFetch.js
└── App.jsx
```

### 4.2 Page Descriptions

| Page | Purpose | Access Level |
|------|---------|--------------|
| LoginPage | User authentication | Public |
| DashboardPage | System overview with statistics | Admin/Staff |
| BurialRecordsPage | CRUD for burial records | Admin/Staff |
| PlotsPage | Manage cemetery plots | Admin/Staff |
| MapPage | Interactive cemetery map | Admin/Staff |
| PublicGravePage | Public-facing grave profile | Public |

---

## 5. Role-Based Access Control

### 5.1 Role Definitions

| Role | Permissions |
|------|-------------|
| **Admin** | Full system access, user management, all CRUD operations |
| **Staff** | View all, create/update burial records and plots |
| **Visitor** | Public grave profile access only (future mobile app) |

### 5.2 Middleware Implementation

```php
// Role checking middleware applied to routes
Route::middleware(['auth:sanctum', 'role:admin'])->group(...);
Route::middleware(['auth:sanctum', 'role:admin,staff'])->group(...);
```

---

## 6. Security Considerations

1. **Authentication**: Laravel Sanctum for API token management
2. **Authorization**: Role-based middleware on all protected routes
3. **Input Validation**: Form requests with validation rules
4. **CORS**: Configured for frontend domain only
5. **SQL Injection**: Prevented via Eloquent ORM

---

## 7. Future Enhancements

The following features are planned for future phases:

| Feature | Description | Priority |
|---------|-------------|----------|
| Mobile App | Visitor-facing React Native app with QR scanning | High |
| Payment Integration | Online payment for plot reservations | Medium |
| Notifications | Email/SMS notifications for record updates | Medium |
| Advanced Search | Full-text search with filters | Medium |
| Analytics Dashboard | Occupancy reports, revenue tracking | Low |
| Multi-cemetery Support | Manage multiple cemetery locations | Low |

---

## 8. Academic Methodology Alignment

This system design follows the **Rapid Application Development (RAD)** methodology:

1. **Requirements Planning**: Defined core MVP features
2. **User Design**: Component-based UI structure
3. **Construction**: Iterative development with working prototypes
4. **Cutover**: Deployment-ready architecture

The three-tier architecture ensures:
- **Maintainability**: Clear separation of concerns
- **Scalability**: Each layer can scale independently
- **Testability**: Components can be unit tested in isolation
- **Academic Clarity**: Easy to explain in thesis defense

---

*Document Version: 1.0*
*Last Updated: January 2026*
