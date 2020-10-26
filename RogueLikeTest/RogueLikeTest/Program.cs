using System;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;

namespace RogueLikeTest
{
    class Program
    {
        static void Main(string[] args) 
        {

            var player = new Player(0,0, ConsoleColor.Blue, "P");
            var enemy = new Enemy(5, 6, ConsoleColor.Red, "E");
            
            while (true)
            {
                player.Show();
                enemy.Show();
                Console.CursorTop = 25;
                var key = Console.ReadKey();
                player.Move(key.Key);
            }


            //     █ █ █
            //     var sprite = new Sprite(new[] {
            //     new Pixel(0, 0, ConsoleColor.Green),
            //     new Pixel(1, 0, ConsoleColor.Green),
            //     new Pixel(2, 0, ConsoleColor.Green),
            //     new Pixel(0, 1, ConsoleColor.Green),
            //     new Pixel(1, 1, ConsoleColor.Green),
            //     new Pixel(2, 1, ConsoleColor.Green),

            // });

            // sprite.Show();

            // Console.WriteLine();

            //while (true)
            //{
            //     var command = Console.ReadLine();
            //     if (command == "q")
            //     {
            //         break;
            //     }
            //     sprite.Move();
            //   sprite.Show();
            //}
        }
    }
}