#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
    if len(array) > min_size or min_size < 0:
        return array
    else:
        while len(array) < min_size:
            array.append(value)
    return array