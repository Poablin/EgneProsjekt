using System;

namespace RogueLikeTest
{
    class Player : Pixel
    {
        public Player(int x, int y) : base(x, y, ConsoleColor.Blue, "P")
        {
        }

        public void Attack(ref Enemy enemy, int playerx, int playery)
        {
            if (playerx == enemy.GetLocation()[0] && playery == enemy.GetLocation()[1])
            {
                enemy = null;
                Console.WriteLine(" BONK!");
            }
        }
    }
}
