---
title: Dashboard
sidebar_position: 2
---

# Dashboard

The Dashboard provides a comprehensive overview of key activities, statistics, and quick access to important features within the application. It is designed to help users monitor facility operations, appointments, patient activity, and more—all in one place.

## Key Features

### 1. Greeting & Overview

- A personalized greeting welcomes the user and sets the context for the day.

### 2. Statistics Cards

- **Facilities**: Total number of health facilities.
- **Vaccines**: Total number of vaccines managed.
- **Supplements**: Total number of supplements tracked.
- Each card displays the current value and a trend indicator (percentage increase/decrease from the previous month).

### 3. Immunization Calendar

- Visual calendar showing scheduled immunization appointments.
- Clickable dates reveal appointments for that day.

### 4. Today's Appointments

- List of all appointments scheduled for the current day.
- Quick access to add new appointments.

### 5. Employee Structure (for Human Resource Managers)

- Visual breakdown of employee roles and structure within the facility.

### 6. Project Kanban Board (for Human Resource Managers)

- Kanban board for tracking project tasks and progress.

### 7. Messages

- Integrated messaging panel for communication.

### 8. Recent Patients

- Quick view of recently active patients, including:
  - Name, age, gender, blood group
  - Allergies
  - Upcoming vaccines
  - Last visit and next appointment dates
  - Status (Missed, Completed, Due)

### 9. Vaccination Overview (for Super Administrators)

- Visual analytics of vaccination data and facility distribution.

### 10. Resource Hub (for Super Administrators)

- Access to shared resources and documents.

## Role-Based Sections

- **Super Administrators** see: Statistics, Vaccination Overview, Resource Hub.
- **Practitioners** see: Immunization Calendar, Today's Appointments, Messages, Recent Patients.
- **Human Resource Managers** see: Employee Structure and Project Kanban Board.

## Data & Updates

- All statistics and lists are dynamically fetched from the backend.
- Trend indicators compare current stats to the previous month.
- Most sections update automatically as new data becomes available.

---

**Tip:** The dashboard layout and available sections may change depending on your user role.

## Role-Based Layout (Deep Dive)

The application uses a **role-based layout system** to provide a tailored user experience for different types of users. This system ensures that each user only sees the navigation, features, and data relevant to their role, improving usability, security, and workflow efficiency.

### How Role-Based Layout Works

#### 1. Role Detection

- **User roles** are assigned during authentication and stored in browser cookies.
- The key roles in the system include:
  - `SUPER_ADMINISTRATOR`
  - `PRACTITIONER`
  - `HUMAN_RESOURCE_MANAGER`
- The application reads the user's roles from cookies on every page load and after login.

#### 2. Dynamic Navigation Rendering

- The main layout component (`ApplicationLayout`) constructs the sidebar navigation (`nav`) based on the user's roles.
- Each role is mapped to a specific set of navigation items:
  - **SUPER_ADMINISTRATOR**: Access to Dashboard, Facilities, Vaccines, Supplements, etc.
  - **PRACTITIONER**: Access to Dashboard, Patients, Appointments, Bookings, Walkins, etc.
  - **HUMAN_RESOURCE_MANAGER**: Access to Dashboard, Practitioners, and HR-specific features.
- The navigation is built at runtime, so users only see links relevant to their permissions.

#### 3. Conditional Page Content

- Within each page (e.g., Dashboard), the visible sections and widgets are determined by the user's role.
- For example, the dashboard uses a function (`getDashboardSectionsForRole`) to decide which cards, analytics, and tools to show:
  - **SUPER_ADMINISTRATOR**: Sees statistics, vaccination overview, and resource hub.
  - **PRACTITIONER**: Sees immunization calendar, today's appointments, messages, and recent patients.
  - **HUMAN_RESOURCE_MANAGER**: Sees employee structure and project Kanban board.
- This ensures that even if a user navigates directly to a URL, they will only see content allowed for their role.

#### 4. Route Protection

- The app uses a `PrivateRoute` component to restrict access to certain routes based on user roles.
- If a user tries to access a page outside their permissions, they are redirected or denied access.

#### 5. Role Assignment and Updates

- Roles are set when a user logs in and are updated in cookies.
- The layout and available features update immediately if the user's role changes (e.g., after re-login).

### Example: How It Looks in Code

```tsx
// Pseudocode for navigation setup
if (roles.includes('SUPER_ADMINISTRATOR')) {
  nav = [Dashboard, Facilities, Vaccines, Supplements];
} else if (roles.includes('PRACTITIONER')) {
  nav = [Dashboard, Patients, Appointments, Bookings, Walkins];
} else if (roles.includes('HUMAN_RESOURCE_MANAGER')) {
  nav = [Dashboard, Practitioners];
}
```

```tsx
// Pseudocode for dashboard section rendering
const dashboardSections = getDashboardSectionsForRole(userRole);
if (dashboardSections.includes('stats_cards')) {
  // Render statistics cards
}
if (dashboardSections.includes('immunization_calendar')) {
  // Render immunization calendar
}
```

### Benefits of Role-Based Layout

- **Security**: Users cannot access or even see features outside their role.
- **Clarity**: Reduces clutter and confusion by hiding irrelevant options.
- **Scalability**: New roles and features can be added with minimal changes.
- **User Experience**: Each user gets a focused interface tailored to their needs.

---

**Note:** The role-based layout is enforced both in the navigation and in the content of each page, providing a robust and flexible permission system.
