using System;

namespace RogueLikeTest
{
    class Room
    {
        private readonly Pixel[] _roomX1 = new Pixel[30];
        private readonly Pixel[] _roomX2 = new Pixel[30];
        private readonly Pixel[] _roomY1 = new Pixel[30];
        private readonly Pixel[] _roomY2 = new Pixel[30];
        public Room()
        {
            for (int i = 0; i < 82; i++)
            {
                var pixel1 = new Pixel(i, 0, ConsoleColor.DarkGray, "█");
                var pixel2 = new Pixel(i, 29, ConsoleColor.DarkGray, "█");
                var pixel3 = new Pixel(0, i, ConsoleColor.DarkGray, "█");
                var pixel4 = new Pixel(30, i, ConsoleColor.DarkGray, "█");
                _roomY1[i] = pixel1;
                _roomY2[i] = pixel2;
                _roomX1[i] = pixel3;
                _roomX2[i] = pixel4;

            }
        }
    }
}
