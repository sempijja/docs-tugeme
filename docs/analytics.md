---
title: Analytics
sidebar_position: 5
---

# Analytics

The Analytics module provides visual insights into key operational data, helping users and administrators make informed decisions. It includes interactive charts and maps for employee demographics, facility distribution, and vaccination trends.

---

## Employee Structure

### Purpose

Displays the gender distribution of employees (male/female) in the organization, giving a quick overview of workforce composition.

### Structure & Visualization

- Renders a donut (pie) chart showing the proportion of male and female employees.
- Shows the total number of employees in the center of the chart.
- Uses color coding: blue for male, pink for female.
- Includes a legend and count for each gender.

### Setup & Data

- Fetches employee counts by gender from the backend using `getEmployeeStructureCounts()`.
- Handles loading and error states gracefully.
- If no data is available, displays an empty state.

**API/Data Requirements:**
- The backend should provide an endpoint or service that returns the total, male, and female employee counts, e.g.:
  ```json
  {
    "total": 120,
    "male": 70,
    "female": 50
  }
  ```

---

## Facilities by Region

### Purpose

Visualizes the geographic distribution of health facilities across the country, helping identify regional coverage and gaps.

### Structure & Visualization

- Interactive map of the country (using GeoJSON data).
- Each region/district is shaded and displays a bubble proportional to the number of facilities.
- Hovering over a bubble shows the district name and facility count.
- Includes a legend for facility count ranges and a summary of total facilities and regions.
- Supports zoom and pan for detailed exploration.

### Setup & Data

- Fetches GeoJSON map data (`/ug.json`) and facility data from the backend.
- Uses D3.js for rendering the map and bubbles.
- Handles loading, error, and empty states.

**API/Data Requirements:**
- The backend should provide:
  - A GeoJSON file for the country map (district boundaries).
  - A list of facilities, each with a `district` property for mapping.
  - Example facility object:
    ```json
    {
      "id": "123",
      "name": "Health Center X",
      "district": "Kampala"
    }
    ```

---

## Vaccine by Numbers

### Purpose

Shows vaccination trends over time for different vaccines, enabling monitoring of immunization efforts and identifying patterns or gaps.

### Structure & Visualization

- Interactive line chart with one line per vaccine type.
- X-axis: Time (months, weeks, or days depending on filter).
- Y-axis: Number of vaccinations administered.
- Color-coded lines for each vaccine.
- Tooltip on hover shows exact numbers per vaccine and time period.
- Filter to switch between year, month, and week views.

### Setup & Data

- Fetches vaccine data from the backend (currently uses randomized data as a placeholder).
- Uses D3.js for rendering the chart.
- Handles loading, error, and empty states.

**API/Data Requirements:**
- The backend should provide, for each vaccine:
  - Name of the vaccine.
  - Aggregated counts per time period (month/week/day).
  - Example data structure:
    ```json
    [
      {
        "name": "BCG",
        "values": [
          { "month": "May", "value": 1200 },
          { "month": "June", "value": 1350 },
          ...
        ]
      },
      ...
    ]
    ```
- **To replace the current random data:**
  - Implement backend aggregation logic to return real vaccination counts per vaccine and time period.
  - Update the frontend to consume this real data instead of generating random numbers.

---

**Note:**
- All analytics components are designed to be responsive and handle missing or incomplete data gracefully.
- For best results, ensure backend APIs provide up-to-date and complete datasets for each analytic feature.
