package main

import (
	"fmt"
	"net/http"
	"encoding/json"
)

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"status": "ok",
		"service": "nimsforestwebstack API",
		"version": "1.0.0",
	})
}

func main() {
	http.HandleFunc("/", healthHandler)
	http.HandleFunc("/health", healthHandler)
	
	fmt.Println("API server ready on :8080")
	fmt.Println("Endpoints: GET / and GET /health")
	http.ListenAndServe(":8080", nil)
}
