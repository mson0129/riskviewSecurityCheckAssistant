document.addEventListener("keydown", function(event){
    if(event.key=='q') {
        window.location='http://128.11.1.150:8080/riskview/security/securityExcCheckResultMng';
    } else if(event.key=='a') {
        window.location='http://128.11.1.150:8080/riskview/security/securityExcCheckAssmntMng';
    } else if(event.key=='s') {
        radios = [
            document.getElementsByName('rdoResult0')[3],
            document.getElementsByName('rdoResult1')[3],
            document.getElementsByName('rdoResult2')[3],
            document.getElementsByName('rdoResult3')[3],
            document.getElementsByName('rdoResult4')[3],
            
            document.getElementsByName('rdoResult5')[3],
            document.getElementsByName('rdoResult6')[3],
            document.getElementsByName('rdoResult7')[3],
            document.getElementsByName('rdoResult8')[3],
            document.getElementsByName('rdoResult9')[3],

            document.getElementsByName('rdoResult10')[3]
        ]
        for(i=0; i<11; i++) {
            radios[i].click();
        }
    } else if(event.key=='d') {
        document.getElementById('uploadFile').click();
    } else if(event.key=='f') {
        document.getElementById('btnComplete').click();
    } else if(event.key=='g') {
        window.location='http://128.11.1.150:8080/riskview/j_spring_security_logout';
    }
});