# 🛒 Mercado Rápido – Lista Inteligente de Compras

## 📌 Visão Geral
**Mercado Rápido** é um sistema (web + backend) projetado para **simplificar e otimizar a experiência de compras no mercado**.  
Com ele é possível criar listas inteligentes, compartilhar com familiares e receber sugestões automáticas com base em compras anteriores.

### Principais recursos:
- Criar e compartilhar listas de compras;
- Receber sugestões automáticas com base no histórico de compras;
- Marcar itens como concluídos durante a compra;
- Organizar produtos por categorias.

---

## 🚀 Tecnologias Utilizadas
- **Frontend (Web):** Next.js (React)
- **Backend:** Node.js + Express
- **Banco de Dados:** MongoDB Atlas
- **CI/CD:** GitHub Actions

---

## ⚙️ Instruções de Configuração

### 1. Clonar o repositório
```bash
git clone https://github.com/<seu-usuario>/mercado-rapido.git
cd mercado-rapido
```

### 2. Configuração do Backend
```bash
cd backend
cp .env.example .env
# edite o arquivo .env com suas credenciais reais do MongoDB
npm install
npm run dev
```

### 3. Configuração do Frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. Acesso
- Backend: http://localhost:5000
- Mobile: Scan QR with Expo Go app
