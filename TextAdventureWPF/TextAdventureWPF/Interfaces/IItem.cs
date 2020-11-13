using System.Collections.Generic;
using TextAdventureWPF.Model;

namespace TextAdventureWPF.Interfaces
{
    public interface IItem
    {
        public string ItemName { get; set; }
        public int ItemId { get; set; }
        public void UseItem(List<Screen> screens, int currentScreen);
    }
}
