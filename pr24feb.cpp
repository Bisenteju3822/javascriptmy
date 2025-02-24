#include<iostream>
using namespace std;

// Template class definition
template <typename t1, typename t2>
class Sum {
   t1 a1;
   t2 a2;
public:
   // Constructor with initialization list
   Sum(t1 b1, t2 b2) : a1(b1), a2(b2) {}

   // Member function to add the two values
   auto add() {
      cout << a1 + a2 << endl;
   }
};

int main() {
   int a;
    double b;
   cin >> a >> b;

   // Creating an object of Sum with the appropriate types
   Sum<int, int> ob(a, b);
   
   // Calling the add function
   ob.add();

   return 0;
}
