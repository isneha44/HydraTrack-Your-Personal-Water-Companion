# app.config['MONGO_URI']='mongodb.uri=mongodb://localhost:27017/water-tracker'
from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from pydantic import BaseModel
from typing import List
from ml_model import predict_hydration_status
from ml_model import train_model
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Connect to MongoDB
client = MongoClient('mongodb+srv://isneha44:1234@cluster0.nuht7dt.mongodb.net/?retryWrites=true&w=majority')
db = client['mydatabase']
collection = db['users']

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    name: str
    username: str
    email: str
    gender: str
    age: int
    weight: float

@app.post("/users/", response_model=User)
def create_user(user: User):
    user_id = collection.insert_one(user.dict()).inserted_id
    return user

@app.get("/model")
def model():
    name = "John"
    username = "john123"
    email = "john@example.com"
    gender = "Male"
    age = 30
    weight = 70
    water_intake = 2000  # User's water intake in milliliters
    # trained_model = train_model()
    predicted_status = predict_hydration_status(name, username, email, gender, age, weight, water_intake, trained_model)
    print("Predicted hydration status for", name, ":", predicted_status)
    return JSONResponse(content=f"Predicted hydration status for, {name} : {predicted_status}", status_code=200)

@app.get("/users/", response_model=List[User])
def read_users():
    users = [User(**user) for user in collection.find()]
    return users

@app.get("/users/{user_id}", response_model=User)
def read_user(user_id: str):
    user = collection.find_one({"_id": user_id})
    if user:
        return User(**user)
    else:
        raise HTTPException(status_code=404, detail="User not found")

@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: str, user: User):
    updated_user = collection.find_one_and_update(
        {"_id": user_id},
        {"$set": user.dict()},
        return_document=True
    )
    if updated_user:
        return User(**updated_user)
    else:
        raise HTTPException(status_code=404, detail="User not found")

@app.delete("/users/{user_id}")
def delete_user(user_id: str):
    result = collection.delete_one({"_id": user_id})
    if result.deleted_count == 1:
        return {"message": "User deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="User not found")
