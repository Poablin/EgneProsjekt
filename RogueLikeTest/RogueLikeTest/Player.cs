using System;
using System.Collections.Generic;
using System.Text;

namespace RogueLikeTest
{
    class Player : Pixel
    {
        public int X { get; private set; }
        public int Y { get; private set; }
        public Player(int x, int y, ConsoleColor color, string symbol) : base(x, y, color, symbol)
        {
            X = x;
            Y = y;
        }

        public void Attack(Enemy enemy)
        {
            enemy = null;
        }
    }
}
