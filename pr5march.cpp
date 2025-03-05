#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool great(int a, int b) {
    return a > b;
}

int main() {
    vector<int> v = {4, 5, 3, 2, 4};

    // Sort in ascending order
    sort(v.begin(), v.end());

    // Print sorted vector
    for (auto p : v) {
        cout << p << "\n";
    }

    // Corrected lambda function
    cout << [](int a, int b) { return a > b; }(4, 20) << "\n";

    // Sort in ascending order using less<int>()
    sort(v.begin(), v.end(), less<int>());

    // Sort in descending order using greater<int>()
    sort(v.begin(), v.end(), greater<int>());

    return 0;
}
