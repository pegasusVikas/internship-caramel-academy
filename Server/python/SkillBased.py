import sys
import pandas as pd
import json

master_frame1=[]#important

def getmcq(a,difficulty,id1,number,df):
    #print("Get MCQ")

    global master_frame1 #important
    generic=10#no of generic questions which will come to all the Users
    if(number%a==0):#eg for 30(number) questions if 1,2,3,5 number of skills are entered then no of questions will be divided equally among the skills
        no_of_questions=int(number/a)#no of questions for each skill will be 30question(for 1 skill),15(for 2 skills),10(for 3 skills) etc..
        l2=[no_of_questions for i in range(a)]#list of particular skill having particular number of questions
        #l2 is a list of how many number of questions will be divided upon each topic.In this case all topics will get equal number of questions
        #list_of_files=[]
        list_of_dataframes=[]
        list_of_dataframes1=[]
        for i in range(a):#loop for the total number of skills
            #df=pd.read_json("C:/Users/DISHA/Desktop/Caramel IT Academy/Final/1.QB_Skills_Based_Test/"+ "PYM2" +".json",encoding='latin1')#file is retreived(Backend and AIML)
            # print(type(df))
            #print(df)
            df1=df[df['question_level'].str.contains(difficulty,na=False)]#question filter for difficulty
            # print(df1)
            df2=df1[df1['question_topic'].str.contains(list1[i])]#dataframe will contain only that particular topic questions
            df3=df2.sample(n =l2[i], replace = True) #question filter for no of questions retreived and random retreival ,l2[i] is the list where the no.of questions assigned for that particular skill are stored
            #Imp replace=True will allow duplicate entries as dataset is small #for non duplicate entries do replace=False
            list_of_dataframes.append(df3)#all the questions till the loop ends will be appended in the list_of_dataframes 
        
        df4=df[df['question_topic'].str.contains("Generic")]#question filter for generic questions topic    
        df5=df4.sample(n =10, replace = True)#10 questions of generic type will be fetched
        list_of_dataframes.append(df5)#this will also be appended to the above list_of_dataframes
        master_frame=pd.concat(list_of_dataframes,axis=0,ignore_index=True)#all skill questions are received and put in one master frame
        master_frame1=master_frame[['_id']]#master frame1 will fetch the qids of the questions given in master_frame
        list_of_dataframes1.append(master_frame1)#important
        master_df=pd.concat(list_of_dataframes1,axis=0,ignore_index=True)#here all the dataframes are joined in a master_df#important
        master_df.reset_index(inplace=True)#important
        return master_df
        ##master_df.to_json(r'C:/Users/DISHA/Desktop/Caramel IT Academy/1.QB_Skills_Based_Test/'+'answer.json')#the qids are stored in a locally made json path with the name of the json file given by the id(parameter)
    

    else:#condition where no of questions is not being exactly divided by no of skills
        no_of_questions=number//a  # eg for 4 skills and 30 questions.This will be for if user enters 4 skills then 2 skills will have 8 questions each and 2 will have 7 questgions
        extra_questions=number%a#the no of extra questions which have not been properly divided
        l2=[no_of_questions for i in range(a)]#list to store equal no of questions for eack skill
        for i in range(0,extra_questions):#logic to store some extra questions in some of the skills
            l2[i]=no_of_questions+1#important
        list_of_files=[]#important
        list_of_dataframes=[]#important
        list_of_dataframes1=[]#important
        for i in range(a): #Same as above scenario
            #df=pd.read_json("C:/Users/DISHA/Desktop/Caramel IT Academy/Final/1.QB_Skills_Based_Test/"+ "PYM2" +".json",encoding='latin1')#file is retreived(Backend and AIML)
            # print(type(df))
            df1=df[df['question_level'].str.contains(difficulty,na=False)]#question filter for easy
            # print(df1)
            df2=df1[df1['question_topic'].str.contains(list1[i])]
            #print(df2)
            df3=df2.sample(n =l2[i], replace = True) #question filter for no of questions retreived and random retreival
            #print(df5)
            list_of_dataframes.append(df3)
            
        df4=df[df['question_topic'].str.contains("Generic")]    
        df5=df4.sample(n =10, replace = True)
        list_of_dataframes.append(df5)
        master_frame=pd.concat(list_of_dataframes,axis=0,ignore_index=True)
        master_frame1=master_frame[['_id']]
        list_of_dataframes1.append(master_frame1)
        master_df=pd.concat(list_of_dataframes1,axis=0,ignore_index=True)
        master_df.reset_index(inplace=True)
        return master_df
        ##master_df.to_json(r'C:/Users/DISHA/Desktop/Caramel IT Academy/Final/1.QB_Skills_Based_Test/'+'answer.json')

# ------------------------------------------------------------Main Part----------------------------------------------------------------

no_of_questions = int(sys.argv[9])
id2 = sys.argv[1]  # user id from the json file questions.json
skill = int(sys.argv[2])  # total skills from questions.json
category = sys.argv[10]  # JSON INPUT NEEDED(Out of 4 types-NonIT Student,IT Student,IT Professional,NonIT Professional)
skill1 = sys.argv[3]  # skill 1 from questions.json
skill2 = sys.argv[4]  # skill 2 from questions.json
skill3 = sys.argv[5]  # skill 3 from questions.json
skill4 = sys.argv[6]  # skill 4 from questions.json
skill5 = sys.argv[7]  # skill 5 from questions.json
list1 = [skill1, skill2, skill3, skill4, skill5]  # list of all the skills
questionlist= sys.argv[11]
#questionlist = json.loads(questionlist)
#ql = pd.DataFrame(questionlist) 
ql=pd.read_json(questionlist)
# print(type(ql))

#print(ql)

# no_of_questions = 30
# id2 = "Disha"
# skill = 4
# category = "IT Professional"
# skill1 = "CSS"
# skill2 = "HTML"
# skill3 = "Javascript"
# skill4 = "Bootstrap"
# skill5 =""
# list1 = [skill1, skill2, skill3, skill4, skill5] 
# prof = 4

difficulty = "Beginner"  # default difficulty easy
if (category == "IT Professional" or category == "IT Student"):  # AIML (here IT Professional/IT Student should come)
    prof = int(sys.argv[8])  # proficiency of user in that particular skill
    if (prof > 2 and prof < 4):  # condition for difficulty
        difficulty = "Intermediate"
    if (prof >= 4):  # condition for difficulty
        difficulty = "Expert"

# ql1=ql[ql['question_level'].str.contains(difficulty,na=False)]#question filter for difficulty
# print(ql1)

master_df = getmcq(skill, difficulty, id2, no_of_questions,ql)  # the getmcq function is called
mf=master_df.to_dict()
#print(type(mf))
#print(mf)

# print("end")

 
resp ={
    "Response" : 200,
    "Message" : "Data from Python",
    "Data" : mf,
    # "Skill" : skill,
    # "Difficulty" : difficulty,
    # "Questions" : questionlist,
    # "id2" : id2,
    # "no of ques" : no_of_questions
}

print(json.dumps(resp))

