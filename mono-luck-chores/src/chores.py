import os
import psycopg2
import pytz
from datetime import datetime
from dotenv import load_dotenv
from random import shuffle

def chores():
    # load .env
    load_dotenv()

    # connect database string
    conn_string = 'host={0} user={1} dbname={2} password={3} sslmode={4}'.format(os.getenv('DB_HOST'), 
    os.getenv('DB_USER'), os.getenv('DB_NAME'), os.getenv('DB_PASSWORD'), os.getenv('DB_SSLMODE'))
    conn = psycopg2.connect(conn_string) # db open
    print("connect!")

    # get no lockers registrations and make a array
    cursor = conn.cursor()
    cursor.execute('SELECT\
                        "memberId",priority\
                    FROM\
                        "REGISTRATIONs"\
                    WHERE\
                        NOT EXISTS (\
                        SELECT\
                            "memberId"\
                        FROM\
                            "LOCKERs"\
                    WHERE\
                        "REGISTRATIONs"."memberId" = "LOCKERs"."memberId")')
    registrations = cursor.fetchall()
    cursor.close()


    # get all lockers and make a array
    cursor = conn.cursor()
    cursor.execute('SELECT "lockerNo","memberId" FROM "LOCKERs"')
    lockers = cursor.fetchall()
    # change array to directory
    dictLocker={}
    for locker in lockers:
        dictLocker[locker[0]] =  locker[1]
    cursor.close()

    # random  registrations
    shuffle(registrations)

    # chores start
    cursor = conn.cursor()
    lastRandomPeople = []
    for registration in registrations:
        prioritys = registration[1].split(',')
        lockerHave = False
        for priority in prioritys:
            if(dictLocker[priority] == None): # find locker belong
                dictLocker[priority] = registration[0]
                cursor.execute('UPDATE\
                                    "LOCKERs"\
                                SET\
                                    "memberId" = {memberId}\
                                    ,"updatedAt" = \'{updatedAt}\'\
                                WHERE\
                                    "lockerNo" = \'{lockerNo}\''.format(memberId=registration[0], 
                                                                        updatedAt=datetime.now(pytz.timezone('Asia/Taipei')),
                                                                        lockerNo=priority))
                conn.commit()
                lockerHave = True
                break
        if(lockerHave == False): # this person didn't get locker
            lastRandomPeople.append(registration)
    cursor.close()

    # last random time(大亂抽時間)
    cursor = conn.cursor()
    for lastRandomPerson in lastRandomPeople:
        for lockerNo in dictLocker:
            if(dictLocker[lockerNo] == None):
                dictLocker[lockerNo] = lastRandomPerson[0]
                cursor.execute('UPDATE\
                                    "LOCKERs"\
                                SET\
                                    "memberId" = {memberId}\
                                    ,"updatedAt" = \'{updatedAt}\'\
                                WHERE\
                                    "lockerNo" = \'{lockerNo}\''.format(memberId=lastRandomPerson[0], 
                                                                        updatedAt=datetime.now(pytz.timezone('Asia/Taipei')),
                                                                        lockerNo=lockerNo))
                conn.commit()
                break
    cursor.close()

    # give data
    cursor = conn.cursor()
    for lockerNo in dictLocker:
            if(dictLocker[lockerNo] != None):
                memberData = {'name':'','phone':'', 'mail':''}
                cursor.execute('SELECT name, phone, email FROM "MEMBERs" WHERE id = {memberId}'.format(memberId=dictLocker[lockerNo]))
                member = cursor.fetchone()
                memberData['name'] = member[0]
                memberData['phone'] = member[1]
                memberData['mail'] = member[2]
                dictLocker[lockerNo] = memberData
    cursor.close()

    conn.close() #db close
    
    print(registrations) # print random registrations
    return dictLocker
