using System;

namespace RogueLikeTest
{
    internal class Pixel 
    {
        private int X { get; set; }
        private int Y { get; set; }
        private ConsoleColor Color { get; }
        private string Symbol { get; }

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
            if (key == ConsoleKey.RightArrow)
            {
                if(X < 100) 
                {
                    Console.SetCursorPosition(X, Y);
                    Console.Write(new string(' ', 1));
                    X++;
                    Show();
                }

            }
            else if (key == ConsoleKey.LeftArrow)
            {
                if (X > 1)
                {
                    Console.SetCursorPosition(X, Y);
                    Console.Write(new string(' ', 1));
                    X--;
                    Show();
                }
            }
            else if (key == ConsoleKey.UpArrow)
            {
                if(Y > 1) {
                    Console.SetCursorPosition(X, Y);
                    Console.Write(new string(' ', 1));
                    Y--;
                    Show();
                }
            }
            else if (key == ConsoleKey.DownArrow)
            {
                if (Y < 23) 
                {
                    Console.SetCursorPosition(X, Y);
                    Console.Write(new string(' ', 1));
                    Y++;
                    Show();
                }
            }
        }
    }
}