using System.Collections.Generic;
using System.Linq;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class Screen
    {
        public string PlaceName { get; set; }
        public string StoryText { get; set; }
        public List<IItem> Items { get; set; }
        public int TimesVisited { get; set; }
        public Screen[] Entrances { get; set; }
        public List<int> EntrancesLockedId { get; set; }
        public string ImagePath { get; set; }

        public Screen(string placeName, string storyText, List<IItem> items, Screen[] entrances, List<int> entrancesLockedId, string imagePath)
        {
            PlaceName = placeName;
            StoryText = storyText;
            Items = items;
            Entrances = entrances;
            EntrancesLockedId = entrancesLockedId;
            ImagePath = imagePath;
        }

        public List<string> GetLocationInfo()
        {
            var list = new List<string>();

            if (PlaceName != null) list.Add($"You are standing at {PlaceName}");
            if (StoryText != null && TimesVisited < 1) list.Add($"{StoryText}");

            if (Items == null) return list;
            list.Add("Items here:");
            list.AddRange(Items.Select(item => $"{item?.ItemName}"));

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

        public bool CheckIfDoorLocked(int id)
        {
            return EntrancesLockedId != null && EntrancesLockedId.Any(entranceId => entranceId == id);
        }
    }
}
