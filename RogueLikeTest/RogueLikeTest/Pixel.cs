using System;

namespace RogueLikeTest
{
    internal class Pixel
    {
        private int X { get; set; }
        private int Y { get; set; }
        private ConsoleColor Color { get; set; }
        private string Symbol { get; set; }

        public Pixel(int x, int y, ConsoleColor color, string symbol)
        {
            X = x;
            Y = y;
            Color = color;
            Symbol = symbol;
        }

        public int[] GetLocation()
        {
            int[] location = new int[2];
            location[0] = X;
            location[1] = Y;
            return location;
        }

        public void Show()
        {
            Console.CursorLeft = X;
            Console.CursorTop = Y;
            Console.ForegroundColor = Color;
            Console.Write(Symbol);
        }

        public void Move(ConsoleKey key)
        {
            switch (key)
            {
                case ConsoleKey.RightArrow:
                    Console.SetCursorPosition(X, Y);
                    Console.Write(new string(' ', Console.WindowWidth));
                    X++;
                    Show();
                    break;
                case ConsoleKey.LeftArrow:
                    Console.SetCursorPosition(X, Y);
                    Console.Write(new string(' ', Console.WindowWidth));
                    X--;
                    Show();
                    break;
                case ConsoleKey.UpArrow:
                    Console.SetCursorPosition(X, Y);
                    Console.Write(new string(' ', Console.WindowWidth));
                    Y--;
                    Show();
                    break;
                case ConsoleKey.DownArrow:
                    Console.SetCursorPosition(X, Y);
                    Console.Write(new string(' ', Console.WindowWidth));
                    Y++;
                    Show();
                    break;
            }
        }
    }
}