// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_employee_pb = require('../proto/employee_pb.js');

function serialize_employee_EmployeeRequest(arg) {
  if (!(arg instanceof proto_employee_pb.EmployeeRequest)) {
    throw new Error('Expected argument of type employee.EmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_EmployeeRequest(buffer_arg) {
  return proto_employee_pb.EmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_EmployeeResponse(arg) {
  if (!(arg instanceof proto_employee_pb.EmployeeResponse)) {
    throw new Error('Expected argument of type employee.EmployeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_EmployeeResponse(buffer_arg) {
  return proto_employee_pb.EmployeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EmployeeService = exports.EmployeeService = {
  paySalary: {
    path: '/employee.Employee/PaySalary',
    requestStream: false,
    responseStream: false,
    requestType: proto_employee_pb.EmployeeRequest,
    responseType: proto_employee_pb.EmployeeResponse,
    requestSerialize: serialize_employee_EmployeeRequest,
    requestDeserialize: deserialize_employee_EmployeeRequest,
    responseSerialize: serialize_employee_EmployeeResponse,
    responseDeserialize: deserialize_employee_EmployeeResponse,
  },
};

exports.EmployeeClient = grpc.makeGenericClientConstructor(EmployeeService);
