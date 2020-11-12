using System;
using System.Collections.Generic;
using System.Text;

namespace TextAdventureWPF.Interfaces
{
    internal interface IItemKey : IItem
    {
        public string ScreenUnlockName { get; set; }
        public int DoorUnlockDirectionId { get; set; }
    }
}
