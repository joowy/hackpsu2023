import random
import pandas as pd

# Honestly .03 was a reasonable weight that gave reasonable results
def generate_credit_score(income, education, dependants, income_weight=.05, education_weight=80, dependants_weight=10):
    education_scores = {'High School': 1, 'Some College': 2, 'Bachelor': 3, 'Master': 4, 'PhD': 5} # education is biggy
    
    score = (income * income_weight + education_scores[education] * education_weight + dependants * dependants_weight) / (income_weight + education_weight + dependants_weight)
    return max(min(int(300 + score * 550 / 100), 850), 300)

def generate_income_based_on_education(education, education_levels):
    min_incomes  = [20000, 40000, 60000, 80000, 120000] # cors to ed list
    index = education_levels.index(education)
    min_income = min_incomes[index]
    variance = random.uniform(0, 100) * .01 # add some fluff, years of experience, ect
    return min_income + (min_income * variance)

def generate_sample_data(sample_num): # salaries should differ a little
    balances = []
    incomes = []
    limits = []
    cards = []
    ages = []
    educations = []
    dependants = []
    credit_scores = []

    education_levels = ['High School', 'Some College', 'Bachelor', 'Master', 'PhD']


    for _ in range(sample_num): 
        balance = random.uniform(0, 100000)
        balances.append(balance)
        education = random.choice(education_levels)
        educations.append(education)
        income = generate_income_based_on_education(education, education_levels)
        incomes.append(income)
        limit = random.uniform(1000, 100000)
        limits.append(limit)
        num_cards = random.randint(1, 10)
        cards.append(num_cards)
        age = random.randint(18, 80)
        ages.append(age)
        num_dependants = random.randint(0, 5)
        dependants.append(num_dependants)
        
        credit_score = generate_credit_score(income, education, num_dependants)
        credit_scores.append(credit_score)

    data = pd.DataFrame({ 'credit_limit' : limits, 'credit_score' : credit_scores, 'current_age' : ages, 'current_balance' : balances, 'current_income' : incomes, 'education' : educations, 'num_dependants' : dependants, 'number_of_cards' : cards })

    return data

def gen_data():
    credit_score_data = generate_sample_data(1000) # make 1000 sample data to start our model with
    credit_score_data.to_csv('DataProcessing/generated_data.csv', index=False)

gen_data()