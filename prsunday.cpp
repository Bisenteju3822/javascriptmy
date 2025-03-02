#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;

int main() {
    int s;
    cout << "Enter the size of the array: ";
    cin >> s;

    vector<int> arr(s);

    cout << "Enter the array elements:" << endl;
    for (int i = 0; i < s; i++) {
        cin >> arr[i];
    }

    sort(arr.begin(), arr.end());

    cout << "After sorting the array:" << endl;
    for (int i = 0; i < s; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    cout << "First array element: " << arr.front() << endl;
    cout << "Last array element: " << arr.back() << endl;

    if (s > 1) {
        int secondHighest = arr[s - 2];

        for (int i = s - 2; i >= 0; i--) {
            if (arr[i] != arr.back()) {
                secondHighest = arr[i];
                break;
            }
        }

        cout << "Second highest element: " << secondHighest << endl;

        if (secondHighest == arr.back()) {
            cout << "Array has the second highest element same as the highest." << endl;
        } else {
            cout << "Array has the second highest element." << endl;
        }
    } else {
        cout << "Array has only one element, so no second highest element." << endl;
    }

    return 0;
}

