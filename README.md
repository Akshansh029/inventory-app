# Inventory Management System

**Inventory Management System**, a full-stack web application designed to manage inventory seamlessly. This project leverages modern technologies and AWS services for efficient performance, scalability, and robust management of resources.

![Dashboard](https://github.com/user-attachments/assets/319005d8-2ba8-4fa3-b5c9-d0da65a9915d)

---

## 🌟 Features

- **User-friendly Interface**: Built with Next.js and TailwindCSS for a responsive and intuitive UI.
- **Advanced State Management**: Powered by Redux Toolkit for efficient global state management.
- **Scalable Backend**: Developed with ExpressJS and Prisma, using PostgreSQL for a reliable and relational database.
- **Cloud Integration**:
  - **VPC**: For secure and isolated networking.
  - **EC2**: Hosting backend services.
  - **S3**: File storage and retrieval.
  - **RDS**: PostgreSQL database hosting.
  - **Amplify**: Frontend deployment.
  - **Billing Management System**: AWS tools for cost monitoring and control.
- **CRUD Operations**: Manage products, categories, and inventory details with ease.
- **Secure Authentication**: Built-in authentication for secure access.
- **Analytics Dashboard**: Track inventory levels, trends, and insights.
- **Deployment**: Fully deployed and maintained using AWS cloud infrastructure.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js**: React framework for server-side rendering and static site generation.
- **TailwindCSS**: For building fast and responsive UI.

### Backend
- **ExpressJS**: Lightweight framework for RESTful APIs.
- **Prisma**: ORM for database queries.
- **PostgreSQL**: Relational database for storing inventory data.

### State Management
- **Redux Toolkit**: For global state and data fetching.

### Deployment and Cloud Services
- **AWS VPC**: Secure virtual network for resources.
- **AWS EC2**: Scalable virtual server for backend hosting.
- **AWS S3**: Object storage for files and images.
- **AWS RDS**: PostgreSQL database hosting.
- **AWS Amplify**: Frontend hosting and CI/CD.
- **Billing Management**: Monitor and manage AWS usage.

---

![Dark mode](https://github.com/user-attachments/assets/14205052-3a06-4733-ab78-859872afdb8c)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v16+)
- PostgreSQL
- AWS CLI (configured with necessary permissions)
- Prisma CLI
- Git

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/inventory-management-system.git
   cd client
   ```
2. Install dependencies for both client and server:
    ```bash
    npm install
    ```
3. Configure .env file in both client and server:
    ```env
    DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
    PORT=YOUR_PORT
    ```
    ```env
    NEXT_PUBLIC_API_BASE_URL="http://localhost:YOUR_PORT"
    ```
4. Initialize the database in server:
    ```bash
    npx prisma migrate dev
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```
    
### Deployment Steps

1. Backend:
  - Deploy backend on AWS EC2:
    - Configure a security group for EC2.
    - Deploy using SSH and Node.js setup.
  - Host the PostgreSQL database on AWS RDS.

2. Frontend:
  - Deploy the Next.js application using AWS Amplify.
  - Ensure proper environment variables are configured in the Amplify build settings.

3. File Storage:
  - Use AWS S3 for file storage.
  - Configure S3 buckets with proper IAM policies.

4. Networking:
  - Utilize AWS VPC for isolating resources.

5. Cost Monitoring:
  - Set up AWS Billing and Cost Management alerts for monitoring usage.

### 📂 Project Structure
  ```plaintext
  client/
  ├── .next/
  ├── node_modules/
  ├── public/
  ├── src/
  ├── .env.local
  ├── .eslintrc.json
  ├── .gitignore
  ├── next-env.d.ts
  ├── next.config.mjs
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.mjs
  ├── README.md
  ├── tailwind.config.ts
  ├── tsconfig.json

  server/
  ├── assets/
  ├── dist/
  ├── node_modules/
  ├── prisma/
  ├── src/
  ├── .env
  ├── .gitignore
  ├── ecosystem.config.js
  ├── package-lock.json
  ├── package.json
  ├── tsconfig.json
  ```

### 📊 Analytics Dashboard
The dashboard provides insights into the following:

 - Inventory levels
 - Stock alerts
 - Users info
 - Expenses
 - Category-based performance

### 🧪 Testing
1. Run unit tests:
  ```bash
  npm test
  ```
2. Ensure integration with AWS services works as expected.

