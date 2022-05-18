package main

import (
	"golang.org/x/net/context"
	"flag"
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc"
	pb "github.com/employee/proto"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

type server struct {
	pb.UnimplementedEmployeeServer
}

func (s *server) PaySalary(ctx context.Context, in *pb.EmployeeRequest) (*pb.EmployeeResponse, error) {
	return &pb.EmployeeResponse{Message: "HIiiii"}, nil
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterEmployeeServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}