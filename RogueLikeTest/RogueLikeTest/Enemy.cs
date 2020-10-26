using System;
using System.Collections.Generic;
using System.Text;

namespace RogueLikeTest
{
    class Enemy : Pixel
    {
        public Enemy(int x, int y, ConsoleColor color, string symbol) : base(x, y, color, symbol)
        {
        }
    }
}
