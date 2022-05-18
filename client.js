const grpc = require('@grpc/grpc-js');
let messages = require("./proto/employee_pb");
let services = require("./proto/employee_grpc_pb");

async function main() {
    let client = new services.EmployeeClient('localhost:50051', grpc.credentials.createInsecure());
    let employeeId = 1;
    let request = new messages.EmployeeRequest();
    request.setEmployeeidlist(employeeId);

    client.paySalary(request, (res, err) => {
        console.log(err)
        process.exit(1)
    })
}

main();