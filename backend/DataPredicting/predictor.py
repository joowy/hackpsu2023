import pandas as pd
import joblib
from DataPredicting.user_model import User

def load_model():
    model_filename = 'DataPredicting/trained_model.joblib'
    return joblib.load(model_filename)

def json_to_user_model():
    pass #TODO

def predict_user(recv_data):
    model = load_model() # get trained model
    user_data = User(recv_data) # convert the json to a user object to create data frame to predict
    user = pd.DataFrame({ 'credit_limit' : user_data.credit_limit, 'credit_score' : user_data.credit_scores, 'current_age' : user_data.ages, 'current_balance' : user_data.balances, 'current_income' : user_data.incomes, 'education' : user_data.educations, 'first_name' : user_data.first_names, 'last_name' : user_data.last_names, 'num_dependants' : user_data.dependants, 'number_of_cards' : user_data.cards })
    
    return model.predict(user)
