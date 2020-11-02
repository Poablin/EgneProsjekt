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
               new Screen("cave entrance", "There is a cold wind blowing through the area",null, new Screen[1]),
               new Screen("inside the cave", "There is a cold wind blowing", null, new Screen[2]),
               new Screen("storage", "There is a cold wind blowing", null, new Screen[2]),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[2]),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[2]),
               new Screen("Unfinished", "There is a cold wind blowing", null, new Screen[1])
           };
           Screens[0].Entrances[0] = Screens[1];
        }
    }
}
