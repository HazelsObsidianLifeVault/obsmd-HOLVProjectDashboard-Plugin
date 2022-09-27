import sys, json, numpy as np

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    return json.loads("".join(lines))

def main():
    # Get input data
    inp = read_in()
    # Send result
    print("<p>test</p>")

# Entrypoint
if __name__ == '__main__':
    main()