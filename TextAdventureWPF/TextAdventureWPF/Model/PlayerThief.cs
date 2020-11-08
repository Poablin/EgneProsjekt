using System.Collections.Generic;
using System.Linq;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class PlayerThief : IPlayer

    {
        public List<IItem> PlayerInventory { get; set; }

        public PlayerThief()
        {
            PlayerInventory = new List<IItem>() { new ItemGeneric("LockPick", 0), new ItemGeneric("Dagger", 1) };
        }

        public List<string> GetInventoryInfo()
        {
            var list = new List<string>();
            list.AddRange(PlayerInventory.Select(item => $"{item?.ItemName}"));
            return list;
        }
    }
}