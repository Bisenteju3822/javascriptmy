#include <iostream>
using namespace std;

int calculateRunningTotal(int n, int arr[])
{
  bool zero = false;
  bool three = false;
  int sum = 0;
  int product = 1;

  // Calculate the product and sum of the array
  for (int i = 0; i < n; i++)
  {
    sum += arr[i];
    product *= arr[i];
    if (arr[i] == 0)
    {
      zero = true;
    }
    if (arr[i] == 3)
    {
      three = true;
    }
  }

  // Check if the product is even or odd
  if (product % 2 == 0)
  {
    if (zero)
    {
      return 2 * sum;
    }
    else
    {
      return sum;
    }
  }
  else
  {
    if (three)
    {
      return product + 1;
    }
    else
    {
      return product;
    }
  }
}

int main()
{
  int n;
  cout << "Enter the size of the array: ";
  cin >> n;

  int *arr = new int[n];
  cout << "Enter the array elements: ";
  for (int i = 0; i < n; i++)
  {
    cin >> arr[i];
  }

  int result = calculateRunningTotal(n, arr);
  cout << "Result: " << result << endl;

  // Deallocate the memory
  delete[] arr;

  return 0;
}
