using System;

namespace RogueLikeTest
{
    class Enemy : Pixel
    {
        public Enemy(int x, int y) : base(x, y, ConsoleColor.Red, "E")
        {
        }
    }
}
