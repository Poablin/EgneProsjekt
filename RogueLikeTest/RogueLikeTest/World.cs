using System;
using System.Collections.Generic;

namespace RogueLikeTest
{
    class World
    {
        public World()
        {
            _player = new Player(1, 1);
            _enemies = new List<Enemy>();
            for (int i = 0; i < 5; i++)
            {
                var enemy = new Enemy(new Random().Next(2, 20), new Random().Next(2, 20));
                _enemies.Add(enemy);
            }
        }
        public void Show()
        {
            while (true)
            {
                Console.CursorVisible = false;
                _player.Show();
                foreach (var enemy in _enemies)
                {
                    enemy?.Show();
                }

                var key = Console.ReadKey();
                _player.Move(key.Key);
                for (var index = 0; index < _enemies.Count; index++)
                {
                    if (_enemies[index] != null)
                    {
                        if (_player.GetLocation()[0] == _enemies[index].GetLocation()[0] &&
                            _player.GetLocation()[1] == _enemies[index].GetLocation()[1])
                        {
                            _enemies[index] = null;
                            Console.WriteLine(" BONK!");
                        }
                    }

                }
            }
        }
        public Player _player { get; private set; }
        public List<Enemy> _enemies { get; private set; }
    }
}
