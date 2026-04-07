#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"✅ Servidor rodando em: http://localhost:{PORT}")
    print(f"📂 Pasta: {os.getcwd()}")
    print(f"🌐 Abra seu navegador e acesse: http://localhost:{PORT}")
    print("\n⏹️  Pressione Ctrl+C para parar o servidor\n")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✌️  Servidor parado!")
        sys.exit(0)
