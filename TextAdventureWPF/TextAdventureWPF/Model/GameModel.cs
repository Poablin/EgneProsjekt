using System.Collections.Generic;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class GameModel
    {
        public int currentScreen;
        public PlayerThief Player { get; set; }
        public List<Screen> Screens { get; set; }

        public GameModel()
        {
            Player = new PlayerThief();
            Screens = new List<Screen>
           {
               new Screen("Cave entrance", "There is a cold wind blowing through the area",null, new Screen[4],null, "/Images/CaveEntrance.png"),
               new Screen("Cave interior", "Something is lurking in the dark", new List<IItem>() {new ItemKey("Old Key", 3, "Storage", 2)}, new Screen[4], new List<int>() {2, 3}, "/Images/CaveInterior.png"),
               new Screen("Storage", "Cobwebs and dust is everywhere", new List<IItem>() {new ItemGeneric("GOLD!", 5)}, new Screen[4], null, "/Images/Storage.png"),
               new Screen("Cave Deeper", "It's too dark to continue...", null, new Screen[4], null, "/Images/CaveDeeper.jpg"),
               new Screen("Storage2", "Hmmm", null, new Screen[4], null, "/Images/Storage.png"),
           };
            //Forover er alltid Entrances[0]
            Screens[0].Entrances[0] = Screens[1];
            Screens[1].Entrances[0] = Screens[3];
            //Bakover er alltid Entrances[1]
            Screens[1].Entrances[1] = Screens[0];
            Screens[3].Entrances[1] = Screens[1];
            //Venstre er alltid Entrances[2]
            Screens[1].Entrances[2] = Screens[2];
            //Høyre er alltid Entrances[3]
            Screens[2].Entrances[3] = Screens[1];
            Screens[1].Entrances[3] = Screens[4];
        }

        public void ChangeScreen(int directionNum)
        {
            if (Screens.IndexOf(Screens[currentScreen].GetAvailableTravel()[directionNum]) == -1) return;
            if (Screens[currentScreen].CheckIfDoorLocked(directionNum)) return;
            Screens[currentScreen].TimesVisited++;
            currentScreen = Screens.IndexOf(Screens[currentScreen].GetAvailableTravel()[directionNum]);
        }

        public void PickUpItem()
        {
            if (Screens[currentScreen].Items == null) return;
            Player.PlayerInventory.AddRange(Screens[currentScreen].Items);
            Screens[currentScreen].Items = null;
        }

        public void UseItem(object item)
        {
            // Hvis item er en key
            if (!(item is IItemKey key)) return;
            foreach (var entrance in Screens[currentScreen].Entrances)
            {
                if (entrance == null) continue;
                if (key.ScreenUnlockName == entrance.PlaceName)
                {
                    Screens[currentScreen].EntrancesLockedId.Remove(key.DoorUnlockDirectionId);
                }
            }
        }
    }
}