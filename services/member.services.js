const memberModel = require("../models/members.model");
const myHandler=require('./handlers')
const asyncHandler = require('express-async-handler');

module.exports.addMember=myHandler.addOne(memberModel)
module.exports.updateMember=myHandler.updateOne(memberModel)
module.exports.deleteMember=myHandler.deleteOne(memberModel)
module.exports.getAllMembers=myHandler.getALL(memberModel)
module.exports.addTest=asyncHandler(async(req,res)=>{
    const data = [
        { name: 'Aboul Ella Hassanien Ali', degree: 'Founder and Chair of SRGE', affiliation: 'Faculty of Computers & Artificial Intelligence - Cairo University', photo: '' },
        { name: 'Ashraf Darwish', degree: 'Professor of Computer Science', affiliation: 'Faculty of Science, Helwan University, Cairo, Egypt', photo: '' },
        { name: 'Yaseen Elshaier', degree: 'Professor', affiliation: 'Faculty of pharmacy, University of Sadat City', photo: '' },
        { name: 'Sally M.Elghamrawy', degree: 'Associate Professor', affiliation: 'Misr higher institute for engineering and technology', photo: '' },
        { name: 'Mona Soliman', degree: 'Associate Professor', affiliation: 'Faculty of computers and Artificial Intelligence, Cairo University', photo: '' },
        { name: 'Lobna Mohamed Aaboelmagd', degree: 'Associate Professor', affiliation: 'Misr Higher institute for commerce & computer, El-Mansoura University', photo: '' },
        { name: 'Mohamed Torky', degree: 'Assistant Professor (PhD degree)', affiliation: 'Faculty of Artificial Intelligence, Egyptian Russian University', photo: '' },
        { name: 'Sara Abdelghafar Ahmed', degree: 'Assistant Professor (PhD degree)', affiliation: 'Canadian International College (CIC)', photo: '' },
        { name: 'Mamdouh Mohammed Gomaa', degree: 'Assistant Professor (PhD degree)', affiliation: 'Computer Science Department- Faculty of Science- Minia University', photo: '' }
      ];
      
      
       await memberModel.insertMany(data);

       res.send("done");
    
      
    })


 // to get all InternationalConf belongs to an category

