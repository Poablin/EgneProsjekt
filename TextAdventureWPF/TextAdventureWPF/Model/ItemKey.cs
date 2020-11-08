using System;
using System.Collections.Generic;
using System.Text;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class ItemKey : IItem, IItemKey
    {
        public string ItemName { get; set; }
        public int ItemId { get; set; }
        public string ScreenUnlockName { get; set; }
        public int DoorUnlockDirectionId { get; set; }

        public ItemKey(string name, int id, string screenUnlockName, int doorUnlockDirectionId)
        {
            ItemName = name;
            ItemId = id;
            ScreenUnlockName = screenUnlockName;
            DoorUnlockDirectionId = doorUnlockDirectionId;
        }
    }
}
