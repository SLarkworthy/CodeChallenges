# A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation. 

#For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

# A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

# Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

# Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

class Solution(object):
    def removeOuterParentheses(self, S):
        list_stack = []
        count = 0
        for char in S:
            if char == "(":
                if count > 0:
                    list_stack.append(char)
                count += 1
            if char == ")":
                if count > 1:
                    list_stack.append(char)
                count -= 1
        return "".join(list_stack)

# learned how to use join! It's a bit weird compared to javascript