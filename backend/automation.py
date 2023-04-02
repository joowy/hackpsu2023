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
    prediction = p.predict_user(user_data)
    return prediction[0]

def update_approval_status(message):
    print(message)
    path = message['path'] # if the path is root level event
    event = message['event'] # look for some put req ;)
    print("ALERT : MSG RECV")
    data = message["data"]
    print(data)

    # DATA POSTED WHEN BACKEND WAS RUNNING
    if event == 'put' and data and not path == "/": 
        predicted_credit_score = predict_credit_score(data)
        print(predicted_credit_score)
        data['credit_score'] = predicted_credit_score
        n_path = path.split("/")
        user_email = n_path[-1]
        db.child("users").child(user_email).update(data)

    # DATA POSTED WHEN BACKEND WAS OFF --> gets a backlogged list { u1: {}, u1: { },...}
    if event == 'put' and data and path == "/":
        for user in data:
            user_data = data[user]

            predicted_credit_score = predict_credit_score(user_data)
            print(predicted_credit_score)
            user_data['credit_score'] = predicted_credit_score
            data[user] = user_data
            db.child("users").child(user).update(data[user])

db.child("users").stream(update_approval_status,is_async=True) # listen for new post in the firebase table