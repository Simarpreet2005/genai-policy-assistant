# GenAI Policy Assistant

An AI-powered multi-agent policy compliance assistant built using FastAPI, LangGraph, ChromaDB, Groq LLMs, and React.

The platform allows users to query university placement policies using natural language and receive structured compliance decisions, semantic policy retrieval, risk analysis, and citation-supported responses through a modern enterprise AI dashboard.

The system demonstrates production-oriented Generative AI engineering concepts including:

* Retrieval-Augmented Generation (RAG)
* semantic vector search
* multi-agent orchestration
* policy-aware reasoning
* structured AI workflows
* cloud deployment infrastructure

---

# Overview

University placement and internship policies are often lengthy, difficult to navigate, and manually interpreted by students and coordinators.

This project solves that problem by building an intelligent AI assistant capable of:

* retrieving relevant placement policy clauses
* evaluating compliance scenarios
* performing risk analysis
* generating structured reasoning-based responses
* displaying explainable AI workflow stages

The platform combines a modern React frontend with a FastAPI + LangGraph backend deployed on Google Cloud Run.

---

# Key Features

* Multi-Agent AI Workflow
* Retrieval-Augmented Generation (RAG)
* ChromaDB Semantic Vector Search
* Policy-Based Compliance Evaluation
* Risk Classification System
* Citation-Supported Responses
* Real-Time Workflow Visualization
* FastAPI REST Backend
* Enterprise React Frontend
* Dockerized Cloud Deployment
* Google Cloud Run Integration
* Vercel Frontend Deployment

---

# System Architecture

```txt
User Query
    ↓
Frontend Dashboard (React)
    ↓
FastAPI Backend
    ↓
LangGraph Multi-Agent Workflow
    ↓
Retrieval Agent
    ↓
ChromaDB Vector Search
    ↓
Compliance Evaluation Agent
    ↓
Risk Analysis Agent
    ↓
Summary Generation Agent
    ↓
Structured AI Response
```

---

# Multi-Agent Workflow

## 1. Retrieval Agent

Responsible for semantic retrieval of placement policy clauses.

### Responsibilities

* generate query embeddings
* perform vector similarity search
* retrieve relevant policy chunks
* return supporting evidence

---

## 2. Compliance Evaluation Agent

Analyzes retrieved policy context and determines compliance status.

### Responsibilities

* interpret university placement rules
* validate student scenarios
* evaluate policy violations
* determine compliance outcomes

---

## 3. Risk Analysis Agent

Performs contextual risk analysis based on retrieved policy evidence.

### Responsibilities

* classify compliance severity
* identify risky policy actions
* detect violations
* generate confidence indicators

---

## 4. Summary Generation Agent

Generates structured natural-language responses with citations.

### Responsibilities

* generate final AI response
* attach retrieved evidence
* include reasoning
* structure readable output

---

# Retrieval-Augmented Generation (RAG)

The platform uses a semantic retrieval pipeline to improve factual grounding and reduce hallucinations.

## Retrieval Pipeline

```txt
User Query
    ↓
Sentence Embedding
    ↓
ChromaDB Vector Search
    ↓
Policy Chunk Retrieval
    ↓
Context Ranking
    ↓
Agent Processing
```

### Retrieval Stack

* ChromaDB
* SentenceTransformers
* all-MiniLM-L6-v2 embeddings
* semantic chunk retrieval
* citation extraction workflow

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Framer Motion
* Lucide React

---

## Backend

* FastAPI
* Python
* Uvicorn
* Pydantic

---

## AI & Retrieval

* LangGraph
* Groq API
* ChromaDB
* SentenceTransformers
* RAG Pipeline
* Semantic Search

---

## Deployment

* Docker
* Google Cloud Run
* Vercel

---

# Project Structure

```txt
genai-policy-assistant/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── agents/
│   ├── retrieval_agent.py
│   ├── compliance_agent.py
│   ├── risk_agent.py
│   └── summary_agent.py
│
├── chroma_db/
├── data/
├── main.py
├── build_vector_db.py
├── Dockerfile
├── requirements.txt
└── README.md
```

---

# Prerequisites

Before running the project, install:

| Tool    | Version |
| ------- | ------- |
| Python  | 3.9+    |
| Node.js | 18+     |
| npm     | latest  |
| Git     | latest  |

---

# Backend Setup

## 1. Clone Repository

```bash
git clone <your-repository-url>
cd genai-policy-assistant
```

---

## 2. Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### macOS/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Configure Environment Variables

Create a `.env` file:

```env
GROQ_API_KEY=your_groq_api_key
```

---

## 5. Run Backend Server

```bash
uvicorn main:app --reload
```

Backend runs at:

```txt
http://127.0.0.1:8000
```

---

# Frontend Setup

## Install Dependencies

```bash
cd frontend
npm install
```

---

## Start Frontend

```bash
npm run dev
```

Frontend runs at:

```txt
http://localhost:5173
```

---

# API Documentation

FastAPI Swagger UI:

```txt
http://127.0.0.1:8000/docs
```

---

# Example API Request

## POST `/chat`

### Request

```json
{
  "message": "Can I reject a placement offer?"
}
```

---

### Response

```json
{
  "query": "Can I reject a placement offer?",
  "is_compliant": false,
  "reasoning": "Student cannot reject placement offer without valid reason.",
  "final_response": "Structured compliance response generated.",
  "error": null
}
```

---

# Deployment Links

## Frontend (Vercel)

```txt
https://gen-ai-policy-assistant.vercel.app
```

---

## Backend API (Google Cloud Run)

```txt
https://genai-policy-backend-424955378865.asia-south1.run.app/docs
```

---

# Current Capabilities

* Real-time policy question answering
* Semantic policy retrieval
* Multi-agent reasoning workflow
* Citation-supported responses
* Risk classification
* Cloud-hosted backend API
* Frontend-backend live integration

---

# Future Improvements

* Authentication system
* Policy upload portal
* Real-time streaming responses
* Conversation persistence
* Admin dashboard
* Advanced analytics
* Multi-document indexing
* Human approval workflows

---

# Contributors

* Frontend & Product Engineering
* AI Workflow Engineering
* Backend & Infrastructure Engineering

---

# License

This project is developed for educational and academic purposes as part of an AI Engineering coursework project.
