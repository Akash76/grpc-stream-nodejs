// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var employee_pb = require('./employee_pb.js');

function serialize_employee_EmployeeRequest(arg) {
  if (!(arg instanceof employee_pb.EmployeeRequest)) {
    throw new Error('Expected argument of type employee.EmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_EmployeeRequest(buffer_arg) {
  return employee_pb.EmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_EmployeeResponse(arg) {
  if (!(arg instanceof employee_pb.EmployeeResponse)) {
    throw new Error('Expected argument of type employee.EmployeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_EmployeeResponse(buffer_arg) {
  return employee_pb.EmployeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EmployeeService = exports.EmployeeService = {
  paySalary: {
    path: '/employee.Employee/paySalary',
    requestStream: false,
    responseStream: true,
    requestType: employee_pb.EmployeeRequest,
    responseType: employee_pb.EmployeeResponse,
    requestSerialize: serialize_employee_EmployeeRequest,
    requestDeserialize: deserialize_employee_EmployeeRequest,
    responseSerialize: serialize_employee_EmployeeResponse,
    responseDeserialize: deserialize_employee_EmployeeResponse,
  },
};

exports.EmployeeClient = grpc.makeGenericClientConstructor(EmployeeService);
