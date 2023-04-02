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
    #p.predict_user(user_data)
    pass

def update_approval_status(message):
    data = message["data"]
    user_email = data.key()

    approval_status = predict_credit_score(user_data)
    db.child("users").child(user_email).update({"Approval Status": approval_status})

db.child("users").stream(update_approval_status,is_async=True) # listen for new post in the firebase table