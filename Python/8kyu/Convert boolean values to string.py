# 8 kyu Convert boolean values to strings 'Yes' or 'No'.
# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

# soln one 
def bool_to_word(boolean):
    if boolean :
        return "Yes"
    else: 
        return "No"
    
    #soln two
def bool_to_word(boolean):
    return "Yes" if boolean  else "No"