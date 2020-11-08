using System;
using System.Collections.Generic;
using System.Text;

namespace TextAdventureWPF.Interfaces
{
    public interface IItem
    {
        public string ItemName { get; set; }
        public int ItemId { get; set; }
    }
}
