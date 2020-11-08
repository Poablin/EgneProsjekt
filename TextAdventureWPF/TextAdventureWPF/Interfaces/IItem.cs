using System;
using System.Collections.Generic;
using System.Text;

namespace TextAdventureWPF.Interfaces
{
    public interface IItem
    {
        public string Name { get; set; }
        public int Id { get; set; }
    }
}
