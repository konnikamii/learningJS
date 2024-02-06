import jwt

public_key = """-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEA50huIHborCmEkJeMfm3qD7M6NStQ1+wJBf3HCb69RXw=
-----END PUBLIC KEY-----"""

token = 'eyJhbGciOiJFZERTQSJ9.eyJpZCI6NjMyLCJuYW1lIjoiQWxleCIsImV4cCI6MTcwNzI1Mjg3MX0.-93SpJXmcuL8ThZIAFStebbJf4IpNvJKHeisMzxgMoAABDnQxiR75TiXLN8smF44RrP2GGUFyI8w6z9Rx_-DBg'

decoded = jwt.decode(token, public_key, algorithms='EdDSA', verify=True)
print(decoded)
