using System;

namespace RogueLikeTest
{
    internal class Pixel
    {
        private int _x { get; set; }
        private int _y { get; set; }
        private ConsoleColor _color { get; set; }
        private string _symbol { get; set; }

        public Pixel(int x, int y, ConsoleColor color, string symbol)
        {
            _x = x;
            _y = y;
            _color = color;
            _symbol = symbol;
        }

        public void Show()
        {
            Console.CursorLeft = _x;
            Console.CursorTop = _y;
            Console.ForegroundColor = _color;
            Console.Write(_symbol);
        }

        public void Move(ConsoleKey key)
        {
            if (key == ConsoleKey.RightArrow)
            {
                Console.Clear();
                _x++;
                Show();
            }
            else if (key == ConsoleKey.LeftArrow)
            {
                Console.Clear();
                _x--;
                Show();
            }
            else if (key == ConsoleKey.UpArrow)
            {
                Console.Clear();
                _y--;
                Show();
            }
            else if (key == ConsoleKey.DownArrow)
            {
                Console.Clear();
                _y++;
                Show();
            }
        }
    }
}