import random
import pandas as pd

def generate_credit_score_data(num_records=1000):
    credit_scores = []
    balances = []
    incomes = []
    limits = []
    cards = []
    ages = []
    educations = []

    education_levels = ['High School', 'Some College', 'Bachelor', 'Master', 'PhD']

    for _ in range(num_records):
        # Generate credit score between 300 and 850
        credit_score = random.randint(300, 850)
        credit_scores.append(credit_score)

        # Generate balance between 0 and 100,000
        balance = random.uniform(0, 100000)
        balances.append(balance)

        # Generate income between 20,000 and 200,000
        income = random.uniform(20000, 200000)
        incomes.append(income)

        # Generate credit limit between 1,000 and 100,000
        limit = random.uniform(1000, 100000)
        limits.append(limit)

        # Generate number of cards between 1 and 10
        num_cards = random.randint(1, 10)
        cards.append(num_cards)

        # Generate age between 18 and 80
        age = random.randint(18, 80)
        ages.append(age)

        # Randomly select education level
        education = random.choice(education_levels)
        educations.append(education)

    data = pd.DataFrame({'Credit Score': credit_scores,
                         'Balance': balances,
                         'Income': incomes,
                         'Credit Limit': limits,
                         'Number of Cards': cards,
                         'Age': ages,
                         'Education': educations})

    return data

# Generate 1000 records of credit score data
credit_score_data = generate_credit_score_data(1000)
credit_score_data.to_csv('DataProcessing/generated_data.csv', index=False)
