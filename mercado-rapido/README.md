# 🛒 Mercado Rápido – Smart Shopping List

## 📌 Overview
Mercado Rápido is a mobile app + backend designed to simplify grocery shopping.
- Create and share shopping lists
- Get automatic suggestions based on previous purchases
- Mark items as completed during shopping

## 🚀 Tech Stack
- **Frontend (Mobile):** React Native (Expo)
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas
- **CI/CD:** GitHub Actions

## ⚙️ Setup Instructions

### 1. Clone repository
```bash
git clone https://github.com/<your-username>/mercado-rapido.git
cd mercado-rapido
```

### 2. Backend Setup
```bash
cd backend
cp .env.example .env
# edit your .env with real MongoDB credentials
npm install
npm run dev
```

### 3. Frontend Setup
```bash
cd mobile
npm install
npm start
```

### 4. Access
- Backend: http://localhost:5000
- Mobile: Scan QR with Expo Go app
