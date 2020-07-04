import json
#from fuzzywuzzy import fuzz #for natural language processing
import pandas as pd
import sys
question_list=[]
# with open('C:/Users/DISHA/Desktop/Caramel IT Academy/Final/3.QB_Course_Completion_Assignment_Model/1.json',encoding='utf-8') as jsonfile:#here the json file should be dynamic(BACKEND AND AIML)
#     data = json.load(jsonfile,)#json files data is stored in data

def getmcq(a,b,c,id1,df):
    global question_list
    list_of_dataframes=[]
    list_of_dataframes1=[]
    #df = pd.read_csv("C:/Users/DISHA/Desktop/Caramel IT Academy/Final/3.QB_Course_Completion_Assignment_Model/"+"PYM"+".csv",encoding='latin1',error_bad_lines=False)
    #df=pd.read_json("C:/Users/DISHA/Desktop/Caramel IT Academy/Final/3.QB_Course_Completion_Assignment_Model/"+ "PYM" +".json",encoding='latin1')
    #print(type(df))
    df1=df[df['question_course'].str.contains(b,na=False)]
    df2=df1[df1['question_level'].str.contains(c,na=False)]
    df3=df2.sample(n =a, replace = True)
    list_of_dataframes.append(df3)#all the questions till the loop ends will be appended in the list_of_dataframes 
    master_frame=pd.concat(list_of_dataframes,axis=0,ignore_index=True)#all skill questions are received and put in one master frame
    master_frame1=master_frame[['_id']]#master frame1 will fetch the qids of the questions given in master_frame
    for i in range(a):
        question_list1=master_frame1['_id'].values[i]
        question_list.append(question_list1)
    return question_list
    #list_of_dataframes1.append(master_frame1)#important
    #master_df=pd.concat(list_of_dataframes1,axis=0,ignore_index=True)#here all the dataframes are joined in a master_df#important
    #master_df.reset_index(inplace=True)#important
    #master_df.to_json(r'C:/Users/hp/Desktop/Internship/'+id1+'cmb.json')#the qids are stored in a locally made json path with the name of the json file given by the id(parameter)
        #^important(Backend and AIML Team)
#---------------------------------------------------------Technical Scenario----------------------------------------------------#
def getts(number,b,c,id1):
    global question_list
    list_of_dataframes=[]
    list_of_dataframes1=[]
    for i in range(number):
        df = pd.read_csv("C:/Users/DISHA/Desktop/Caramel IT Academy/Final/3.QB_Course_Completion_Assignment_Model/"+ "PYTS" +".csv",encoding='latin1',error_bad_lines=False)#file is retreived
        #We will get questions from here
        df1=df[df['question_course'].str.contains(b,na=False)]
        df2=df1[df1['question_level'].str.contains(c,na=False)]
        df3=df2.sample(n =number, replace = True)
        list_of_dataframes.append(df3)#all the questions till the loop ends will be appended in the list_of_dataframes 
        master_frame=pd.concat(list_of_dataframes,axis=0,ignore_index=True)#all skill questions are received and put in one master frame
        master_frame1=master_frame[['_id']]#master frame1 will fetch the qids of the questions given in master_frame
    for i in range(number):
        question_list1=master_frame1['_id'].values[i]
        #print(question_list1)
        question_list.append(question_list1)
    print(question_list)
    json_object = json.dumps(question_list)
    #print(json_object)
    # with open(id1+"cca.json", "w") as outfile: 
    #         print("success")
    #         outfile.write(json_object)

#id1=data['user_id']
#get_course_code=data['courseid']
#difficulty=data['difficulty']
#no_of_mcq=int(data["no_of_mcqquestions"])
#no_of_ts=int(data["no_of_tsquestions"])
#qid={'mcq':'M','technical scenarios':'TS','modify code in the coding platform':'MC','coding tests':'CT'} #codes for qid for filename retreival

# id1="Disha"
# get_course_code="UIFE"
# difficulty="Beginner"
# no_of_mcq=30
#no_of_ts=10

id1=sys.argv[1]
get_course_code=sys.argv[2]
difficulty=sys.argv[3]
no_of_mcq=int(sys.argv[4])
no_of_ts=int(sys.argv[5])
questionlist=sys.argv[6]
ql=pd.read_json(questionlist)

# df1=ql[ql['question_course'].str.contains(get_course_code,na=False)]
# print(df1)
# df2=df1[df1['question_level'].str.contains(difficulty,na=False)]
# print(df2)
#print(questionlist)

#for key in skillcodes:
 #   if(coursename==key):
  #      get_course_code=skillcodes.get(coursename)
   #     #print(get_file_part1)
#get_course_code=data['courseid']
subcourse_code=get_course_code
qlist=getmcq(no_of_mcq,subcourse_code,difficulty,id1,ql)
#print(qlist)
#getts(no_of_ts,subcourse_code,difficulty,id1)
listOfkeys = []
listOfvalues = qlist

# count = int(input("Input total no. of elements in the lists:"))
# print("Capture input for the keys:")

for item in range(0, no_of_mcq):
    # elt = int(input("Input item" + str(item + 1) + ":"))
    listOfkeys.append(item)

# print("Capture input for the values:")

# for item in range(0, count):
#     elt = int(input("Input item" + str(item + 1) + ":"))
#     listOfvalues.append(elt)

di = dict(zip(listOfkeys, listOfvalues))
# print("The dictionary after the merge:")
# print(di)
print(json.dumps(question_list))





