# Next.js Dashboard App

A modern dashboard application built with [Next.js](https://nextjs.org/) App Router, TypeScript, Tailwind CSS, and PostgreSQL.

## Try it out
[Next.js Dashboard App] (https://nextjs-dashboard-rust-two-88.vercel.app/)

Now, try it out. You should be able to log in and out of your application using the following credentials:
``` 
Email: user@nextmail.com
Password: 123456
```



## Features

- User authentication
- Customer and invoice management
- Responsive UI with skeleton loading states
- Data seeding for development
- Modern component-based architecture

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- [pnpm](https://pnpm.io/) or npm/yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/nextjs-dashboard.git
   cd nextjs-dashboard
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```   
3. Copy .env.example to .env and update environment variables:
    ```sh
    POSTGRES_URL=your_postgres_connection_string
    ```

4. Run the development server:
    ```sh
    pnpm dev
    ```

5. (Optional) Seed the database:
    Visit /seed route in your browser to populate the database with sample data.

## Project Structure

```/app``` - Application routes, components, and UI  
```/app/lib``` - Data models, actions, and placeholder data  
```/app/ui``` - UI components and skeletons  
```/public``` - Static assets  
```/styles``` - Global and component styles  

## Scripts

```pnpm dev``` - Start the development server  
```pnpm build``` - Build for production  
```pnpm start``` - Start the production server  

## License
This project is licensed under the MIT License. See [LICENSE](/LICENSE) for details.
