using System;

namespace InterlockIncrementTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            for (int i = 0; i < 20; i++)
            {
                if (i%2 == 0)
                {
                    var sub = new Sub2();
                    sub.Foo();
                }
                else
                {
                    var sub = new Sub1();
                    sub.Foo();
                }
            }

            Console.ReadLine();
        }
    }
}
