# 8 kyu String repeat

# Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

# Examples (input -> output)
# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"




def repeat_str(repeat, string):
    str = ''
    for i in range(0,repeat):
        str += string
        
    return str