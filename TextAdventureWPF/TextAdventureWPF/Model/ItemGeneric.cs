using System;
using System.Collections.Generic;
using System.Text;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class ItemGeneric : IItem
    {
        public string Name { get; set; }
        public int Id { get; set; }

        public ItemGeneric(string name, int id)
        {
            Name = name;
            Id = id;
        }
    }
}
