using System.Collections.Generic;

namespace TextAdventureWPF.Interfaces
{
    public interface IPlayer
    {
        public List<string> PlayerInventory { get; set; }

        public List<string> GetInventoryInfo();
    }
}
