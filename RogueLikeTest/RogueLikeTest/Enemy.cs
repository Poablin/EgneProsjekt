using System;
using System.Collections.Generic;
using System.Text;

namespace RogueLikeTest
{
    class Enemy : Pixel
    {
        public int _x { get; private set; }
        public int _y { get; private set; }
        public Enemy(int x, int y, ConsoleColor color, string symbol) : base(x, y, color, symbol)
        {
            _x = x;
            _y = y;
        }
    }
}
