const t: [number, string, number] = [0, 'a', 1];

t.push(2); //can't use
t.map(x => {
    switch (typeof x) {
        case 'string':
            break;
    }
});

const [m, ...k] = t;