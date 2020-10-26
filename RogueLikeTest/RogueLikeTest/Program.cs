using System;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;

namespace RogueLikeTest
{
    class Program
    {
        static void Main(string[] args) 
        {

            var player = new Player(1,1, ConsoleColor.Blue, "P");
            var enemy1 = new Enemy(5, 6, ConsoleColor.Red, "E");
            var enemy2 = new Enemy(13, 2, ConsoleColor.Red, "E");
            var enemy3 = new Enemy(15, 3, ConsoleColor.Red, "E");
            var enemy4 = new Enemy(10, 4, ConsoleColor.Red, "E");
            
            while (true)
            {
                player.Show();
                enemy1.Show();
                enemy2.Show();
                enemy3.Show();
                enemy4.Show();
                Console.CursorVisible = false;
                //Console.WriteLine(player.GetLocation()[0]);
                //Console.WriteLine(player.GetLocation()[1]);
                var key = Console.ReadKey();
                player.Move(key.Key);
                player.Attack(enemy1, player.GetLocation()[0], player.GetLocation()[1]);
                player.Attack(enemy2, player.GetLocation()[0], player.GetLocation()[1]);
                player.Attack(enemy3, player.GetLocation()[0], player.GetLocation()[1]);
                player.Attack(enemy4, player.GetLocation()[0], player.GetLocation()[1]);
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