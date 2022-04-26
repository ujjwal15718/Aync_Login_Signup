 

const fs=require("fs");
var inp=require('readline-sync');
function login_Signup_Async(){
    var blank=inp.questionInt("enter the number\npress 1 for signup\npress 2 for login\nenter : ")
    if(blank===1){
        return signup();
    }
    else if(blank===2){
        return login();
    }
    function signup(){
        if(fs.existsSync("Bio.txt")){
            let Name=inp.question("enter the name : ")
            let pass=inp.question("enter the password : ")
            let i=true;
            fs.readFile("Bio.txt", 'utf-8',(err,data)=>{
                if((data.includes(Name)) && data.includes(pass)){
                    console.log("!!!!!!!!!!Name is registered try from another name and password!!!!!!!!!")
                }
                else{
                    let city=inp.question("enter the city : ")
                    fs.appendFile("Bio.txt",`${Name},${city},${pass}${"\n"}`,(data)=>{
                        console.log("!!!!!!!!!!!!successfuly registered!!!!!!!!!")
                    })
                    
                }
                
                
            })
        }
        else{
            fs.writeFileSync("Bio.txt")
                console.log("!!!!!!!!!1File created!!!!!!!!1")
                signup()

            
        }
        
    }
    function login(){
        Name=inp.question("enter the name : ")
        pass=inp.question("enter the password : ")
        fs.readFile("Bio.txt","utf-8",(err,data)=>{
            
            let uerData = data.split('\n');
            for (d of uerData) {
                if (d.includes(Name) && d.includes(pass)) {
                    console.log(d);
                    break
                     
                }
            }
        })
        
    }
     
     
}
login_Signup_Async()
