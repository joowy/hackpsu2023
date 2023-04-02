import random
import pandas as pd

def generate_sample_data(sample_num):
    credit_scores = []
    balances = []
    incomes = []
    limits = []
    cards = []
    ages = []
    educations = []
    dependants = []

    education_levels = ['High School', 'Some College', 'Bachelor', 'Master', 'PhD']

    for _ in range(sample_num):
        credit_score = random.randint(300, 850)
        credit_scores.append(credit_score)
        balance = random.uniform(0, 100000)
        balances.append(balance)
        income = random.uniform(20000, 200000)
        incomes.append(income)
        limit = random.uniform(1000, 100000)
        limits.append(limit)
        num_cards = random.randint(1, 10)
        cards.append(num_cards)
        age = random.randint(18, 80)
        ages.append(age)
        education = random.choice(education_levels)
        educations.append(education)
        num_dependants = random.randint(0, 5)
        dependants.append(num_dependants)

    data = pd.DataFrame({ 'credit_limit' : limits, 'credit_score' : credit_scores, 'current_age' : ages, 'current_balance' : balances, 'current_income' : incomes, 'education' : educations, 'num_dependants' : dependants, 'number_of_cards' : cards })

    return data

def gen_data():
    credit_score_data = generate_sample_data(1000) # make 1000 sample data to start our model with
    credit_score_data.to_csv('DataProcessing/generated_data.csv', index=False)

gen_data()