﻿using System;
using System.Collections.Generic;
using System.Text;

namespace TextAdventureWPF.Interfaces
{
    interface IItemKey
    {
        public string ScreenUnlockName { get; set; }
        public int DoorUnlockDirectionId { get; set; }
    }
}