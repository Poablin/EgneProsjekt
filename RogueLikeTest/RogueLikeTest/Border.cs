﻿using System;
using System.Collections.Generic;
using System.Text;

namespace RogueLikeTest
{
    class Border
    {
        private Pixel[] borderX1 = new Pixel[102];
        private Pixel[] borderX2 = new Pixel[102];
        private Pixel[] borderY1 = new Pixel[25];
        private Pixel[] borderY2 = new Pixel[25];
        public Border()
        {
            for (int i = 0; i < 102; i++)
            {
                var pixel1 = new Pixel(i, 0,ConsoleColor.DarkGray,"█");
                var pixel2 = new Pixel(i, 24, ConsoleColor.DarkGray, "█");
                borderX1[i] = pixel1;
                borderX2[i] = pixel2;
            }

            for (int i = 0; i < 25; i++)
            {
                var pixel1 = new Pixel(0, i, ConsoleColor.DarkGray, "█");
                var pixel2 = new Pixel(101, i, ConsoleColor.DarkGray, "█");
                borderY1[i] = pixel1;
                borderY2[i] = pixel2;
            }

        }
        public void Show()
        {
            for (var index = 0; index < 102; index++)
            {
                var pixel1 = borderX1[index];
                var pixel2 = borderX2[index];
                pixel1.Show();
                pixel2.Show();
            }

            for (var index = 0; index < 25; index++)
            {
                var pixel1 = borderY1[index];
                var pixel2 = borderY2[index];
                pixel1.Show();
                pixel2.Show();
            }
        }
    }
}
