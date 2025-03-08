#include<iostream>
#include<bits/stdc++.h>
using namespace std;

bool valid(string s) {
    stack<char> st;
    bool r = true;
    for(int i = 0; i < s.size(); i++) {
        if(s[i] == '{' || s[i] == '(' || s[i] == '[') {
            st.push(s[i]);
        } else if(s[i] == ']') {
            if(!st.empty() && st.top() == '[') {
                st.pop();
            } else {
                r = false;
                break;
            }
        } else if(s[i] == ')') {
            if(!st.empty() && st.top() == '(') {
                st.pop();
            } else {
                r = false;
                break;
            }
        } else if(s[i] == '}') {
            if(!st.empty() && st.top() == '{') {
                st.pop();
            } else {
                r = false;
                break;
            }
        }
    }
    if(!st.empty()) {
        return false;
    } else {
        return r;
    }
}

int main() {
    string s;
    cout << "Enter the string" << endl;
    cin >> s;

    if(valid(s)) {
        cout << "valid";
    } else {
        cout << "invalid";
    }

    return 0;
}
