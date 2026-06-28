
# 7 kyu Disemvowel Trolls

# Description:
# Trolls are attacking your comment section!

# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

# Your task is to write a function that takes a string and return a new string with all vowels removed.

# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# Note: for this kata y isn't considered a vowel.

# StringsRegular ExpressionsFundamentals


def disemvowel(string):
    newStr = ""
    
    for i in string:
              if i != "a" and i != "e" and i != "i" and i != "o" and i != "u":
                if i != "A" and i != "E" and i != "I" and i != "O" and i != "U":
                    newStr += i 
    return newStr