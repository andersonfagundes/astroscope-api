# 🚀AstroScope

<h3 align="center">Explore and visualize NASA space data through an interactive web application</h3>

</div>

## 📋 Table of Contents

1. [Introduction](#-introduction)

2. [Tech Stack](#-tech-stack)

3. [Features](#-features)

4. [Quick Start](#-quick-start)

5. [API Endpoints](#-api-endpoints)

6. [Swagger](#-swagger)

7. [Useful Links](#-useful-links)

---

## 🚀 Introduction

The goal of this backend application is to integrate with NASA’s Open APIs and send the data to the [frontend](https://github.com/andersonfagundes/astroscope-web), allowing users to visualize the information through an interface built with React. It is built using **Node.js**, and **Express**.

The project includes:

**Node.js**, **Express.js**, and modern backend development practices

1. **APOD (Astronomy Picture of the Day) API** - Fetch the NASA APOD data for a given date

2. **Fetch the NASA APOD data for a given datee** - EPIC (Earth Polychromatic Imaging Camera) API

---

## ⚙️ Tech Stack

- **Node.js** – JavaScript runtime for server-side development

- **Express.js** – Fast, minimalist web framework for Node.js

---

## ⚡️ Features

### 🌌 Astronomy Picture of the Day (APOD)

- 🔭 **Astronomy Picture of the Day** - Explore NASA’s daily featured space imagery with rich contextual information.

### 🌎 Earth Polychromatic Imaging Camera (EPIC)

- 🎥 **Earth Polychromatic Imaging Camera** - Visualize Earth from space through NASA’s EPIC satellite imagery.

---

## ▶️ Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v24.14.1 or higher)

- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/andersonfagundes/astroscope-api
cd astroscope-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
NASA_API_KEY="your-nasa-api-key"
PORT=5000
```
To run this project, you will need a NASA API key. You can request it [here](https://api.nasa.gov/).

4. **Start the development server**

```bash
npm run dev
```

The API will be available at: [http://localhost:5000](http://localhost:5000)

5. **Run the application tests**

```bash
npm run test
```

---

## 🌐 API Endpoints

### APOD Routes

- `GET /apod` - Get the current or a specific date’s astronomy picture

### EPIC Routes

- `GET /epic` - Get Earth images by date

---

## 📚 Swagger

<div align="center">

  <br />

  <img width="1280" height="720" alt="AstroScope API Swagger documentation" src="https://github.com/andersonfagundes/astroscope-api/blob/42f644354b8d11daf69436a5237a7620ee31420a/img.png" />

  <br />
  
</div>
The Swagger documentation will be available at http://localhost:5000/api-docs

---

## 🔗 Useful Links

- [Node.js Documentation](https://nodejs.org/docs)

- [Express.js Documentation](https://expressjs.com/)

- [NASA API key](https://api.nasa.gov/)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---