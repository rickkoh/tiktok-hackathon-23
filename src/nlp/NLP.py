import requests
import justext
import spacy 
from spacy.matcher import Matcher
from collections import Counter
from textblob import TextBlob
import random
import pandas as pd

#extract text
url = "https://www.cnet.com/tech/mobile/best-iphone/"
response = requests.get(url)
paragraphs = justext.justext(response.content, justext.get_stoplist("English"))
for_processing = []
for paragraph in paragraphs:
  if not paragraph.is_boilerplate:
    for_processing.append(paragraph.text)

for_processing = ''.join(for_processing)

#print(for_processing)

nlp = spacy.load('en_core_web_trf')
matcher = Matcher(nlp.vocab)
doc = nlp(for_processing)

#for token in doc:
  #print(token.text, token.pos_)

words = [token.text
  for token in doc
    if not token.is_stop and not token.is_punct]

nouns = [token.text
  for token in doc
    if (not token.is_stop and
        not token.is_punct and
        token.pos_ == "NOUN")]

names = [token.text
  for token in doc
    if (not token.is_stop and
        not token.is_punct and
        token.pos_ == "PROPN")]

# five most common tokens
word_freq = Counter(words)
common_words = word_freq.most_common(5)
print(common_words)

# five most common noun tokens
noun_freq = Counter(nouns)
common_nouns = noun_freq.most_common(5)
most_common_noun = str(common_nouns[0][0])
print(common_nouns)
print("The most common noun is:", most_common_noun, "or", most_common_noun.capitalize())

# five most common proper noun tokens
name_freq = Counter(names)
common_names = name_freq.most_common(5)
print(common_names)

# attempt named entity recognition
entities = [ent.text
  for ent in doc.ents
  if (ent.label_ == 'ORG')]
entities = list(map(lambda x: x.replace('.com','').replace('.ca',''), entities))

# five most common entities
ent_freq = Counter(entities)
common_entities = ent_freq.most_common(5)
most_common_entity = str(common_entities[0][0])
print(common_entities)
print("The most common entity is:", most_common_entity)

#provide matching pattern for adjective identification
pattern = [
  [{"POS": "ADJ"}, {"TEXT": most_common_noun}],
  [{"POS": "ADJ"}, {"TEXT": most_common_noun.capitalize()}]
]
matcher.add("ADJ_NOUN_PATTERN", pattern)
matches = matcher(doc)

print("Total matches found: ", len(matches))

#store relevant adjectives 
relevant_adjectives = []
for match_id, start, end in matches:
  relevant_adjectives.append(doc[start].text)
for match_id, start, end in matches:
    print("Match Found: ", doc[start:end].text)

print("The relevant adjectives are:", relevant_adjectives)

#conduct sentiment analysis (1.0 polarity = positive, -1.0 polarity = negative)
positive_adjectives = []
for adjective in relevant_adjectives:
  print(adjective, TextBlob(adjective).sentiment)
  if TextBlob(adjective).sentiment.polarity > 0:
    positive_adjectives.append(adjective)
print("The positive adjectives are:", positive_adjectives)

#define variables for randomization
adjectives = ['Quality', 'High Quality', 'Excellent', 'Great Quality']
adjectives.extend(positive_adjectives)
adjectives = [adjective.title() for adjective in adjectives]
adjectives = [adjective + ' ' for adjective in adjectives]
headline_purchase_phrases = ['Shop ', 'Buy ', 'Shop Online for ', 'Shop Today for ', 
                             'Find ', 'Browse Online for ', 'Shop for ']
purchase_phrases = ['Shop ', 'Buy ', 'Shop Online for ', 'Shop Today for ']
semantic_variants = [" at Low Prices", " with Free Delivery", " at Great Prices", " at Amazing Prices", " and Save Big"]

category_phrases = most_common_noun.capitalize()
suffix = "s"
if category_phrases.endswith(suffix) == False:
  category_phrases = str(category_phrases + suffix)

branded_phrases = most_common_entity + ' '
final_url = url

#create headlines
pd_headline = []
def headline():
    count = 0
    headline_set = set()
    for count in range (1,6):
        headline = (random.choice(headline_purchase_phrases) + branded_phrases + category_phrases)
        if len(headline) <= 30:
            headline_set.add(headline)
        count += 1
    for count in range (6,11):
        headline = (random.choice(adjectives) + category_phrases)
        if len(headline) <= 30:
            headline_set.add(headline)
        count += 1
    for count in range (11,16):
        headline = (random.choice(headline_purchase_phrases) + category_phrases)
        if len(headline) <= 30:
            headline_set.add(headline)
        count += 1
    for headline in headline_set:
        print(headline)
        pd_headline.append(headline)
headline()

#create description lines
pd_description = []
def description():
    count = 0
    for count in range (0,5):
        description = (random.choice(purchase_phrases) + random.choice(adjectives) + branded_phrases + category_phrases + random.choice(semantic_variants) + ".")
        if len(description) < 90:
            print(description)
            pd_description.append(description)
description()

#fill dataframe with inputs
df1 = pd.DataFrame()
for headline in pd_headline:
    df1.insert(0, "Headline", [headline], allow_duplicates = True)  
df1.columns = [f'{x} {i}' for i, x in enumerate(df1.columns, 1)]

df2 = pd.DataFrame()
for description in pd_description:
    df2.insert(0, "Description", [description], allow_duplicates = True)
df2.columns = [f'{x} {i}' for i, x in enumerate(df2.columns, 1)]

df3 = pd.DataFrame()
df3.insert(0, "Final URL", [final_url], allow_duplicates = True)

df1
df2
df3

df_export = pd.concat([df1, df2, df3], axis=1, join="inner")
df_export.to_csv('Automated_Responsive_Search_Ads.csv', index=False)