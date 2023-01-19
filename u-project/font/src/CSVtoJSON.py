import csv
import json


def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []

    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            print(row)
            jsonArray.append(row)

    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonString = json.dumps(jsonArray, indent=5) #จัดรูปให้อยู่ในรูปJson
        jsonf.write(jsonString)

         
csvFilePath = r'./train_labels.csv'
jsonFilePath = r'PathT.json'

csv_to_json(csvFilePath, jsonFilePath)
