# 8 kyu Reversed Strings

# Complete the solution so that it reverses the string passed into it.

# 'world'  =>  'dlrow'
# 'word'   =>  'drow'


#sol one :
def solution(string):
    return string[::-1]

#soln two :
def solution(string):
    newStr = "".join(reversed(string))
    return newStr