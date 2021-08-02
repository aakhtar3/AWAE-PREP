/*
 
Create a method that takes a string and returns a
string with its letters in alphabetical order. 
 
*/

import java.util.Arrays;

public class AlphabetSoup
{
  public static String alphabetSoup(String s)
  {
    char[] str = s.toCharArray();
    Arrays.sort(str);

    String ret = new String(str);

    return ret;
  }

  public static void main(String[] args)
  {
    System.out.printf("%s\n", alphabetSoup("hello"));
  }
}
