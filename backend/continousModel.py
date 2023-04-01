import pandas as pd
import joblib

def load_model():
    model_filename = 'credit_score_model.joblib'
    return joblib.load(model_filename)

def predict_user():
    model = load_model() # get trained model
    user = pd.DataFrame({'Balance': [30000],'Income': [80000],'Credit Limit': [50000],'Number of Cards': [4],'Age': [35],'Education': ['Bachelor']})
    predicted_credit_score = model.predict(user)
    print(f'Predicted credit score: {predicted_credit_score[0]:.2f}')