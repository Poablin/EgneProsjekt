using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;

namespace RogueLikeTest
{
    class World
    {
        public Player _player { get; private set; }
        public List<Enemy> _enemies { get; private set; }
        

        public World()
        {
            _player = new Player(1, 1);
            _enemies = new List<Enemy>();
            for (int i = 0; i < 5; i++)
            {
                var enemy = new Enemy(new Random().Next(2, 20), new Random().Next(2, 20));
                _enemies.Add(enemy);
            }

            //_enemies.Add(new Enemy(5, 6, ConsoleColor.Red, "E"));
            //_enemies.Add(new Enemy(5, 6, ConsoleColor.Red, "E"));
            //_enemies.Add(new Enemy(5, 6, ConsoleColor.Red, "E"));
            //_enemies.Add(new Enemy(5, 6, ConsoleColor.Red, "E"));
        }
    }
}
