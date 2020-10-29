using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace RogueLikeTest
{
    class Sprite
    {
        private List<Pixel> _pixels;
        private int dx = 0;
        private int dy = 0;
        public Sprite(List<Pixel> Pixels)
        {
            _pixels = Pixels;
        }

        public void Show()
        {
            foreach (var pixel in _pixels)
            {
                pixel.Show();
            }
        }

        public void Move()
        {
        }
    }
}