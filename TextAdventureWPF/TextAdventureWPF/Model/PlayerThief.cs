using System.Collections.Generic;
using System.Linq;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class PlayerThief : IPlayer

    {
        public List<Item> PlayerInventory { get; set; }

        public PlayerThief()
        {
            PlayerInventory = new List<Item>() { new Item("LockPick", 0), new Item("Dagger", 1) };
        }

        public List<string> GetInventoryInfo()
        {
            var list = new List<string>();
            list.AddRange(PlayerInventory.Select(item => $"{item?.name}"));
            return list;
        }
    }
}