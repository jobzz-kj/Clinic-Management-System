
var roleController = {
    isAdmin : isAdmin,
    isDoctor : isDoctor,
    isLabtechnician : isLabtechnician,
    isFrontoffice : isFrontoffice
}


function isAdmin(){
    if(localStorage.getItem('myToken')){
        var x = localStorage.getItem('myRole');
        if(x == 1){
            return true;
        }
    }
    else{
        return false;
    }
}

function isDoctor(){
    if(localStorage.getItem('myToken')){
        var x = localStorage.getItem('myRole');
        if(x == 2){
            return true;
        }
    }
    else{
        return false;
    }
}

function isFrontoffice(){
    if(localStorage.getItem('myToken')){
        var x = localStorage.getItem('myRole');
        if(x == 3){
            return true;
        }
    }
    else{
        return false;
    }
}

function isLabtechnician(){
    if(localStorage.getItem('myToken')){
        var x = localStorage.getItem('myRole');
        if(x == 4){
            return true;
        }
    }
    else{
        return false;
    }
}

module.exports = roleController;