using System;

namespace RogueLikeTest
{
    class Border
    {
        private readonly Pixel[] _borderX1 = new Pixel[82];
        private readonly Pixel[] _borderX2 = new Pixel[82];
        private readonly Pixel[] _borderY1 = new Pixel[30];
        private readonly Pixel[] _borderY2 = new Pixel[30];
        public Border()
        {
            for (int i = 0; i < 82; i++)
            {
                var pixel1 = new Pixel(i, 0,ConsoleColor.DarkGray,"█");
                var pixel2 = new Pixel(i, 29, ConsoleColor.DarkGray, "█");
                _borderX1[i] = pixel1;
                _borderX2[i] = pixel2;
            }

            for (int i = 0; i < 30; i++)
            {
                var pixel1 = new Pixel(0, i, ConsoleColor.DarkGray, "█");
                var pixel2 = new Pixel(82, i, ConsoleColor.DarkGray, "█");
                _borderY1[i] = pixel1;
                _borderY2[i] = pixel2;
            }
        }
        public void Show()
        {
            for (var index = 0; index < 82; index++)
            {
                var pixel1 = _borderX1[index];
                var pixel2 = _borderX2[index];
                pixel1.Show();
                pixel2.Show();
            }

            for (var index = 0; index < 30; index++)
            {
                var pixel1 = _borderY1[index];
                var pixel2 = _borderY2[index];
                pixel1.Show();
                pixel2.Show();
            }
        }
    }
}
