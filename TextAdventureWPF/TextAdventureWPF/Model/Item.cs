using System;
using System.Collections.Generic;
using System.Text;

namespace TextAdventureWPF.Model
{
    public class Item
    {
        public string name;
        public int id;

        public Item(string name, int id)
        {
            this.name = name;
            this.id = id;
        }
    }
}
