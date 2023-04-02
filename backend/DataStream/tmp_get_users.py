import pyrebase

config = {
    "apiKey": "AIzaSyCGcEodHd_0443ACRG9ZcrPmoB68tS9srQ",
    "authDomain": "hackpsu2023.firebaseapp.com",
    "databaseURL": "https://hackpsu2023-default-rtdb.firebaseio.com",
    "projectId": "hackpsu2023",
    "storageBucket": "hackpsu2023.appspot.com",
    "messagingSenderId": "193262561637",
    "appId": "1:193262561637:web:435239f90b61ddb1ca198c"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

def get_all_users():
    
    users = db.child("users").get()
    if users.val() is not None:
        return users.val()
    else:
        print("No users found.")
        return {}


'''
credit_limit
credit_score
current_age
current_balance
current_income
education -> DROP DOWN WITH THESE OPTIONS  ['High School', 'Some College', 'Bachelor', 'Master', 'PhD']
num_dependants
number_of_cards

OAUTH2.0
user_name,user_email, user_id
'''

user_email = "cwaken"
data={'credit_limit' : 2000.00, 'credit_score': 740, 'current_age': 22, 'current_balance': 0.00, 'current_income' : 0.00, 'education' : "Bachelor", 'num_dependants' : 0, 'number_of_cards' : 1}
db.child('users').child(user_email).set(data)


#all_users = get_all_users()
#print(all_users)