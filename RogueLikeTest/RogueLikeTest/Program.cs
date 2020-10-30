using System;

namespace RogueLikeTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var world = new World();

            Console.WriteLine("******************************  Super Roguelike ******************************\n\n");
            Console.WriteLine("                             Press enter to start!                                ");
            Console.CursorVisible = false;

            bool gameStarted = false;

            while (gameStarted == false)
            {
                var key = Console.ReadKey();
                if (key.Key != ConsoleKey.Enter) continue;
                gameStarted = true;
                Console.Clear();
                world.Show();
            }

            //     █ █ █
        }
    }
}