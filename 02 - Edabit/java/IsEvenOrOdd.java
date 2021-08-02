/*
Create a method that takes an integer as an argument and returns
"even" for even integers and "odd" for odd integers.
*/
public class IsEvenOrOdd {
  public static String isEvenOrOdd(int num) {
    return ((num % 2) == 0) ? "even" : "odd";
  }

  public static void main(String[] args) {
    System.out.printf("%s\n", isEvenOrOdd(3));
  }
}
