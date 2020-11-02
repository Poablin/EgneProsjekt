using System;
using System.Collections.Generic;

namespace TextAdventureWPF.Model
{
    public class Player
    {
        public int PlayerHealth { get; set; }
        public List<string> PlayerInventory { get; set; }

        public Player()
        {
            PlayerInventory = new List<string>() {"Sword", "Leather Armor"};
        }

        public List<string> GetInventoryInfo()
        {
            int count = 0;
            var list = new List<string>();
            foreach (var thing in PlayerInventory)
            {
                list.Add(thing);
            }

            return list;
        }
    }
}