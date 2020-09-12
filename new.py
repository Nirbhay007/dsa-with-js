def crypto():

    keys = 'abcdefghijklmnopqrstuvwxyz !'
    values = keys[-1] + keys[0:-1]

    Encrypted = dict(zip(keys, values))

    Decrypted = dict(zip(values, keys))

    message = input("Print the message you wanna encrypt?  ")
    mode = input("Print the mode , e for encrypt and d for Decrypt?")

    if (mode.lower() == 'e'):
        newMessage = ''.join([Encrypted[i] for i in message.lower()])

    elif(mode.lower() == 'd'):
        newMessage = ''.join([Decrypted[i] for i in message.lower()])

    else:
        print("Please input valid value. ")

    return newMessage


print(crypto())
