# credit-risk\Credit Scoring
summary of progress into credit risk coding across multiple languages

Goals for this project:
Build an internal credit score in multiple program languages from dummy data

Data for this project has been sourced from:

https://www.kaggle.com/datasets/dansbecker/aer-credit-card-data?resource=download


Data takes the following format:

Content
card: Dummy variable, 1 if application for credit card accepted, 0 if not
reports: Number of major derogatory reports
age: Age n years plus twelfths of a year
income: Yearly income (divided by 10,000)
share: Ratio of monthly credit card expenditure to yearly income
expenditure: Average monthly credit card expenditure
owner: 1 if owns their home, 0 if rent
selfempl: 1 if self employed, 0 if not.
dependents: 1 + number of dependents
months: Months living at current address
majorcards: Number of major credit cards held
active: Number of active credit accounts



Steps taken for building credit score:

Define the target variable - for this example we will be using where reports >= 1.
Clean the data (turn yes/no values into 1/0 binary classification)
