using System.Collections.Generic;
using System.Linq;

namespace TextAdventureWPF.Model
{
    public class Screen
    {
        public string PlaceName { get; set; }
        public string StoryText { get; set; }
        public List<Item> Items { get; set; }
        public int TimesVisited { get; set; }
        public Screen[] Entrances { get; set; }
        public string ImagePath { get; set; }

        public Screen(string placeName, string storyText, List<Item> items, Screen[] entrances, string imagePath)
        {
            PlaceName = placeName;
            StoryText = storyText;
            Items = items;
            Entrances = entrances;
            ImagePath = imagePath;
        }

        public List<string> GetLocationInfo()
        {
            var list = new List<string>();

            if (PlaceName != null) list.Add($"You are standing at {PlaceName}");
            if (StoryText != null) list.Add($"{StoryText}");

            if (Items == null) return list;
            list.Add("Items available:");
            list.AddRange(Items.Select(item => $"{item?.name}"));

            //Legger til entrances, men trenger ikke akkurat nå. Åpne if (Items == null) return list om den skal legges til.
            //list.Add("Entrances available:");
            //list.AddRange(from screen in GetAvailableTravel() where screen != null select screen.PlaceName);
            return list;
        }

        public List<Screen> GetAvailableTravel()
        {
            var list = new List<Screen>();
            if (Entrances != null) list.AddRange(Entrances);
            return list;
        }
    }
}
