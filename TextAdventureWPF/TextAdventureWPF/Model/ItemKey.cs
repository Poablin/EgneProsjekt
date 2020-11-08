using System;
using System.Collections.Generic;
using System.Text;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class ItemKey : IItem, IItemKey
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public string UnlockName { get; set; }
        public int DoorDirectionId { get; set; }

        public ItemKey(string name, int id, string unlockName, int doorDirectionId)
        {
            Name = name;
            Id = id;
            UnlockName = unlockName;
            DoorDirectionId = doorDirectionId;
        }
    }
}
