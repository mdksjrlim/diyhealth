
# DIYHealth Full MVP

Includes:
- FastAPI backend (users, check-ins, alerts, dashboard)
- React frontend (dashboard + forms)

## Run backend
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload

## Run frontend
cd frontend
npm install
npm run dev
