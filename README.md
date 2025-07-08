# Healthcare Professional Network Visualization

![App Screenshot](https://res.cloudinary.com/melowsoft/image/upload/v1751983634/Screenshot_2025-07-08_at_16.05.20_cltoss.png)

## Overview

A React-based web application for visualizing professional networks among healthcare providers (HCPs). This interactive tool allows users to:

- Search and explore healthcare professionals
- View detailed profiles with education, experience, and metrics
- Visualize professional connections through an interactive network graph
- Filter and analyze relationships between providers

## Features

### 🎯 Core Functionality
- **Interactive Network Graph**: Force-directed graph visualization of HCP connections
- **Comprehensive Profiles**: Detailed view of provider information
- **Advanced Search**: Fuzzy search with dropdown results
- **Responsive Design**: Fully functional on desktop and mobile devices

### 📊 Profile Details
- Professional stats (peers, following)
- Patient metrics (served, success rate)
- Education history
- Publications and collaborations

## Technologies Used

### Frontend
- ![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
- ![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?logo=typescript)
- ![Styled Components](https://img.shields.io/badge/Styled_Components-5.3+-DB7093?logo=styled-components)
- ![React Force Graph](https://img.shields.io/badge/React_Force_Graph-2D-FF6B4A)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/melowsoft/ihng_chhallenge.git
   cd ihng_chhallenge

   Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open your browser to:

text
http://localhost:3000
Project Structure
text
src/
├── assets/            # Static assets
├── components/        # Reusable components
│   ├── App/           # Main application component
│   ├── Filter/        # Filter component
│   ├── Header/        # Header component
│   ├── NetworkGraph/  # Network visualization
│   ├── ProfileView/   # Profile detail view
│   ├── SearchPanel/   # Search functionality
│   └── Sidebar/       # Navigation sidebar
├── data/              # Mock data and generators
├── providers/         # Context providers
├── styles/            # Global styles and theme
├── types/             # TypeScript type definitions
└── utils/             # Utility functions