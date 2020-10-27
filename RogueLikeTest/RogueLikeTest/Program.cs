using System;
using System.Collections.Generic;

namespace RogueLikeTest
{
    class Program
    {
        static void Main(string[] args)
        {

            var world = new World();

            while (true)
            {
                Console.CursorVisible = false;
                world._player.Show();
                foreach (var enemy in world._enemies)
                {
                    enemy?.Show();
                }
                var key = Console.ReadKey();
                world._player.Move(key.Key);
                for (var index = 0; index < world._enemies.Count; index++)
                {
                    if (world._enemies[index] != null)
                    {
                        if (world._player.GetLocation()[0] == world._enemies[index].GetLocation()[0] &&
                            world._player.GetLocation()[1] == world._enemies[index].GetLocation()[1])
                        {
                            world._enemies[index] = null;
                            Console.WriteLine(" BONK!");
                        }
                    }

                }
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