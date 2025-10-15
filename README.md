# Pomocnik budowlany - Building Helper

This project is being developed to help manage the construction of a house. It serves as a personal guide and logbook at every stage of the build. In addition to features like a construction diary, task lists, and material calculators, it will also retrieve data like the current prices of raw materials. The application's goal is to store full information about the construction process, track progress, manage the sequence of work, and much more.

## Key Features

* **📋 Construction Diary**: Add daily entries, notes, progress photos, and store invoices and documents in one place.
* **✅ Task List**: Simple task management to track the schedule and sequence of work.
* **📐 Building Calculators**: Tools to quickly estimate the amount of materials needed.
* ** PLN Material Prices**: A module to track indicative prices of popular construction materials.
* **✍️ Blog**: A knowledge base with articles and tips for home builders.

## Tech Stack

* **Frontend Framework**: [Ionic](https://ionicframework.com/) + [Angular](https://angular.io/)
* **Backend (BaaS)**: [Supabase](https://supabase.io/)
  * **Database**: PostgreSQL
  * **Authentication**: Supabase Auth
  * **File Storage**: Supabase Storage
* **Programming Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get the project up and running on your local machine, follow these steps.

### Prerequisites

Ensure you have the following tools installed:
* [Node.js](https://nodejs.org/) (LTS version)
* [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`
* [Ionic CLI](https://ionicframework.com/docs/cli): `npm install -g @ionic/cli`

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ddamian97/pomocnik-budowlany.git](https://github.com/ddamian97/pomocnik-budowlany.git)
    cd pomocnik-budowlany
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Supabase Environment:**
    This project uses Supabase as its backend. You need to provide your project's API keys.
  * Create a new project at [supabase.com](https://supabase.com).
  * In your Supabase project dashboard, navigate to `Settings` -> `API` to find your project `URL` and the public `anon key`.
  * In the project's root directory, create a file named `src/environments/environment.ts` and add your credentials. **This file should be added to `.gitignore` to keep your keys private.**

    ```typescript
    // src/environments/environment.ts
    export const environment = {
      production: false,
      supabaseUrl: 'YOUR_SUPABASE_PROJECT_URL',
      supabaseKey: 'YOUR_SUPABASE_ANON_KEY'
    };
    ```

4.  **Run the application:**
    Use the `ionic serve` command to start the development server. The `--external` flag makes the app accessible on your local network, which is useful for testing on a physical device.
    ```bash
    ionic serve --external
    ```
    The application will be available at `http://localhost:8100`.

## Author

This project was created by and is maintained by **Damian Dudek**.

## Copyright and License

Copyright 2024 Damian Dudek.
