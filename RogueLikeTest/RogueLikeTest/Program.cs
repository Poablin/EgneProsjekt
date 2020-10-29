using System;
using System.Runtime.InteropServices;

namespace RogueLikeTest
{
    class Program
    {
        static void Main(string[] args)
        {

            var world = new World();

            Console.WriteLine("****************  Super Roguelike *********************`\n\n");
            Console.WriteLine("                Press enter to start!                       ");
            
            Console.CursorVisible = false;
            var key = Console.ReadKey();
            if (key.Key == ConsoleKey.Enter)
            {
                Console.Clear();
                world.Show();
            }

            //     █ █ █
        }
    }
}