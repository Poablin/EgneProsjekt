using System;
using System.Collections.Generic;

namespace RogueLikeTest
{
    class World
    {
        public World()
        {
            Player = new Player(1, 1);
            Enemies = new List<Enemy>();
            for (int i = 0; i < new Random().Next(5, 10); i++)
            {
                var enemy = new Enemy(new Random().Next(2, 80), new Random().Next(2, 29));
                Enemies.Add(enemy);
            }
        }
        
        public Player Player { get; }
        public List<Enemy> Enemies { get; }
        public Border Border = new Border();

        public void Show()
        {
            Border.Show();
            while (true)
            {
                Console.CursorVisible = false;
                Player.Show();
                foreach (var enemy in Enemies)
                {
                    enemy?.Show();
                }

                var key = Console.ReadKey();
                Player.Move(key.Key);
                for (var index = 0; index < Enemies.Count; index++)
                {
                    if (Enemies[index] != null)
                    {
                        if (Player.GetLocation()[0] == Enemies[index].GetLocation()[0] 
                            && Player.GetLocation()[1] == Enemies[index].GetLocation()[1])
                        {
                            Enemies[index] = null;
                            Console.SetCursorPosition(85, 2);
                            Console.Write("BONK!");
                        }
                    }
                }
            }
        }
    }
}
