# Pinterest Clone: A Modern Web Development Showcase

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Project Overview

This Pinterest clone is a comprehensive demonstration of my expertise in modern web development practices and software engineering principles. While not all features are fully implemented, the project architecture and planning reflect industry best practices for building scalable, maintainable, and performant web applications.

### Find me on:

- [Medium](https://medium.com/@colinsidberry) - Architecture & Design Thoughts

- [LinkedIn](https://www.linkedin.com/in/colin-sidberry/) - About Me

---

## Technical Stack

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Backend**: Firebase (Auth, Firestore, Storage)
- **State Management**: React Context API, Custom Hooks
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel
---
## Roadmap and Scalability Considerations

### Current Features
- [x] User Authentication, Authorization, Route Protection 
- [x] Responsive Design Implementation
- [x] User persistence on login
- [x] Basic Pin Viewing
- [x] Responsive Layout

### Upcoming Features and Scalability Plans

1. **Enhanced Content Discovery**
   - Implement AI-powered recommendation engine using TensorFlow.js
   - Develop sophisticated search algorithm with Elasticsearch
   - Implement WebSocket connections for live updates and notifications

2. **User Interface Improvements**
   - Create Pin Details view
   - Develop Boards View under profile page
   - Implement code splitting and lazy loading for improved initial load times
   - Utilize service workers for offline capabilities and faster subsequent loads
   - Design and develop mobile app version

3. **Backend and Data Management**
   - Migrate to Firestore for content storage instead of public folder
   - Design and implement microservices architecture for increased scalability
   - Improve logging with centralized logger
   - Clean up components to better align with SRP

4. **Performance and Monitoring**
   - Integrate OpenTelemetry for comprehensive application monitoring
   - Implement performance optimizations for handling increased user load

5. **Testing and CI/CD Enhancements**
   - Add comprehensive test suite (unit, integration, and end-to-end tests)
   - Integrate automated testing into the existing Vercel deployment pipeline
   - Set up staging environments for pre-production testing
---
## Getting Started

1. Clone the repository

    ```bash 
    git clone https://github.com/your_username/pinterest-clone.git
   ```

2. Install dependencies

    ```bash
    npm install
   ```

3. Set up environment variables

    ```bash
     touch .env
   ```
   
   ```bash
    # .env
    # Google Authentication
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    
    # Next Authentication
    NEXTAUTH_SECRET=
    
    # Firebase Credentials
    FIREBASE_PROJECT_ID=
    FIREBASE_CLIENT_EMAIL=
    FIREBASE_PRIVATE_KEY=
    
    FIREBASE_API_KEY=
    FIREBASE_AUTH_DOMAIN=
    FIREBASE_STORAGE_BUCKET=
    FIREBASE_MESSAGING_SENDER_ID=
    FIREBASE_APP_ID=
    FIREBASE_MEASUREMENT_ID=
   ```

4. Run the development server
  
    ```bash
      npm run dev
    ```
---
# Legal Disclaimer

This project was developed independently for educational purposes and is not affiliated with, endorsed by, or connected to Pinterest, Inc. in any way. The use of any similar functionality, interface, or design elements is solely intended for learning and demonstration purposes.

This project is licensed under the MIT License. This means that you are free to use, modify, and distribute this code as long as the original author is credited, without implying any endorsement by Pinterest or other entities.

### Educational Purpose Only
This project was developed independently and is solely for educational purposes. It is not affiliated with, endorsed by, or associated with Pinterest, Inc. in any way. The use of any similar functionality, interface, or design elements is intended for learning and demonstration only, and does not imply any endorsement by Pinterest or other entities.

### MIT License
This project is licensed under the MIT License, allowing free use, modification, and distribution of the code, provided credit is given to the original author. This license is for the code itself and does not cover any third-party content, images, or trademarks used in this project.

### No Liability
The author(s) of this project assume no responsibility or liability for any damages or legal issues arising from the use, distribution, or modification of this code. By accessing or using this project, you agree to hold the author(s) harmless from any claims or losses resulting from such use.

### Trademark Disclaimer
All trademarks, logos, and brand names are the property of their respective owners. All company, product, and service names used in this project are for identification purposes only. Use of these names, trademarks, and brands does not imply endorsement.

### No Commercial Use
This project is not intended for commercial use or distribution. Any attempt to monetize or use this project for profit may infringe on third-party rights.

For reference, the official Pinterest website can be found at https://www.pinterest.com.