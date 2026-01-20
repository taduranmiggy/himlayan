# Smart Cemetery Navigation and Digital Plot Management System

A web-based GIS-enabled system for managing cemetery plots, burial records, and providing navigation assistance through QR code integration.

## 🎯 Project Overview

This system supports three user roles:
- **Admin**: Full system access, user management, all CRUD operations
- **Staff**: View all, create/update burial records and plots  
- **Visitor**: Public grave profile access via QR code (future mobile app)

## 🏗️ System Architecture

```
┌────────────────────────────────────────────────────────────┐
│                    FRONTEND (React SPA)                    │
│  • Authentication   • Dashboard    • Cemetery Map          │
│  • Burial Records   • Plot Management   • QR Generation    │
└────────────────────────────────────────────────────────────┘
                            │ REST API
                            ▼
┌────────────────────────────────────────────────────────────┐
│                   BACKEND (Laravel API)                     │
│  • AuthController       • BurialRecordController           │
│  • PlotController       • QRCodeController                 │
│  • MapController        • Role-based Middleware            │
└────────────────────────────────────────────────────────────┘
                            │ Eloquent ORM
                            ▼
┌────────────────────────────────────────────────────────────┐
│                     DATABASE (MySQL)                        │
│     users  •  plots  •  burial_records  •  qr_codes        │
└────────────────────────────────────────────────────────────┘
```

## 📁 Project Structure

```
HIMLAYAN/
├── backend/                    # Laravel API
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/Api/
│   │   │   └── Middleware/
│   │   └── Models/
│   ├── config/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   └── routes/
│       └── api.php
│
├── frontend/                   # React SPA
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── burial/
│       │   ├── common/
│       │   ├── map/
│       │   ├── plot/
│       │   └── qr/
│       ├── context/
│       ├── hooks/
│       ├── pages/
│       └── services/
│
└── ARCHITECTURE.md             # Detailed documentation
```

## 🚀 Quick Start

### Prerequisites

- PHP 8.1+
- Composer
- Node.js 18+
- MySQL 8.0+
- npm or yarn

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env
# DB_DATABASE=cemetery_db
# DB_USERNAME=root
# DB_PASSWORD=your_password

# Create the database
mysql -u root -p -e "CREATE DATABASE cemetery_db"

# Run migrations
php artisan migrate

# Seed sample data
php artisan db:seed

# Start the development server
php artisan serve
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

## 🔐 Default Credentials

| Role  | Email               | Password    |
|-------|---------------------|-------------|
| Admin | admin@cemetery.com  | password123 |
| Staff | staff@cemetery.com  | password123 |

## 📡 API Endpoints

### Authentication
| Method | Endpoint      | Purpose                    |
|--------|---------------|----------------------------|
| POST   | /api/login    | User login                 |
| POST   | /api/logout   | User logout                |
| GET    | /api/user     | Get current user           |

### Plots
| Method | Endpoint              | Purpose                |
|--------|-----------------------|------------------------|
| GET    | /api/plots            | List all plots         |
| POST   | /api/plots            | Create plot (Admin)    |
| GET    | /api/plots/{id}       | Get plot details       |
| PUT    | /api/plots/{id}       | Update plot            |
| DELETE | /api/plots/{id}       | Delete plot (Admin)    |
| GET    | /api/plots/available  | Get available plots    |

### Burial Records
| Method | Endpoint                  | Purpose                    |
|--------|---------------------------|----------------------------|
| GET    | /api/burial-records       | List burial records        |
| POST   | /api/burial-records       | Create burial record       |
| GET    | /api/burial-records/{id}  | Get burial record          |
| PUT    | /api/burial-records/{id}  | Update burial record       |
| DELETE | /api/burial-records/{id}  | Delete burial record       |
| GET    | /api/burial-records/search| Search records             |

### QR Codes
| Method | Endpoint                       | Purpose              |
|--------|--------------------------------|----------------------|
| POST   | /api/qr-codes/generate/{id}    | Generate QR code     |
| GET    | /api/qr-codes/{code}           | Get QR code details  |
| POST   | /api/qr-codes/regenerate/{id}  | Regenerate QR code   |

### Map
| Method | Endpoint             | Purpose                |
|--------|----------------------|------------------------|
| GET    | /api/map/markers     | Get all map markers    |
| GET    | /api/map/marker/{id} | Get marker details     |
| GET    | /api/map/bounds      | Get map center/bounds  |

### Public
| Method | Endpoint                 | Purpose                    |
|--------|--------------------------|----------------------------|
| GET    | /api/public/grave/{code} | Public grave profile (QR)  |

## 📊 Database Schema

### users
| Column   | Type         | Description           |
|----------|--------------|------------------------|
| id       | BIGINT PK    | Auto-increment ID      |
| name     | VARCHAR(255) | User full name         |
| email    | VARCHAR(255) | Unique email           |
| password | VARCHAR(255) | Hashed password        |
| role     | ENUM         | admin, staff           |

### plots
| Column        | Type          | Description              |
|---------------|---------------|--------------------------|
| id            | BIGINT PK     | Auto-increment ID        |
| plot_number   | VARCHAR(255)  | Unique plot identifier   |
| section       | VARCHAR(50)   | Cemetery section         |
| row_number    | INT           | Row position             |
| column_number | INT           | Column position          |
| latitude      | DECIMAL(10,8) | GPS latitude             |
| longitude     | DECIMAL(11,8) | GPS longitude            |
| status        | ENUM          | available/occupied/etc   |

### burial_records
| Column        | Type         | Description              |
|---------------|--------------|--------------------------|
| id            | BIGINT PK    | Auto-increment ID        |
| plot_id       | BIGINT FK    | Reference to plots       |
| deceased_name | VARCHAR(255) | Name of deceased         |
| birth_date    | DATE         | Date of birth            |
| death_date    | DATE         | Date of death            |
| burial_date   | DATE         | Date of burial           |
| obituary      | TEXT         | Obituary/memorial text   |
| contact_name  | VARCHAR(255) | Contact person name      |

### qr_codes
| Column           | Type        | Description              |
|------------------|-------------|--------------------------|
| id               | BIGINT PK   | Auto-increment ID        |
| burial_record_id | BIGINT FK   | Reference to burial      |
| code             | UUID        | Unique QR identifier     |
| url              | VARCHAR     | Public profile URL       |
| is_active        | BOOLEAN     | QR code status           |

## 🗺️ Features

### ✅ Implemented (MVP)

1. **Authentication Module**
   - Login/logout for Admin and Staff
   - Role-based access control
   - Token-based authentication (Laravel Sanctum)

2. **Plot Management**
   - CRUD operations for cemetery plots
   - GPS coordinate storage
   - Status tracking (available/occupied/reserved/maintenance)

3. **Burial Record Management**
   - Complete CRUD operations
   - Link to plots
   - Contact information storage
   - Search functionality

4. **Cemetery Map**
   - Interactive map with Leaflet
   - Color-coded markers by status
   - Click markers to view details
   - Filter by status

5. **QR Code Integration**
   - Generate unique QR codes per burial
   - Public grave profile pages
   - Google Maps directions link

### 🔮 Future Enhancements

- Mobile app with QR scanning (React Native)
- Payment integration for plot reservations
- Email/SMS notifications
- Advanced search with filters
- Analytics dashboard
- Multi-cemetery support

## 🎓 Academic Methodology

This system follows **Rapid Application Development (RAD)**:

1. **Requirements Planning** - Core MVP features defined
2. **User Design** - Component-based UI architecture  
3. **Construction** - Iterative development approach
4. **Cutover** - Deployment-ready modular design

## 📝 License

MIT License - For academic and educational purposes.

---

*Smart Cemetery Navigation and Digital Plot Management System*  
*Thesis Prototype - January 2026*
