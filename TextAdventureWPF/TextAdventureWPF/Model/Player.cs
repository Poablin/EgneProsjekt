using System.Collections.Generic;
using System.Linq;

namespace TextAdventureWPF.Model
{
    public class Player
    {
        public List<string> PlayerInventory { get; set; }

        public Player()
        {
            PlayerInventory = new List<string>() { "Lockpick", "Dagger" };
        }
        public List<string> GetInventoryInfo()
        {
            return PlayerInventory.ToList();
        }
    }
}