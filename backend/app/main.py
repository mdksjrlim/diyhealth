
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

users = []
checkins = []

@app.get("/")
def root():
    return {"status": "running"}

@app.post("/users")
def create_user(user: dict):
    user["id"] = len(users) + 1
    users.append(user)
    return user

@app.get("/users")
def list_users():
    return users

@app.post("/checkins")
def create_checkin(data: dict):
    checkins.append(data)
    return {"status": "ok"}

@app.get("/dashboard")
def dashboard():
    return {"users": users, "checkins": checkins}
