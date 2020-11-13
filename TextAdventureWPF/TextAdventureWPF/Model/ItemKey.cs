using System.Collections.Generic;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class ItemKey : IItemKey
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

        public void UseItem(List<Screen> screens, int currentScreen)
        {
            foreach (var entrance in screens[currentScreen].Entrances)
            {
                if (entrance == null) continue;
                if (ScreenUnlockName == entrance.PlaceName)
                {
                    screens[currentScreen].EntrancesLockedId.Remove(DoorUnlockDirectionId);
                }
            }
        }
    }
}
