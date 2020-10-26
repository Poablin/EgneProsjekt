using System;

namespace RogueLikeTest
{
    class Player : Pixel
    {
        public Player(int x, int y, ConsoleColor color, string symbol) : base(x, y, color, symbol)
        {
        }

        public void Attack(Enemy enemy, int playerx, int playery)
        {
            if (playerx == enemy.GetLocation()[0] && playery == enemy.GetLocation()[1])
            {
                enemy.Die();
                Console.WriteLine(" BONK!");
            }
        }
    }
}
