import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import OneHotEncoder

def train_model():
    # Sample user data including hydration status
    user_data = {
        "name": ["John", "Alice", "Bob", "Emma", "Michael"],
        "username": ["john123", "alice22", "bob89", "emma456", "michael77"],
        "email": ["john@example.com", "alice@example.com", "bob@example.com", "emma@example.com", "michael@example.com"],
        "gender": ["Male", "Female", "Male", "Female", "Male"],
        "age": [30, 25, 40, 35, 28],
        "weight": [70, 60, 80, 65, 75],
        "hydration_status": ["Hydrated", "Dehydrated", "Hydrated", "Dehydrated", "Hydrated"]
    }

    # Create a DataFrame
    data = pd.DataFrame(user_data)

    # One-hot encode categorical features
    data_encoded = pd.get_dummies(data, columns=["gender"])

    # Split data into features (X) and target variable (y)
    X = data_encoded.drop(columns=["hydration_status", "name", "username", "email"])
    y = data_encoded["hydration_status"]

    # Train logistic regression model
    model = LogisticRegression()
    model.fit(X, y)

    return model

def predict_hydration_status(name, username, email, gender, age, weight, water_intake, model):
    # Create a DataFrame with the provided user data
    user_data = pd.DataFrame({
        "name": [name],
        "username": [username],
        "email": [email],
        "gender": [gender],
        "age": [age],
        "weight": [weight]
    })

    # One-hot encode categorical features
    user_data_encoded = pd.get_dummies(user_data, columns=["gender"])

    # Ensure that both 'gender_Male' and 'gender_Female' features are present
    if 'gender_Male' not in user_data_encoded.columns:
        user_data_encoded['gender_Male'] = 0
    if 'gender_Female' not in user_data_encoded.columns:
        user_data_encoded['gender_Female'] = 0

    # Make predictions using the trained model
    hydration_status = model.predict(user_data_encoded)

    return hydration_status[0]  # Return the predicted hydration status for the user

# Train the model

