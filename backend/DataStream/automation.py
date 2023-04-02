import pyrebase
import DataPredicting.predictor as p

config = {
    "apiKey": "AIzaSyCGcEodHd_0443ACRG9ZcrPmoB68tS9srQ",
    "authDomain": "hackpsu2023.firebaseapp.com",
    "databaseURL": "https://hackpsu2023-default-rtdb.firebaseio.com",
    "projectId": "hackpsu2023",
    "storageBucket": "hackpsu2023.appspot.com",
    "messagingSenderId": "193262561637",
    "appId": "1:193262561637:web:435239f90b61ddb1ca198c"
}

# Initialize Firebase
firebase = pyrebase.initialize_app(config)
db = firebase.database()

def predict_credit_score(user_data):
    p.predict_user()

def update_approval_status(message):
    event_type = message["event"]
    path = message["path"]
    data = message["data"]

    if event_type == "put" and path == "/":  # A new user has been added
        for user_id, user_data in data.items():
            approval_status = predict_credit_score(user_data)
            db.child("users").child(user_id).update({"Approval Status": approval_status})
            print(f"Approval Status updated for user {user_id}.")
    elif event_type == "patch":  # detect user's data has been updated
        user_id = path.strip("/")
        user_data = data
        approval_status = predict_credit_score(user_data)
        db.child("users").child(user_id).update({"Approval Status": approval_status})
        print(f"Approval Status updated for user {user_id}.")

db.child("users").stream(update_approval_status) # set up a stream listener for the "users" table