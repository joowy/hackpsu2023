import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score # how does it perform :()
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import joblib # Save our model

def train_model():
    credit_score_data = pd.read_csv('DataProcessing/generated_data.csv') # read generated data in
    data = credit_score_data.drop(columns=['credit_score']) # predicting this, dont include : names might actually create bias, and are not relevant
    solve_for = credit_score_data['credit_score']
    X_train, _, y_train, _ = train_test_split(data, solve_for, test_size=.02, random_state=42) # split data into training and testing sets
    numeric_features = ['current_balance', 'current_income', 'credit_limit', 'number_of_cards', 'current_age', 'num_dependants'] # preprocessing
    categorical_features = ['education']
    preprocessor = ColumnTransformer(transformers=[ ('num', StandardScaler(), numeric_features), ('cat', OneHotEncoder(), categorical_features)])
    pipeline = Pipeline(steps=[('preprocessor', preprocessor), ('regressor', LinearRegression())]) # create a pipeline with the preprocessing steps and the linear regression model
    pipeline.fit(X_train, y_train) # predict and train model off our generated data from the csv
    model_filename = 'DataPredicting/trained_model.joblib'
    joblib.dump(pipeline, model_filename) # save trained model

train_model()

def model_good_or_bad(y_test, y_pred):
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    print(f'Mean Squared Error: {mse:.2f}')
    print(f'R^2 Score: {r2:.2f}')
