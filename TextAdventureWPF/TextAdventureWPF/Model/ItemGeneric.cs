﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Controls;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class ItemGeneric : IItem
    {
        public string ItemName { get; set; }
        public int ItemId { get; set; }

        public ItemGeneric(string name, int id)
        {
            ItemName = name;
            ItemId = id;
        }
        public void UseItem(List<Screen> screens, int currentScreen)
        {
        }
    }
}
