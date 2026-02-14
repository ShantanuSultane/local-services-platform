# class car:
#     def __init__(self, brand, price):
#         self.brand = brand
#         self.price = price

#     def display(self):
#         print(self.brand, self.price)

# c = car('maruti', 80000)
# c.display()

# n = int(input('enter a num :'))

# if n <=1:
#     print('not prime')

# else:
#     for i in range(2, n):
#         if n%i == 0:
#             print('not prime')
#             break
#     else:
#         print('prime')


# n = int(input('enter the range: '))

# a, b = 0, 1

# for i in range(n):
#     print(a, end=" ")

#     a, b = b, a + b



# n = int(input('enter the number: '))

# temp = n
# rev = 0

# while temp>0:
#     digit = temp % 10
#     rev = rev * 10 + digit
#     temp //= 10
# if rev == n:
#     print('palindrome')
# else:
#     print('not palindrome')


# n = int(input('enter the number: '))

# fact = 1

# for i in range(1, n+1):
#     fact*=i

# print(fact)