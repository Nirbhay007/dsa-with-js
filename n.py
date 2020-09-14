def feb(n):

    if (n <= 1):
        return n

    res = []
    for i in range(n):
        res.append(i+(i-1))

    return (res[-1]+res[-2])


print(feb(5))
