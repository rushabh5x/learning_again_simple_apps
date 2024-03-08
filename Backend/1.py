import re

message="welcome to Mysore"

list = message.split()
d = {i : len(list[i]) for i in range(len(list))}
print(d)
