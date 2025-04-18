#!/usr/bin/env python3
import http.server
import socketserver
import os
from urllib.parse import urlparse, parse_qs

PORT = 8000

class VentureStarterHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL
        parsed_url = urlparse(self.path)
        path = parsed_url.path
        
        # Handle root path
        if path == '/':
            self.path = '/index.html'
        
        # Handle other paths
        if path.endswith('.html'):
            if not os.path.exists('.' + path):
                self.path = '/404.html'
        
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

def main():
    print(f"Starting VentureStarter server on port {PORT}")
    print(f"Visit http://localhost:{PORT} in your browser")
    print("Press Ctrl+C to stop the server")
    
    with socketserver.TCPServer(("", PORT), VentureStarterHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")
            httpd.server_close()

if __name__ == "__main__":
    main() 