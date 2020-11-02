using System.Collections.Generic;

namespace TextAdventureWPF.Model
{
    public class GameModel
    {
        public int CurrentScreen = 0;
        public Player Player { get; set; }
        public List<Screen> Screens { get; set; }

        public GameModel()
        {
            Player = new Player();
            Screens = new List<Screen>
           {
               new Screen("Cave entrance", "There is a cold wind blowing through the area",null, new Screen[4], "/Images/CaveEntrance.png"),
               new Screen("Cave interior", "Something is lurking in the dark", null, new Screen[4], "/Images/CaveInterior.png"),
               new Screen("Storage", "There is a cold wind blowing", null, new Screen[4], "/Images/Storage.png"),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[4], "/Images/CaveEntrance.png"),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[4], "/Images/CaveEntrance.png"),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[4], "/Images/CaveEntrance.png")
           };
            //Forover
            Screens[0].Entrances[0] = Screens[1];

            //Bakover
            Screens[1].Entrances[1] = Screens[0];
            
            //Venstre
            Screens[1].Entrances[2] = Screens[2];

            //Høyre
            Screens[2].Entrances[3] = Screens[1];
        }
    }
}
