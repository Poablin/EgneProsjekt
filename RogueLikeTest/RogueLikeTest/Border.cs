using System;
using System.Collections.Generic;
using System.Text;

namespace RogueLikeTest
{
    class Border
    {
        private Pixel[] borderX1 = new Pixel[72];
        private Pixel[] borderX2 = new Pixel[72];
        private Pixel[] borderY1 = new Pixel[30];
        private Pixel[] borderY2 = new Pixel[30];
        public Border()
        {
            for (int i = 0; i < 72; i++)
            {
                var pixel1 = new Pixel(i, 0,ConsoleColor.DarkGray,"█");
                var pixel2 = new Pixel(i, 29, ConsoleColor.DarkGray, "█");
                borderX1[i] = pixel1;
                borderX2[i] = pixel2;
            }

            for (int i = 0; i < 30; i++)
            {
                var pixel1 = new Pixel(0, i, ConsoleColor.DarkGray, "█");
                var pixel2 = new Pixel(72, i, ConsoleColor.DarkGray, "█");
                borderY1[i] = pixel1;
                borderY2[i] = pixel2;
            }

        }
        public void Show()
        {
            for (var index = 0; index < 72; index++)
            {
                var pixel1 = borderX1[index];
                var pixel2 = borderX2[index];
                pixel1.Show();
                pixel2.Show();
            }

            for (var index = 0; index < 30; index++)
            {
                var pixel1 = borderY1[index];
                var pixel2 = borderY2[index];
                pixel1.Show();
                pixel2.Show();
            }
        }
    }
}
