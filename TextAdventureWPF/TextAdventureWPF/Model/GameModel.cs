using System.Collections.Generic;

namespace TextAdventureWPF.Model
{
    public class GameModel
    {
        public int CurrentScreen;
        public Player Player { get; set; }
        public List<Screen> Screens { get; set; }

        public GameModel()
        {
            Player = new Player();
            Screens = new List<Screen>
           {
               new Screen("Cave entrance", "There is a cold wind blowing through the area",null, new Screen[4], "/Images/CaveEntrance.png"),
               new Screen("Cave interior", "Something is lurking in the dark", new []{"Old Key"}, new Screen[4], "/Images/CaveInterior.png"),
               new Screen("Storage", "Cobwebs and dust is everywhere", null, new Screen[4], "/Images/Storage.png"),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[4], "/Images/CaveEntrance.png"),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[4], "/Images/CaveEntrance.png"),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[4], "/Images/CaveEntrance.png")
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
            if (Screens.IndexOf(Screens[CurrentScreen].GetAvailableTravel()[directionNum]) != -1)
            {
                CurrentScreen = Screens.IndexOf(Screens[CurrentScreen].GetAvailableTravel()[directionNum]);
            }
        }

        public void PickUpItem()
        {
            if (Screens[CurrentScreen].Items != null)
            {
                foreach (var item in Screens[CurrentScreen].Items)
                {
                    Player.PlayerInventory.Add(item);
                }

                Screens[CurrentScreen].Items = null;
            }
        }
    }
}
