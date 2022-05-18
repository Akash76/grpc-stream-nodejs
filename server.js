const grpc = require('@grpc/grpc-js');
const _ = require("lodash");
let { employees } = require("./data.js");

let messages = require("./proto/employee_pb");
let services = require("./proto/employee_grpc_pb");

function paySalary(call) {
    let employeeIdList = call.request.getEmployeeidlistList();
    let reply = new messages.EmployeeResponse();

    _.each(employeeIdList, function (employeeId) {
        let employee = _.find(employees, { id: employeeId });
        console.log(`Sending details of employee with id: ${employeeId}`);

        let responseMessage
        if (employee != null) {
            responseMessage = "Salary paid for ".concat(
                employee.firstName,
                ", ",
                employee.lastName
            );
            reply.setMessage(responseMessage);
            call.write(reply)
            // call.write({ message: responseMessage });
        } else {
            responseMessage = "Employee with Id " + employeeId + " not found in record",
            reply.setMessage(responseMessage);
            call.write(reply)
        }
    });

    call.end();
};

function main() {
    let server = new grpc.Server();
    server.addService(services.EmployeeService,
        { paySalary: paySalary }
    );
    server.bindAsync('0.0.0.0:4500', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
}

main();