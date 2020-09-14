# def crypto():

#     keys = 'abcdefghijklmnopqrstuvwxyz !'
#     values = keys[-1] + keys[0:-1]

#     Encrypted = dict(zip(keys, values))

#     Decrypted = dict(zip(values, keys))

#     message = input("Print the message you wanna encrypt?  ")
#     mode = input("Print the mode , e for encrypt and d for Decrypt?")

#     if (mode.lower() == 'e'):
#         newMessage = ''.join([Encrypted[i] for i in message.lower()])

#     elif(mode.lower() == 'd'):
#         newMessage = ''.join([Decrypted[i] for i in message.lower()])

#     else:
#         print("Please input valid value. ")

#     return newMessage


# print(crypto())

a = int(input())
b = int(input())


def gcd(p, q):

    if q == 0:
        return p
    else:
        return gcd(q, p % q)


print(gcd(a, b))


# Stress test
# from random import randint
# def max_prod_stress(N,M):
#     while True:
#         n = randint(2,N)
#         A = [None]*n
#         for i in range(n):
#             A[i] = randint(0,M)
#         print(A)
#         result1 = max_prod_naive(A)
#         result2 = max_prod_fast(A)
#         if result1==result2:
#             print('OK')
#         else:
#             print('Wrong answer:',result1,result2)
#             return
# max_prod_stress(5,100)
