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
               new Screen("Cave entrance", "There is a cold wind blowing through the area",null, new Screen[4],new int[] {4}, "/Images/CaveEntrance.png"),
               new Screen("Cave interior", "Something is lurking in the dark", new List<IItem>() {new ItemKey("Old Key", 3, "Storage")}, new Screen[4], new int[] {2}, "/Images/CaveInterior.png"),
               new Screen("Storage", "Cobwebs and dust is everywhere", null, new Screen[4], new int[] {4}, "/Images/Storage.png"),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[4], new int[] {4}, "/Images/CaveEntrance.png"),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[4], new int[] {4}, "/Images/CaveEntrance.png"),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[4], new int[] {4}, "/Images/CaveEntrance.png")
           };
            //Forover er alltid Entrances[0]
            Screens[0].Entrances[0] = Screens[1];

            //Bakover er alltid Entrances[1]
            Screens[1].Entrances[1] = Screens[0];

            //Venstre er alltid Entrances[2]
            Screens[1].Entrances[2] = Screens[2];

            //Høyre er alltid Entrances[3]
            Screens[2].Entrances[3] = Screens[1];
        }

        public void ChangeScreen(int directionNum)
        {
            if (Screens.IndexOf(Screens[currentScreen].GetAvailableTravel()[directionNum]) == -1) return;
            if (Screens[currentScreen].CheckIfDoorLocked(directionNum)) return;
            currentScreen = Screens.IndexOf(Screens[currentScreen].GetAvailableTravel()[directionNum]);
        }

        public void PickUpItem()
        {
            if (Screens[currentScreen].Items == null) return;
            foreach (var item in Screens[currentScreen].Items)
            {
                Player.PlayerInventory.Add(item);
            }
            Screens[currentScreen].Items = null;
        }

        public void UseItem()
        {
            foreach (var item in Player.PlayerInventory)
            {
                if (!(item is IItemKey key)) continue;
                foreach (var entrance in Screens[currentScreen].Entrances)
                {
                    if (entrance == null) continue;
                    if (key.UnlockName == entrance.PlaceName)
                    {
                        Screens[currentScreen].EntrancesLockedId = new[] { 4 };
                    }
                }
            }
        }
    }
}
