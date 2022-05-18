const grpc = require('@grpc/grpc-js');
let messages = require("./proto/employee_pb");
let services = require("./proto/employee_grpc_pb");

function main() {
    let client = new services.EmployeeClient('localhost:4500', grpc.credentials.createInsecure());
    let employeeIdList = [1, 10, 2];
    let request = new messages.EmployeeRequest();

    request.setEmployeeidlistList(employeeIdList);
    let call = client.paySalary(request)
    call.on('data', (response) => {
        console.log(response.array);
    });

    call.on('end', function () {
        console.log('All Salaries have been paid');
        process.exit(1)
    });

    call.on('error', (err) => {
        console.log("Error:", err.message)
    })

}

main();