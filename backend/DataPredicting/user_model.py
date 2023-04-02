class User:
    def __init__(self, data):
        self.credit_limit = data['credit_limit']
        self.current_age = data['current_age']
        self.current_balance = data['current_balance']
        self.current_income = data['current_income']
        self.education = data['education']
        self.num_dependants = data['num_dependants']
        self.number_of_cards = data['number_of_cards']