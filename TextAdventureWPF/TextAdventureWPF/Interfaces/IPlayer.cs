using System.Collections.Generic;
using TextAdventureWPF.Model;

namespace TextAdventureWPF.Interfaces
{
    public interface IPlayer
    {
        public List<IItem> PlayerInventory { get; set; }
        public List<string> GetInventoryInfo();
    }
}
