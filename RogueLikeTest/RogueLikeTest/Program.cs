using System;

namespace RogueLikeTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var world = new WorldModel();

            Console.WriteLine(world.CellContent[2]);
        }
    }
}