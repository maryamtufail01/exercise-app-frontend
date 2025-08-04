# MoveMate Frontend (React)

MoveMate Frontend is a **minimal React application** built to demonstrate **DevOps and full-stack deployment skills** alongside the [MoveMate Backend](https://github.com/maryamtufail01/exercise-app-backend).  

- Functionality is intentionally simple:
  1. **User Signup**
  2. **User Login**
  3. **Dashboard:**  
     *"Welcome to your Exercise Dashboard! Track your progress and stay fit"*  
     with a **Logout button**
- **No additional exercise features** are implemented.  
- The purpose of this project is to **demonstrate professional cloud & DevOps practices**, not complex front-end development.

---

## 🎥 Demo

[![Watch the demo](https://img.youtube.com/vi/3gB2V_853ew/maxresdefault.jpg)](https://youtu.be/3gB2V_853ew)

---

## 🚀 Live Demo (Optional)

- **Frontend:** [https://movemate.duckdns.org](https://movemate.duckdns.org)  
- **Backend API:** [https://movemate.duckdns.org/api](https://movemate.duckdns.org/api)  

> *Live demo may be offline to save AWS free-tier credits. See demo video above instead.*

---

## 🛠 Tech Stack

- **Frontend:** React 18 (Create React App)  
- **Backend:** [Laravel 11 + MySQL](https://github.com/maryamtufail01/exercise-app-backend)  
- **Web Server:** Apache 2.4 (Served on Port 80/443)  
- **Hosting:** AWS EC2 (Ubuntu 24.04, t2.micro free tier)  
- **SSL:** Let’s Encrypt (auto-renewed via Certbot)  
- **Domain:** DuckDNS free dynamic domain

---

## 📦 Professional Features

- ✅ Built frontend with **React** and deployed via **Apache** on port 80/443  
- ✅ **HTTPS enabled** with Let’s Encrypt  
- ✅ **Backend API** proxied securely via Apache reverse proxy  
- ✅ Matches **DevOps best practices** for a full-stack demo  
- ✅ **Demo video available** for portfolio showcase

---

## 📂 Deployment Architecture

     ┌───────────────────┐
     │   React Frontend   │  (Port 80/443, Apache)
     └─────────┬─────────┘
               │
         HTTPS Reverse Proxy
               │
     ┌─────────▼─────────┐
     │  Laravel Backend  │  (Port 9000, systemd)
     └─────────┬─────────┘
               │
          MySQL Database


---

## 👤 Author

**Maryam Tufail**  
- GitHub: [@maryamtufail01](https://github.com/maryamtufail01)

---
