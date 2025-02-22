#include<iostream>
using namespace std;

template <typename T2, typename T1>
T1 sum(T2 a, T1 b) {
    return a + b;
}

template <typename T2, typename T1>
T1 product(T2 a, T1 b) {
    return a * b;
}

int main() {
    int a;
    int b;
    cout << "Enter a and b: " << endl;
    cin >> a >> b;
    
    cout << "Sum: " << sum(a, b) << endl;
    cout << "Product: " << product(a, b) << endl;
    
    return 0;
}
