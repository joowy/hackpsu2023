import pandas as pd
import joblib
from DataPredicting.user_model import User

def load_model():
    model_filename = 'DataPredicting/trained_model.joblib'
    return joblib.load(model_filename)

def predict_user(recv_data):
    model = load_model() # get trained model
    user_data = User(recv_data) # convert the json to a user object to create data frame to predict
    user = pd.DataFrame({ 'credit_limit' : [user_data.credit_limit], 'current_age' : [user_data.current_age], 'current_balance' : [user_data.current_balance], 'current_income' : [user_data.current_income], 'education' : [user_data.education], 'num_dependants' : [user_data.num_dependants], 'number_of_cards' : [user_data.number_of_cards] })
    prediction = model.predict(user)
    print(prediction)
    return prediction