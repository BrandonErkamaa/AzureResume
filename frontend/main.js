window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi ='https://getresumecountererkamaa.azurewebsites.net/api/GetResumeCounter?code=ZJXF3hAEUo9wpA3_4weNuMuCjUFV6OfarQFKfgIohirKAzFulsyhfQ==';

const getVisitCount = () => {
    let count =30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called fucntion API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
};
