using System.Collections.Generic;
using System.Linq;
using System.Windows.Controls;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class GameModel
    {
        public int CurrentScreen;
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
            if (Screens.IndexOf(Screens[CurrentScreen].GetAvailableTravel()[directionNum]) == -1) return;
            if (Screens[CurrentScreen].CheckIfDoorLocked(directionNum)) return;
            Screens[CurrentScreen].TimesVisited++;
            CurrentScreen = Screens.IndexOf(Screens[CurrentScreen].GetAvailableTravel()[directionNum]);
        }

        public void PickUpItems()
        {
            if (Screens[CurrentScreen].Items == null) return;
            Player.PlayerInventory.AddRange(Screens[CurrentScreen].Items);
            Screens[CurrentScreen].Items = null;
        }

        public void Use(string selectedItemName)
        {
            IItem selectedItem = null;
            foreach (var thing in Player.PlayerInventory.Where(thing => thing.ItemName == selectedItemName)) selectedItem = thing;
            selectedItem?.UseItem(Screens, CurrentScreen);
        }
    }
}