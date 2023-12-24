const memberModel = require("../models/members.model");
const myHandler=require('./handlers')
const asyncHandler = require('express-async-handler');

module.exports.addMember=myHandler.addOne(memberModel)
module.exports.updateMember=myHandler.updateOne(memberModel)
module.exports.deleteMember=myHandler.deleteOne(memberModel)
module.exports.getAllMembers=myHandler.getALL(memberModel)
module.exports.deleteList=myHandler.deleteListbyId(memberModel)
const cloudinary=require('cloudinary');
cloudinary.config({
    cloud_name: "donwkw0ny",
    api_key: "948569869913115",
    api_secret: "YVQgJVnpcyBd0z2_OT_1RN2t7uI"
  });
module.exports.addTest=asyncHandler(async(req,res)=>{
 
  const names = [
    { rank: 1, name: 'Aboul Ella Hassanien Ali' },
    { rank: 2, name: 'Ashraf Darwish' },
    { rank: 3, name: 'Yaseen Elshaier' },
    { rank: 4, name: 'Sally M.Elghamrawy' },
    { rank: 5, name: 'Mona Soliman' },
    { rank: 6, name: 'Lobna Mohamed Aaboelmagd' },
    { rank: 7, name: 'Mohamed Torky' },
    { rank: 8, name: 'Sara Abdelghafar Ahmed' },
    { rank: 9, name: 'Mamdouh Mohammed Gomaa' },
    { rank: 10, name: 'Eman Ahmed Sayed Ahmed' },
    { rank: 11, name: 'Heba Mohammed Moustafa Askr' },
    { rank: 12, name: 'Sara A.Shehab' },
    { rank: 13, name: 'Noha MM. Abdelnapi' },
    { rank: 14, name: 'Asmaa Saad Abdelgwad Abdo' },
    { rank: 15, name: 'Maha Fawzy Hany' },
    { rank: 16, name: 'Noha Emad El-Sayad' },
    { rank: 17, name: 'Lamiaa ElFadaly' },
    { rank: 18, name: 'Heba Abdelwhab Yahai Moustafa' },
    { rank: 19, name: 'Lamiaa ElFadaly' },
    { rank: 20, name: 'Lamia nabil mahdy' },
    { rank: 21, name: 'Gehad Ismail Sayed' },
    { rank: 22, name: 'Doaa Mohey Eldin Mohamed' },
    { rank: 23, name: 'Mohammad Zakaraia' },
    { rank: 24, name: 'Sameh Hassanien Basha' },
    { rank: 25, name: 'kamel mohamed tawfic' },
    { rank: 26, name: 'Enas Elgeldawi' },
    { rank: 27, name: 'Zeinab Mohammed Ahmed Mahran' },
    { rank: 28, name: 'Mohammad Zakaraia Rashad' },
    { rank: 29, name: 'Rabab Hamed M Aly' },
    { rank: 30, name: 'Rizk Masoud Rizk-Allah' },
    { rank: 31, name: 'Heba Mamdouh Farghaly' },
    { rank: 32, name: 'Abdelghafar Refat Elshenawy' },
    { rank: 33, name: 'Alaa Abdelfattah Abdelmotti Orabi' },
    { rank: 34, name: 'Rabab Hamed M. Aly' },
    { rank: 35, name: 'Eman Ahmed' },
    { rank: 36, name: 'Mohammed Ahmed Farahat' },
    { rank: 37, name: 'Wessam Essam Elssawy' },
    { rank: 38, name: 'Eman Ibrahim' },
    { rank: 39, name: 'Ola Omar Soliman' },
    { rank: 41, name: 'Dalia Ezzat' },
    { rank: 42, name: 'Aya allah adel ahmed' },
    { rank: 43, name: 'Mahmoud Mohamed abdel-salam' },
    { rank: 44, name: 'Ghada Dahy Fathy' },
    { rank: 45, name: 'Mohammed Mostafa Ahmed Mohammed' },
    { rank: 46, name: 'Walid Hamdy Kamel' },
    { rank: 47, name: 'Samar Mahmoud Abd El-monem' },
    { rank: 48, name: 'Abdelmonaim fakhry kamel mohamad' },
    { rank: 49, name: 'Ahmed mohamed elsayed elsheshetawy' },
    { rank: 50, name: 'Fatema Samir Ahmed' },
    { rank: 51, name: 'Yara Yasser Said' }
  
  ];
  
  for(let i=0;i<names.length;i++)
  {
    
   const user= await memberModel.findOne({name:names[i].name})
   if(user)
   {
    await memberModel.findOneAndUpdate({name:names[i].name},{rank:names[i].rank})
    
  }

  }
  res.send("done");

  })
