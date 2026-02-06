# Practical Assignment: Data Foundations for Machine Learning  
## Student Study Habits Dataset

---

## 1. Title and Data Collection Method

### Title  
**Analysis of Student Study Habits and Academic Performance**

### Data Collection Method  
Dataset-kan wuxuu ka kooban yahay xog ku saabsan arday jaamacadeed iyo hab-dhaqankooda waxbarasho. Xogta waxaa lagu ururiyay qaab isku dhaf ah oo ay ku jiraan wareysiyo fudud oo lala yeeshay arday iyo qiimeyn macquul ah oo ku saleysan xaalado dhab ah oo ka jira jaamacadaha. Ujeeddadu waxay ahayd in la abuuro dataset matalaya xaalad nololeed dhab ah, halkii laga isticmaali lahaa dataset hore loo diyaariyey.

Dataset-ka si ula kac ah waxaa loogu oggolaaday inuu yeesho qaladaad fudud iyo kala duwanaansho formatting ah, si uu ugu ekaado xogta dhabta ah ee la kulmo marka la sameynayo mashruucyo Machine Learning ah.

---

## 2. Description of Features and Label

### Input Features (X)

- **Age**  
  Da’da ardayga, oo ah tiro integer ah.

- **Gender**  
  Jinsiga ardayga (Male ama Female). Feature-kan waa categorical.

- **Hours_Studied_Per_Day**  
  Tirada saacadaha uu ardaygu wax barto maalintii.

- **Attendance_Percentage**  
  Boqolleyda xaadirista fasallada (0–100).

- **Sleep_Hours_Per_Day**  
  Tirada saacadaha uu ardaygu seexdo maalintii.

### Output Label (y)

- **Final_Exam_Score**  
  Dhibcaha imtixaanka kama dambaysta ah ee ardayga (0–100).

Label-kan ayaa ah variable-ka la saadaalin karo marka la isticmaalayo Machine Learning.

---

## 3. Dataset Structure

Dataset-ku wuxuu ka kooban yahay:

- **50 rows (samples / arday)**
- **6 columns**
  - 5 input features
  - 1 output label

Dataset-ku waa isku dhaf ah:
- Numeric data (age, hours studied, attendance, sleep hours, exam score)
- Categorical data (gender)

Hoos waxaa ku yaalla tusaale ka mid ah dataset-ka (5 rows):

| Age | Gender | Hours_Studied_Per_Day | Attendance_Percentage | Sleep_Hours_Per_Day | Final_Exam_Score |
|----|--------|----------------------|----------------------|--------------------|-----------------|
| 18 | Male | 1.5 | 65 | 5 | 54 |
| 21 | Female | 4 | 85 | 7 | 81 |
| 20 | Male | 3 | 80 | 6 | 72 |
| 22 | Female | 5 | 92 | 8 | 90 |
| 19 | Female | 2 | 70 | 6 | 60 |

---

## 4. Data Quality Issues

Maaddaama dataset-ku uu matalayo xog nolol-dhab ah, waxaa jira dhibaatooyin tayo xogeed oo caadi ah, kuwaas oo ay ka mid yihiin:

- Gender oo mararka qaar aan isku format ahayn (Male vs female)
- Kala duwanaansho ballaaran oo ku jira attendance iyo exam scores
- Qaar ka mid ah values-ka oo u dhow xadka hoose ama sare
- Xog aan si buuxda u nadiif ahayn (messy data)

Dhibaatooyinkan waxaa si buuxda wax looga qaban doonaa marxaladda preprocessing-ka, sida encoding, scaling, iyo cleaning.

---

## 5. Use Case in Machine Learning

Dataset-kan waxaa si wanaagsan loogu adeegsan karaa mashruucyo Machine Learning ah, gaar ahaan:

- **Regression**  
  Si loo saadaaliyo Final_Exam_Score iyadoo la adeegsanayo study habits-ka ardayda.

- **Feature Analysis**  
  Si loo fahmo feature-yada ugu saamaynta badan natiijada ardayga, sida hours studied ama attendance.

- **Educational Insights**  
  Dataset-ku wuxuu gacan ka geysan karaa fahamka sida hurdo, barasho, iyo xaadiris ay u saameeyaan waxqabadka tacliimeed ee ardayda.

---

## 6. Conclusion

Dataset-kan wuxuu siinayaa saldhig adag oo loogu talagalay barashada habka xog ururinta, qiimeynta tayada xogta, iyo diyaarinta xogta ka hor inta aan la isticmaalin Machine Learning models. Waxa uu si gaar ah diiradda u saarayaa xaaladaha dhabta ah ee xogta, taas oo ah xirfad muhiim u ah Data Science iyo Machine Learning.

Dataset-kan waxaa loo adeegsan doonaa casharada xiga si loogu sameeyo preprocessing, feature engineering, iyo model training.
