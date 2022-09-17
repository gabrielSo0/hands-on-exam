const bubblesort = (a,N) => {
    let i=j=v=0;

    for (i=1; i < N; i++)
    {
        v = a[i];
        j = i;

        while (j > 0 && a[j-1] > v)
        {
            a[j] = a[j-1];
            j--;
        };

        a[j] = v;
    }
};

var x = [9,4,5,2,1,6,7,0,3];

bubblesort(x,9);

console.log("Input after bubble sort: " + x.reverse());