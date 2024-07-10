var employeeIds={GBT1020:"https://sreebharathi-60030675689.development.catalystserverless.in/app/index.html"}
function SearchPage(){
    var name = document.getElementById("search").value;
    if (employeeIds.hasOwnProperty(name)) {
        window.location.href = employeeIds[name];
    } else {
        console.log("Employee not found");
    }
}
